import { useContext } from "react";
import {CounterContext} from "../context/CounterContext";
const Home = () => {
  const {counter} = useContext(CounterContext);
  return (
    <>
      <h1>Home: {counter}</h1>
    </>
  );
};

export default Home;
