import { useContext } from "react";
import userContext from "../context/useContext";
function Profile() {
  const { user } = useContext(userContext);

  if (!user) {
    return <div>please login</div>;
  } else {
    return <div>Welcome {user.username}</div>;
  }
}

export default Profile;
