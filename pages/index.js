import Hero from '../components/home-page/Hero'
import FeaturedPosts from '../components/home-page/FeaturedPosts'
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage(props) {
    return (
        <div>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </div>
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
