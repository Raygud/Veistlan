
import '../Nav/Nav.scss'
import { Outlet, Link } from "react-router-dom";

export const Nav = (props) => {



    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Heim</Link> {" "}</li>
                    <li><Link to="/Moment">Løtan</Link> {" "}</li>
                    <li><Link to="/Songs">Sangir</Link> {" "}</li>
                </ul>
            </nav>
        </header>
    );
}