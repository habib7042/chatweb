import styles from "../../styles/Home.module.css";
import Head from "next/head";
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}

function blogs({ posts}) {
  return (
    <>
      <Head>
        <title>MagicWeb || Blogs</title>
        <meta name="keywords" content="magicweb blogs" />
      </Head>
      <h3 className={styles.title}>Blogs</h3>
      {posts.map((post) => (
        <div key={post.id} className={styles.card}>
          <h3 className={styles.card_title}>{post.title}</h3>
          <p className={styles.card_text}>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default blogs;
