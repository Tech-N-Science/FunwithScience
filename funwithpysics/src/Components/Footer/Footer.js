import React from 'react'

const Footer = () => {
    return (
        <>
        
        <footer className="text-center text-lg-start bg-light pt-2">
        <section className="">
            <div className="container text-center text-md-start mt-4">
            
            <div className="row mt-3">
               
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
                
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className=""></i>Fun With Physics
                </h6>
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
                </div>            

               
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Laravel</a>
                </p>
                </div>
               

               
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Help</a>
                </p>
                </div>
               

               
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                </h6>
                </div>
               
            </div>
            
            </div>
        </section>

        <div className="text-center p-4 bg-dark text-white">
            © 2021 | Copyright@
            <a className="text-reset fw-bold" href="/"> Fun With Physics</a>
        </div>
        </footer>
        
            
        </>
    )
}

export default Footer
