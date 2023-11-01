import Header from "./Header";
import TransactionItem from "./TransactionItem";


 type LayoutProps = {
    children?: React.ReactNode;
  }
  export default function Layout({ children }: LayoutProps) {
    return (
      <>
        <Header/>
        {children}
      </>
    )
  }