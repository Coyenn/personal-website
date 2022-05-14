import FadeIn from "react-fade-in";
import Container from "../components/layout/container";
import PageSection from "../components/layout/page-section";
import AllPosts from "../components/posts/all-posts";
import AllProjects from "../components/projects/all-projects";
import query from "../lib/cms-query";
import TRLogoNew from "../public/TRLogoNew.svg";
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
import Image from "next/image";

export async function getStaticProps() {
    const allProjects = (
        await query(
            "{ allProjects { icon { url, alt }, title, content, website, repository, id, _status } }"
        )
    )?.allProjects;
    const allPosts = (
        await query(
            "{ allBlogPosts { thumbnail { url, alt, width, height }, teaser, title, content, published, id, _firstPublishedAt, _status } }"
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
        <main>
            <FadeIn>
                <div className="relative flex justify-center overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
                    <PageSection size="2xl">
                        <Container>
                            <div className="mb-4 hidden justify-center sm:mb-6 md:mb-8 md:flex lg:mb-10">
                                <Image
                                    src={TRLogoNew}
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <h1 className="text-center text-4xl font-medium leading-tight text-black dark:text-white md:mb-32 md:text-5xl lg:text-6xl xl:text-[5rem] 2xl:text-[6rem]">
                                Creating
                                <br />
                                User
                                <br />
                                Experiences
                                <br />
                            </h1>
                        </Container>
                    </PageSection>
                </div>
                <PageSection
                    size="xl"
                    className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950"
                >
                    <Container>
                        <p className="mb-5 text-center text-base font-normal uppercase text-blue-500 md:mb-7 lg:mb-12">
                            Building websites using
                            <br />
                            modern development tools
                        </p>
                        <div className="mx-auto">
                            <div className="flex justify-center gap-2 overflow-x-auto sm:gap-5 md:gap-10">
                                <ReactJs
                                    className="technology-icon"
                                    size={50}
                                />
                                <Nextdotjs
                                    className="technology-icon"
                                    size={50}
                                />
                                <Tailwindcss
                                    className="technology-icon"
                                    size={50}
                                />
                                <Docker className="technology-icon" size={50} />
                                <Typescript
                                    className="technology-icon"
                                    size={50}
                                />
                                <Git className="technology-icon" size={50} />
                                <Gitpod className="technology-icon" size={50} />
                                <Visualstudiocode
                                    className="technology-icon"
                                    size={50}
                                />
                            </div>
                        </div>
                    </Container>
                </PageSection>
                <PageSection
                    size="2xl"
                    className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
                >
                    <Container>
                        <h3 className="mb-10 text-center text-2xl text-black dark:text-white md:text-3xl lg:mb-20 lg:text-5xl">
                            About Me
                        </h3>
                        <h2 className="text-base font-normal text-gray-400 md:text-xl">
                            Hey there! I&apos;m Tim, a{" "}
                            {Math.floor(
                                (Number(new Date()) -
                                    new Date("2004-06-05").getTime()) /
                                    3.15576e10
                            ).toString()}
                            -year-old trainee Software Developer from Germany.
                            I&apos;ve been interested in visually pleasing web
                            experiences for a while. One day I started out
                            creating websites as a hobby. Now I do it full-time
                            and try to gradually improve my work one step at a
                            time.
                        </h2>
                    </Container>
                </PageSection>
                <PageSection
                    size="2xl"
                    className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950"
                >
                    <Container>
                        <h3 className="mb-10 text-center text-2xl text-black dark:text-white md:text-3xl lg:mb-20 lg:text-5xl">
                            Past and Recent Projects
                        </h3>
                        <AllProjects allProjects={allProjects} />
                    </Container>
                </PageSection>
                <PageSection
                    size="2xl"
                    className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
                >
                    <Container>
                        <h3 className="mb-10 text-center text-2xl text-black dark:text-white md:text-3xl lg:mb-20 lg:text-5xl">
                            Blog Posts
                        </h3>
                        <AllPosts allPosts={allPosts} />
                    </Container>
                </PageSection>
            </FadeIn>
        </main>
    );
}

export default Home;
