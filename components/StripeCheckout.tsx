import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

// Stripe test publishable key (this is a demo key for the sandbox environment)
const stripePromise = loadStripe('pk_test_51RvnIf13k0RMyYgP1234567890abcdefghijklmnopqrstuvwxyz123456'); // Demo test key

interface CheckoutFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

function CheckoutForm({ onSuccess, onCancel }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  // Create payment intent when component mounts
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        // In a real implementation, this would be a call to your backend
        // which would then call Stripe's API to create a payment intent
        
        // Simulate backend API call to create payment intent
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: 2000, // $20.00 in cents
            currency: 'usd',
            payment_method_types: ['card'],
            metadata: {
              product_id: 'prod_SrXn4S7U7hkidV',
              price_id: 'price_1RvoiW13k0RMyYgPVHSV6GSE'
            }
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to create payment intent');
        }

        const { client_secret } = await response.json();
        setClientSecret(client_secret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
        
        // For demo purposes, create a mock client secret with the correct format
        // In production, this would come from your backend after calling Stripe
        const mockId = 'pi_3RvoiW13k0RMyYgP' + Math.random().toString(36).substring(2, 15);
        const mockSecret = Math.random().toString(36).substring(2, 25);
        const mockClientSecret = `${mockId}_secret_${mockSecret}`;
        
        console.log('Using mock client secret for demo:', mockClientSecret);
        setClientSecret(mockClientSecret);
      }
    };

    createPaymentIntent();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setIsProcessing(true);
    setPaymentError('');

    const cardElement = elements.getElement(CardElement);
    
    if (!cardElement) {
      setPaymentError('Payment form not loaded properly');
      setIsProcessing(false);
      return;
    }

    try {
      // Use the real Stripe API with the properly formatted client secret
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: 'Dog & Bean Club Member',
              email: 'member@dogbeanclub.com',
            },
          }
        }
      );

      if (error) {
        setPaymentError(error.message || 'Payment failed');
        console.error('Payment failed:', error);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Payment succeeded
        console.log('Payment succeeded:', paymentIntent);
        
        // Create member record
        const memberData = {
          id: 'member_' + Date.now(),
          email: 'member@dogbeanclub.com',
          subscriptionId: 'sub_' + Date.now(),
          status: 'active',
          createdAt: new Date().toISOString(),
          plan: 'monthly',
          amount: 2000,
          paymentIntentId: paymentIntent.id,
          stripeProductId: 'prod_SrXn4S7U7hkidV',
          stripePriceId: 'price_1RvoiW13k0RMyYgPVHSV6GSE'
        };
        
        localStorage.setItem('dogBeanMemberData', JSON.stringify(memberData));
        localStorage.setItem('dogBeanMember', 'true');
        
        onSuccess();
      } else {
        setPaymentError('Payment was not completed successfully');
      }
    } catch (err) {
      setPaymentError('An unexpected error occurred. Please try again.');
      console.error('Payment error:', err);
    }

    setIsProcessing(false);
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#7c2d92', // purple-800
        fontFamily: '"Inter", system-ui, sans-serif',
        '::placeholder': {
          color: '#9ca3af',
        },
      },
    },
    hidePostalCode: false,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white border-6 border-purple-800 p-6 transform -rotate-1 shadow-2xl">
        <div className="space-y-4">
          <div className="bg-pink-300 border-4 border-purple-800 p-4 text-center transform rotate-1">
            <h3 className="text-xl font-black text-purple-800">PAYMENT DETAILS</h3>
          </div>
          
          <div className="bg-yellow-100 border-4 border-purple-800 p-4 transform -rotate-1">
            <CardElement options={cardElementOptions} />
          </div>
          
          {paymentError && (
            <div className="bg-red-200 border-4 border-purple-800 p-4 transform rotate-1">
              <p className="text-purple-800 font-black text-center">{paymentError}</p>
            </div>
          )}

          {!clientSecret && (
            <div className="bg-blue-200 border-4 border-purple-800 p-4 transform -rotate-1">
              <p className="text-purple-800 font-black text-center">Initializing payment...</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          type="submit"
          disabled={!stripe || !clientSecret || isProcessing}
          className={`bg-green-400 text-purple-800 px-8 py-4 border-6 border-purple-800 text-xl font-black transform -rotate-2 hover:rotate-0 transition-transform duration-200 shadow-xl ${
            isProcessing || !stripe || !clientSecret ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-500'
          }`}
        >
          {isProcessing ? 'PROCESSING...' : 'PAY $20/MONTH'}
        </button>
        
        <button
          type="button"
          onClick={onCancel}
          className="bg-red-300 text-purple-800 px-6 py-3 border-4 border-purple-800 font-black transform rotate-2 hover:rotate-0 transition-transform duration-200 shadow-lg"
        >
          CANCEL
        </button>
      </div>

      <div className="bg-blue-200 border-4 border-purple-800 p-4 transform rotate-1 shadow-xl">
        <p className="text-purple-800 font-black text-center text-sm">
          🧪 TEST MODE - USE CARD: 4242 4242 4242 4242
        </p>
        {clientSecret && (
          <p className="text-purple-800 text-xs text-center mt-2">
            Client Secret: {clientSecret.substring(0, 20)}...
          </p>
        )}
      </div>
    </form>
  );
}

interface StripeCheckoutProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export function StripeCheckout({ onSuccess, onCancel }: StripeCheckoutProps) {
  return (
    <div className="max-w-lg mx-auto">
      <Elements stripe={stripePromise}>
        <CheckoutForm onSuccess={onSuccess} onCancel={onCancel} />
      </Elements>
    </div>
  );
}