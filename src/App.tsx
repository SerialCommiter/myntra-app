import "./App.css";
import ProductPage from "./components/page/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      {/* <Card
        brand="Daniel"
        imgSrc="http://assets.myntassets.com/assets/images/2466435/2018/5/21/265434b9-de22-4b2c-9ca2-ded4c01ef5801526878966488-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-1.jpg"
        name="HIGHLANDER Men Black Solid Denim Jacket"
        price={959}
        discountLabel="(70% OFF)"
        mrp={3750}
      /> */}

      <ProductPage />
    </div>
  );
}

export default App;
