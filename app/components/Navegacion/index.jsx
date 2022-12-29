
import { NavLink } from "@remix-run/react";

const Navegacion = () => {

    let activeClassName = "isActiveNavLink";

  return (
    <nav className="navegacion">
        {routes.map((el, index) => (
            <NavLink
            key={`${index}-${el.text}`}
            to={el.to}
            className={({ isActive }) => isActive ? activeClassName : undefined}
            >
                { el.text }
            </NavLink>
        ))}
    </nav>
  )
}

const routes = [
    {
        to: '/',
        text: 'Inicio'
    },
    {
        to: '/nosotros',
        text: 'Nosotros',
    },
    {
        to: '/tienda',
        text: 'Tienda',
    },
    {
        to: '/blog',
        text: 'Blog'
    },
];


export { Navegacion };
