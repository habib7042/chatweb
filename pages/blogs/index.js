import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { useState } from "react";
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}

function blogs({ posts }) {
  const [currentPage, setCurrentpage] = useState(1);

  function onNextHendler() {
    setCurrentpage(currentPage + 1);
  }
  function onPevHendler() {
    setCurrentpage(currentPage - 1);
  }
  const visiblePost = posts.slice((currentPage - 1) * 10, currentPage * 10);

  return (
    <>
      <Head>
        <title>MagicWeb || Blogs</title>
        <meta name="keywords" content="magicweb blogs" />
      </Head>
      <h3 className={styles.title}>Blogs</h3>
      {visiblePost.map((post) => (
        <div key={post.id} className={styles.card}>
          <h3 className={styles.card_title}>{post.title}</h3>
          <p className={styles.card_text}>{post.body}</p>
        </div>
      ))}
      <button disabled={currentPage === 1} onClick={onPevHendler}>Pev Page</button>
      <button onClick={onNextHendler}>Next Page</button>
    </>
  );
}

export default blogs;
