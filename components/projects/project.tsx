import useMouse from '@react-hook/mouse-position'
import * as React from 'react'

interface Project {
    title: string,
    content: string,
    link: string,
    direction: string,
}

export default function Project(props: Project) {
    const ref = React.useRef(null)
    const mouseElementRef = React.useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 0,
        leaveDelay: 0,
    })

    if (mouseElementRef.current && mouse.y && mouse.x) {
        mouseElementRef.current.style.top = (mouse.y - (mouseElementRef.current.offsetHeight / 2)) + "px"
        mouseElementRef.current.style.left = (mouse.x - (mouseElementRef.current.offsetWidth / 2)) + "px"
    }

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 mb-10 md:mb-0 md:gap-10 lg:gap-20'>
                {props.direction === "left" ? (
                    <span className='hidden sm:flex'></span>
                ) : ""}
                <a href={props.link} target={"_blank"} rel="_noreferrer" ref={ref} className="bg-neutral-900 border border-neutral-800 p-10 rounded-lg shadow-lg hover:shadow-xl transition-all no-underline hover:scale-105 hover:border-neutral-600 relative overflow-hidden">
                    <p className="text-white text-base sm:text-lg md:text-xl mb-2 md:mb-7">{props.title}</p>
                    <p className="text-gray-400">
                        {props.content}
                    </p>
                    {mouse.y ? (
                        <div ref={mouseElementRef} className='bg-gradient-radial from-neutral-500 via-transparent to-transparent h-[500px] lg:h-[800px] 2xl:h-[1000px] absolute opacity-10 aspect-square z-30' />
                    ) : ""}
                </a>
                {props.direction !== "left" ? (
                    <span></span>
                ) : ""}
            </div>
        </>
    )
}