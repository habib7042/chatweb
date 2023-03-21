import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}

function user({ user }) {
  const router = useRouter();
  const onBackHendler = () => {
    router.back(1);
  };

  return (
    <>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={onBackHendler} className={styles.button}>
        Go Back
      </button>
    </>
  );
}

export default user;
