import Link from "next/link";
import Image from "next/image";

export interface Thumbnail {
    url: string;
    alt: string;
    width: number;
    height: number;
}

export interface Post {
    title: string;
    content: string;
    id: string;
    publishedAt: string;
    thumbnail: Thumbnail;
    teaser: string;
    size: "large" | "small";
}

function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
}

function formatDate(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join(".");
}

export default function Post(props: Post) {
    return (
        <span className="mx-auto block">
            <Link href={`/post/${props.id}`} passHref={true}>
                <a className="mb-8 flex flex-col items-center rounded-lg border border-neutral-200 bg-white transition-all hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800 dark:hover:border-neutral-600 sm:items-start">
                    {props.thumbnail && props.thumbnail.url !== undefined ? (
                        <Image
                            className="w-full rounded-t-lg"
                            src={props.thumbnail?.url}
                            alt={props.thumbnail?.alt}
                            width={props.thumbnail?.width}
                            height={700}
                        />
                    ) : (
                        ""
                    )}
                    <span className="flex flex-col justify-between gap-5 p-5 lg:p-8">
                        <p className="text-center text-xl text-black dark:text-white sm:text-left sm:text-xl md:text-2xl">
                            {props.title}
                        </p>
                        {props.size === "large" ? (
                            <p className="secondary text-center text-base sm:text-left md:text-lg">
                                {props.teaser}
                            </p>
                        ) : (
                            ""
                        )}
                        <p className="secondary text-center sm:text-left">
                            {formatDate(new Date(props.publishedAt))}
                        </p>
                    </span>
                </a>
            </Link>
        </span>
    );
}
