//Blocking Navigation to other pages with useBlocker when changes havent been saved
import { createFileRoute, redirect, useBlocker } from "@tanstack/react-router";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";
import { Input } from "../components/ui/input";
import Typography from "../components/ui/typography";
import { useState } from "react";
//import { Button } from "../components/ui/button";

export const Route = createFileRoute("/profile")({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: Profile,
});

function Profile() {
  const [name, setName] = useState("");

  // Browser Blocker functionality
  //const blocker = useBlocker(() => !!name);

  //Custom Blocker functionality
  const { proceed, reset, status } = useBlocker({
    condition: !!name,
    onBlock: () => {
      alert("You have unsaved changes");
    },
  });

  return (
    <div>
      <Typography variant={"h2"}>Profile</Typography>
      <Input
        className="w-48"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Custom Blocker UI */}
      {/* {status === "blocked" && (
        <div>
          Are you sure you want to proceed ?
          <Button onClick={proceed} disabled={status === "blocked"}>
            Yes
          </Button>
          <Button
            onClick={reset}
            disabled={status === "idle"}
            variant={"outline"}
          >
            No
          </Button>
        </div>
      )} */}

      {/* Modal Blocker UI */}
      <AlertDialog open={status === "blocked"}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Do you want to leave?</AlertDialogTitle>
            <AlertDialogDescription>
              You might have some unsaved changes in this page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={reset}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={proceed}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
