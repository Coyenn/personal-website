import PostPreview from "./post-preview";
import Fade from "react-reveal/Fade";

function AllPosts({ allPosts }) {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10">
            {allPosts?.map((post) => {
                if (post.published === true) {
                    return (
                        <Fade
                            bottom
                            delay={300}
                            duration={500}
                            distance={"50px"}
                        >
                            <PostPreview
                                id={post.id}
                                title={post.title}
                                content={post.content}
                                publishedAt={post._firstPublishedAt}
                                thumbnail={post.thumbnail}
                                key={post.id}
                            />
                        </Fade>
                    );
                }
            })}
        </div>
    );
}

export default AllPosts;
