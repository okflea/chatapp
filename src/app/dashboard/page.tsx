import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div className="text-red-500 text-3xl"> dashboard page</div>
        <Button variant="destructive">Button</Button>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </main>
    </>
  );
};

export default page;
