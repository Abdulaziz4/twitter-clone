import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Widgets from "./components/widgets/Widgets";
import { useEffect } from "react";
const App = () => {

 
  useEffect(() => {
    document.title = "Twitter"
 }, []);

  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default App;
