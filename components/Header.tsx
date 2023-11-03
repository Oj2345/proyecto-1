import style from "@/styles/Header.module.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export default function Header() {
  return (
    <header className={`${style.content} ${poppins.className}`}>
      <div className={style.text1}>
        <p className={style.Title}>Zapay</p>
        <a href="#" className={style.perfil}>
          Perfil
        </a>
      </div>
      <div className={style.text2}>
        <p className={style.Title}>Lasted payments</p>
        <a href="#" className={style.viewAll}>
          viewAll
        </a>
      </div>
    </header>
  );
}
