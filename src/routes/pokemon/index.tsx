//Path Parameters & Loader
import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllPokemons } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/")({
  component: PokemonListComponent,
  loader: getAllPokemons,
});

function PokemonListComponent() {
  const pokemons = Route.useLoaderData(); // load data related to the pokemon
  console.log({ pokemons });
  return (
    <div>
      <h2>Pokemons</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link
              to={"/pokemon/$id"}
              params={{
                id: pokemon.id,
              }}
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
