import { Copy, ShoppingCart } from "lucide-react";
import Layout from "@/components/Layout";
import { Poppins } from "next/font/google";
import PaymentType from "@/components/PaymentType";
import TransactionDetails from "@/components/TransactionDetails";
import { useRouter } from "next/router";
import { transactions } from "..";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});
export default function transaction() {
  const router = useRouter();
  const transactionId = router.query.transaction;
  const transaction = transactions.find((element) => element.id.toString() === transactionId);
  console.log(transaction)
  if(!transaction)return null
  return (
    <Layout>
      <main className={poppins.className}>
        <PaymentType type={transaction.type} price={transaction.price} />
        <TransactionDetails
          title="Transaction Details"
          hash="0x08f82194...edc42f14c06ed4ff"
          icon={<Copy />}
          adress="0xbe80...d62c"
          status={transaction.status}
          date={transaction.date}
        />
      </main>
    </Layout>
  );
}
