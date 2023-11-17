import style from "@/styles/PaymentType.module.css";
import { MonitorSmartphone, ShoppingCart } from "lucide-react";

export const types = {
  "online-store": {
    title: "Online store",
    icon: <ShoppingCart />,
  },

  merchant: {
    title: "Merchant",
    icon: <MonitorSmartphone />,
  },
};

export interface PaymentTypeProps {
  icon?: React.ReactNode;
  title?: string;
  price: number;
  type?: "online-store" | "merchant";
}
export default function PaymentType({
  title: customTitle,
  icon: customIcon,
  price,
  type = "online-store",
}: PaymentTypeProps) {
  const title = customTitle || types[type].title;
  const icon = customIcon || types[type].icon;
  return (
    <section className={style.content}>
      <div className={style.contentText}>
        <div className={style.text}>
          <div className={style.icon}>{icon}</div>
          <p className={style.title}>{title}</p>
        </div>
        <a href="#" className={style.price}>
          ${price}
        </a>
      </div>
    </section>
  );
}
