
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20solar%20panel%20installation%20on%20residential%20rooftop%20with%20clear%20blue%20sky%2C%20professional%20workers%20installing%20solar%20panels%2C%20bright%20sunny%20day%2C%20clean%20energy%20concept%2C%20high%20quality%20photorealistic%20image%20with%20vibrant%20colors%20and%20excellent%20lighting&width=1920&height=1080&seq=hero1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Free Solar Power for Your Home
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Zero Initial Payment • Nationwide Bank Loans • PM Surya Ghar Muft Bijli Yojana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/signup" className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors cursor-pointer whitespace-nowrap">
              Get Started Free
            </Link>
            <Link href="/plan" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* PM Surya Ghar Scheme Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              PM Surya Ghar Muft Bijli Yojana
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Government of India's flagship program to provide free solar power to households
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=PM%20Surya%20Ghar%20Muft%20Bijli%20Yojana%20government%20scheme%20illustration%2C%20solar%20panels%20on%20Indian%20homes%2C%20official%20government%20program%20visual%2C%20clean%20energy%20initiative%20with%20Indian%20flag%20colors%2C%20professional%20design%20with%20sunny%20background&width=600&height=400&seq=pmscheme1&orientation=landscape"
                alt="PM Surya Ghar Scheme"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Scheme Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Up to 40% Subsidy</h4>
                    <p className="text-gray-600">Central government provides substantial subsidy on solar installations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Net Metering</h4>
                    <p className="text-gray-600">Sell excess power back to the grid and earn from your solar system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">25 Year Warranty</h4>
                    <p className="text-gray-600">Long-term warranty on solar panels and comprehensive maintenance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Bank Loans</h4>
                    <p className="text-gray-600">Partnered with all nationalized banks for hassle-free financing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Payment Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zero Initial Payment Process
            </h2>
            <p className="text-xl text-gray-600">
              Complete solar installation without any upfront cost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-list-3-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Registration</h3>
              <p className="text-gray-600">Submit your documents and we register you in PM Surya Ghar portal</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-4-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Site Analysis</h3>
              <p className="text-gray-600">Our experts visit your home for technical assessment and planning</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bank-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Bank Loan</h3>
              <p className="text-gray-600">We process your loan with nationalized banks at best rates</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Installation</h3>
              <p className="text-gray-600">Professional installation by certified technicians</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">5. Subsidy Processing</h3>
              <p className="text-gray-600">We handle all subsidy paperwork and government approvals</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-sun-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">6. Enjoy Free Power</h3>
              <p className="text-gray-600">Start generating free electricity and earning from excess power</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted Bank Partners
            </h2>
            <p className="text-xl text-gray-600">
              Partnered with all major nationalized banks for easy financing
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-bank-fill text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">SBI</h3>
              <p className="text-sm text-gray-600">State Bank of India</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-bank-fill text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">BOB</h3>
              <p className="text-sm text-gray-600">Bank of Baroda</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-bank-fill text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">PNB</h3>
              <p className="text-sm text-gray-600">Punjab National Bank</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-bank-fill text-white text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900">UCO</h3>
              <p className="text-sm text-gray-600">UCO Bank</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who are already enjoying free solar power
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              Start Your Journey
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors cursor-pointer whitespace-nowrap">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
