import { useEffect, useState } from "react";
import { Filter, Group } from "..";
import { GroupType } from "../Group/types";
import { getAllGroups, getFiltered } from '../../api';
import { FilterType } from "../Filter/types";

const Home = () => {
  const [groups, setGroups] = useState<GroupType[]>([]);
  
  useEffect(() => {
    getGroups();
  }, []);
  
  const getGroups = async () => {
    const data = await getAllGroups();
    setGroups(data);
  }

  const getFilteredGroups = async (filter: FilterType) => {
    const data = await getFiltered(filter);
    data && setGroups(data);
  }

  return <>
    <nav>Navigation</nav>
    <main>
      <Filter setFilter={getFilteredGroups}/>
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