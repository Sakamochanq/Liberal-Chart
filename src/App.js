import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Lists from "./components/Lists/Lists"
import Footer from "./components/Footer/Footer";
import { Announcement } from "./components/Announcement/Announcement";
import './App.css';

/*

2025年01月24日（金）
一通りのすべてのページ・機能が完成しました。
-------------------------------------
🎉 コレデ ゼンブ 終～了～ 🎉

*/

function App() {
  return (
    <div className="App">
      <Header/>
      <br />
      <Home/>
      <br />
      <Announcement/>
      <br /><br />
      <Lists/>
      {/* <div style={{margin: "100px 0px 20px 0px"}}></div> */}
      <Footer/>
    </div>
  );
}

export default App;
