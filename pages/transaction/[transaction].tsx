import { Copy, ShoppingCart } from "lucide-react";
import Layout from "@/components/Layout";
import { Poppins } from "next/font/google";
import PaymentType from "@/components/PaymentType";
import TransactionDetails from "@/components/TransactionDetails";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});
export default function transaction() {
  return (
    <Layout>
       <main className={poppins.className}>
        <PaymentType
          icon={<ShoppingCart />}
          title="Online shop"
          price="$60.00"
        />
        <TransactionDetails
        title="Transaction Details"
        hash="0x08f82194...edc42f14c06ed4ff"
        icon={<Copy />}
        adress="0xbe80...d62c"
        status="success"
        date= "Jul 7, 2023 at 11:55"
        />
      </main>
    </Layout>
  );
}
