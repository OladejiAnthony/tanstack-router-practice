import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: ({ context }) => {
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
  return <div>Hello "/authenticated"!</div>;
}
