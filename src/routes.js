import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Team from "./components/pages/Team";

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
    }
]