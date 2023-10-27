import styles from "@/styles/TransactionItem.module.css";

export interface ItemListProps {
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
}: ItemListProps) {
  return (
    <article className={styles.article}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.itemTitle}>{title}</p>
      <p className={styles.itemDate}>{date}</p>
      <p className={styles.itemPrice}>$ {price}</p>
      <a href="#" className={`${styles.itemStatus} ${styles[status]}`}>
        {status}
      </a>
    </article>
  );
}
