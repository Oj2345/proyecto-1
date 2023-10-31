import style from "@/styles/HeaderItem.module.css"

import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500"],
  });


export default function Header (
) {
    return(
        <header className={`${style.Content} ${poppins.className}`}>
        <div className={style.HeadText1}>
        <p className={style.ItemTitle}>Zapay</p>
        <a href="#" className={style.ItemPerfil}>Perfil</a> </div>
        <div className={style.HeadText2}>
        <p className={style.ItemTitle}>Lasted payments</p>
        <a href="#" className={style.ItemViewAll}>
        viewAll
        </a></div>
        </header>
    )
}

