import React from 'react';
import './FavouritesPage.scss';
import { Container } from '../../components/Container';
import { ProductCard } from '../../components/ProductCard';
import { useUserActions } from '../../Contexts/useUserActions';
import { EmptyFavouritesPage } from '../EmptyFavouritesPage/EmptyFavouritesPage';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const FavouritesPage: React.FC = () => {
  const { t } = useTranslation();
  const { userAction } = useUserActions();
  const { favorites } = userAction;
  const count = favorites.length;

  return (
    <Container>
      <div className="favourites__back">
        <img src="/img/icons/arrow-right.svg" alt="Arrov right" />
        <Link className="favourites__back--text" to={'/'}>
          {t('buttons.back')}
        </Link>
      </div>
      <section className="favourites">
        <h1 className="favourites__title">{t('favourites.title')}</h1>
        {count > 0 && (
          <p className="favourites__count">
            {count} {t('favourites.count_items')}
          </p>
        )}

        <div className="favourites__content">
          <ul className="favourites__items">
            {favorites.length === 0 ? (
              <EmptyFavouritesPage />
            ) : (
              favorites.map((product) => (
                <li className="item" key={product.itemId}>
                  {' '}
                  <ProductCard product={product} />{' '}
                </li>
              ))
            )}
          </ul>
        </div>
      </section>
    </Container>
  );
};
