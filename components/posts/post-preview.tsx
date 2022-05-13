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

export default function PostPreview(props: Post) {
    return (
        <span className="mx-auto block">
            <Link href={`/post/${props.id}`} passHref={true}>
                <a className="mb-8 flex flex-col items-center rounded-xl border border-neutral-800 bg-neutral-800 shadow-lg transition-all hover:border-neutral-600 hover:shadow-xl sm:items-start">
                    {props.thumbnail && props.thumbnail.url !== undefined ? (
                        <p className="mb-2 md:mb-4">
                            <Image
                                className="w-full rounded-t-xl"
                                src={props.thumbnail?.url}
                                alt={props.thumbnail?.alt}
                                width={props.thumbnail?.width}
                                height={props.thumbnail?.height}
                            />
                        </p>
                    ) : (
                        ""
                    )}
                    <span className="flex flex-col justify-between px-4 pb-4">
                        <p className="mb-6 text-center text-xl text-white sm:text-left sm:text-xl md:text-2xl">
                            {props.title}
                        </p>
                        <p className="secondary text-center sm:text-left">
                            {formatDate(new Date(props.publishedAt))}
                        </p>
                    </span>
                </a>
            </Link>
        </span>
    );
}
