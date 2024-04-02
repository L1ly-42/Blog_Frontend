import { Link, Outlet } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/1/all_blogs">All Blogs</Link></li>
                    <li><Link to="/1/my_blogs">My Blogs</Link></li>
                    <li><Link to="/1/my_blogs/new">Create Blog</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
 
export default NavBar;