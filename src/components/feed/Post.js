import "./Post.css";
import { Avatar } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
const Post = ({ displayName, username, isVerified, text, avatar, image }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <h3>Qazi</h3>
          <VerifiedIcon className="post__verifiedIcon" />
          <span>@asas</span>
        </div>
        <div className="post__content">Hello</div>
        <img
          src="https://media.giphy.com/media/3otPowxHIzVT4XP8Bi/giphy.gif"
          alt=""
        />

        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <IosShareIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
