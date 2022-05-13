import useMouse from "@react-hook/mouse-position";
import Image from "next/image";
import * as React from "react";

interface ProjectIcon {
    url: string;
    alt: string;
}

interface Project {
    title: string;
    content: string;
    link: string;
    direction: string;
    icon: ProjectIcon;
}

export default function Project(props: Project) {
    return (
        <div className="relative mb-16 grid grid-cols-1 md:mb-0 md:grid-cols-2 md:gap-20">
            {props.direction === "left" ? (
                <span className="hidden sm:flex"></span>
            ) : (
                ""
            )}
            <a
                href={props.link}
                target={"_blank"}
                rel="noreferrer"
                className="relative block overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 p-5 no-underline shadow-lg transition-shadow hover:border-neutral-600 hover:shadow-xl lg:p-8"
            >
                <div className="mb-4 flex flex-row items-center justify-between md:mb-7">
                    <p className="text-lg text-white sm:text-lg lg:text-2xl">
                        {props.title}
                    </p>
                    <div className="h-8 w-8 md:h-16 md:w-16">
                        <Image
                            src={props.icon.url}
                            width={"100%"}
                            height={"100%"}
                            alt={props.icon.alt}
                        />
                    </div>
                </div>
                <p className="mb-6 text-gray-400 lg:text-xl">{props.content}</p>
                <div className="flex flex-row gap-5">
                    <p className="rounded bg-blue-600 px-3 py-2 text-center text-white transition-colors hover:bg-blue-500">
                        Visit Website
                    </p>
                    <p className="rounded border border-neutral-600 bg-transparent px-3 py-2 text-center font-light text-neutral-400 transition-colors hover:border-neutral-500 hover:text-neutral-300">
                        Repositroy
                    </p>
                </div>
            </a>
            {props.direction !== "left" ? <span></span> : ""}
        </div>
    );
}
