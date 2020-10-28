import React from "react";
import { connect } from 'react-redux'
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";

import CostumButton from "../costum-button/costum-button.component";
import "./cart-dropdown.styles.scss";

function CartDropdown({ items }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))}
      </div>
      <CostumButton>GO TO CHECKOUT</CostumButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
