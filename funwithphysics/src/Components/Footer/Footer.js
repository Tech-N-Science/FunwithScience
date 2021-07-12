import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
        
        {/* <footer class="text-center text-lg-start bg-light pt-2">
        <section class="">
            <div class="container text-center text-md-start mt-4">
            
            <div class="row mt-3">
               
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
                
                <h6 class="text-uppercase fw-bold mb-4">
                    <i class=""></i>Fun With Physics
                </h6>
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
                </div>            

               
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 class="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" class="text-reset">Angular</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">React</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Vue</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Laravel</a>
                </p>
                </div>
               

               
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 class="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <a href="#!" class="text-reset">Pricing</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Settings</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Orders</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Help</a>
                </p>
                </div>
               

               
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                <h6 class="text-uppercase fw-bold mb-4">
                    Contact
                </h6>
                </div>
               
            </div>
            
            </div>
        </section>

        <div class="text-center p-4 bg-dark">
            © 2021 | Copyright@
            <a class="text-reset fw-bold" href="/"> Fun With Physics</a>
        </div>
        </footer> */}

        <footer>
            <div class="main-content">
                <div class="left box">
                    <div class="footer-logo">
                        <img src=""/>
                    </div>
                    <h2>Address</h2>
                    <div class="content">
                        <div class="place">
                            <span class="fas fa-map-marker-alt"></span>
                            <span class="text">India</span>
                        </div>
                        <div class="phone">
                            <span class="fas fa-phone"></span>
                            <span class="text">+91 1234567890</span>
                        </div>
                        <div class="email">
                            <a href="mailto:example123@gmail.com"><span class="fas fa-envelope"></span></a>
                            <span class="text">example123@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div class="center box">
                    <h2>Connect with Us</h2>
                    <div class="content">
                        <div class="center">
                            <div class="icons">
                                <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                                <li><a href="#"><span
                                    class="fab fa-twitter"></span></a></li>
                                <li><a href="#"><span
                                    class="fab fa-instagram"></span></a></li>
                                <li><a href="#"><span
                                    class="fab fa-linkedin-in"></span></a></li>
                                <li><a href="#"><span
                                    class="fab fa-github"></span></a>
                                </li>
                            </div>
                        </div>
                    </div>
                    <h2 class="additional">Additional Links</h2>
                    <div class="content"></div>
                    <div class="center-bottom">
                        <div>
                            <a href="#"><span class="fas fa-user"></span></a>
                            <span class="text">About Us</span>
                        </div>
                        <div class="contact">
                            <a href="#"><span class="fas fa-comments"></span></a>
                            <span class="text">Contact</span>
                        </div>
                        <div>
                            <a href="#"><span class="fas fa-users"></span></a>
                            <span class="text">FAQs</span>
                        </div>
                    </div>
                </div>

                <div class="right box">
                    <h2>Contact us</h2>
                    <div class="content">
                        <form action="#">
                            <div class="name">
                                <div class="text">Name *</div>
                                <input type="text" placeholder="Enter your Name" />
                            </div>
                            <div class="email">
                                <div class="text">Email *</div>
                                <input type="email" placeholder="Enter your Email-id" required/>
                            </div>
                            <div class="msg">
                                <div class="text">Message *</div>
                                <textarea class="msg" rows="2" cols="25" placeholder="Enter your message!" required></textarea>
                            </div>
                            <div class="btn">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="bottom">
                <center>
                <span class="credit"><a
                    href="#">Fun With Physics</a> | </span>
                    <span class="far fa-copyright"></span><span> 2021 All rights reserved.</span>
                </center>
            </div>
        </footer>
        </>
    )
}

export default Footer
