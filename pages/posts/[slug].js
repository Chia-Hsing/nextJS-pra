import PostContent from '../../components/posts/post-detail/PostContent'
import { getPostData, getPostsFiles } from '../../lib/posts-util'

function SinglePostPage(props) {
    return (
        <div>
            <PostContent post={props.post} />
        </div>
    )
}

export const getStaticProps = (context) => {
    const { params } = context
    const { slug } = params

    const postData = getPostData(slug)

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    }
}

export const getStaticPaths = () => {
    const postFileNames = getPostsFiles()

    const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''))

    return {
        paths: slugs.map((slug) => ({
            params: {
                slug: slug,
            },
        })),
        fallback: false,
    }
}
export default SinglePostPage
