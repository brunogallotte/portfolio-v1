import { ArrowDownRightSquare } from "lucide-react";
import { posts } from "../../data/postsData";
import { Post } from "../Post/Post";

import styles from './ListPosts.module.css'

export function ListPosts() {

    function getContentLimitedCaracters(content: string) {
        return content.slice(0,270) + ' [...]'
    }

    return(
        <>
            <div className="container">
                <strong className={styles.title}><ArrowDownRightSquare size={32} />Blog</strong>
            </div>
            {posts.map((post) => {
                const limitedContent = getContentLimitedCaracters(post.content)

                return <Post key={post.id} 
                publishedAt={post.publishedAt}
                title={post.title}
                content={limitedContent}
                tag={post.tag}
                timeToRead={post.timeToRead}
                postImg={post.postImg}
                link={post.link}
            />
            })}
        </>
    )
}