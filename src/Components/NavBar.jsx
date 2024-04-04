import { Link, Outlet } from "react-router-dom";
import './NavBar.css';

const NavBar = ({currUserId}) => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={`/${currUserId}/all_blogs`} className="navBarLink">All Blogs</Link></li>
                    <li><Link to={`/${currUserId}/my_blogs`} className="navBarLink">My Blogs</Link></li>
                    <li><Link to={`/${currUserId}/my_blogs/new`} className="navBarLink">Create Blog</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
 
export default NavBar;