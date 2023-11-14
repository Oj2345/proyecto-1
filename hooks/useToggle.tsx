import { useState } from "react";

export default function useToggle() {
  const [toggle, setToggle] = useState(false);
  const onChangeToggle = () => {
    setToggle(!toggle);
  };
  return {
    toggle,
    onChangeToggle,
  };
}
