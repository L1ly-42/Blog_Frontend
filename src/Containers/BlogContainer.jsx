import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import BlogList from "../Components/BlogList";
import AddBlogForm from "../Components/AddBlogForm";
import EditBlogForm from "../Components/EditBlogForm";
import ExpandedBlog from "../Components/ExpandedBlog";
import './BlogContainer.css';

const BlogContainer = () => {

    const [blogs, setBlogs] = useState([]);
    const [myBlogs, setMyBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [filteredMyBlogs, setFilteredMyBlogs] = useState([]);
    
    const fetchBlogs = async () => {
        const response = await fetch("http://localhost:8080/blogs");
        const data = await response.json();
        setBlogs(data);
        setFilteredBlogs(data);
    }

    const fetchMyBlogs = async () => {
        const response = await fetch("http://localhost:8080/blogs/1");
        const data = await response.json();
        setMyBlogs(data);
        setFilteredBlogs(data);
    }

    const postBlogs = async (blog) => {
        const response = await fetch("http://localhost:8080/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        const savedBlog = await response.json();
        setBlogs([...blogs,savedBlog]);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    useEffect(() => {
        setFilteredBlogs([...blogs]);
    }, [blogs]);

    useEffect(() => {
        setFilteredMyBlogs([...myBlogs]);
    }, [myBlogs]);

    const filterBlogs = ((event, blogsToFilter) => {
        const filteredList = blogsToFilter.filter((blog) => blog.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredBlogs(filteredList);
    });

    const filterMyBlogs = ((event, blogsToFilter) => {
        const filteredList = blogsToFilter.filter((blog) => blog.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredMyBlogs(filteredList);
    });

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
                    element: <BlogList filteredBlogs={filteredBlogs} filterFunction={filterBlogs} blogsToFilter={blogs} />
                },
                {
                    path: "/1/my_blogs",
                    element: <BlogList filteredBlogs={filteredMyBlogs} filterFunction={filterMyBlogs} blogsToFilter={myBlogs} />
                },
                {
                    path: `/1/blogs/${blog_id}`,
                    element: <ExpandedBlog />
                },
                {
                    path: "/1/my_blogs/new",
                    element: <AddBlogForm postBlogs={postBlogs} />
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