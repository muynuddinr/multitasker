import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 bg-opacity-50 relative">
      {/* Hero Section - improved spacing and text styling */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-8 leading-tight">
            Welcome to <span className="text-blue-600 relative">Our Platform
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform -translate-y-2"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Discover amazing features and services that will help you achieve your goals.
            Start your journey with us today.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section - improved card design */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature cards - enhanced styling */}
            <div className="p-8 bg-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Fast Performance</h3>
              <p className="text-gray-600 leading-relaxed">Lightning-fast loading times and smooth interactions.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-8 bg-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Secure & Reliable</h3>
              <p className="text-gray-600 leading-relaxed">Your data is protected with enterprise-grade security.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-8 bg-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Cloud Integration</h3>
              <p className="text-gray-600 leading-relaxed">Seamlessly connect and sync across all devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - gradient overlay and improved styling */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-16 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-blue-600 opacity-10 background-pattern"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-blue-50 mb-10 max-w-2xl mx-auto text-lg">
              Join thousands of satisfied users who have already transformed their experience with our platform.
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
