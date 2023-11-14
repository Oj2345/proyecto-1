import { MonitorSmartphone, ShoppingCart } from "lucide-react";
import { Poppins } from "next/font/google";
import Transaction from "@/components/Transaction";
import Layout from "@/components/Layout";
import style from "@/styles/LastPayments.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});
export default function HomePage() {
  return (
    <Layout>
      <main className={poppins.className}>
        <section className={style.lastedPayments}>
          <div className={style.text2}>
            <p className={style.title}>Lasted payments</p>
            <a href="#" className={style.viewAll}>
              viewAll
            </a>
          </div>
        </section>
        <Transaction
          type="online-store"
          date="Jul 7,2023 at 11:55"
          price={60.0}
          status="success"
        />
        <Transaction
          type="merchant"
          date="Jul 7,2023 at 11:55"
          price={100.0}
          status="pending"
        />
        <Transaction
          type="online-store"
          date="Jul 7,2023 at 11:55"
          price={23.0}
          status="expired"
        />
      </main>
    </Layout>
  );
}
