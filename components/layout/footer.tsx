import { ExternalLinkIcon } from "@heroicons/react/solid";
import Container from "./container";
import PageSection from "./page-section";

export default function Footer() {
    return (
        <footer className="mt-auto bg-white py-5 dark:bg-neutral-900">
            <PageSection size="xs">
                <Container>
                    <div className="flex flex-row justify-between">
                        <p className="text-neutral-400">
                            <small>
                                Tim Ritter,{" "}
                                {new Date().getFullYear().toString()}
                            </small>
                        </p>
                        <a
                            href="https://github.com/coyenn/personal-website"
                            className="text-neutral-400 no-underline hover:text-black dark:text-white"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="text-neutral-400 transition-colors hover:text-neutral-600 dark:hover:text-neutral-200">
                                <small>Source Code</small>
                                <ExternalLinkIcon className="ml-1 inline h-4 w-4" />
                            </span>
                        </a>
                    </div>
                </Container>
            </PageSection>
        </footer>
    );
}
