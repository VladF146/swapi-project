import Loader from "./Loader";

export default function Character({ character }) {
  return (
    <>
      <h2>{character.name}</h2>
      <div>{`Height: ${character.height}`}</div>
      <div>{`Mass: ${character.mass}`}</div>
      <div>{`Hair color: ${character.hair_color}`}</div>
      <div>{`Skin color: ${character.skin_color}`}</div>
      <div>{`Eye color: ${character.eye_color}`}</div>
      <div>{`Birth year: ${character.birth_year}`}</div>
      <div>{`Gender: ${character.gender}`}</div>
      <Loader url={character.homeworld} label="Homeworld" />
      {character.films.map((e) => (
        <Loader key={Math.random()} url={e} label="Film" />
      ))}
      {character.vehicles.map((e) => (
        <Loader key={Math.random()} url={e} label="Vehicle" />
      ))}
      {character.starships.map((e) => (
        <Loader key={Math.random()} url={e} label="Starship" />
      ))}
      <div>{`Url: ${character.url}`}</div>
    </>
  );
}
