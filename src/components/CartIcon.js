import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartIcon.css';

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="position-relative">
      <FaShoppingCart size={30} />
      {totalItems > 0 && <span className="badge badge-danger position-absolute top-0 start-100 translate-middle">{totalItems}</span>}
    </div>
  );
};

export default CartIcon;
