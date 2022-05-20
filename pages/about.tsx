import FadeIn from "react-fade-in";
import Container from "../components/layout/container";
import PageSection from "../components/layout/page-section";
import AboutMeSection from "../components/sections/about-me";
import Image from "next/image";
import TRLogoNew from "../public/TRLogoNew.svg";

export default function AboutPage() {
    return (
        <main>
            <FadeIn>
                <PageSection size="2xl">
                    <Container>
                        <div className="mx-auto h-16 w-16 md:h-28 md:w-28">
                            <Image
                                src={TRLogoNew}
                                alt="Tim Ritter Logo"
                                layout="responsive"
                            />
                        </div>
                        <AboutMeSection />
                    </Container>
                </PageSection>
            </FadeIn>
        </main>
    );
}
