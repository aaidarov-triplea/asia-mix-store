import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import AppRouter from "./components/Routes/Router"
import Main from "./pages/Main/Main"


function App() {

  return (
    <div className="container">
      <Header />
      <Main />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
