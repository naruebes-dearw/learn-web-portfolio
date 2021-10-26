import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  console.log(theme.state.darkMode);
  // const darkMode = theme.state.darkMode;
  return <div style={{ backgroundColor: "red", color: "white" }}>
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact />
  </div>;
};

export default App;