import { signIn } from "next-auth/react";
import Logo from "../../components/ui/Logo";
import { NextPageWithLayout } from "../_app";

const SignInPage: NextPageWithLayout = () => {
  return (
    <div className="mx-auto max-w-xl py-10">
      <Logo className="h-12 w-12" />
      <h1 className="py-16 text-7xl font-bold">Whats happening now</h1>
      <p className="py-10 text-2xl font-semibold">Join Tomato Now.</p>
      <button
        className="rounded-full border border-slate-500 px-10 py-2 shadow-md hover:bg-slate-100"
        onClick={() =>
          signIn("google", {
            callbackUrl: "/",
          })
        }
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignInPage;
