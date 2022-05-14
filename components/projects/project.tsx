import useMouse from "@react-hook/mouse-position";
import Image from "next/image";
import * as React from "react";

interface Project {
    title: string;
    content: string;
    website: string;
    repository: string;
    direction: string;
}

export default function Project(props: Project) {
    return (
        <div className="relative grid grid-cols-1 md:mb-0 md:grid-cols-2 md:gap-20">
            {props.direction === "left" ? (
                <span className="hidden sm:flex"></span>
            ) : (
                ""
            )}
            <a
                href={props.website || props.repository}
                target={"_blank"}
                rel="noreferrer"
                className="flex flex-col gap-5 rounded-lg border border-neutral-200 bg-white p-5 no-underline hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600 lg:gap-8 lg:p-8"
            >
                <p className="text-lg text-black dark:text-white sm:text-lg lg:text-2xl">
                    {props.title}
                </p>
                <p className="text-gray-400 lg:text-xl">{props.content}</p>
                <div className="flex flex-row gap-5">
                    {props.website && props.website !== "" ? (
                        <a
                            href={props.website}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="rounded bg-blue-600 px-3 py-2 text-center text-white transition-colors hover:bg-blue-500"
                        >
                            Visit Website
                        </a>
                    ) : (
                        ""
                    )}
                    {props.repository && props.repository !== "" ? (
                        <a
                            href={props.repository}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded border border-neutral-200 bg-transparent px-3 py-2 text-center font-light text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-500 dark:border-neutral-600 dark:hover:text-neutral-300"
                        >
                            Repositroy
                        </a>
                    ) : (
                        ""
                    )}
                </div>
            </a>
            {props.direction !== "left" ? <span></span> : ""}
        </div>
    );
}
