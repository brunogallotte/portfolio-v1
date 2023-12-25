import { posts } from "../../data/postsData";
import { Post } from "../Post/Post";

export function ListPosts() {

    function getContentLimitedCaracters(content: string) {
        return content.slice(0,270) + ' [...]'
    }

    return(
        <>
            {posts.map((post) => {
                const limitedContent = getContentLimitedCaracters(post.content)

                return <Post key={post.id} 
                publishedAt={post.publishedAt}
                title={post.title}
                content={limitedContent}
                tag={post.tag}
                timeToRead={post.timeToRead}
                postImg={post.postImg}
            />
            })}
        </>
    )
}