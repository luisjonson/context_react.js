import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>Home: {counter}</h1>
      <p>Valor do contador</p>
      <ChangeCounter />
    </>
  );
};

export default Home;
