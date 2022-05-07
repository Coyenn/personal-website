import Link from "next/link";

export interface Post {
    title: string,
    content: string,
    id: string,
    publishedAt: string,
}

export default function PostPreview(props: Post) {
    return (
        <Link href={`/post/${props.id}`} passHref={true}>
            <a className="border-b border-neutral-700 hover:border-neutral-500 transition-colors duration-100 py-4 w-100 flex flex-col md:flex-row justify-between no-underline cursor-pointer">
                <p className="md:mr-5 text-white text-base sm:text-lg md:text-xl">{props.title}</p>
                <p className="secondary order-first md:order-last mb-2 md:mb-0">
                    {props.publishedAt.split("T")[0]}
                </p>
            </a>
        </Link>
    )
}