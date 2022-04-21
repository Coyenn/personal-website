import Link from "next/link";

interface Post {
    title: string,
    content: string,
    id: string,
    publishedAt: string,
}

export default function PostPreview(props: Post) {
    return (
        <>
            <Link href={`/post/${props.id}`} passHref={true}>
                <a className="border-b border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-colors duration-100 py-4 w-100 flex flex-col md:flex-row justify-between no-underline cursor-pointer">
                    <p className="md:mr-5">{props.title}</p>
                    <p className="secondary order-first md:order-last mb-2 md:mb-0">
                        <small>
                            {props.publishedAt.split("T")[0].replaceAll("-", "/")}
                        </small>
                    </p>
                </a>
            </Link>
        </>
    )
}