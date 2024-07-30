import styles from './CartItem.module.scss';
import cn from 'classnames';
import deleteIcon from '../../images/icons/delete-icon.svg';
import plusIcon from '../../images/icons/plus-icon.svg';
import minusIcon from '../../images/icons/minus-icon.svg';
import { CartItemProps } from '../../types/CartItemsProps';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

type Props = {
  item: CartItemProps;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  const { updateCartQuantity, removeFromCart } = useAppContext();
  const { product, quantity } = item;
  const { image, name, id, price, itemId } = product;

  const handleDeleteItem = () => {
    removeFromCart(id);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.mainContainer}>
        <button onClick={handleDeleteItem} className={styles.deleteButton}>
          <img src={deleteIcon} alt="Delete" className={styles.deleteButtonIcon} />
        </button>
        <Link to={`/products/${itemId}`} className={styles.productImage}>
          <img src={image} alt={name} className={styles.image} />
        </Link>
        <p className={styles.productName}>{name}</p>
      </div>
      <div className={styles.quantityControl}>
        <div className={styles.quantity}>
         <button
            onClick={() => updateCartQuantity(id, -1)}
            disabled={quantity <= 1}
            className={cn(styles.button, {
              [styles.disabled]: quantity <= 1,
            })}
          >
            <img src={minusIcon} alt="Decrease" className={styles.controlButtonIcon} />
          </button>
          <div className={styles.quantityValueContainer}>
            <p className={styles.quantityValue}>{quantity}</p>
          </div>
          <button
            onClick={() => updateCartQuantity(id, 1)}
            className={styles.button}
          >
            <img src={plusIcon} alt="Increase" className={styles.controlButtonIcon} />
          </button>
        </div>
        <h3 className={styles.price}>${price}</h3>
      </div>
    </div>
  );
};
