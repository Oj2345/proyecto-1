import style from "@/styles/TransactionDetails.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Fragment, useState } from "react";

export interface TransactionDetailsProps {
  title: string;
  icon: React.ReactNode;
  hash: string;
  adress: string;
  status: "success" | "pending" | "expired";
  date: string;
}
export default function TransactionDetails({
  title,
  icon,
  hash,
  adress,
  status,
  date,
}: TransactionDetailsProps) {
  const { toggle, onChangeToggle } = useToggle();
  return (
    <section className={style.content}>
      <div className={style.contentText}>
        <div className={style.contentText2}>
          <article className={style.article}>
            <p className={style.title}>{title}</p>
            <button onClick={onChangeToggle} className={style.button}>
              <ChevronDown />
            </button>
          </article>
          {toggle && (
            <Fragment>
              <section className={style.contenArticle}>
                <article className={style.article}>
                  <p className={style.text}>Transaction hash</p>
                  <div className={style.iconFlex}>
                    <p className={style.hash}>{hash}</p>
                    <div className={style.icon}>{icon}</div>
                  </div>
                </article>
                <article className={style.article}>
                  <p className={style.text}>Adress</p>
                  <div className={style.iconFlex}>
                    <p className={style.adress}>{adress}</p>
                    <a href="#" className={style.icon}>
                      {icon}
                    </a>
                  </div>
                </article>
                <article className={style.article}>
                  <p className={style.text}>Payment status</p>
                  <p className={`${style.Status} ${style[status]}`}>{status}</p>
                </article>
                <article className={style.article}>
                  <p className={style.text}>Payment time</p>
                  <p className={style.date}>{date}</p>
                </article>
              </section>
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
}

export function useToggle() {
  const [toggle, setToggle] = useState(false);
  const onChangeToggle = () => {
    setToggle(!toggle);
  };
  return {
    toggle,
    onChangeToggle,
  };
}
