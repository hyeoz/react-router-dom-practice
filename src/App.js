import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import HistorySample from "./HistorySample";
import Home from "./Home";
// import Profile from "./Profile";
import Profiles from "./Profiles";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/profiles">PROFILES</Link>
        </li>
        {/* <li>
          <Link to="/profile/hyeoz">Profile of hyeoz</Link>
        </li>
        <li>
          <Link to="/profile/ideal">Profile of ideal</Link>
        </li> */}
        <li>
          <Link to="/history">History Sample</Link>
        </li>
      </ul>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/about" || "/info"} element={<About />} />
        {/* <Route path="/profile/:username" element={<Profile />} /> */}
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
