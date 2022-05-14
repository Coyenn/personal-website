import Link from "next/link";
import Image from "next/image";
import formatDate from "../../lib/format-date";

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

export default function Post(props: Post) {
    return (
        <span className="mx-auto block">
            <Link href={`/post/${props.id}`} passHref={true}>
                <a className="flex flex-col items-center rounded-lg transition-all sm:items-start">
                    {props.thumbnail && props.thumbnail.url !== undefined ? (
                        <Image
                            className="w-full rounded-lg"
                            src={props.thumbnail?.url}
                            alt={props.thumbnail?.alt}
                            width={1920}
                            height={1080}
                            quality={50}
                            blurDataURL={props.thumbnail?.url}
                            placeholder="blur"
                        />
                    ) : (
                        ""
                    )}
                    <span className="flex flex-col justify-between gap-5 pt-4 lg:pt-6">
                        <p className="-mb-2 text-center text-xs text-neutral-400 sm:text-left">
                            Technology
                        </p>
                        <p className="text-center text-xl text-black dark:text-white sm:text-left sm:text-xl md:text-2xl">
                            {props.title}
                        </p>
                        {props.size === "large" ? (
                            <p className="text-center text-base text-neutral-500 dark:text-neutral-300 sm:text-left md:text-lg">
                                {props.teaser}
                            </p>
                        ) : (
                            ""
                        )}
                        <span className="flex flex-row justify-center sm:justify-start">
                            <p className="border-r border-neutral-200 pr-2 text-sm font-normal text-neutral-400 dark:border-neutral-800">
                                Tim Ritter
                            </p>
                            <p className="pl-2 text-center text-sm text-neutral-400 sm:text-left">
                                {formatDate(new Date(props.publishedAt))}
                            </p>
                        </span>
                    </span>
                </a>
            </Link>
        </span>
    );
}
