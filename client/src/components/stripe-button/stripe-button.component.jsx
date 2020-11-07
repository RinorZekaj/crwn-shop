import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HXNnHC5WNhl4zvXjWTywYwzZPZwa58KyarJaset3MrP0vQnL07tcsRrXfLfNqRbJ9AocvvgAhtC567AGHUteI4N00uykCdYGU";

  const onToken = (token) => {
    alert("Payment Successful");
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an isssue with your payment. Please sure you use the provided credit cart."
        );
      });
  };   

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}$`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
