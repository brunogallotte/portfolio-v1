import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { SectionBoxs } from "../components/SectionBoxs/SectionBoxs";
import { Skills } from "../components/Skills/Skills";

export function Home() {
    return(
        <>
            <Header />
            <Hero />
            <Skills />
            {/* <SectionBoxs /> */}
        </>
    )
}