import Head from 'next/head'
import styles from "../styles/Home.module.css"
const Home = () => {
  return (
    <>
    <Head>
      <title>MagicWeb || Home</title>
      <meta name="keywords" content="web devlopment" />
    </Head>
      <h1 className = {styles.title}>Welcome to MagicWeb</h1>
      <p className ={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
        voluptatem quam. Recusandae, dolor ullam! Omnis reprehenderit architecto
        a quasi cum perspiciatis eveniet! Tempora commodi, saepe dignissimos sit
        cupiditate non voluptas repellat quaerat sapiente minus esse doloribus
        omnis animi. Laborum at nemo magnam culpa. Tenetur officiis in ratione
        neque reiciendis vitae aperiam nobis, iure porro molestias praesentium
        delectus inventore omnis, harum quasi. Eligendi dignissimos debitis
        corrupti et nemo. Cum voluptatem quidem tenetur inventore ipsum autem,
        nisi error enim dolor vero, delectus et excepturi molestiae temporibus
        ipsa sed molestias nulla omnis voluptate dicta nobis? Alias laboriosam
        ducimus quidem hic nulla, magnam consequuntur!
      </p>
    </>
  );
};

export default Home;
