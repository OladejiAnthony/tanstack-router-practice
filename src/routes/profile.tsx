import { createFileRoute, redirect } from "@tanstack/react-router";
//import { isAuthenticated } from "../utils/auth";

export const Route = createFileRoute("/profile")({
  beforeLoad: ({ context }) => {
    // if (!isAuthenticated()) {
    //   throw redirect({
    //     to: "/login",
    //   });
    // }
    const { isLogged } = context.authentication;
    //if user is not authenticated before the page loads, just redirect them to the login page to be authenticated
    if (!isLogged()) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/profile"!</div>;
}
