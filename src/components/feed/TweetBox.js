import { Avatar, Button } from "@mui/material";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import "./TweetBox.css";
import { db } from "../../firebase";
const TweetBox = () => {
  const [tweet, setTweet] = useState("");
  const [image, setImage] = useState("");

  const onTweetChangeHandler = (event) => {
    setTweet(event.target.value);
  };

  const onImageChangeHandler = (event) => {
    setImage(event.target.value);
  };

  const tweetSubmitHandler = (event) => {
    event.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "Abdulaziz",
      username: "abdulaziz121",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80",
      isVerified: true,
      image: image,
      text: tweet,
    });
    setImage("");
    setTweet("");
  };
  return (
    <div className="tweetbox">
      <form onSubmit={tweetSubmitHandler}>
        <div className="tweetbox__input">
          <Avatar src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80" />
          <input
            placeholder="What's happing?"
            value={tweet}
            onChange={onTweetChangeHandler}
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          className="tweetbox__inputImage"
          value={image}
          onChange={onImageChangeHandler}
        />
        <Button type="submit" className="tweetbox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
