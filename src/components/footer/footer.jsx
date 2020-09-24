import React from "react";
import { Link } from "react-router-dom";
import helpLogo from '../../assets/icons/pregunta.svg'
const Footer = () => (
    <footer class=" page-footer font-small blue pt-2 pb-2 bg-light">
        <div class="py-3 container-fluid">
            <div>
                <span>Contacto a jason.francoquintero@plexus.es</span>
            </div>
            <Link to="/help">
                <button type="button" class="btn">
                    <img
                        src={helpLogo}
                        width="25px"
                        height="25px"
                        alt="icono de interrogante para ayuda"
                        class="footer-help-button"
                    />
                </button>
            </Link>
        </div>
    </footer>
);
export default Footer