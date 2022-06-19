import { ExternalLinkIcon } from "@heroicons/react/outline"

interface ButtonProps {
    children: React.ReactNode;
    link?: string;
}

export default function Card(props: ButtonProps) {
    return (
        <>
            {props.link !== undefined ? (
                <a
                    href={props.link}
                    target={"_blank"}
                    rel="noreferrer"
                    className="[&>div]:hover:opacity-100 [&>div]:hover:translate-y-0 relative flex flex-col gap-5 rounded-lg border border-neutral-200 bg-white p-4 no-underline hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600 sm:p-5 lg:gap-8 lg:p-8"
                >
                    <div className="rounded-full bg-black dark:bg-white text-white dark:text-black p-2 absolute -top-2 -right-2 z-10 transition-all duration-300 opacity-0 translate-y-2">
                        <ExternalLinkIcon className="w-4 h-4" />
                    </div>
                    {props.children}
                </a>
            ) : (
                <div className="flex flex-col gap-5 overflow-hidden rounded-lg border border-neutral-200 bg-white p-2 no-underline dark:border-neutral-800 dark:bg-neutral-900 sm:p-5 lg:gap-8 lg:p-8">
                    {props.children}
                </div>
            )}
        </>
    );
}
