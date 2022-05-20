import Link from "next/link";
import Image from "next/image";
import PageSection from "../../components/layout/page-section";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import ReactMarkdown from "react-markdown";
import query from "../../lib/cms-query";
import React from "react";
import Container from "../../components/layout/container";
import formatDate from "../../lib/format-date";
import Button from "../../components/button/button";
import FadeIn from "react-fade-in";

interface BlogPostProps {
    id: string;
    token: string;
    post: Post;
    otherPosts: OtherPost[];
}

interface PostThumbnail {
    url: string;
    alt: string;
}

interface OtherPost {
    id: string;
    title: string;
    published: boolean;
    _status: string;
    _firstPublishedAt: string;
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
                                <FadeIn>
                                    <div className="mb-10">
                                        <Link href="/#posts" passHref={true}>
                                            <a className="cursor-pointer text-black transition-colors hover:text-neutral-700 dark:text-white hover:dark:text-neutral-300">
                                                <ArrowLeftIcon className="mr-2 inline h-4 w-4" />
                                                Back
                                            </a>
                                        </Link>
                                    </div>
                                </FadeIn>
                                {this.props.post?.title !== undefined &&
                                this.props.post?.published === true ? (
                                    <FadeIn>
                                        <div className="flex flex-col gap-5">
                                            <Image
                                                className="w-full rounded-lg"
                                                src={
                                                    this.props.post?.thumbnail
                                                        ?.url
                                                }
                                                alt={
                                                    this.props.post?.thumbnail
                                                        ?.alt
                                                }
                                                width={1920}
                                                height={1080}
                                                quality={50}
                                                blurDataURL={
                                                    this.props.post?.thumbnail
                                                        ?.url
                                                }
                                                placeholder="blur"
                                            />
                                            <div className="flex flex-col gap-5 md:mx-20 lg:mx-32">
                                                <p className="text-neutral-400">
                                                    <span className="sr-only">
                                                        This blog post was first
                                                        published on
                                                    </span>
                                                    <span className="flex flex-row justify-center sm:justify-start">
                                                        <p className="border-r border-neutral-200 pr-2 text-sm font-normal text-neutral-400 dark:border-neutral-800">
                                                            Tim Ritter
                                                        </p>
                                                        <p className="pl-2 text-center text-sm text-neutral-400 sm:text-left">
                                                            {formatDate(
                                                                new Date(
                                                                    this.props.post._firstPublishedAt
                                                                )
                                                            )}
                                                        </p>
                                                    </span>
                                                </p>
                                                <h1 className="text-2xl text-black dark:text-white md:text-3xl lg:text-5xl">
                                                    {this.props.post?.title}
                                                </h1>
                                                <div className="prose min-w-full dark:prose-invert md:text-lg">
                                                    <ReactMarkdown>
                                                        {
                                                            this.props.post
                                                                ?.content
                                                        }
                                                    </ReactMarkdown>
                                                </div>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ) : (
                                    <></>
                                )}
                                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 md:gap-10">
                                    {this.props.otherPosts?.map(
                                        (otherPost: OtherPost) => {
                                            return (
                                                <Link
                                                    href={`/post/${otherPost.id}`}
                                                    key={otherPost.id}
                                                >
                                                    <a>
                                                        <div className="flex flex-col gap-5 rounded-md border p-4 dark:border-neutral-700 hover:dark:border-neutral-600">
                                                            <span className="flex flex-row justify-center sm:justify-start">
                                                                <p className="border-r border-neutral-200 pr-2 text-sm font-normal text-neutral-400 dark:border-neutral-800">
                                                                    Tim Ritter
                                                                </p>
                                                                <p className="pl-2 text-center text-sm text-neutral-400 sm:text-left">
                                                                    {formatDate(
                                                                        new Date(
                                                                            otherPost._firstPublishedAt
                                                                        )
                                                                    )}
                                                                </p>
                                                            </span>
                                                            <h2 className="text-lg font-normal text-black dark:text-white md:text-3xl lg:text-xl">
                                                                {
                                                                    otherPost?.title
                                                                }
                                                            </h2>
                                                        </div>
                                                    </a>
                                                </Link>
                                            );
                                        }
                                    )}
                                </div>
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
    const otherPosts = (
        await query(
            `{allBlogPosts(filter: {id: {neq: "${id}"}}, first: 2) { id, title, published, _status, _firstPublishedAt }}`,
            token
        )
    )?.allBlogPosts;

    return {
        props: {
            id,
            token,
            post,
            otherPosts,
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
