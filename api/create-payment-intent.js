// Mock API endpoint for creating payment intents
// In a real application, this would be implemented in your backend
// using your server-side Stripe secret key

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency, payment_method_types, metadata } = req.body;

    // In a real implementation, you would:
    // 1. Import Stripe with your secret key: const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // 2. Create the payment intent: const paymentIntent = await stripe.paymentIntents.create({...});
    // 3. Return the client secret: res.json({ client_secret: paymentIntent.client_secret });

    // For demo purposes, we'll generate a mock client secret with the correct format
    const mockId = 'pi_3RvoiW13k0RMyYgP' + Math.random().toString(36).substring(2, 15);
    const mockSecret = Math.random().toString(36).substring(2, 25);
    const client_secret = `${mockId}_secret_${mockSecret}`;

    // Log for debugging
    console.log('Mock payment intent created:', {
      amount,
      currency,
      client_secret,
      metadata
    });

    res.status(200).json({
      client_secret,
      payment_intent_id: mockId,
      amount,
      currency,
      status: 'requires_payment_method'
    });

  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ 
      error: 'Failed to create payment intent',
      message: error.message 
    });
  }
}

/* 
REAL IMPLEMENTATION EXAMPLE:

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd', metadata } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card'],
      metadata: metadata || {},
    });

    res.status(200).json({
      client_secret: paymentIntent.client_secret,
      payment_intent_id: paymentIntent.id,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ 
      error: 'Failed to create payment intent',
      message: error.message 
    });
  }
}
*/