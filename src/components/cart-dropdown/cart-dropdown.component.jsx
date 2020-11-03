import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartDropDownContainer,
  CartItemsContainer,
  CartDropDownButton
} from "./cart-dropdown.styles";

function CartDropdown({ items, history, dispatch }) {
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {items.length ? (
          items.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </CartItemsContainer>
      <CartDropDownButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropDownButton>
    </CartDropDownContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
