import React from 'react'

const Footer = () => {
    return (
        <footer class="page-footer black" >
                    <div class="container">
                        <div class="row">
                            <div class="col l6 s12">
                                <h5 class="white-text">BookBook NYC</h5>
                                <p class="grey-text text-lighten-4">BookBook catalogs your favorites books from new releases, to timeless classics.</p>
                                <a href="https://www.twitter.com/bookbooknyc" color="white">
                                    <img src="twitterlogo.png"></img>
                                </a>
                                <a href="https://www.instagram.com/bookbooknyc">
                                    <img src="instagramlogo.png"></img>
                                </a>
                            </div>
                            <div class="col l4 offset-l2 s12">
                                <h5 class="white-text">Developed and Designed by:</h5>
                                    <ul>
                                        <li><a class="grey-text text-lighten-3" href="#!">Elizabeth Alume</a></li>
                                        <li><a class="grey-text text-lighten-3" href="#!">Leonel Diaz</a></li>
                                    </ul>
                            </div>
                    </div>
                    </div>
                     <div class="footer-copyright">
                        <div class="container">
                            <h7>@BookBook NYC</h7>
                        </div>
                        </div>
                </footer>
    )
}

export default Footer