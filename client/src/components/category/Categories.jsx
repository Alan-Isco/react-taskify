import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import CatCard from "../catCards/CatCard";
import styles from "./category.module.css";

const Categories = () => {
  const { isLoading, error, data } = useQuery("category", () =>
    makeRequest.get("services/category").then((res) => res.data)
  );
  console.log(data);
  return (
    <div className={styles.categories}>
      <div className={styles.gigs}>
        <h4>Most popular Services</h4>
      </div>
      <div className={styles.choices}>
        <div className={styles.choice} id="choice1">
          Programming and Tech
        </div>
        <div className={styles.choice} id="choice2">
          Digital marketing
        </div>
        <div className={styles.choice} id="choice3">
          Manual labor services
        </div>
        <div className={styles.choice} id="choice4">
          Academic Research
        </div>
      </div>
      <div className={styles.categoryCards}>
        {error
          ? "Something went wrong. Please try again."
          : isLoading
          ? "Loading..."
          : data.map((category) => (
              <CatCard category={category} key={category.id} />
            ))}
      </div>
    </div>
  );
};

export default Categories;
