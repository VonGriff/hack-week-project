import { useEffect, useState } from "react";
import { Filter, Group } from "..";
import { GroupType } from "../Group/types";
import { getAllGroups, getFiltered, postGroup } from '../../api';
import { FilterType } from "../Filter/types";
import { AddGroupType } from "../AddForm/types";
import AddForm from "../AddForm/AddForm";
import './Home.css'

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
    console.log("filter send:", filter)
    const data = await getFiltered(filter);
    data && setGroups(data);
  }

  const addGroup = async (group: AddGroupType) => {
    await postGroup(group);
    getGroups();
  }

  return <>
    {/* <header className="fixed top-0 left-0 right-0 z-10">
      <nav className="nav"><h2>Looking For Boardgame Group</h2></nav>
    </header> */}
    <main>
      <section className="container">
        <Filter setFilter={getFilteredGroups}/>
      </section>
      <section className="container">
        {groups.length > 0 ? 
          <ul>
            {groups.map(group => <li key={group.id} className="card"><Group details={group}/></li>)}
          </ul>
        : <p>No groups found :(</p>}
      </section>
      <section className="container">
        <AddForm addGroup={addGroup}/>
      </section>
    </main>
  </>
}

export default Home;