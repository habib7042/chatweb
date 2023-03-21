export async function getStaticProps(){

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props : {
            users: data
        }
    }

}

function users( {users}) {
  return (
    <>
        {users.map((user)=> (
            <h4 key ={user.id}>{user.name}</h4>
        ))}
    </>
  )
}

export default users