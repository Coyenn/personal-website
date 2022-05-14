import Post from "./post";
import Fade from "react-reveal/Fade";

function AllPosts({ allPosts }) {
    let postNumber = 0;
    let firstPost = allPosts[0];

    return (
        <>
            <div className="mb-10 md:mb-20">
                <Fade bottom delay={300} duration={500} distance={"50px"}>
                    <Post
                        id={firstPost.id}
                        title={firstPost.title}
                        content={firstPost.content}
                        publishedAt={firstPost._firstPublishedAt}
                        thumbnail={firstPost.thumbnail}
                        key={firstPost.id}
                        size={"large"}
                        teaser={firstPost.teaser}
                    />
                </Fade>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10">
                {allPosts?.map((post) => {
                    postNumber++;

                    if (post.published === true) {
                        return (
                            <>
                                {postNumber !== 1 ? (
                                    <Fade
                                        bottom
                                        delay={300}
                                        duration={500}
                                        distance={"50px"}
                                        key={post.id}
                                    >
                                        <Post
                                            id={post.id}
                                            title={post.title}
                                            content={post.content}
                                            publishedAt={post._firstPublishedAt}
                                            thumbnail={post.thumbnail}
                                            teaser={post.teaser}
                                            key={post.id}
                                            size={"small"}
                                        />
                                    </Fade>
                                ) : undefined}
                            </>
                        );
                    }
                })}
            </div>
        </>
    );
}

export default AllPosts;
