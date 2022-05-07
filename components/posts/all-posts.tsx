import PostPreview from "./post-preview";

function AllPosts({ allPosts }) {
    return (
        <div>
            {allPosts?.map((post) => {
                if (post.published === true) {
                    return (
                        <PostPreview
                            id={post.id}
                            title={post.title}
                            content={post.content}
                            publishedAt={post._firstPublishedAt}
                            key={post.id}
                        />
                    )
                }
            })}
        </div>
    )
}

export default AllPosts;