
import { HomeAbout } from "./HomeAbout"
import HomeAppointment from "./HomeAppointment"
import { HomeBanner } from "./HomeBanner"
import HomeBlog from "./HomeBlog"
import HomeBrand from "./HomeBrand"
import HomeParax from "./HomeParax"
import { HomePortfolio } from "./HomePortfolio"
import HomeProcess from "./HomeProcess"
import HomeService from "./HomeService"
import { Layout } from "./Layout"
import { MissionVision } from "./MissionVision"

export const Home = () => {
    return (
        <Layout>
             {/*banner section  */}
            <HomeBanner/>
            {/* HomeAbout */}
            <HomeAbout/>
            {/* Homeportfolio */}
            <HomePortfolio/>
            {/* homeService */}
            <HomeService/>
            {/* Home mission And Vision */}
            <MissionVision/>
            {/* Home Work Process */}
            <HomeProcess/>
            {/* parax Section */}
            <HomeParax/>
            {/* brand sec */}
            <HomeBrand/>
            {/* Home Appointment */}
            <HomeAppointment/>
            {/* Home blocg */}
            <HomeBlog/>
        </Layout>
    )
}