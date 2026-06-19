import Header from "./components/Header";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Banner />

      <div className="products">

        <Product
          name="Laptop"
          price="50000"
          image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        />

        <Product
          name="Smart Phone"
          price="25000"
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        />

        <Product
          name="Headphones"
          price="3000"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        />

        <Product
          name="Smart Watch"
          price="5000"
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        />

      </div>

      <Footer />
    </>
  );
}

export default App;