import Blog from "./components/pages/Blog";
import BlogSingle from "./components/pages/BlogSingle";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Team from "./components/pages/Team";
import Works from "./components/pages/Works";

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/team',
        exact: false,
        component: Team
    },
    {
        path: '/services',
        exact: false,
        component: Services
    },
    {
        path: '/works',
        exact: false,
        component: Works,
    },
    {
        path: '/blog/:id',
        exact: false,
        component: BlogSingle,
    },
    {
        path: '/blog',
        exact: false,
        component: Blog,
    }
]