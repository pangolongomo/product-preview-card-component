import styles from "./Card.module.scss";
import perfumeImg from "../assets/images/image-product-desktop.jpg";
import perfumeImgMobile from "../assets/images/image-product-mobile.jpg";
import cartIcon from "../assets/images/icon-cart.svg";

function Card() {
  return (
    <aside>
      <img className={styles.imgDesktop} src={perfumeImg} alt="perfume image" />
      <img
        className={styles.imgMobile}
        src={perfumeImgMobile}
        alt="perfume image mobile"
      />
      <div className={styles.content}>
        <h3>Perfume</h3>
        <h2>Gabrielle Essence Eau De Parfum</h2>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={styles.price}>
          <span className={styles.new}>$149.99</span>
          <span className={styles.old}>$169.99</span>
        </div>
        <button className={styles.addToCard}>
          <img src={cartIcon} alt="cart icon" />
          <span>Add to Cart</span>
        </button>
      </div>
    </aside>
  );
}

export default Card;
