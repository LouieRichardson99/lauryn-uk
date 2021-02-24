import Header from "../../components/Header";
import { client } from "../../utils/prismicClient";
import { RichText } from "prismic-reactjs";
import markdownStyles from "../../styles/markdown-styles.module.css";
import BlogDate from "../../components/BlogDate";
import Meta from "../../components/Meta";

export default function blogContent({ post }) {
  return (
    <div>
      <Meta 
        title={post.data.title[0].text}
        desc={post.data.blog_excerpt[0].text}
      />
      <Header />
      <div className="w-10/12 sm:w-3/4 md:max-w-3xl mx-auto">
        <div className={markdownStyles['markdown']}>
          <RichText render={post.data.title} />
        </div>
        <div className='font-serif text-gray-700 mb-12 text-center -mt-8'>
          <BlogDate dateString={post.first_publication_date}/>
        </div>
        <div className={markdownStyles['markdown']}>
          <RichText render={post.data.date} />
        </div>
        <div className={markdownStyles['markdown']}>
          <RichText render={post.data.blog_content} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const post = await client.getByUID("blog_post", query.slug);

  return {
    props: {
      post,
    },
  };
}
