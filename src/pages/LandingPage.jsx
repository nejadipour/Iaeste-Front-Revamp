import {useClient} from "../contexts/client/ClientContext.jsx";
import {useCallback, useEffect, useState} from "react";
import LandingItem from "../components/landing/items/index.jsx";
import AboutUs from "../components/landing/items/AboutUs.jsx";
import Steps from "../components/landing/items/Steps.jsx";
import Map from "../components/landing/items/Map.jsx";
import ExperiencesOutside from "../components/landing/items/ExperiencesOutside.jsx";
import ExperienceInside from "../components/landing/items/ExperienceInside.jsx";
import CollaboratorsUniversities from "../components/landing/items/CollaboratorsUniversities.jsx";
import CollaboratorsCompanies from "../components/landing/items/CollaboratorsCompanies.jsx";
import Blogs from "../components/landing/items/Blogs.jsx";
import Banner from "../components/landing/items/Banner.jsx";
import {aboutUsText1, aboutUsText2} from "../constants/AboutUsConstants.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {scroller} from 'react-scroll';

const scrollOptions = {
    smooth: true,
    offset: -20,
}

export default function LandingPage() {
    const {client} = useClient();
    const location = useLocation();
    const navigate = useNavigate();
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const fetchData = useCallback(() => {
        setLoading(true);
        client.get("/statics/landing/")
            .then(({data}) => {
                setFetched(true);
                setData(data);
                setLoading(false);
            })
            .catch(() => {
            })
    }, [client])

    useEffect(() => {
        if (!fetched && !loading) {
            fetchData();
        }
    }, [fetched, loading, fetchData])

    useEffect(() => {
        if (fetched && !loading && location?.state?.scroll) {
            scroller.scrollTo(location.state.scroll, scrollOptions);
            navigate("", {state: {}})
        }
    }, [fetched, loading, location?.state, navigate])

    return (
        <>
            <LandingItem id={"banner"}>
                <Banner/>
            </LandingItem>

            <LandingItem id={"about-us"} title={"درباره آیسته"}>
                <AboutUs primaryTexts={[aboutUsText1, aboutUsText2]}/>
            </LandingItem>

            <LandingItem id={"steps"} title={"مراحل پذیرش برای فرصت‌های کارآموزی خارج از کشور"}>
                <Steps/>
            </LandingItem>

            <LandingItem id={"map"} title={"تبادل دانشجو آیسته ایران در سطح جهان"}>
                <Map/>
            </LandingItem>

            {fetched &&
                <>
                    <LandingItem id={"experiences"} title={"تجربه‌های کارآموزان داخلی آیسته"}>
                        <ExperiencesOutside experiences={data?.outsideExperience}/>
                    </LandingItem>

                    <LandingItem title={"تجربه‌های کارآموزان خارجی آیسته"}>
                        <ExperienceInside experiences={data?.insideExperience}/>
                    </LandingItem>

                    <LandingItem id={"collaborate"} title={"دانشگاه‌های همکار آیسته ایران"}>
                        <CollaboratorsUniversities universities={data?.collaborator_university}/>
                    </LandingItem>

                    <LandingItem title={"شرکت‌های همکار آیسته ایران"}>
                        <CollaboratorsCompanies companies={data?.collaborator_company}/>
                    </LandingItem>

                    <LandingItem id={"blog"} title={"وبلاگ و اخبار"}>
                        <Blogs blogs={data?.blog}/>
                    </LandingItem>
                </>
            }
        </>
    )
}
