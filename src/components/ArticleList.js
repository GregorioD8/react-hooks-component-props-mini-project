import React from "react"
import Article from "./Article"
function ArticleList({ posts }){
    const ArticlePosts = posts.map((post) => {
        console.log(post)
        return  <Article
                key={post.id} 
                title={post.title} 
                date={post.date} 
                preview={post.preview}
                minutes={post.minutes}
                />
        })
        return (
            <main>{ArticlePosts}</main>
        )
}

export default ArticleList