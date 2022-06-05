import FadeIn from "react-fade-in";
import Container from "../components/layout/container";
import PageSection from "../components/layout/page-section";
import AllPosts from "../components/posts/all-posts";
import query from "../lib/cms-query";

export async function getStaticProps() {
    const allPosts = (
        await query(
            "{ allBlogPosts { thumbnail { url, alt, width, height }, tags { color, label }, teaser, title, content, published, id, _firstPublishedAt, _status } }"
        )
    )?.allBlogPosts;

    return {
        props: {
            allPosts,
        },
    };
}

export default function BlogPage({ allPosts }) {
    return (
        <main>
            <FadeIn>
                <PageSection
                    size="2xl"
                    className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
                    id="posts"
                >
                    <Container>
                        <h3 className="mb-10 text-center text-2xl text-black dark:text-white md:text-3xl lg:mb-20 lg:text-5xl">
                            Blog Posts
                        </h3>
                        <AllPosts allPosts={allPosts} />
                    </Container>
                </PageSection>
            </FadeIn>
        </main>
    );
}
