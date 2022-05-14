export default function Footer() {
    return (
        <footer className="mt-auto bg-white py-5 dark:bg-neutral-900">
            <div className="poverflow-hidden container mx-auto px-10 sm:px-0">
                <div className="flex flex-row justify-between">
                    <p className="secondary">
                        <small>
                            <span className="font-serif">Tim Ritter</span>,{" "}
                            {new Date().getFullYear().toString()}
                        </small>
                    </p>
                    <a
                        href="https://github.com/coyenn/personal-website"
                        className="secondary no-underline hover:text-black dark:text-white"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <small>Source Code</small>
                    </a>
                </div>
            </div>
        </footer>
    );
}
