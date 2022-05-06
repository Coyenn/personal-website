interface PageSectionProps {
    children: React.ReactNode,
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl",
    className?: string,
}

export default function PageSection(props: PageSectionProps) {
    const size = props.size || "md";

    switch (size) {
        case "sm":
            return (
                <div className={`py-1 md:py-2 xl:py-3 ${props.className}`}>
                    {props.children}
                </div>
            )
        case "md":
            return (
                <div className={`py-2 md:py-3 xl:py-4 ${props.className}`}>
                    {props.children}
                </div>
            )
        case "lg":
            return (
                <div className={`py-5 md:py-7 xl:py-9 ${props.className}`}>
                    {props.children}
                </div>
            )
        case "xl":
            return (
                <div className={`py-10 md:py-15 xl:py-20 ${props.className}`}>
                    {props.children}
                </div>
            )
        case "2xl":
            return (
                <div className={`py-16 md:py-24 xl:py-32 ${props.className}`}>
                    {props.children}
                </div>
            )
        case "3xl":
            return (
                <div className={`py-32 md:py-40 xl:py-48 ${props.className}`}>
                    {props.children}
                </div>
            )
    }
}