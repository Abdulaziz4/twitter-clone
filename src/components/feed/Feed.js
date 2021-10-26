import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      const fetchedPosts = snapshot.docs.map((doc) => doc.data());
      setPosts(fetchedPosts);
    });
  }, []);
  return (
    <div className="feed">
      <h2 className="feed__header">Home</h2>
      <TweetBox />
      <FlipMove>
        {posts.map((post, index) => (
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            isVerified={post.isVerified}
            avatar={post.avatar}
            image={post.image}
            text={post.text}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
