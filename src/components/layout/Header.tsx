import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="w-full h-24 flex flex-col justify-center items-center gap-y-2 bg-teal-9">
        <h1 className="font-poppins font-bold text-4xl text-white">Todo</h1>
        <nav>
          <ul className="flex gap-x-5">
            <li className="">
              <Link to="/" className="text-white hover:underline underline-offset-2">
                Home
              </Link>
            </li>
            <li className="">
              <Link to="/create" className="text-white hover:underline underline-offset-2">
                Create New Todo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
