import { Icon, Icons } from "@/components/Icons";
import SignOutButton from "@/components/SignOutButton";
import { authOptions } from "@/lib/auth";
import { MessagesSquareIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

interface SidebarOptions {
  id: number;
  name: string;
  href: string;
  Icon: Icon;
}
const sidebarOptions: SidebarOptions[] = [
  {
    id: 1,
    name: "Chats",
    href: "/dashboard",
    Icon: "UserPlus",
  },
];

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="w-full h-full flex">
        <div className="w-full h-full flex max-w-xs min-w-[150px] grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200  px-6">
          <Link href="/dashboard" className="flex h-16 shrink-0 items-center">
            <MessagesSquareIcon size={36} />
          </Link>
          <div className="text-xs font-semibold leading-6 text-gray-400">
            your chats
          </div>
          <nav className="flex flex-1 flex-col gap-y-7">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li> chats to go</li>
              <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">
                  Overview
                </div>
                <ul role="list" className="mt-2 -mx-2 space-y-1">
                  {sidebarOptions.map((item) => {
                    const Icon = Icons[item.Icon];
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        >
                          <span className="text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white">
                            <Icon className="h-4 w-4" />
                          </span>

                          <span className="truncate">{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="-mx-6 mt-auto flex flex-col items-center">
                <div className="flex flex-1 gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900">
                  <div className="relative h-8 w-8 bg-gray-50">
                    <Image
                      fill
                      referrerPolicy="no-referrer"
                      className="rounded-full"
                      src={session?.user?.image || ""}
                      alt="Your profile picture"
                    />
                  </div>
                  <span className="sr-only"></span>
                  <div className="flex flex-col">
                    <span aria-hidden="true">{session?.user.name}</span>
                    <span className="text-xs text-zinc-400" aria-hidden="true">
                      {session?.user.email}
                    </span>
                  </div>
                </div>
                <div>
                  <SignOutButton />
                </div>
              </li>
            </ul>
          </nav>
        </div>
        {children}
      </div>
    </>
  );
};
export default Layout;
