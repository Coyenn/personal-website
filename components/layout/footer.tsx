import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function Footer() {
    return (
        <footer className="mt-auto bg-white py-5 dark:bg-neutral-900">
            <div className="poverflow-hidden container mx-auto px-10 sm:px-0">
                <div className="flex flex-row justify-between">
                    <p className="text-neutral-400">
                        <small>
                            Tim Ritter, {new Date().getFullYear().toString()}
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
            </div>
        </footer>
    );
}
