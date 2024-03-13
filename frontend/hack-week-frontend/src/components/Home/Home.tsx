import { useEffect, useState } from "react";
import { Filter, Group } from "..";
import { GroupType } from "../Group/types";
import { getGroup } from '../../api';

const Home = () => {
  const [groups, setGroups] = useState<GroupType[]>([]);
  
  useEffect(() => {
    getGroups();
  }, []);
  
  const getGroups = async () => {
    const data = await getGroup();
    setGroups(data);
  }

  return <>
    <nav>Navigation</nav>
    <main>
      <Filter />
      <section>
        {groups.length > 0 ? 
          <ul>
            {groups.map(group => <li key={group.id}><Group details={group}/></li>)}
          </ul>
        : <p>No groups found :(</p>}
      </section>
    </main>
  </>
}

export default Home;