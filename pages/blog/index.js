import Header from '../../components/Header'
import BlogPanel from '../../components/BlogPanel'
import { client } from '../../utils/prismicClient'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

export default function blog({ blogs }) {
    return (
        <div>
            <Header />
            {blogs.results.map(blog => (
                <BlogPanel
                    key={blog.uid}
                    blogHeroImage={blog.data.hero_image.url} 
                    blogTitle={RichText.render(blog.data.title)}
                    blogAltText={blog.data.hero_image.alt}
                    blogSlug={blog.slugs[0]}
                />
            ))}
        </div>
    )
}

export async function getStaticProps() {
    const blogs = await client.query(
        Prismic.Predicates.at('document.type', 'blog_post')
    )

    return {
      props: {
        blogs
      }
    }
}