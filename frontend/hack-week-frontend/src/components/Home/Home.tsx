import { Filter, Group } from "..";
import { groupData } from "../Group/mock-data";

const Home = () => {
  return <>
    <nav>Navigation</nav>
    <main>
      <Filter />
      <section>
        <ul>
          <li><Group details={groupData}/></li>
        </ul>
      </section>
    </main>
  </>
}

export default Home;