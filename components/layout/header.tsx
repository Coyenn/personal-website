import { MenuAlt1Icon } from "@heroicons/react/outline";
import React from "react";
import Link from "next/link";

const links = [
    ["/about", "About"],
    ["/projects", "Projects"],
    ["/blog", "Blog"],
    ["/contact", "Contact"],
];

interface HeaderState {
    isOpen: boolean;
}

export default class Header extends React.PureComponent<{}, HeaderState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    private toggleOpen() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-700 bg-neutral-900/70 backdrop-blur-md">
                <nav
                    onClick={() => this.toggleOpen()}
                    className={`container mx-auto ${
                        this.state.isOpen === true ? "h-screen" : "h-auto"
                    } sm:h-auto`}
                >
                    <div className="flex flex-col justify-between sm:flex-row">
                        <div className="relative flex justify-center py-5">
                            <Link href="/">
                                <a className="px-10 text-center text-lg font-semibold text-white no-underline hover:text-white sm:px-0 sm:text-base sm:font-normal sm:text-neutral-400">
                                    Tim Ritter
                                </a>
                            </Link>
                            <button
                                onClick={() => this.toggleOpen()}
                                className="absolute right-0 top-0 flex h-full items-center p-5 sm:hidden"
                            >
                                <MenuAlt1Icon className="h-5 w-5 text-white" />
                            </button>
                        </div>
                        <div
                            className={`flex flex-col items-center justify-center sm:flex-row ${
                                this.state.isOpen === false
                                    ? "hidden sm:flex"
                                    : ""
                            }`}
                        >
                            {links.map(([href, text]) => (
                                <a
                                    href={href}
                                    key={href}
                                    className="w-full border-t border-neutral-700 px-10 py-5 text-center text-neutral-400 no-underline hover:text-white sm:border-0 sm:px-2 sm:text-sm"
                                >
                                    {text}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
