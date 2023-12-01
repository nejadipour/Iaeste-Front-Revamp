import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from "../pages/AuthPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import MainApp from "../layout/index.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import BlogsPage from "../pages/BlogsPage.jsx";
import BlogDetailsPage from "../pages/BlogDetailsPage.jsx";
import Collaborate from "../pages/collaborate/index.jsx";
import AboutUsPage from "../pages/AboutUsPage.jsx";
import ContactUsPage from "../pages/ContactUsPage.jsx";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainApp/>}>
                    <Route index element={<LandingPage/>}/>
                    <Route path="about-us" element={<AboutUsPage/>}/>
                    <Route path={"contact-us"} element={<ContactUsPage/>}/>
                    <Route path="blogs" element={<BlogsPage/>}/>
                    <Route path="blogs/:id" element={<BlogDetailsPage/>}/>
                    <Route path="collaborate" element={<Collaborate/>}/>
                </Route>

                <Route path="auth" element={<AuthPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
