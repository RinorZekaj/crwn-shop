import React from "react";
import { connect } from 'react-redux'

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

function CardItem({ toggleCart }) {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CardItem);
