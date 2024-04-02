"use client";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

interface PageProps {}

const Page: FC<PageProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Login
            </h2>
          </div>
          <Button
            disabled={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full"
            onClick={loginWithGoogle}
          >
            {isLoading ? 
<Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            : 
              <img
                src="/google_logo.svg"
                alt="google logo"
                className="w-4 mr-2"
              />
            }
            Login
          </Button>
        </div>
      </div>
      ;
    </>
  );
};

export default Page;
