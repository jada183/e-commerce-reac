import React from "react";
import hamburgerLogo from '../../assets/icons/parrilla.svg'
import caddyImage from '../../assets/icons/carro-inteligente.png';
import companyLogo from '../../assets/icons/logo_small.png'
import sponsorLogo from '../../assets/images/plexus-logo.png';
import PropTypes from 'prop-types';
import './header.css';
const Header = ({ toggleSidebar }) => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="MenuAndLogoContainer">
                <button type="button" className="btn" onClick={e => toggleSidebar(e)}>
                    <img
                        src={hamburgerLogo}
                        width="25px"
                        height="25px"
                        alt="menu de hamburguesa"
                        className="menu-logo"
                    />
                </button>
                <button type="button" className="btn">
                    <img
                        src={companyLogo}
                        width="auto"
                        height="30px"
                        alt="logo de la tienda"
                        className="company-logo"
                    />
                </button>

            </div>
            <div className="banner-container">
                <a href="https://www.linkedin.com/company/plexus-tech">
                    <img
                        src={sponsorLogo}
                        width="auto"
                        height="30px"
                        alt="logo de la empresa patrocinadora"
                        className="company-logo"
                    />
                    <span className="no-show-mobile banner-text">Trabaja con nosotros</span>
                </a>
            </div>
            <div className="actionHeaderButtonsContainer">

                {/* <button className="btn button-userInfo header-button">
                        <div>
                            <div className="nameHeaderTitle">Hola</div>
                            <div>Mi cuenta</div>
                        </div>
                    </button> */}


                <button className="btn button-userInfo header-button">
                    <div>
                        <div>Iniciar sesión</div>
                    </div>
                </button>


                <button className="btn header-button">
                    <img
                        src={caddyImage}
                        width="25px"
                        height="25px"
                        alt="carrito de la compra"
                        className="caddy-button"
                    />
                    <span>Mi carrito</span>
                </button>

            </div>
        </div>
    </nav>

);
Header.propTypes = {
    toggleSidebar: PropTypes.func,
};
Header.defaultProps = {
    toggleSidebar: () => { },
};
export default Header;