import CourseDetails from "../Pages/CourseDetails/CourseDetails";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Blogs } = require("../Pages/Blogs/Blogs");
const { default: Courses } = require("../Pages/Courses/Courses");
const { default: Faq } = require("../Pages/Faq/Faq");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://encode-tutorial-server.vercel.app/courses')
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
    
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://encode-tutorial-server.vercel.app/course/${params.id}`)
            },
        ]
    }
]);