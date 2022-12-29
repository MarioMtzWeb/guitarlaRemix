//Remix React
import { Link } from '@remix-run/react';

//IMG
import logo from "../../../public/img/logo.svg";

//Components
import { Navegacion } from '~/components/Navegacion';

const Header = () => {

  return (
    <header className="header">
        <div className="contenedor barra">
            <div className="logo">
                <Link to="/">
                    <img className="logo" src={logo} alt="imagen-logo"/>
                </Link>
            </div>
            <Navegacion/>
        </div>
    </header>
  )
};

export { Header };
