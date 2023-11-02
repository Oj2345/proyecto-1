import Head from "next/head";
import Header from "./Header";


type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};
export default function Layout({ children, ...customMeta }: LayoutProps) {
  const meta = {
    title: "proyecto-test",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=
        , initial-scale=1.0"
        />
        <title>{meta.title}</title>
      </Head>
      <Header />
      {children}
    </>
  );
}
