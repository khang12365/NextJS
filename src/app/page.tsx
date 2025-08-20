import Link from "next/link";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/admin">Admin</Link>
        </li>
        <li>
          <a href="/admin/pagee">pagee</a>
        </li>
        <li>
          <a href="/admin">Admin</a>
        </li>
      </ul>
    </div>
  );
};
export default Home;
