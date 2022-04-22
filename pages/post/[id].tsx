import Link from "next/link";
import FadeIn from "react-fade-in/lib/FadeIn";
import PageSection from "../../components/layout/page-section";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import ReactMarkdown from "react-markdown";
import query from "../../lib/cms-query";
import React from "react";

interface BlogPostProps {
    id: string,
    token: string,
}

interface Post {
    id: string,
    title: string,
    content: string,
    _status: string,
    _firstPublishedAt: string,
}
interface BlogPostState {
    loading: boolean,
    id: undefined | string,
    post: undefined | Post,
}

class PostView extends React.Component<BlogPostProps, BlogPostState>{
    constructor(props: BlogPostProps) {
        super(props);
        this.state = {
            loading: true,
            id: undefined,
            post: undefined,
        }
    }

    componentDidMount(): void {
        this.loadPost();
    }

    async loadPost() {
        const post = (await query(`{blogPost(filter: {id: {eq: "${this.props.id}"}}) { id, title, content, _status, _firstPublishedAt }}`, this.props.token))?.blogPost;

        this.setState({
            loading: false,
            id: this.props.id.toString(),
            post: post,
        })
    }

    render() {
        return (
            <>
                <main>
                    <article>
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
                                {this.state.post?.title ? (
                                    <FadeIn>
                                        <div className="flex justify-between flex-col md:flex-row">
                                            <p className="lead mb-4 md:mb-5">
                                                {this.state.post?.title}
                                            </p>
                                            <p className="secondary order-first md:order-last mb-2 md:mb-0">
                                                <small>
                                                    <span className="sr-only">This blog post was first published on</span>
                                                    {this.state.post?._firstPublishedAt.split("T")[0]}
                                                </small>
                                            </p>
                                        </div>
                                        <div className="prose dark:prose-invert">
                                            <ReactMarkdown>
                                                {this.state.post?.content}
                                            </ReactMarkdown>
                                        </div>
                                    </FadeIn>
                                ) : <></>}
                            </PageSection>
                        </FadeIn>
                    </article>
                </main>
            </>
        )
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const token = process.env.DATO_API_KEY;

    return {
        props: {
            id,
            token,
        }
    }
}

export async function getStaticPaths() {
    const allPosts = (await query('{allBlogPosts {id}}'))?.allBlogPosts;
    const allPostIds = allPosts.map((post) => `/post/${post.id.toString()}`);

    return {
        paths: allPostIds,
        fallback: true,
    }
}

export default PostView;