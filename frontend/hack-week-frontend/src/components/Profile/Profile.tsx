import { useEffect, useState } from "react";

type UserType = {
  firstName: string;
  lastName: string;
  preferences: string
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
    <ul>
      <li>Name: <strong>{user.firstName} {user.lastName}</strong></li>
      <li>Preferred mechanisms: <strong>{user.preferences}</strong></li>
    </ul>}
  </>
}

export default Profile;