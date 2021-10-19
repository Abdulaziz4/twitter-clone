import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
const Feed = () => {
  return (
    <div className="feed">
      <h2 className="feed__header">Home</h2>
      <TweetBox />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
