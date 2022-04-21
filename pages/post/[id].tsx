import Link from "next/link";
import FadeIn from "react-fade-in/lib/FadeIn";
import PageSection from "../../components/layout/page-section";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import ReactMarkdown from "react-markdown";
import query from "../../lib/cms-query";

export async function getServerSideProps(context) {
    const { id } = context.query
    const post = (await query(`{blogPost(filter: {id: {eq: "${id}"}}) { id, title, content, _status, _firstPublishedAt }}`))?.blogPost;

    return {
        props: {
            id,
            post,
        }
    }
}

export default function Post({ id, post }) {
    return (
        <>
            <main>
                <article>
                    <div className="container mx-auto py-10 sm:py-20 lg:py-32 2xl:py-40 px-10 sm:px-20 overflow-hidden">
                        <FadeIn>
                            <PageSection>
                                <div className="mb-10">
                                    <Link href='/' passHref={true}>
                                        <a className="link cursor-pointer">
                                            <ArrowLeftIcon className="w-4 h-4 inline mr-2" />
                                            Go back
                                        </a>
                                    </Link>
                                </div>
                                <div className="flex justify-between flex-col md:flex-row">
                                <p className="lead mb-4 md:mb-5">
                                    {post.title}
                                </p>
                                <p className="secondary order-first md:order-last mb-2 md:mb-0">
                                    <small>{post._firstPublishedAt.split("T")[0].replace("/-/g", "/")}</small>
                                </p>
                                </div>
                                <div className="prose dark:prose-invert">
                                    <ReactMarkdown>
                                        {post.content}
                                    </ReactMarkdown>
                                </div>
                            </PageSection>
                        </FadeIn>
                    </div>
                </article>
            </main>
        </>
    )
}