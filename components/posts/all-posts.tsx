import PostPreview from "./post-preview";

function AllPosts({ allPosts }) {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10">
            {allPosts?.map((post) => {
                if (post.published === true) {
                    return (
                        <PostPreview
                            id={post.id}
                            title={post.title}
                            content={post.content}
                            publishedAt={post._firstPublishedAt}
                            thumbnail={post.thumbnail}
                            key={post.id}
                        />
                    );
                }
            })}
        </div>
    );
}

export default AllPosts;
