import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, decrementFromCart, addToCart } from '../store/actions/cartActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleDecrementFromCart = (productId) => {
    dispatch(decrementFromCart(productId));
  };

  const handleIncrementFromCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="cart container mt-5">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                      <button className="btn btn-secondary" onClick={() => handleDecrementFromCart(item.id)}>-</button>
                      <button className="btn btn-secondary" onClick={() => handleIncrementFromCart(item)}>+</button>
                      <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
