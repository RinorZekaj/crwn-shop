import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";

import {
  CheckOutItemContainer,
  ImageContainer,
  TextConainer,
  RemoveButtonContainer,
  QuantityContainer,
} from "./checkout-item.styles";

function CheckoutItem({ cartItem, clearItem, addItem, deleteItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextConainer>{name}</TextConainer>
      <QuantityContainer>
        <div className="arrow" onClick={() => deleteItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextConainer>{price}</TextConainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckOutItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
