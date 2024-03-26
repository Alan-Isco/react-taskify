import styles from "./catCard.module.css";

function CatCard({ category }) {
  return (
    <div className={styles.catCard}>
      <div className={styles.image}>
        <img
          src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
      <div className={styles.name}>
        <img
          src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <span>
          {category.firstName} {category.lastName}
        </span>
      </div>
      <div className={styles.desc}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, numquam
          aspernatur excepturi nostrum sunt veritatis temporibus
        </p>
      </div>
      <div className={styles.rate}>
        <i className="fa-solid fa-star"></i>
        <span>4.5 (1k)</span>
      </div>
    </div>
  );
}

export default CatCard;
