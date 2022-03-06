import Head from 'next/head'
import { Fragment } from 'react'
import FeaturedPosts from '../components/home-page/FeaturedPosts'
import Hero from '../components/home-page/Hero'
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Blog</title>
                <meta name="description" content="blog" />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} /> 
        </Fragment>
    )
}

export const getStaticProps = () => {
    const featurePosts = getFeaturedPosts()

    return {
        props: {
            posts: featurePosts,
        },
    }
}

export default HomePage
