//Path Parameters & Loader
import { createFileRoute } from "@tanstack/react-router";
import { getPokemon } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/$id")({
  component: PokemonComponent,
  loader: async ({ params }) => await getPokemon(params.id),
});

function PokemonComponent() {
  const { id } = Route.useParams(); // get id from route
  const pokemon = Route.useLoaderData(); // load data related to the pokemon
  console.log({ id });
  console.log({ pokemon });

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Route ID: /pokemon/${id}</h1>
      {/*Display API data */}
      <h2>Name: {pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h4>Height: {pokemon.height}</h4>
      <h4>Weight: {pokemon.weight}</h4>
    </>
  );
}

{
  /**
  The $id is our special character that shows that this is a path parameter that can be anything.
  This is the file that will be used to render the component when the path is /pokemon/anything.
  We used the Route.useParams() hook to get the id from the route.
  To get data before the Route loads, make use of the loader function inside the component to load the data.
 */
}
