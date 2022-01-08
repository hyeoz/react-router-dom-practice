import { Link, Route, Routes, NavLink } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          {/* <Link to="/profiles/hyeoz">HYEOZ</Link> */}
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/profiles/hyeoz"
          >
            HYEOZ
          </NavLink>
        </li>
        <li>
          {/* <Link to="/profiles/ideal">IDEAL</Link> */}
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to="/profiles/ideal"
          >
            IDEAL
          </NavLink>
        </li>
      </ul>
      <hr />

      <Routes>
        <Route
          exact
          path="/"
          element={() => <div>사용자를 선택해주세요.</div>}
        />
        <Route path="/:username/*" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
