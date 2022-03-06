import Head from 'next/head'
import { Fragment } from 'react'
import AllPosts from '../../components/posts/AllPosts'
import { getAllPosts } from '../../lib/posts-util'

function AllPostsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Blog</title>
                <meta name="description" content="blog" />
            </Head>
            <AllPosts posts={props.posts} />
        </Fragment>
    )
}

export const getStaticProps = () => {
    const allPosts = getAllPosts()

    return {
        props: { posts: allPosts },
    }
}
export default AllPostsPage
