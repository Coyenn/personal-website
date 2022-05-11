import Link from "next/link";
import Image from "next/image";

export interface Thumbnail {
    url: string,
    alt: string,
    width: number,
    height: number,
}
export interface Post {
    title: string,
    content: string,
    id: string,
    publishedAt: string,
    thumbnail: Thumbnail,
}

export default function PostPreview(props: Post) {
    return (
        <Link href={`/post/${props.id}`} passHref={true}>
            <a>
                <div className="flex flex-col items-start">
                    {props.thumbnail && props.thumbnail.url !== undefined ? (
                        <div className="mb-2 md:mb-4">
                            <Image className="overflow-hidden rounded-xl" src={props.thumbnail?.url} alt={props.thumbnail?.alt} width={props.thumbnail?.width} height={props.thumbnail?.height} />
                        </div>
                    ) : ""}
                    <p className="md:mr-5 text-white text-base sm:text-lg md:text-xl">{props.title}</p>
                    <p className="secondary order-first md:order-last mb-2 md:mb-0">
                        {new Date(props.publishedAt).toLocaleDateString()}
                    </p>
                </div>
            </a>
        </Link>
    )
}