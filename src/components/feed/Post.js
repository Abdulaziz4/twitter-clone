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
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <h3>{displayName}</h3>
          {isVerified && <VerifiedIcon className="post__verifiedIcon" />}
          <span>@{username}</span>
        </div>
        <div className="post__content">{text}</div>
        <img src={image} alt="" />

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
