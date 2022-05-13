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
    const ref = React.useRef(null);
    const mouseElementRef = React.useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 0,
        leaveDelay: 0,
    });

    if (mouseElementRef.current && mouse.y && mouse.x) {
        mouseElementRef.current.style.top =
            mouse.y - mouseElementRef.current.offsetHeight / 2 + "px";
        mouseElementRef.current.style.left =
            mouse.x - mouseElementRef.current.offsetWidth / 2 + "px";
    }

    return (
        <div className="relative mb-16 grid grid-cols-1 md:mb-0 md:grid-cols-2 md:gap-20">
            {props.direction === "left" ? (
                <span className="hidden sm:flex"></span>
            ) : (
                ""
            )}
            <div className="relative transition-all hover:scale-105">
                <div className="absolute top-0 left-0 z-10 w-full -translate-y-7 lg:-translate-y-10">
                    <div className="mx-auto h-10 w-10 rounded-xl border-2 border-neutral-800 bg-neutral-900 shadow-2xl lg:h-16 lg:w-16">
                        <Image
                            src={props.icon.url}
                            width={"100%"}
                            height={"100%"}
                            alt=""
                        />
                    </div>
                </div>
                <a
                    href={props.link}
                    target={"_blank"}
                    rel="noreferrer"
                    ref={ref}
                    className="relative block overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 p-5 no-underline shadow-lg transition-shadow hover:border-neutral-600 hover:shadow-xl lg:p-8"
                >
                    <p className="mb-2 text-lg text-white sm:text-lg md:mb-7 lg:text-2xl">
                        {props.title}
                    </p>
                    <p className="text-gray-400 lg:text-xl">{props.content}</p>
                    {mouse.y ? (
                        <div
                            ref={mouseElementRef}
                            className="absolute z-30 aspect-square h-[500px] bg-gradient-radial from-neutral-500 via-transparent to-transparent opacity-10 lg:h-[800px] 2xl:h-[1000px]"
                        />
                    ) : (
                        ""
                    )}
                </a>
            </div>
            {props.direction !== "left" ? <span></span> : ""}
        </div>
    );
}
