import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const postBook = async (req, res) => {
    try {
        const bookData = req.body;

        
        const book = new Book({
            name: bookData.name,
            price: bookData.price,
            category: bookData.category,
            image: bookData.image,
            title: bookData.title,
            bookCount: bookData.bookCount
        });

        
        const response = await book.save();

        return res.status(201).json({
            message: "Book added successfully!",
            data: response
        });
    } catch (error) {
        console.error("Error while saving book:", error);
        return res.status(500).json({
            message: "An error occurred while saving the book.",
            error: error.message
        });
    }
}

export const deletebook = async (req, res)=>{                  
        try {
            
            const book = req.params.id
    
            const response = await Book.findByIdAndDelete(book);
    
            if(!response){
                res.status(404).json({error: 'Book not found'});
            }
    
            console.log('Book deleted');
            res.status(200).json(response);
        } catch (err){
            console.log(err);
            res.status(500).json({error: 'Internal server error'});
        }
    }

    export const updateBook = async (req, res) => {
        try {
          const bookId = req.params.id; // Extract the book ID from the URL parameter
          const updatedBook = req.body; // Extract updated book data from the request body
      
          const response = await Book.findByIdAndUpdate(bookId, updatedBook, {
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation
          });
      
          if (!response) {
            return res.status(404).json({ error: "Book not found" });
          }
      
          console.log("Book data updated successfully");
          res.status(200).json(response); // Respond with the updated book data
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: "Internal server error" });
        }
      };