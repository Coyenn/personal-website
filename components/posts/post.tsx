import Link from "next/link";
import Image from "next/image";
import formatDate from "../../lib/format-date";
import Tag from "../tag/tag";
import Post from "../../interfaces/post";

export default function BlogPost(props: Post) {
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
                            blurDataURL={props.thumbnail?.url + "?h=100&w-200"}
                            placeholder="blur"
                        />
                    ) : (
                        ""
                    )}
                    <span className="flex flex-col justify-between gap-5 pt-4 lg:pt-6">
                        <span className="flex flex-row justify-center sm:justify-start">
                            <p className="border-r border-neutral-200 pr-2 text-sm font-normal text-neutral-400 dark:border-neutral-800">
                                Tim Ritter
                            </p>
                            <p className="pl-2 text-center text-sm text-neutral-400 sm:text-left">
                                {formatDate(new Date(props.publishedAt))}
                            </p>
                        </span>
                        <p className="text-center text-lg text-black dark:text-white sm:text-left lg:text-2xl hover:underline underline-offset-4">
                            {props.title}
                        </p>
                        <p className="text-center text-base text-neutral-500 dark:text-neutral-300 sm:text-left md:text-lg">
                            {props.teaser}
                        </p>
                        <div>
                            {props.tags.map((tag) => (
                                <Tag key={tag.label} label={tag.label} color={tag.color} />
                            ))}
                        </div>
                    </span>
                </a>
            </Link>
        </span>
    );
}
