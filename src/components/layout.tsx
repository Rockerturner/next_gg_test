import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import type { PropsWithChildren } from "react";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen flex-col bg-slate-950">
      <div className="flex w-full flex-row items-center justify-between p-10">
        <h1 className="p-2.5 text-4xl font-extrabold text-indigo-300">
          Next.GG
        </h1>
        <SignedOut>
          <SignInButton>
            <button className="w-32 rounded-md bg-orange-500 p-2.5 font-bold text-white">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              baseTheme: shadesOfPurple,
            }}
          />
        </SignedIn>
      </div>
      {props.children}
    </main>
  );
};
