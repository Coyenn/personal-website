import Link from "next/link";

export default function Footer() {
    return (
        <footer className='border border-t border-b-0 border-gray-100 dark:border-zinc-800 py-3'>
            <div className="container mx-auto poverflow-hidden px-10 sm:px-20">
                <div className="flex flex-row justify-between">
                    <p className='secondary'>
                        <small>
                            Tim Ritter, {new Date().getFullYear().toString()}
                        </small>
                    </p>
                    <a href="https://github.com/coyenn/personal-website" className='secondary no-underline' target="_blank" rel='noreferrer'>
                        <small>
                            Source Code
                        </small>
                    </a>
                </div>
            </div>
        </footer>
    )
}