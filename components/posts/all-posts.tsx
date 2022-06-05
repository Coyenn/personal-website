import Post from "./post";

function AllPosts({ allPosts }) {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10">
            {allPosts?.map((post) => {
                if (post.published === true) {
                    return (
                        <>
                            <Post
                                id={post.id}
                                title={post.title}
                                content={post.content}
                                publishedAt={post._firstPublishedAt}
                                thumbnail={post.thumbnail}
                                teaser={post.teaser}
                                key={post.id}
                                tags={post.tags}
                                size={"small"}
                            />
                        </>
                    );
                }
            })}
        </div>
    );
}

export default AllPosts;
