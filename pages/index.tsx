import { MonitorSmartphone, ShoppingCart } from "lucide-react";
import { Poppins } from "next/font/google";
import Transaction from "@/components/Transaction";
import Layout from "@/components/Layout";
import style from "@/styles/LastPayments.module.css";
import { getTransactions } from "@/services/TransactionServices";
import { useEffect, useState } from "react";
import Transactions from "@/pages/api/transactions";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});
export default function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTransactions();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
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
        {transactions.map((Transactions) => {
          return (            
            <Transaction
            id = {Transactions.id}
            type = {Transactions.type}
            date = {Transactions.date}
            price = {Transactions.price}
            status ={Transactions.status}
            />
            )
        })}
      </main>
    </Layout>
  );
}
export const transactions = [
  {
    id: 1,
    type: "online-store",
    date: "Jul 7,2023 at 11:55",
    price: 60.0,
    status: "success",
  },
  {
    id: 2,
    type: "merchant",
    price: 100.0,
    date: "Jul 7,2023 at 11:55",
    status: "pending",
  },
  {
    id: 3,
    type: "online-store",
    price: 23.0,
    date: "Jul 7,2023 at 11:55",
    status: "expired",
  },
];
