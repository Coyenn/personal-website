import { MenuAlt1Icon } from "@heroicons/react/outline";
import React from "react"
import Link from "next/link";

const links = [
    ['/about', 'About'],
    ['/projects', 'Projects'],
    ['/blog', 'Blog'],
    ['/contact', 'Contact'],
]

interface HeaderState {
    isOpen: boolean;
}

export default class Header extends React.PureComponent<{}, HeaderState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    private toggleOpen() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <header className='border-b border-neutral-700 bg-neutral-900/70 fixed top-0 left-0 w-full backdrop-blur-md z-50'>
                <nav onClick={() => this.toggleOpen()} className={`container mx-auto ${this.state.isOpen === true ? "h-screen" : "h-auto"} sm:h-auto`}>
                    <div className="flex flex-col sm:flex-row justify-between sm:px-20">
                        <div className="py-5 flex justify-center relative">
                            <Link href="/">
                                <a className='px-10 no-underline font-semibold text-center text-lg text-white sm:text-neutral-400 sm:text-base sm:font-normal sm:px-0 hover:text-white'>
                                    Tim Ritter
                                </a>
                            </Link>
                            <button onClick={() => this.toggleOpen()} className="absolute right-0 top-0 h-full flex items-center p-5 sm:hidden">
                                <MenuAlt1Icon className="w-5 h-5 text-white" />
                            </button>
                        </div>
                        <div className={`flex flex-col items-center justify-center sm:flex-row ${this.state.isOpen === false ? "hidden sm:flex" : ""}`}>
                            {links.map(([href, text]) => (
                                <a href={href} key={href} className='text-neutral-400 px-10 no-underline py-5 hover:text-white border-t sm:border-0 border-neutral-700 w-full text-center sm:text-sm sm:px-2'>
                                    {text}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}