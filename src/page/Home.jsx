//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  //const { counter } = useContext(CounterContext);
  const {counter} = useCounterContext();
  return (
    <>
      <h1>Home: {counter}</h1>
      <p>Valor do contador</p>
      <ChangeCounter />
    </>
  );
};

export default Home;
