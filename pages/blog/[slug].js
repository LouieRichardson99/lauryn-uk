import Header from "../../components/Header";
import { client } from "../../utils/prismicClient";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import markdownStyles from "../../styles/markdown-styles.module.css";
import BlogDate from "../../components/BlogDate";
import Meta from "../../components/Meta";

export default function blogContent({ post }) {
  return (
    <>
      <Meta
        title={post.data.title[0].text}
        desc={post.data.blog_excerpt[0].text}
      />
      <Header />
      <main className="w-11/12 sm:w-3/4 md:max-w-3xl mx-auto">
        <div className={markdownStyles["markdown"]}>
          {RichText.render(post.data.title)}
        </div>
        <div className="font-serif text-gray-700 mb-12 text-center -mt-8">
          <BlogDate dateString={post.first_publication_date} />
        </div>
        <div className={markdownStyles["markdown"]}>
          {RichText.render(post.data.blog_content)}
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post")
  );

  const paths = posts.results.map((post) => {
    return {
      params: { slug: post.uid },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const post = await client.getByUID("blog_post", slug);

  return {
    props: {
      post,
    },
  };
}
