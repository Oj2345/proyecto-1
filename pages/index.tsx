import { MonitorSmartphone, ShoppingCart } from "lucide-react";
import { Poppins } from "next/font/google";
import Transaction from "@/components/Transaction";
import Layout from "@/components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});
export default function HomePage() {
  return (
    <Layout>
      <main className={poppins.className}>
        <Transaction
          icon={<ShoppingCart />}
          title="Online Store"
          date="Jul 7,2023 at 11:55"
          price={60.0}
          status="success"
        />
        <Transaction
          icon={<MonitorSmartphone />}
          title="Merchant"
          date="Jul 7,2023 at 11:55"
          price={100.0}
          status="pending"
        />
        <Transaction
          icon={<ShoppingCart />}
          title="Online Store"
          date="Jul 7,2023 at 11:55"
          price={23.0}
          status="expired"
        />
      </main>
    </Layout>
  );
}
