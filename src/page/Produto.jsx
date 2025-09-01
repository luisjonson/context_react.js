//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";
import ChangeCounter from "../components/ChangeCounter";
const Produto = () => {
  //const { counter } = useContext(CounterContext);
  const {counter} = useCounterContext();
  return (
    <>
      <h1>Produto</h1>
      numero: {counter}
      <ChangeCounter/>
    </>
  )
}

export default Produto;