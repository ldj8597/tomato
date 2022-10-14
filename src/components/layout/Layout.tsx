import Head from "next/head";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Tomato</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
