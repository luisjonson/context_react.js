import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
const Produto = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>Produto</h1>
      numero: {counter}
      <ChangeCounter/>
    </>
  )
}

export default Produto;