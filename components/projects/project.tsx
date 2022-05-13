import useMouse from "@react-hook/mouse-position";
import * as React from "react";

interface Project {
    title: string;
    content: string;
    link: string;
    direction: string;
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
        <>
            <div className="mb-10 grid grid-cols-1 md:mb-0 md:grid-cols-2 md:gap-10 lg:gap-20">
                {props.direction === "left" ? (
                    <span className="hidden sm:flex"></span>
                ) : (
                    ""
                )}
                <a
                    href={props.link}
                    target={"_blank"}
                    rel="noreferrer"
                    ref={ref}
                    className="relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 p-10 no-underline shadow-lg transition-all hover:scale-105 hover:border-neutral-600 hover:shadow-xl"
                >
                    <p className="mb-2 text-base text-white sm:text-lg md:mb-7 md:text-xl">
                        {props.title}
                    </p>
                    <p className="text-gray-400">{props.content}</p>
                    {mouse.y ? (
                        <div
                            ref={mouseElementRef}
                            className="absolute z-30 aspect-square h-[500px] bg-gradient-radial from-neutral-500 via-transparent to-transparent opacity-10 lg:h-[800px] 2xl:h-[1000px]"
                        />
                    ) : (
                        ""
                    )}
                </a>
                {props.direction !== "left" ? <span></span> : ""}
            </div>
        </>
    );
}
