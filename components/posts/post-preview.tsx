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
        <Link href={`/post/${props.id}`} passHref={true}>
            <a>
                <p className="flex flex-col items-start">
                    {props.thumbnail && props.thumbnail.url !== undefined ? (
                        <p className="mb-2 md:mb-4">
                            <Image
                                className="overflow-hidden rounded-xl"
                                src={props.thumbnail?.url}
                                alt={props.thumbnail?.alt}
                                width={props.thumbnail?.width}
                                height={props.thumbnail?.height}
                            />
                        </p>
                    ) : (
                        ""
                    )}
                    <p className="secondary mb-2 md:mb-0">
                        {formatDate(new Date(props.publishedAt))}
                    </p>
                    <p className="text-base text-white hover:underline sm:text-lg md:mr-5 md:text-xl">
                        {props.title}
                    </p>
                </p>
            </a>
        </Link>
    );
}
