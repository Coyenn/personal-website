import * as React from "react";
import Button from "../button/button";
import Card from "../button/card";

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
            <Card link={props.website || props.repository}>
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
            </Card>
            {props.direction !== "left" ? <span></span> : ""}
        </div>
    );
}
