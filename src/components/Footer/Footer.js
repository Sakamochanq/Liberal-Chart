import './Footer.css';

export const Footer = () => {

  return (
    <footer className="footer">
      <a className="footer_link" href="#">LIBERAL CHART</a>
      <p className="footer_copyright">&copy; {new Date().getFullYear()} LIBERAL CHART. All rights reserved.</p>
      <p className="footer_copyright">Data source CSS Stock and 金沢工業大学</p>
      <br />
    </footer>
  );
};

export default Footer;
