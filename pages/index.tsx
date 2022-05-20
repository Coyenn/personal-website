import FadeIn from "react-fade-in";
import Container from "../components/layout/container";
import PageSection from "../components/layout/page-section";
import AllPosts from "../components/posts/all-posts";
import AllProjects from "../components/projects/all-projects";
import query from "../lib/cms-query";
import TRLogoNew from "../public/TRLogoNew.svg";
import { ExternalLinkIcon } from "@heroicons/react/solid";
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
import BackgroundGrid from "../components/utility/background-grid";

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
                <BackgroundGrid>
                    <div className="relative flex justify-center border-b border-neutral-200 dark:border-neutral-800">
                        <PageSection size="2xl">
                            <Container>
                                <div className="flex flex-col items-center">
                                    <div className="h-16 w-16 md:h-28 md:w-28">
                                        <Image
                                            src={TRLogoNew}
                                            alt="Tim Ritter Logo"
                                            layout="responsive"
                                        />
                                    </div>
                                    <h1 className="text-center text-4xl font-medium leading-tight text-black dark:text-white md:text-5xl lg:text-6xl xl:text-[5rem] 2xl:text-[6rem]">
                                        Designer
                                        <br />
                                        Programmer
                                        <br />
                                        Thinker
                                        <br />
                                    </h1>
                                </div>
                            </Container>
                        </PageSection>
                    </div>
                </BackgroundGrid>
                <PageSection
                    size="xl"
                    className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950"
                >
                    <Container>
                        <p className="mb-7 text-center text-base font-normal uppercase text-blue-500 md:mb-12">
                            Building websites using
                            <br />
                            modern technologies
                        </p>
                        <div className="mx-auto">
                            <div className="flex flex-wrap justify-center gap-5 overflow-x-auto md:gap-10">
                                <ReactJs className="technology-icon h-8 w-8 lg:h-12 lg:w-12" />
                                <Nextdotjs className="technology-icon h-8 w-8 lg:h-12 lg:w-12" />
                                <Tailwindcss className="technology-icon h-8 w-8 lg:h-12 lg:w-12" />
                                <Docker className="technology-icon h-8 w-8 lg:h-12 lg:w-12" />
                                <Typescript className="technology-icon h-8 w-8 lg:h-12 lg:w-12" />
                                <Git className="technology-icon h-8 w-8 lg:h-12 lg:w-12" />
                                <Gitpod className="technology-icon h-8 w-8 lg:h-12 lg:w-12" />
                                <Visualstudiocode className="technology-icon h-8 w-8 lg:h-12 lg:w-12" />
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
                        <div className="flex flex-col gap-5 md:mx-20 2xl:mx-52">
                            <h2 className="text-base font-normal text-neutral-500 dark:text-neutral-300 md:text-xl">
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
                            <div className="flex flex-row gap-5">
                                <a
                                    href="https://github.com/coyenn"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-500 transition-colors hover:text-blue-400"
                                >
                                    GitHub
                                    <ExternalLinkIcon className="ml-1 mb-1 inline h-4 w-4" />
                                </a>
                                <a
                                    href="https://twitter.com/kojenia"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-500 transition-colors hover:text-blue-400"
                                >
                                    Twitter
                                    <ExternalLinkIcon className="ml-1 mb-1 inline h-4 w-4" />
                                </a>
                            </div>
                        </div>
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
                    id="posts"
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
