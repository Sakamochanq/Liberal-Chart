import Attention from "./components/Attention";
import Header from "./components/Header";
import Explain from "./components/Explain";
import Lists from "./components/Lists"
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Explain/>
      <Lists/>
      <Attention/>
      <div style={{margin: "150px 0px 20px 0px"}}></div>
      <Footer/>
    </div>
  );
}

export default App;
