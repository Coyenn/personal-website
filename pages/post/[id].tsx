import Link from "next/link";
import Image from "next/image";
import PageSection from "../../components/layout/page-section";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import ReactMarkdown from "react-markdown";
import query from "../../lib/cms-query";
import React from "react";
import Container from "../../components/layout/container";

interface BlogPostProps {
    id: string;
    token: string;
    post: Post;
}

interface PostThumbnail {
    url: string;
    alt: string;
}

interface Post {
    id: string;
    title: string;
    content: string;
    published: boolean;
    _status: string;
    _firstPublishedAt: string;
    thumbnail: PostThumbnail;
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
                        <PageSection
                            size="2xl"
                            className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
                        >
                            <Container>
                                <div className="mb-10">
                                    <Link href="/" passHref={true}>
                                        <a className="cursor-pointer text-black dark:text-white">
                                            <ArrowLeftIcon className="mr-2 inline h-4 w-4" />
                                            Go back
                                        </a>
                                    </Link>
                                </div>
                                {this.props.post?.title !== undefined &&
                                this.props.post?.published === true ? (
                                    <div className="flex flex-col gap-5">
                                        <Image
                                            className="w-full rounded-lg"
                                            src={
                                                this.props.post?.thumbnail?.url
                                            }
                                            alt={
                                                this.props.post?.thumbnail?.alt
                                            }
                                            width={1920}
                                            height={1080}
                                            quality={50}
                                            blurDataURL={
                                                this.props.post?.thumbnail?.url
                                            }
                                            placeholder="blur"
                                        />
                                        <div className="flex flex-col gap-5 md:mx-20 lg:mx-32">
                                            <p className="text-neutral-400">
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
                                            <h1 className="text-2xl text-black dark:text-white md:text-3xl lg:text-5xl">
                                                {this.props.post?.title}
                                            </h1>
                                            <div className="prose min-w-full dark:prose-invert md:text-lg">
                                                <ReactMarkdown>
                                                    {this.props.post?.content}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </Container>
                        </PageSection>
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
            `{blogPost(filter: {id: {eq: "${id}"}}) { id, thumbnail { url, alt }, title, content, published, _status, _firstPublishedAt }}`,
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
