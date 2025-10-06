import Categories from "./Categories.jsx"
import Footer from "../Footer.jsx"
import Navbar from "../Navbar.jsx"
import RollingPapers from "./RollingPaper.jsx"
import MouthFreshner from "./MouthFreshner.jsx"
import Hero from "./hero.jsx"
import DairyBread from "./DairyBread.jsx"
import ColdDrinks from "./ColdDrinks.jsx"
import Candies from "./Candies.jsx"
import Hookah from "./Hookah.jsx"

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero/>
            <Categories/>
            <RollingPapers/>
            <MouthFreshner/>
            <DairyBread/>
            <Candies/>
            <ColdDrinks/>
            <Hookah/>
            <Footer />
        </>
    )
}