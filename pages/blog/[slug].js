import Header from '../../components/Header'
import { client } from '../../utils/prismicClient'
import { RichText } from 'prismic-reactjs'

export default function blogContent({post}) {
    return (
        <div>
            <Header />
            <div>{RichText.render(post.data.title)}</div>
            <div>{RichText.render(post.data.blog_content)}</div>
        </div>
    )
}

export async function getServerSideProps({ query }){
    const post = await client.getByUID('blog_post', query.slug)

    return {
      props: {
        post
      }
    }
}

