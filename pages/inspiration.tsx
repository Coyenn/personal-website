import Image from "next/image";
import FadeIn from "react-fade-in";
import Card from "../components/card/card";
import Container from "../components/layout/container";
import PageSection from "../components/layout/page-section";
import query from "../lib/cms-query";

interface InspirationPageProps {
    allInspirations: {
        image: {
            url: string;
            alt: string;
        };
        text: string;
        link: string;
    }[];
}

export async function getStaticProps() {
    const allInspirations = (
        await query("{ allInspirations { image { url, alt }, text, link } }")
    )?.allInspirations;

    return {
        props: {
            allInspirations,
        },
    };
}

export default function InspirationPage(props: InspirationPageProps) {
    return (
        <main>
            <FadeIn>
                <PageSection size="2xl">
                    <Container>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:gap-6">
                            {props.allInspirations.map((inspiration) => (
                                <Card
                                    link={inspiration.link}
                                    key={inspiration.text}
                                >
                                    <div className="-m-2 sm:-m-5 lg:-m-8">
                                        <Image
                                            layout="responsive"
                                            src={inspiration.image.url}
                                            alt={inspiration.image.alt}
                                            width={550}
                                            height={300}
                                            placeholder="blur"
                                            blurDataURL={inspiration.image.url}
                                        />
                                    </div>
                                    <p className="pt-2 text-neutral-400 sm:pt-5 lg:pt-8">
                                        {inspiration.text}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </PageSection>
            </FadeIn>
        </main>
    );
}
