export default function Footer() {
    return (
        <footer className="mt-auto border border-t border-b-0 border-neutral-800 py-5">
            <div className="poverflow-hidden container mx-auto px-10 sm:px-20">
                <div className="flex flex-row justify-between">
                    <p className="secondary">
                        <small>
                            Tim Ritter, {new Date().getFullYear().toString()}
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
