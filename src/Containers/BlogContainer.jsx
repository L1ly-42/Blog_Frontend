import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "../Components/NavBar";
import BlogList from "../Components/BlogList";
import AddBlogForm from "../Components/AddBlogForm";
import EditBlogForm from "../Components/EditBlogForm";
import ExpandedBlog from "../Components/ExpandedBlog";
import './BlogContainer.css';

const BlogContainer = () => {
    const blog_id = 1;
    const BlogRoutes = createBrowserRouter([
        {
            path: "/",
            element: <></>,
        },
        {
            path: "/1",
            element: <NavBar />,
            children:[
                {
                    path:"/1/all_blogs",
                    element: <BlogList />
                },
                {
                    path: "/1/my_blogs",
                    element: <BlogList />
                },
                {
                    path: `/1/blogs/${blog_id}`,
                    element: <ExpandedBlog />
                },
                {
                    path: "/1/my_blogs/new",
                    element: <AddBlogForm />
                },
                {
                    path: `/1/my_blogs/${blog_id}/edit`,
                    element: <EditBlogForm />
                }
            ]
        }
    ])
    
    
    return ( 

        <>
        <h1> Hello from BlogContainer!</h1>
        <RouterProvider router={BlogRoutes}/>
        </>

    );
}
 
export default BlogContainer;