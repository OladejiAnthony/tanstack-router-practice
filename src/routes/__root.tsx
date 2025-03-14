//Setup and Routing
import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { AuthContext } from "../hooks/useAuth";
const activeProps = {
  style: {
    fontWeight: "bold",
  },
};

type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
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
                categories: ["electronics", "clothing"], // Provide an array of strings
              }}
            >
              Search
            </Link>
          </li>
          <li>
            <Link to="/login" activeProps={activeProps}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/dashboard" activeProps={activeProps}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/settings" activeProps={activeProps}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      {/*Children Routes display */}
      <Outlet />
    </>
  ),
});
{
  /*
    This is the root component of our application.
    This is the folder containing all the routes files of our app, which will be based on file names
  */
}
