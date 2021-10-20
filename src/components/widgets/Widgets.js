import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
  TwitterMentionButton,
} from "react-twitter-embed";
import "./Widgets.css";
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__content">
        <h3>What's happening ?</h3>
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        <TwitterMentionButton screenName={"saurabhnemade"} />{" "}
      </div>
    </div>
  );
};

export default Widgets;
