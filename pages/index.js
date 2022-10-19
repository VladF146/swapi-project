import styles from "../styles/Home.module.css";
import Character from "../components/Character";

export async function getServerSideProps() {
  let data = await fetch("https://swapi.dev/api/people");
  data = await data.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      {data.results.map((e) => (
        <Character key={Math.random()} character={e} />
      ))}
    </div>
  );
}
