# Blog Frontend

## Table of Contents 
1. [Project Description](#project-description)
2. [Installation instructions](#installation-instructions)
3. [MVP and Extensions](#mvp-and-extensions)
4. [Diagrams](#diagrams)
6. [Credits and Acknowledgements](#credits-and-acknowledgements)
7. [Badges](#badges)

## Project Description
### Aims

Create a frontend for a blog site API. Users would be able to log in to their account and view all blogs posted on the site. They would also be able to view, create, edit, and delete their own personal blogs. Users should also be able to filter the blogs to search for particular titles. Users can leave comments and likes on posts within blogs. Only the creater of a blog can add posts to a blog.

### Libraries Used
- react-router
- react-modal

### URL of Backend API Github Repository
https://github.com/sahilpatel1906/Personal_Blog <br/>

Some changes were made to the original backend to facilitate the needs of the frontend:
- Added CORS configurations
- Fixed like counter for comments
- Fixed delete blog route
- Added more images within dataloader
- Stopped ignoring password field in user model

## Installation Instructions
1. clone this repository (frontend)
2. clone the backend repository using the link listed above
3. run the following command in terminal within the local frontend repository `npm i`

## MVP and Extensions

Each point of the MVP and Extension is organised into the route the functionality is associated with. Functionality that was successfully implemented is indicated with a ✅

### MVP
- All Blogs Page: localhost:3000/:user_id/all_blogs
  - User can search for a blog ✅
- My Blogs Page: localhost:3000/:user_id/my_blogs
  - User can update their blogs ✅
  - User can delete their blogs ✅
- Create Blog Page: localhost:3000/:user_id/my_blogs/new
  - User can create a new blog ✅
- One Blog Page: localhost:3000/:user_id/blogs/:blog_id
  - User can view all posts on a blog ✅

### Extensions
- Default Page with Register/Login Forms: localhost:3000/
  - New users can register 
  - Users can log into their profile ✅
- One Blog Page: localhost:3000/:user_id/blogs/:blog_id/
  - Users can add a post to one of their blogs ✅
  - Users can delete a post from one of their blogs ✅
  - Users can update a post on one of their blogs ✅
  - User can add comments to any post
  - User can like posts that aren't their own
  - User can sort posts on a blog by the most likes
- User Profile Page: localhost:3000/user_id/
  - User can update their profile details
  - Users can delete their account
  - User can log out
- All Blogs and My Blogs Pages: localhost:3000/:user_id/all_blogs or my_blogs
  - User can sort blogs by the most total likes on all posts within that blog
- Additional Extensions
  - User can toggle between light and dark mode
  - Create admin dashboard


## Diagrams
### Wireframes
https://github.com/sahilpatel1906/Blog_Frontend/blob/main/Diagrams/WireframesAndPartialComponentDiagrams.png

### Component Diagram
https://github.com/sahilpatel1906/Blog_Frontend/blob/main/Diagrams/MasterComponentDiagram.png


## Credits and Acknowledgements
**Project Team**
- Hannah Riley  (https://github.com/H8S8)
- Leila Peltier (https://github.com/L1ly-42)
-  Maya Tetteh  (https://github.com/MTBNTA)
- Sahil Patel   (https://github.com/sahilpatel1906)


## Badges
