import FadeIn from "react-fade-in";
import Container from "../components/layout/container";
import PageSection from "../components/layout/page-section";
import AllPosts from "../components/posts/all-posts";
import AllProjects from "../components/projects/all-projects";
import query from "../lib/cms-query";
import {
    ReactJs,
    Nextdotjs,
    Tailwindcss,
    Docker,
    Typescript,
    Git,
    Visualstudiocode,
    Gitpod,
} from "@icons-pack/react-simple-icons";

export async function getStaticProps() {
    const allProjects = (
        await query("{ allProjects { title, content, link, id, _status } }")
    )?.allProjects;
    const allPosts = (
        await query(
            "{ allBlogPosts { thumbnail { url, alt, width, height }, title, content, published, id, _firstPublishedAt, _status } }"
        )
    )?.allBlogPosts;

    return {
        props: {
            allProjects,
            allPosts,
        },
    };
}

function Home({ allProjects, allPosts }) {
    return (
        <>
            <main>
                <FadeIn>
                    <div className="relative flex justify-center overflow-hidden">
                        <Container>
                            <PageSection
                                size="2xl"
                                className="border-b border-neutral-800"
                            >
                                <h1 className="mb-5 text-center text-4xl font-semibold leading-tight text-white sm:mb-20 md:mb-32 md:text-5xl lg:text-6xl xl:text-[5rem]">
                                    Creating{" "}
                                    <span className="text-gradient bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
                                        exciting
                                    </span>
                                    ,{" "}
                                    <span className="text-gradient bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500">
                                        inclusive
                                    </span>
                                    , and{" "}
                                    <span className="text-gradient bg-gradient-to-r from-yellow-500 via-green-400 to-emerald-500">
                                        accessible
                                    </span>{" "}
                                    user experiences
                                </h1>
                            </PageSection>
                        </Container>
                        <div className="absolute bottom-0 h-full w-[750px] translate-y-1/2 bg-gradient-radial from-blue-500/10 via-transparent to-transparent sm:w-[1000px] md:w-[2000px] xl:w-[3000px]"></div>
                    </div>
                    <PageSection
                        size="xl"
                        className="border-b border-neutral-800 bg-neutral-950"
                    >
                        <Container>
                            <p className="mb-5 text-center text-base font-normal uppercase text-blue-500 md:mb-7 lg:mb-12">
                                Building websites using
                                <br />
                                modern development tools
                            </p>
                            <div className="flex justify-center gap-10 overflow-x-auto">
                                <div className="flex justify-center">
                                    <ReactJs color="#ffff" size={50} />
                                </div>
                                <div className="flex justify-center">
                                    <Nextdotjs color="#ffff" size={50} />
                                </div>
                                <div className="flex justify-center">
                                    <Tailwindcss color="#ffff" size={50} />
                                </div>
                                <div className="flex justify-center">
                                    <Docker color="#ffff" size={50} />
                                </div>
                                <div className="flex justify-center">
                                    <Typescript color="#ffff" size={50} />
                                </div>
                                <div className="flex justify-center">
                                    <Git color="#ffff" size={50} />
                                </div>
                                <div className="flex justify-center">
                                    <Gitpod color="#ffff" size={50} />
                                </div>
                                <div className="flex justify-center">
                                    <Visualstudiocode color="#ffff" size={50} />
                                </div>
                            </div>
                        </Container>
                    </PageSection>
                    <PageSection
                        size="2xl"
                        className="border-b border-neutral-800 bg-neutral-900"
                    >
                        <Container>
                            <h3 className="mb-5 text-2xl text-white md:mb-7 md:text-3xl lg:text-5xl">
                                About Me
                            </h3>
                            <h2 className="text-base font-normal text-gray-400 md:text-xl">
                                Hey there! I&apos;m Tim, a{" "}
                                {Math.floor(
                                    (Number(new Date()) -
                                        new Date("2004-06-05").getTime()) /
                                        3.15576e10
                                ).toString()}
                                -year-old trainee Software Developer from
                                Germany. I&apos;ve been interested in visually
                                pleasing web experiences for a while. One day I
                                started out creating websites as a hobby. Now I
                                do it full-time and try to gradually improve my
                                work one step at a time.
                            </h2>
                        </Container>
                    </PageSection>
                    <PageSection
                        size="2xl"
                        className="border-b border-neutral-800 bg-neutral-950"
                    >
                        <Container>
                            <AllProjects allProjects={allProjects} />
                        </Container>
                    </PageSection>
                    <PageSection
                        size="2xl"
                        className="border-b border-neutral-800 bg-neutral-900"
                    >
                        <Container>
                            <h3 className="mb-5 text-center text-2xl text-white md:mb-7 md:text-3xl lg:mb-20 lg:text-5xl">
                                Blog Posts
                            </h3>
                            <AllPosts allPosts={allPosts} />
                        </Container>
                    </PageSection>
                </FadeIn>
            </main>
        </>
    );
}

export default Home;
