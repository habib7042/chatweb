import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Notfound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
        // router.back(1)
      router.push(1);
    }, 4000);
  }, []);

  return (
    <div className="not_found">
      <h1>Ooooops....</h1>
      <p>The page cannot be found.</p>
      <p>
        Go back to <Link href="/">HomePage</Link>
      </p>
    </div>
  );
}

export default Notfound;
