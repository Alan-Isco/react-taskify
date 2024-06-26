import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import styles from "./post.module.css";

function Post({ post }) {
  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;
  // console.log(post);

  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <img src={post.profilePic} alt="" />
            <div className={styles.details}>
              <Link style={{ textDecoration: "none", color: "inherit" }}>
                <span className={styles.name}>
                  {post.firstName} {post.lastName}
                </span>
              </Link>
              {/* C:\New\client/public/uploads/1711296380260download.jpeg */}
              <span className={styles.date}>
                {moment(post.createdAt).fromNow()}
              </span>
            </div>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className={styles.content}>
          <p>{post.jobDesc}</p>
          {post.file ? <img src={"/uploads/" + post.file} alt="" /> : null}
        </div>
        <div className={styles.info}>
          <div className={styles.item}>
            <i className={`material-symbols-outlined ${liked ? "liked" : ""}`}>
              🤝
            </i>
            Apply
          </div>
          <div
            onClick={() => setCommentOpen((c) => !commentOpen)}
            className={styles.item}
          >
            <i className="fa-regular fa-message"></i>
            12 Suggestions
          </div>
        </div>

        {commentOpen && <Comments postId={post.id} key={post.id} />}
      </div>
    </div>
  );
}

export default Post;
