import React from "react";
import { connect } from "react-redux";

import { CartIconContainer, ShoppingIconHolder, ItemCount } from "./cart-icon.styles";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

function CardItem({ toggleCart, itemCount }) {
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIconHolder />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
}

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
