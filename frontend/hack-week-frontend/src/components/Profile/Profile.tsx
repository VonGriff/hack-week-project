import { useEffect, useState } from "react";
import { GroupType } from "../Group/types";

type UserType = {
  firstName: string;
  lastName: string;
  preferences: string;
  groups: GroupType[];
}


const Profile = () => {
  const [user, setUser] = useState<UserType>();
  
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('http://localhost:3000/api/profile');
      const data = await response.json();
      setUser(data);
    }
    getUser();
  }, [])

  return <>
  {user &&
    <div data-theme="luxury" className="p-3 rounded-xl">
      <ul>
        <li>Name: <strong>{user.firstName} {user.lastName}</strong></li>
        <li>Preferred mechanisms: <strong>{user.preferences}</strong></li>
      </ul>
      <p>Waiting for reply from groups:</p>
      <ul>
        {user?.groups && user.groups.map(g => <li key={g.id}>{g.title}</li>)}
      </ul>
    </div>}
  </>
}

export default Profile;