import "./Feed.css";
import TweetBox from "./TweetBox";

const Feed = () => {
  return (
    <div className="feed">
      <h2 className="feed__header">Home</h2>
      <TweetBox />
    </div>
  );
};

export default Feed;
