import style from "@/styles/TransactioItem.module.css"

export interface TransactionItemProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  price: number;
  status: "success" | "pending" | "expired";
}

export default function TransactionItem({
  icon,
  title,
  date,
  price,
  status,
}: TransactionItemProps) {
  return (
    <section className={style.Content}>
    <article className={style.article}>
    <div className={style.icon}>{icon}</div>
    <p className={style.itemTitle}>{title}</p>
    <p className={style.itemDate}>{date}</p>
    <p className={style.itemPrice}>${price}</p>
    <a href="#" className={`${style.itemStatus} ${style[status]}`}>
        {status}
      </a>
    </article>
    </section>
  );
}
