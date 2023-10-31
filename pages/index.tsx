import { MonitorSmartphone, ShoppingCart } from "lucide-react";
import Head from "next/head";
import { Poppins } from "next/font/google";
import TransactionItem from "@/components/TransactionItem";
import HeaderItem from "@/components/HeaderItem";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});
export default function HomePage() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=
        , initial-scale=1.0"
        />
        <title>Proyecto-Test</title>
      </Head>
        <HeaderItem />
      <main className={poppins.className}>
      <TransactionItem
        icon= {<ShoppingCart />}
        title="Online Store"
        date="Jul 7,2023 at 11:55"
        price={60.00}
        status="success"
        />
        <TransactionItem
        icon= {<MonitorSmartphone />}
        title="Merchant"
        date="Jul 7,2023 at 11:55"
        price={100.00}
        status="pending"
        />
        <TransactionItem
        icon= {<ShoppingCart  />}
        title="Online Store"
        date="Jul 7,2023 at 11:55"
        price={23.00}
        status="expired"
        />
      </main>
    </>
  );
}
