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
        });
        const savedBlog = await response.json();
        setBlogs([...blogs,savedBlog]);
    }

    const updateBlog = async (blog) => {
        await fetch(`http://localhost:8080/blogs/${blog.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        await fetchMyBlogs();
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    useEffect(() => {
        setFilteredBlogs([...blogs]);
        setMyBlogs(blogs.filter(blogs => blogs.user.id === 1));
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
  
    const editBlogLoader = ({params}) => {
        return myBlogs.find(blog =>{
            return blog.id === parseInt(params.id);
        });
    };

    const deleteBlog = async (blogId) => {
        await fetch(`http://localhost:8080/blogs/${blogId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        });
        await fetchMyBlogs();
    }

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
                    element: <BlogList title="All Blogs" filteredBlogs={filteredBlogs} filterFunction={filterBlogs} blogsToFilter={blogs} displayMyBlogs={false} />
                },
                {
                    path: "/1/my_blogs",
                    element: <BlogList title="My Blogs" filteredBlogs={filteredMyBlogs} filterFunction={filterMyBlogs} blogsToFilter={myBlogs} displayMyBlogs={true} deleteBlog={deleteBlog} />
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
                    loader: editBlogLoader,
                    element: <EditBlogForm updateBlog={updateBlog} />
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