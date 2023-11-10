import style from "@/styles/Transaction.module.css";
import { types } from "./PaymentType";

export interface TransactionProps {
  icon?: React.ReactNode;
  title?: string;
  date: string;
  price: number;
  status: "success" | "pending" | "expired";
  type?: "online-store" | "merchant";
}

export default function Transaction({
  icon: customIcon,
  title: customTitle,
  date,
  price,
  status,
  type = "online-store",
}: TransactionProps) {
  const title = customTitle || types[type].title;
  const icon = customIcon || types[type].icon;
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
