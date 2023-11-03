import style from "@/styles/DetailsTransaction.module.css";


export interface DetailsTransactionProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  price: number;
}
export default function DetailsTransaction({
  icon,
  title,
  date,
  price,
}: DetailsTransactionProps) {
  return (
    <header className={style.content}>
      <div className={style.text}>
        <p className={style.title}>Zapay</p>
        <a href="#" className={style.perfil}>Perfil</a>
      </div>
    </header>
  );
}
