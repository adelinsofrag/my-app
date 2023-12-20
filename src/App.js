import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import NavComponent from "./components/NavComponent";
import PriceComponent from "./components/PriceComponent";
import FooterComponent from "./components/FooterComponent";
import OverviewComponent from "./components/OverviewComponent";
import TitleComponent from "./components/TitleComponent";
import DescriptionComponent from "./components/DescriptionComponent";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeaderComponent />
      <OverviewComponent />
      <PriceComponent />
      <section>
        <TitleComponent text={"This is another section title"} />
        <DescriptionComponent text={"Another description"} />
        <DescriptionComponent text={"Another description"} />
        <DescriptionComponent text={"Another description"} />
        <DescriptionComponent text={"Another description"} />
      </section>
      <FooterComponent />
    </div>
  );
}

export default App;
