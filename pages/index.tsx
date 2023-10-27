import style from "@/styles/Home2.module.css";
import { AppWindow, MonitorSmartphone, ShoppingCart } from "lucide-react";
import Head from "next/head";
import { Poppins } from "next/font/google";
import TransactionItem from "@/components/TransactionItem";

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
      <header className={`${style.headerCont} ${poppins.className}`}>
        <div className={style.texthead1}>
          <p>Zapay</p>
          <a href="#" className={style.perfil}>
            Perfil
          </a>
        </div>
        <div className={style.texthead2}>
          <p>Lastet payments</p>
          <a href="#" className={style.aCol}>
            View all
          </a>
        </div>
      </header>
      <section className={`${style.sectionCont} ${poppins.className}`}>
        <TransactionItem
          icon={<ShoppingCart className={style.icon} />}
          title="Online store"
          date="Jul 7,2023 at 11:55"
          price={60.0}
          status="success"
        />
        <TransactionItem
          icon={<MonitorSmartphone className={style.icons} />}
          title="Online store"
          date="Jul 7,2023 at 11:55"
          price={60.0}
          status="pending"
        />
        <TransactionItem
          icon={<ShoppingCart className={style.icon} />}
          title="Online store"
          date="Jul 7,2023 at 11:55"
          price={60.0}
          status="expired"
        />
      </section>
    </>
  );
}
