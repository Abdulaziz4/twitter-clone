import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Widgets from "./components/widgets/Widgets";
const app = () => {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default app;
