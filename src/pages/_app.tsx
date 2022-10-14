import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppProps, AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import Layout from "../components/layout/Layout";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPopsWithLayout<P = Record<string, unknown>> = AppProps<P> & {
  Component: NextPageWithLayout;
};

const MyApp = (({
  Component,
  pageProps: { session, ...pageProps },
}: AppPopsWithLayout<{ session: Session | null }>) => {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}) as AppType;

export default trpc.withTRPC(MyApp);
