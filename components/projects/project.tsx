import useMouse from "@react-hook/mouse-position";
import Image from "next/image";
import * as React from "react";
import Button from "../button/button";

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
                <p className="text-neutral-400 lg:text-xl">{props.content}</p>
                <div className="flex flex-row gap-5">
                    {props.website && props.website !== "" ? (
                        <Button
                            link={props.website}
                            text="Visit Website"
                            variant="primary"
                        />
                    ) : (
                        ""
                    )}
                    {props.repository && props.repository !== "" ? (
                        <Button
                            link={props.repository}
                            text="Repository"
                            variant="secondary"
                        />
                    ) : (
                        ""
                    )}
                </div>
            </a>
            {props.direction !== "left" ? <span></span> : ""}
        </div>
    );
}
