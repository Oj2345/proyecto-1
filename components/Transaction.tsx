import style from "@/styles/Transaction.module.css";

export interface TransactionProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  price: number;
  status: "success" | "pending" | "expired";
}

export default function Transaction({
  icon,
  title,
  date,
  price,
  status,
}: TransactionProps) {
  return (
    <section className={style.content}>
      <article className={style.article}>
        <div className={style.icon}>{icon}</div>
        <p className={style.title}>{title}</p>
        <p className={style.date}>{date}</p>
        <p className={style.price}>${price}</p>
        <a href="#" className={`${style.Status} ${style[status]}`}>
          {status}
        </a>
      </article>
    </section>
  );
}
