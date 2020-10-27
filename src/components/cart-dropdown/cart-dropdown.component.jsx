import React from "react";
import CostumButton from "../costum-button/costum-button.component";

import "./cart-dropdown.styles.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CostumButton>GO TO CHECKOUT</CostumButton>
    </div>
  );
}

export default CartDropdown;
