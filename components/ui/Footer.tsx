import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { alignProperty } from '@mui/material/styles/cssUtils';
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="map-container" style={{ display: 'flex', alignItems: 'center' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.175849481675!2d-78.4824908!3d-0.2002082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59bdf0ce12cc3%3A0x1bd14f7de6fd2e65!2sFundaci%C3%B3n%20Datalat!5e0!3m2!1ses!2sec!4v1680756361679!5m2!1ses!2sec" width="300" height="150" style={{ borderRadius: 15, border: 0, margin: '0 10px 0 0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="footer_address" style={{ flex: 1, textAlign: 'left' }}>
                    <dd>Encuéntranos</dd>
                    <br></br>
                    <dd>Edf. Orellana, Oficina. 702</dd>
                    <dd>098 851 4041</dd>
                    <dd>Quito - Ecuador</dd>
                </div>
            </div>
            <div className="footer_contact" style={{ float: 'right' }}>
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <a href="">Política de privacidad</a>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <a href="https://www.instagram.com/datalatorg" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon style={{ width: '1.5em', height: '1.5em', marginRight: '1em', color: 'white' }} />
                </a>
                <a href="https://www.facebook.com/datalatorg" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon style={{ width: '1.5em', height: '1.5em', marginRight: '1em', color: 'white' }} />
                </a>
                <a href="https://twitter.com/datala" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon style={{ width: '1.5em', height: '1.5em', marginRight: '1em', color: 'white' }} />
                </a>
                <a href="https://www.youtube.com/@datalat" target="_blank" rel="noopener noreferrer">
                    <YouTubeIcon style={{ width: '1.5em', height: '1.5em', marginRight: '1em', color: 'white' }} />
                </a>
                <div className="footer__contact-info" style={{ marginLeft: '1em', textAlign: 'left' }}>
                    <p></p>
                    <dd>info@datalat.org</dd>
                    <p></p>
                </div>
            </div>

        </footer>
    );
};
export default Footer;