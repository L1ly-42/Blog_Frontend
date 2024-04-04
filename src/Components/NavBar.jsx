import { Link, Outlet, useParams } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {

    const params = useParams();
    const id = params.currUserId;

    return (
        <>
            <nav>
                <ul>
                    <li><Link to={`/${id}/all_blogs`} className="navBarLink">All Blogs</Link></li>
                    <li><Link to={`/${id}/my_blogs`} className="navBarLink">My Blogs</Link></li>
                    <li><Link to={`/${id}/my_blogs/new`} className="navBarLink">Create Blog</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
 
export default NavBar;