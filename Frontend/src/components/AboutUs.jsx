import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container bg-gray-100 py-20 ">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-semibold text-red-500 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          Welcome to BookStore, a place where books come alive, and stories connect readers from all walks of life.
        </p>

        <div className="about-us-content flex flex-col md:flex-row justify-between items-center">
          <div className="about-text md:w-1/2 text-left px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-base text-gray-600 leading-7 mb-6">
              BookStore was founded in 2023 with a simple mission: 
              to bring people closer to the magic of books. 
              Whether you're a lifelong bookworm or just starting your reading journey, 
              we offer a wide variety of genres to fit every reader's interests. 
              From fiction to non-fiction, children’s books to rare collector's editions, 
              we have something for everyone.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-base text-gray-600 leading-7 mb-6">
              At BookStore, we strive to foster a love for reading while providing our community with a cozy, 
              welcoming space to explore and discover new titles. 
              Our team of passionate book lovers is here to offer recommendations, 
              host events, and create a space where the joy of reading can be shared.
            </p>
          </div>

          <div className="about-image md:w-1/2 px-4">
            <img
              src="https://img.ctykit.com/cdn/co-boulder/images/tr:w-1800/bookstore_storefront_2015.jpg"
              alt="Bookshelf"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="our-values mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
          <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="value-card text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality</h3>
              <p className="text-base text-gray-600">
                We curate the best books with a focus on quality, ensuring that every title we carry is worth your time.
              </p>
            </div>
            <div className="value-card text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Community</h3>
              <p className="text-base text-gray-600">
                Our bookstore is not just a place to buy books, it's a hub for book lovers to meet, share ideas, and engage in events.
              </p>
            </div>
            <div className="value-card text-center bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-base text-gray-600">
                We are committed to sustainability, offering eco-friendly products and supporting green initiatives within our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
