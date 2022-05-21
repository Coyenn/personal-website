import { MenuAlt1Icon } from "@heroicons/react/outline";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TRLogoNew from "../../public/TRLogoNew.svg";

const links = [
    ["/", "Home"],
    ["/blog", "Blog"],
    ["/about", "About"],
    ["/inspiration", "Inspiration"],
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
            <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-100 bg-white/70 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/70">
                <nav
                    onClick={() => this.toggleOpen()}
                    className={`container mx-auto ${
                        this.state.isOpen === true ? "h-screen" : "h-auto"
                    } md:h-auto`}
                >
                    <div className="flex flex-col justify-between md:flex-row">
                        <div className="relative flex justify-center py-5 xl:py-7">
                            <Link href="/">
                                <a
                                    className="flex items-center"
                                    aria-label="The logo of tim-ritter.com"
                                >
                                    <Image
                                        src={TRLogoNew}
                                        width={30}
                                        height={30}
                                        alt="Tim Ritter Logo"
                                    />
                                    <p className="hidden w-full pl-2 text-center text-neutral-400 no-underline hover:text-black dark:text-white md:flex md:border-0 md:text-sm">
                                        Tim Ritter
                                    </p>
                                </a>
                            </Link>
                            <button
                                onClick={() => this.toggleOpen()}
                                className="absolute right-0 top-0 flex h-full items-center p-5 md:hidden"
                            >
                                <MenuAlt1Icon className="h-5 w-5 text-black dark:text-white" />
                            </button>
                        </div>
                        <div
                            className={`flex flex-col items-center justify-center md:flex-row ${
                                this.state.isOpen === false
                                    ? "hidden md:flex"
                                    : ""
                            }`}
                        >
                            {links.map(([href, text]) => (
                                <Link href={href} key={href}>
                                    <a className="w-full border-t border-neutral-100 py-5 px-10 text-center text-neutral-400 no-underline transition-colors hover:text-black dark:border-neutral-700 dark:text-white dark:hover:text-neutral-200 md:border-0 md:py-0 md:px-2 md:text-sm">
                                        {text}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
