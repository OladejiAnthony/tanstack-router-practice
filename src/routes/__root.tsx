//Setup and Routing
import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

const activeProps = {
  style: {
    color: "red",
    fontWeight: "bold",
  },
};

function RootComponent() {
  return (
    <React.Fragment>
      <h2> Navigation setup</h2>
      <nav>
        <ul>
          {/*Routing Setup example */}
          <li>
            <Link to="." activeProps={activeProps}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" activeProps={activeProps}>
              {({ isActive }) => <>Profile {isActive && "^"}</>}
            </Link>
          </li>
          {/*Path Parameter Example */}
          {/* <li>
            <Link
              to="/pokemon/$id"
              params={{ id: "6" }}
              activeProps={activeProps}
            >
              Charizard
            </Link>
          </li> */}
          <li>
            <Link to="/pokemon" activeProps={activeProps}>
              Pokemon
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              activeProps={activeProps}
              search={{
                query: "pikachu",
                hasDiscount: true,
                categories: ["electronics", "clothing"],
              }}
            >
              Search
            </Link>
          </li>
        </ul>
      </nav>
      {/*Children Routes display */}
      <Outlet />
    </React.Fragment>
  );
}

{
  /*
    This is the root component of our application.
    This is the folder containing all the routes files of our app, which will be based on file names
  */
}
