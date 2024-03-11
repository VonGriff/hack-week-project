import { Filter, Group } from "..";

const Home = () => {
  return <>
    <nav>Navigation</nav>
    <main>
      <Filter />
      <ul>
        <li><Group /></li>
      </ul>
    </main>
  </>
}

export default Home;