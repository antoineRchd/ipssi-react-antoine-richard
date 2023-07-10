import { Link } from "react-router-dom";

const Navigation = ({children}) => {
    return (
    <>
    <header>
        je suis un header
    </header>
    <ul>
        <li>
          <Link to="/">Page Accueil</Link>
        </li>

        <li>
          <Link to="/CV">CV</Link>
        </li>
        <li>
          <Link to="/useState">useState</Link>
        </li>
      </ul>

    {children}
    <footer>
        je suis un footer
    </footer>
    </>
    );
};

export default Navigation;