import { AboutSection } from "../components/AboutSection/AboutSection";
import { Header } from "../components/Header/Header";
import { VerticalTimeLine } from "../components/VerticalTimeLine/VerticalTimeLine";

export function About() {
    return(
        <>
            <Header />
            <AboutSection />
            <VerticalTimeLine />
        </>
    )
}