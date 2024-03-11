import { Filter, Group } from "..";

const Home = () => {
  return <>
    <nav>Navigation</nav>
    <main>
      <Filter />
      <section>
        <ul>
          <li><Group /></li>
        </ul>
      </section>
    </main>
  </>
}

export default Home;