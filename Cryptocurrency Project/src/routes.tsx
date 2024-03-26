// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/home";
// import { Detail } from "./pages/detail";
// import { Notfound } from "./pages/notfound";
// import { Layout } from "./components/layout";

// const RoutesComponent = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route path="/" element={<Home />} />
//                     <Route path="detail/:cripto" element={<Detail />} />
//                     <Route path="*" element={<Notfound />} />
//                 </Route>
//             </Routes>
//         </Router>
//     );
// };

// export default RoutesComponent;


import { Home } from "./pages/home";
import { Detail } from "./pages/detail";
import { Notfound } from "./pages/notfound";
import { Layout } from "./components/layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/detail/:cripto",
                element: <Detail/>
            },
            {
                path: "*",
                element: <Notfound/>
                
            }
        ]
    }
])

export { router };