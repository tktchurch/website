
import {Stripe} from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15'
});

export const getCheckoutSession = async (amount : number) => {
    const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: 'donate',
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [
          {
            price_data: {
                currency: 'usd',
                product_data: {
                  name: 'TKT Church',
                },
                unit_amount: amount,
              },
              quantity: 1,
          },
        ],
        success_url: `${window.location.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${window.location.origin}/giving`,
      };

    const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);
    return checkoutSession;
}
