import React, { useState } from 'react';
import { FaGooglePlay, FaApple, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const LandingPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const carouselData = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      text: 'Empowering Women with Safety'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      text: 'Your Personal Safety Companion'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      text: 'Stay Connected, Stay Safe'
    }
  ];

  const features = [
    { id: 1, title: 'Emergency SOS', description: 'Quick access to emergency services' },
    { id: 2, title: 'Location Sharing', description: 'Share your real-time location with trusted contacts' },
    { id: 3, title: 'Safe Routes', description: 'Navigate through safer paths in your city' },
    { id: 4, title: 'Community Support', description: 'Connect with a network of supporters' }
  ];

  const faqs = [
    { id: 1, question: 'How does the app work?', answer: 'Our app uses GPS tracking and emergency alert systems to ensure your safety.' },
    { id: 2, question: 'Is my data secure?', answer: 'Yes, we use end-to-end encryption to protect your personal information.' },
    { id: 3, question: 'Can I use the app offline?', answer: 'Some features are available offline, but full functionality requires an internet connection.' },
    { id: 4, question: 'How can I add emergency contacts?', answer: 'You can add emergency contacts in the app settings section.' }
  ];

  const blogPosts = [
    { id: 1, title: 'Top 10 Safety Tips for Women', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' },
    { id: 2, title: 'How to Use Our App Effectively', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 3, title: 'Understanding Personal Safety', image: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 4, title: 'Community Stories: How Our App Helped', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="font-sans w-[90%] mx-auto mt-2">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          {carouselData.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={slide.image} alt={`Slide ${slide.id}`} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">{carouselData[activeSlide].text}</h1>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-full flex items-center">
              <FaGooglePlay className="mr-2" /> Download from Google Play
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full flex items-center">
              <FaApple className="mr-2" /> Download from App Store
            </button>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          <FaChevronRight />
        </button>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              We are dedicated to empowering women with cutting-edge technology for personal safety. Our app
              provides real-time protection and peace of mind, allowing women to navigate their world with
              confidence.
            </p>
            <p className="text-gray-700">
              With features like emergency SOS, location sharing, and community support, we're revolutionizing
              the way women approach personal security in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  {faq.question}
                  <IoMdArrowDropdown
                    className={`transform transition-transform duration-200 ${activeFaq === faq.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeFaq === faq.id && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask a Question Button */}
      <div className="py-8 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
            Ask a Question
          </button>
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest from Our Blog</h2>
          <div className="flex overflow-x-auto pb-4 space-x-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex-shrink-0 w-64 sm:w-80">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                    <button className="text-blue-600 hover:underline">Read More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;