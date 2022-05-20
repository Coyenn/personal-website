import Post from "./post";

function AllPosts({ allPosts }) {
    let postNumber = 0;
    let firstPost = allPosts[0];

    return (
        <>
            <div className="mb-10 md:mb-20">
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
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10">
                {allPosts?.map((post) => {
                    postNumber++;

                    if (post.published === true) {
                        return (
                            <>
                                {postNumber !== 1 ? (
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
