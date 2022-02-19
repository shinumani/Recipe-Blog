import React from 'react';
import "./Footer.css";
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (
<div className="footer">
        <div className="container my-5">

            <footer className="text-center text-lg-start">
                <div className="container d-flex justify-content-center py-5">
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                    <SocialIcon network="twitter" bgColor="#ff5a01" />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                    <SocialIcon url="https://linkedin.com/in/jaketrent" />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                    <SocialIcon url="https://jaketrent.com" network="tumblr" />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                    <SocialIcon url="https://www.example.com" label="Our portfolio" />
                    </button>
                </div>


                <div class="text-center text-white p-3">
                    © 2022 Copyright:
                    <a class="text-white" href="#" >Myspecialtouchrecipes.com</a>
                </div>
            </footer>
        </div>
        </div>
    );
};

export default Footer;