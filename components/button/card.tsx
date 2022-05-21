interface ButtonProps {
    children: React.ReactNode;
    link: string;
}

export default function Card(props: ButtonProps) {
    return (
        <>
            {props.link !== undefined ? (
                <a
                    href={props.link}
                    target={"_blank"}
                    rel="noreferrer"
                    className="flex flex-col gap-5 rounded-lg border border-neutral-200 bg-white p-5 no-underline hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600 lg:gap-8 lg:p-8"
                >
                    {props.children}
                </a>
            ) : (
                <div className="flex flex-col gap-5 rounded-lg border border-neutral-200 bg-white p-5 no-underline dark:border-neutral-800 dark:bg-neutral-900 lg:gap-8 lg:p-8">
                    {props.children}
                </div>
            )}
        </>
    );
}
