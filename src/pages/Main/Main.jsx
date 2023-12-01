import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
  return <main>
    <Header />
    <div className="wrapper">
        <Navbar />
        <Banner />
    </div>
  </main>;
};

export default Main;
