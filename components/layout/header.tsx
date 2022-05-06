export default function Header() {
    return (
        <footer className='border border-b border-t-0 border-gray-100 dark:border-neutral-800 dark:bg-neutral-900/90 py-5 mt-auto fixed top-0 left-0 w-full backdrop-blur-md'>
            <div className="container mx-auto poverflow-hidden px-10 sm:px-20">
                <div className="flex flex-row justify-between">
                    <a href="/" className='secondary no-underline hover:text-white'>
                        <small>
                            Tim Ritter
                        </small>
                    </a>
                    <span>
                    <a href="https://github.com/coyenn/personal-website" className='secondary no-underline px-2 hover:text-white' target="_blank" rel='noreferrer'>
                        <small>
                            Projects
                        </small>
                    </a>
                    <a href="https://github.com/coyenn/personal-website" className='secondary no-underline px-2 hover:text-white' target="_blank" rel='noreferrer'>
                        <small>
                            Blog
                        </small>
                    </a>
                    <a href="https://github.com/coyenn/personal-website" className='secondary no-underline px-2 hover:text-white' target="_blank" rel='noreferrer'>
                        <small>
                            Source Code
                        </small>
                    </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}