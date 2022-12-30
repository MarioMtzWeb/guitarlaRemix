//Remix React
import { NavLink } from "@remix-run/react";

//IMG
import ImgCarrito from '../../../public/img/carrito.png'

//Components
import { IconCart } from '~/components/IconCart';

const Navegacion = ( { totalItems } ) => {

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
            to: '/guitarras',
            text: 'Tienda',
        },
        {
            to: '/blog',
            text: 'Blog'
        },
        {
            to: '/carrito',
            text: <IconCart totalItemsBuy={totalItems} image={ImgCarrito} />
        }
    ];

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

export { Navegacion };
