import { Link } from "react-router-dom";
import "./headerStyle.css";
export const Header = ()=>{

    return(
        <div>
            <div className="nav-bar">
                <h1 className="project-title">Dnyanodaya</h1>
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/learn">Learn</Link></li>
                        <li><Link to="/af">Upload Pdf</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
            </div>
        </div>
    );
}