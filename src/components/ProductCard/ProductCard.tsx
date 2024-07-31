import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { useAppContext } from '../../context/AppContext';
import { MainButton } from '../MainButton';
import { AddToFavButton } from '../AddToFavButton';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
   const { itemId,
      category,
      image,
      name,
      price,
      fullPrice,
      screen,
      capacity,
      ram } = product;
   
      const URL = `/${category}/${itemId}`;
      
   const { addToCart } = useAppContext();
   
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="productCard">
      <Link to={URL}>
        <img className="productCard__image" src={image} alt={name} />
        <p className="productCard__title">{name}</p>
        <div className="productCard__prices">
          <span className="productCard__prices-discount">${price}</span>
          <span className="productCard__prices-full">${fullPrice}</span>
        </div>
      </Link>

      <div className="productCard__params">
        <div className="productCard__params-pair">
          <p className="productCard__param">Screen</p>
          <p className="productCard__value">{screen}</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">Capacity</p>
          <p className="productCard__value">{capacity}</p>
        </div>

        <div className="productCard__params-pair">
          <p className="productCard__param">Ram</p>
          <p className="productCard__value">{ram}</p>
        </div>
      </div>

      <div className="productCard__buttons">
        <MainButton text={'Add to cart'} handler={handleAddToCart} />
        <AddToFavButton />
      </div>
    </article>
  );
};
