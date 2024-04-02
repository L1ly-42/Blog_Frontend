import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "../Components/NavBar";
import BlogList from "../Components/BlogList";
import AddBlogForm from "../Components/AddBlogForm";

const BlogContainer = () => {
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
                    path: "/1/my_blogs/new",
                    element: <AddBlogForm />
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