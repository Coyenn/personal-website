export default function Footer() {
    return (
        <footer className="mt-auto border border-t border-b-0 border-neutral-800 bg-neutral-900 py-5">
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
                        className="secondary no-underline hover:text-white"
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
