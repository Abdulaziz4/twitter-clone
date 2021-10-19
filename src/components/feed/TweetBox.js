import { Avatar, Button } from "@mui/material";
import "./TweetBox.css";
const TweetBox = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80" />
          <input placeholder="What's happing?" />
        </div>
        <Button className="tweetbox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
