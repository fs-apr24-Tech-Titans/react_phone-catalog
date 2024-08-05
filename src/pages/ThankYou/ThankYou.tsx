import React from 'react';
import { useLocation } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import './ThankYou.scss';
import { LocationState } from '../../types/LocationState';
  

export const ThankYou: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;


  const orderID = state?.orderID ?? 'N/A';
  const payerName = state?.payerName ?? 'Customer';

  return (
    <section className="thank-you">
      <Fade triggerOnce>
      <img className='thank-you__image' src="/img/order.png" alt="order-img" />
        <h1 className="thank-you__title">Thank You for Your Order, {payerName}!</h1>
        <p className="thank-you__message">
          Your order {orderID} has been placed successfully.
        </p>
      </Fade>
    </section>
  );
};