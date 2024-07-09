import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';
import { addToCart } from '../store/actions/cartActions';
import ProductCarousel from './ProductCarousel';
import { Toast, ToastContainer } from 'react-bootstrap';
import './ProductList.css'; // Import file CSS jika digunakan

const ProductList = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setToastMessage(`Added ${product.title} to cart`);
    setShowToast(true);
  };

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="mb-4">
          <ProductCarousel />
        </div>

        {productState.loading ? (
          <h2 className="spinner-border text-dark" role="status"></h2>
        ) : productState.error ? (
          <h2>{productState.error}</h2>
        ) : (
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {productState.products.map((product) => (
              <div key={product.id} className="col">
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <div>
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">
                        {product.description.length > 100
                          ? `${product.description.substring(0, 50)}...`
                          : product.description}
                      </p>
                      <h4 className="card-price">${product.price}</h4>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-primary btn-block mt-auto"
                      style={{ maxWidth: '100%' }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ToastContainer position="bottom-end">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ProductList;
