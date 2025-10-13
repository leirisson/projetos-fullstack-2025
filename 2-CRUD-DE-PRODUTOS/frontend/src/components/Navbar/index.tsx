import { Link } from "react-router-dom";

export function NavBar() {
  
    const menuOption = [
    {
      name: "Tarefas",
      link: "/",
    },
    {
      name: "formulario",
      link: "/form",
    },
  ];


  return (
    <>
      <nav>
        <ul>
          {menuOption.map((opt) => (
            <li key={`id-${opt.name}`}>
              <Link to={opt.link}>{opt.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
