"use client";
import { ButtonHTMLAttributes, useState } from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton = () => {
  const [isSigningOut, setIsSigningOut] = useState(false);
  return (
    <Button
      variant={"ghost"}
      onClick={async () => {
        setIsSigningOut(true);
        try {
          await signOut();
        } catch (error) {
          toast.error("There was a problem signing out");
        } finally {
          setIsSigningOut(false);
        }
      }}
    >
      {isSigningOut ? (
        <Loader2Icon className="animate-spin h-4 w-4" />
      ) : (
        "Sign out"
      )}
    </Button>
  );
};

export default SignOutButton;
