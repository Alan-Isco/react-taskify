import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import Post from "../../components/post/Post";
import styles from "./posts.module.css";
const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("posts").then((res) => res.data)
  );

  // console.log(data);
  return (
    <div className={styles.posts}>
      {error
        ? "Something went wrong. Please try again."
        : isLoading
        ? "Loading..."
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
