import { Link } from "react-router-dom";
import AstroLogo from '/public/universe.png';
import "./Navbar.css";


function Navbar({ links }) {
    console.log(links);
    const navStyles = {
        backgroundColor: '#9b8be8',
    };

return (
    <nav className="nav-container" style= {navStyles}>
        <img className="nav-logo" src={AstroLogo} alt="space-app logo"/>
        <div className="links-container">
            {links.map((item) => (
                    <Link key={item.id} to={item.href}> 
                    {item.text}
                    </Link>
                ))}
        </div>
      </nav>
);
}
export default Navbar;