import PostGrid from './PostsGrid'
import classes from './all-posts.module.css'

const AllPosts = ({ posts }) => {
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostGrid posts={posts} />
        </section>
    )
}

export default AllPosts
