import Link from "next/link";
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

function index({ users }) {
  return (
    <>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id} className="user_name">
          {user.name}
        </Link>
      ))}
    </>
  );
}

export default index;
