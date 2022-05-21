import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function AboutMeSection() {
    return (
        <>
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
                    -year-old trainee Software Developer from Germany. I&apos;ve
                    been interested in visually pleasing web experiences for a
                    while. One day I started out creating websites as a hobby.
                    Now I do it full-time and try to gradually improve my work
                    one step at a time.
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
        </>
    );
}
