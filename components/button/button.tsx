interface ButtonProps {
    variant: "primary" | "secondary";
    link: string;
    text: string;
}

export default function Button(props: ButtonProps) {
    return (
        <a
            href={props.link}
            target={"_blank"}
            rel={"noreferrer"}
            className={
                props.variant === "primary"
                    ? "rounded bg-blue-600 px-3 py-2 text-center text-white transition-colors hover:bg-blue-500"
                    : "rounded border border-neutral-200 bg-transparent px-3 py-2 text-center font-light text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-500 dark:border-neutral-600 dark:hover:text-neutral-300"
            }
        >
            {props.text}
        </a>
    );
}
