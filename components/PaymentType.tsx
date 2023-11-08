import style from "@/styles/PaymentType.module.css";

export interface PaymentTypeProps {
  icon: React.ReactNode;
  title: string;
  price: string;
}
export default function PaymentType({
  icon,
  title,
  price,
}: PaymentTypeProps) {
  return (
    <section className={style.content}>
      <div className={style.contentText}>
        <div className={style.text}>
          <div className={style.icon}>{icon}</div>
          <p className={style.title}>{title}</p>
        </div>
        <a href="#" className={style.price}>
          {price}
        </a>
      </div>
    </section>
  );
}
