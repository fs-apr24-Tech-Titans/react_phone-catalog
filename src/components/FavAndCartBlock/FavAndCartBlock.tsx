import React from 'react';
import './FavAndCartBlock.scss';
import { Link } from 'react-router-dom';

export const FavAndCartBlock: React.FC = () => {
  return (
    <div className="info-buttons">
      <div className="info-buttons__icon info-buttons__icon--favorites">
        <a className='info-buttons__link' href="#">
          <img src="/img/icons/favourites.svg" alt="" />
          <span className="count">
            <p className='countText'>1</p>
          </span>
        </a>
      </div>

      <div className="info-buttons__icon info-buttons__icon--cart">
        <Link className='info-buttons__link' to="/cartPage">
          <img src="/img/icons/shopping-bag.svg" alt="" />
          <span className="count">
            <p className='countText'>1</p>
          </span>
        </Link>
      </div>
    </div>
  );
};
