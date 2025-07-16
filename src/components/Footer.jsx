import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer>pennington programming <span>&copy; {year}</span>
            <div className="social">
                <a href="https://twitter.com/" target="_blank" className="footer-socal">
                    <i className="fa-brands fa-twitter"></i>
                    <p className="hidden">@EmmettPenn23</p>
                </a>
                <a href="https://www.facebook.com/" target="_blank" className="footer-socal">
                    <i className="fa-brands fa-facebook"></i>
                    <p className="hidden">Emmett Pennington</p>
                </a>
                <a href="https://discord.com/" target="_blank" className="footer-socal" id="discord-el">
                    <i className="fa-brands fa-discord"></i>
                    <p className="hidden">emmettpenn23</p>
                </a>
                <a href="https://bsky.app/" target="_blank" className="footer-socal">
                    <i className="fa-solid fa-comment"></i>
                    <p className="hidden">emmettmagic.bsky.social</p>
                </a>
            </div>         
        </footer>
    )
}