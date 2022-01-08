import React from "react";
import QueryString from "qs";
import { useLocation } from "react-router";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <p>저는 집에 가고싶은 사람입니다.</p>
//     </div>
//   );
// };

const About = () => {
  const location = useLocation();
  // console.log(location);
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 맨 앞의 ? 없애기
  });
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과값은 문자열 -> 비교는 무조건 문자열로 해주거나 반대로(parseInt 등) 바꿔주어야 함
  return (
    <div>
      <h1>About</h1>
      <p>저는 집에 가고싶은 사람입니다.</p>
      {showDetail && <p>detail 값을 true 로 설정하셨군여!</p>}
    </div>
  );
};

export default About;
