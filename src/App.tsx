import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./App.css";
import { useAuth } from "./hooks/useAuth";

//router instance
const router = createRouter({
  routeTree,
  context: { authentication: undefined! },
});

//declare interface
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const authentication = useAuth();

  return <RouterProvider router={router} context={{ authentication }} />;
}

export default App;
