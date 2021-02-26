import Header from "../../components/Header";
import BlogPanel from "../../components/BlogPanel";
import { client } from "../../utils/prismicClient";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import BlogDate from "../../components/BlogDate";
import Meta from "../../components/Meta";

export default function blog({ blogs }) {
  return (
    <div>
      <Meta 
        title="Blog"
        desc="Welcome to my blog page. I blog about anything related to branding and graphic design!"
      />
      <Header />
      <h1 className="font-serif text-xl text-gray-800 text-center sm:mt-0 -mt-8 mb-7">Blog</h1>
      <div className="grid w-11/12 xl:w-3/4 2xl:w-3/4 max-w-screen-xl grid-cols-1 sm:grid-cols-2 mx-auto -mt-6 sm:mt-0 md:grid-cols-3">
        {blogs.results.map(blog => (
          <BlogPanel
            key={blog.uid}
            blogHeroImage={blog.data.hero_image.url}
            blogDate={<BlogDate dateString={blog.first_publication_date}/>}
            blogTitle={RichText.render(blog.data.title)}
            blogAltText={blog.data.hero_image.alt}
            blogExcerpt={blog.data.blog_excerpt[0].text}
            blogSlug={blog.slugs[0]}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const blogs = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"), {
      orderings: "[document.first_publication_date desc]"
    }
  );

  return {
    props: {
      blogs,
    },
  };
}
