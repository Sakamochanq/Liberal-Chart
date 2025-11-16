import Attention from "./components/Attention/Attention";
import Header from "./components/Header";
import Explain from "./components/Explain";
import Lists from "./components/Lists"
import Footer from "./components/Footer";
import './App.css';

/*

2025年01月24日（金）
一通りのすべてのページ・機能が完成しました。
-------------------------------------
🎉 コレデ ゼンブ オワリ 🎉

*/

function App() {
  return (
    <div className="App">
      <Header/>
      <Explain/>
      <Lists/>
      <Attention/>
      <div style={{margin: "100px 0px 20px 0px"}}></div>
      <Footer/>
    </div>
  );
}

export default App;
