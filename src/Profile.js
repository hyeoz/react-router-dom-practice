import { useParams } from "react-router";

const data = {
  hyeoz: {
    name: "이혜원",
    description: "개발자 지망생",
  },
  ideal: {
    name: "이상윤",
    description: "풀스택 개발자",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];
  if (!username) return <div>eeeessssss</div>;
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
