import { useEffect, useState } from 'react';

export default function RazorpayButton() {
  const [mounted, setMounted] = useState(false);
  const [buttonId, setButtonId] = useState(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    fetch("/api/getButtonId")
      .then((res) => res.json())
      .then((data) => setButtonId(data.buttonId));
  }, []);

  useEffect(() => {
    if (buttonId) {
      const scriptElement = document.createElement("script");
      const formElement = document.getElementById("donateForm");

      scriptElement.setAttribute(
        "src",
        "https://checkout.razorpay.com/v1/payment-button.js"
      );

      scriptElement.setAttribute("data-payment_button_id", buttonId);

      if (formElement) {
        formElement.appendChild(scriptElement);
      }
    }
  }, [mounted, buttonId]);

  return mounted ? <form id="donateForm"></form> : null;
}
