import DetailsTransaction from "@/components/DetailsTransaction";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});
export default function transaction() {
  return (
    <main className={poppins.className}>
      <DetailsTransaction/>
    </main>

  );
}
