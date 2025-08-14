import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { StripeCheckout } from './StripeCheckout';

interface MembershipPageProps {
  onBack: () => void;
  onSuccess: () => void;
}

export function MembershipPage({ onBack, onSuccess }: MembershipPageProps) {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleStartCheckout = () => {
    setShowCheckout(true);
  };

  const handleCheckoutSuccess = () => {
    onSuccess();
  };

  const handleCheckoutCancel = () => {
    setShowCheckout(false);
  };

  if (showCheckout) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button 
            onClick={handleCheckoutCancel}
            className="bg-yellow-300 text-purple-800 px-4 py-2 border-4 border-purple-800 transform -rotate-1 hover:rotate-0 transition-transform duration-200 shadow-lg mb-8"
          >
            ← BACK TO MEMBERSHIP
          </button>

          {/* Checkout Header */}
          <div className="text-center mb-12">
            <div className="bg-pink-300 border-8 border-purple-800 p-6 transform rotate-2 inline-block shadow-2xl mb-6">
              <h1 className="text-3xl sm:text-4xl font-black text-purple-800">
                SECURE CHECKOUT
              </h1>
            </div>
            <div className="bg-orange-300 border-4 border-purple-800 p-4 transform -rotate-1 inline-block shadow-xl">
              <p className="text-lg sm:text-xl font-black text-purple-800">
                DOG & BEAN CLUB MEMBERSHIP
              </p>
            </div>
          </div>

          {/* Stripe Checkout Form */}
          <StripeCheckout 
            onSuccess={handleCheckoutSuccess}
            onCancel={handleCheckoutCancel}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="bg-yellow-300 text-purple-800 px-4 py-2 border-4 border-purple-800 transform -rotate-1 hover:rotate-0 transition-transform duration-200 shadow-lg mb-8"
        >
          ← BACK TO HOME
        </button>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-pink-300 border-8 border-purple-800 p-6 sm:p-8 transform rotate-2 inline-block shadow-2xl mb-6">
            <h1 className="text-4xl sm:text-6xl font-black text-purple-800">
              JOIN THE PACK
            </h1>
          </div>
          <div className="bg-orange-300 border-4 border-purple-800 p-4 transform -rotate-1 inline-block shadow-xl">
            <p className="text-xl sm:text-2xl font-black text-purple-800">
              BECOME A DOG & BEAN CLUB MEMBER
            </p>
          </div>
        </div>

        {/* Membership Card */}
        <div className="bg-green-200 border-8 border-purple-800 p-8 sm:p-12 transform -rotate-1 shadow-2xl mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-yellow-300 border-6 border-purple-800 p-4 sm:p-6 transform rotate-2 shadow-xl mb-6">
                <h2 className="text-3xl sm:text-4xl font-black text-purple-800 text-center">
                  $20/MONTH
                </h2>
              </div>
              
              <div className="bg-blue-200 border-8 border-purple-800 transform -rotate-3 shadow-2xl overflow-hidden mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Happy dogs and members at the café"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-pink-300 border-4 border-purple-800 p-4 transform rotate-1 shadow-xl">
                <h3 className="text-2xl font-black text-purple-800 mb-4">MEMBER BENEFITS:</h3>
                <ul className="space-y-2 text-purple-800 font-black">
                  <li>🐕 UNLIMITED CAFÉ ACCESS</li>
                  <li>☕ 20% OFF ALL DRINKS</li>
                  <li>🎉 EXCLUSIVE EVENTS</li>
                  <li>👥 VIBRANT COMMUNITY</li>
                  <li>📱 MEMBERS-ONLY CONTENT</li>
                  <li>🧞 FREE DOG TREATS</li>
                </ul>
              </div>

              <div className="bg-orange-300 border-4 border-purple-800 p-4 transform -rotate-2 shadow-xl">
                <p className="text-purple-800 font-black text-center">
                  CANCEL ANYTIME • NO HIDDEN FEES
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-purple-200 border-8 border-purple-800 p-6 sm:p-10 transform rotate-1 shadow-2xl">
          <div className="text-center space-y-6">
            <div className="bg-yellow-300 border-4 border-purple-800 p-4 transform -rotate-1 inline-block shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-purple-800">
                READY TO JOIN?
              </h3>
            </div>

            <div className="bg-white border-6 border-purple-800 p-6 sm:p-8 transform rotate-2 shadow-xl max-w-md mx-auto">
              <div className="space-y-4">
                <div className="bg-green-300 border-2 border-purple-800 p-3 text-center">
                  <p className="text-purple-800 font-black">SECURE PAYMENT BY STRIPE</p>
                </div>
                
                <div className="text-purple-800 space-y-2">
                  <p className="font-black">✓ SSL ENCRYPTED</p>
                  <p className="font-black">✓ INSTANT ACCESS</p>
                  <p className="font-black">✓ RECURRING BILLING</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleStartCheckout}
              className={`bg-pink-400 text-purple-800 px-8 sm:px-12 py-4 sm:py-6 border-8 border-purple-800 text-2xl sm:text-3xl font-black transform -rotate-2 hover:rotate-0 transition-transform duration-200 shadow-2xl hover:shadow-3xl`}
            >
              BECOME A MEMBER - $20/MONTH
            </button>

            <div className="bg-blue-300 border-4 border-purple-800 p-4 transform rotate-1 shadow-xl">
              <p className="text-purple-800 font-black text-sm sm:text-base">
                POWERED BY STRIPE • TEST MODE • SAFE & SECURE
              </p>
            </div>

            <div className="bg-red-200 border-4 border-purple-800 p-4 transform -rotate-1 shadow-xl">
              <p className="text-purple-800 font-black text-xs sm:text-sm">
                🧪 THIS IS TEST MODE - USE TEST CARD: 4242 4242 4242 4242
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}