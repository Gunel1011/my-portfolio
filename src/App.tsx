import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyRouters from "./router/MyRouters";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <MyRouters />
      </main>
      <Footer />
    </>
  );
};

export default App;
