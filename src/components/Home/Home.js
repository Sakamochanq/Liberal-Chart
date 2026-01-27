import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="logo-area">
                <img className="logo-image" alt="Logo" src={process.env.PUBLIC_URL + '/assets/images/School.png'}/>
            </div>
            <div className="text-area">
                <h3 className="title">Getting Started</h3>
                <p>
                    Liberal-Chartとは、金沢工業大学のリベラルアーツ系科目の早見表です。
                    このサイトは非公式のものであり、金沢工業大学とは一切関係ありません。
                    正規の情報は金沢工業大学のeシラバス又は、キャンパスガイドを参照してください。
                </p>
                <br />
            </div>
        </div>
    );
}

export default Home;