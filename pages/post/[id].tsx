import Link from "next/link";
import FadeIn from "react-fade-in/lib/FadeIn";
import PageSection from "../../components/layout/page-section";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import ReactMarkdown from "react-markdown";
import query from "../../lib/cms-query";
import React from "react";

interface BlogPostProps {
    id: string;
    token: string;
    post: Post;
}

interface Post {
    id: string;
    title: string;
    content: string;
    published: boolean;
    _status: string;
    _firstPublishedAt: string;
}
interface BlogPostState {
    loading: boolean;
    id: undefined | string;
}

class PostView extends React.Component<BlogPostProps, BlogPostState> {
    constructor(props: BlogPostProps) {
        super(props);
        this.state = {
            loading: true,
            id: undefined,
        };
    }

    componentDidMount(): void {
        this.loadPost();
    }

    async loadPost() {
        this.setState({
            loading: false,
            id: this.props.id.toString(),
        });
    }

    render() {
        return (
            <>
                <main>
                    <article>
                        <FadeIn>
                            <PageSection>
                                <div className="mb-10">
                                    <Link href="/" passHref={true}>
                                        <a className="link cursor-pointer">
                                            <ArrowLeftIcon className="mr-2 inline h-4 w-4" />
                                            Go back
                                        </a>
                                    </Link>
                                </div>
                                {this.props.post?.title !== undefined &&
                                this.props.post?.published === true ? (
                                    <FadeIn>
                                        <div className="flex flex-col justify-between md:flex-row">
                                            <h1 className="lead mb-4 font-normal md:mb-5">
                                                {this.props.post?.title}
                                            </h1>
                                            <p className="order-first mb-2 text-neutral-400 md:order-last md:mb-0">
                                                <small>
                                                    <span className="sr-only">
                                                        This blog post was first
                                                        published on
                                                    </span>
                                                    {
                                                        this.props.post?._firstPublishedAt.split(
                                                            "T"
                                                        )[0]
                                                    }
                                                </small>
                                            </p>
                                        </div>
                                        <div className="prose prose-invert">
                                            <ReactMarkdown>
                                                {this.props.post?.content}
                                            </ReactMarkdown>
                                        </div>
                                    </FadeIn>
                                ) : (
                                    <></>
                                )}
                            </PageSection>
                        </FadeIn>
                    </article>
                </main>
            </>
        );
    }
}

/**
 * Statically generated props at build time
 */
export async function getStaticProps(context) {
    const id = context.params.id;
    const token = process.env.DATO_API_KEY;
    const post = (
        await query(
            `{blogPost(filter: {id: {eq: "${id}"}}) { id, title, content, published, _status, _firstPublishedAt }}`,
            token
        )
    )?.blogPost;

    return {
        props: {
            id,
            token,
            post,
        },
    };
}

/**
 * Used for Static Site Generation at build time
 */
export async function getStaticPaths() {
    const allPosts = (await query("{allBlogPosts {id}}"))?.allBlogPosts;
    const allPostIds = allPosts.map((post) => `/post/${post.id.toString()}`);

    return {
        paths: allPostIds,
        fallback: true,
    };
}

export default PostView;
