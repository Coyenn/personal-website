import PostPreview from "./post-preview";

function AllPosts({ allPosts }) {
    return (
        <div className="py-2 md:py-3">
            <p className='mb-3 secondary'><small>Writing</small></p>
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
        </div>
    )
}

export default AllPosts;