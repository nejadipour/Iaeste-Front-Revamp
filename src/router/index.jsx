import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from "../pages/AuthPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import MainApp from "../layout/index.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import BlogsPage from "../pages/BlogsPage.jsx";
import BlogDetailsPage from "../pages/BlogDetailsPage.jsx";
import Collaborate from "../pages/collaborate/index.jsx";
import EventsPage from "../pages/EventsPage.jsx";
import EventPage from "../pages/EventPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainApp/>}>
                    <Route index element={<LandingPage/>}/>
                    <Route path="about-us" element={<>ABOUT US</>}/>
                    <Route path="blogs" element={<BlogsPage/>}/>
                    <Route path="blogs/:id" element={<BlogDetailsPage/>}/>
                    <Route path="collaborate" element={<Collaborate/>}/>
                    <Route path="events" element={<EventsPage />} />
                    <Route path="events/:id" element={<EventPage />} />
                    <Route path='register' element={<RegisterPage />} />
                </Route>

                <Route path="auth" element={<AuthPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
