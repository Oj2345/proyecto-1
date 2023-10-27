import style from "@/styles/Home2.module.css";
import { AppWindow, MonitorSmartphone, ShoppingCart } from "lucide-react";
import Head from "next/head";
import { Poppins } from "next/font/google";

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
          <a href="#" className={style.perfil}>Perfil</a>
        </div>
        <div className={style.texthead2}>
          <p>Lastet payments</p>
          <a href="#" className={style.aCol}>
            View all
          </a>
        </div>
      </header>
      <section className={`${style.sectionCont} ${poppins.className}`}>
        <article className={style.article}>
          <ShoppingCart className={style.icon} />
          <p className={style.itemTite}>Online store</p>
          <p className={style.itemDate}>Jul 7,2023 at 11:55</p>
          <p>$ 60.00</p>
          <a href="#" className={style.itemStatusSuccess}>
            Success
          </a>
        </article>
        <article className={style.article}>
          <MonitorSmartphone className={style.icons} />
          <p className={style.itemTitle}>Merchant</p>
          <p className={style.itemDate}>Jul 7,2023 at 14:35</p>
          <p>$ 100.00</p>
          <a href="#" className={style.itemStatusPending}>
            Pending
          </a>
        </article>
        <article className={style.article}>
          <ShoppingCart className={style.icons} />
          <p  className={style.itemTitle}>Online store</p>
          <p className={style.fontW}>Aug 20,2023 at 20:10</p>
          <p>$ 23.00</p>
          <a href="#" className={style.itemStatusExpired}>
            Expired
          </a>
        </article>
      </section>
    </>
  );
}
