import './Footer.css';

export const Footer = () => {

  return (
    <footer className="footer-001">
      <a className="footer-001__link" href="#">LIBERAL CHART</a>
      <p className="footer-001__copyright">&copy; {new Date().getFullYear()} LIBERAL CHART. All rights reserved.</p>
      <p className="footer-001__copyright">Data source CSS Stock and 金沢工業大学</p>
      <br />
    </footer>
  );
};

export default Footer;
