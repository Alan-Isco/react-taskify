import moment from "moment";
import { useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import styles from "./comments.module.css";

function Comments({ postId }) {
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [desc, setDesc] = useState("");

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("comments?postId=" + postId).then((res) => res.data)
  );

  console.log(data);

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("comments", newComment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("comments");
      },
    }
  );
  const handleSubmit = async (e) => {
    // Submit post request
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  // const comments = [
  //     {
  //         id: 1,
  //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
  //         name: "Jane Doe",
  //         userId: 1,
  //         profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     },
  //     {
  //         id: 2,
  //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
  //         name: "Jane Doe",
  //         userId: 2,
  //         profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     },
  //     {
  //         id: 3,
  //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
  //         name: "Jane Doe",
  //         userId: 3,
  //         profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     },
  //     {
  //         id: 4,
  //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
  //         name: "Jane Doe",
  //         userId: 4,
  //         profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     },
  // ]

  return (
    <div className={styles.comments}>
      <div className={styles.write}>
        <img src={currentUser.profilePic} alt="" />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Write a suggestion..."
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
      {isLoading
        ? "Loading..."
        : error
        ? "Something went wrong. Please refresh."
        : data.map((comment) => (
            <div className={styles.comment}>
              <img src={comment.profilePic} alt="profile pic" />
              <div className={styles.info}>
                <span>
                  {comment.firstName} {comment.lastName}
                </span>
                <p>{comment.desc}</p>
              </div>
              <span className={styles.date}>
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
}

export default Comments;
