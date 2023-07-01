// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {API, getAPIWithToken} from './axios';

type Data = {
  name: string
}

type req = {
  amount: number,
  name: string,
  phoneNumber: string,
  email: string
}

async function makeRazorpayPayment(amount: number,) {
	
	const APIWithToken = await getAPIWithToken();
	const res = await APIWithToken.post(
		'/payment/pay_order',
        {
            'amount':amount,
            // 'Name':name,
            // 'PhoneNumber':phoneNumber,
        }
	);
	return res.data;
}

async function makeStripePayment(amount: number,) {

  const APIWithToken = await getAPIWithToken();
  const res = await APIWithToken.post(
    '/international_payment/make_payment', {
      amount: amount,
    }
  )
  return res.data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

export {
  makeRazorpayPayment, makeStripePayment}
