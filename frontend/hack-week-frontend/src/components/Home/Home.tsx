import { useEffect, useState } from "react";
import { Filter, Group } from "..";
import { mockedGroupData } from "../Group/mock-data";
import { GroupType } from "../Group/types";

const Home = () => {
  const [groups, setGroups] = useState<GroupType[]>([]);

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    setGroups([mockedGroupData]);
  }

  return <>
    <nav>Navigation</nav>
    <main>
      <Filter />
      <section>
        {groups ? 
          <ul>
            {groups.map(group => <li key={group.id}><Group details={group}/></li>)}
          </ul>
        : <p>No groups found</p>}
      </section>
    </main>
  </>
}

export default Home;