import img1 from '../Assests/logo.webp'
export function Contact(){
    return (
        <>
            <section id="contact" className="contact-sec">
                <div className="contact-items">
                    <div className="content-contact">
                        <h2 className="contact-head">Contact Us</h2>
                    </div>
                    <div className="container-contact">
                        <div className="contactInfo">
                            <div className="contant-box">
                                <div className="icon-contact">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="text">
                                    <a href="tel:+918396952909">
                                        <h3 className="contact-head2">Headquarter</h3>
                                        <p>Bangalore, India</p>
                                    </a>
                                </div>
                            </div>

                            <div className="contant-box">
                                <div className="icon-contact">
                                    <i className="fa-solid fa-phone phone"></i>
                                </div>
                                <div className="text">
                                    <a href="tel:+918396952909">
                                        <h3 className="contact-head2">Phone No.</h3>
                                        <p>8396952909</p>
                                    </a>
                                </div>
                            </div>

                            <div className="contant-box">
                                <div className="icon-contact">
                                    <i className="fa-solid fa-envelope email1"></i>
                                </div>
                                <div className="text">
                                    <a href="mailto:mimansa@vm4fitness.com">
                                        <h3 className="contact-head2">Email</h3>
                                        <p>mimansa@vm4fitness.com</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div onClick={() => window.open('https://calendly.com/vik4fitness/consultation-appointment','mywindow')}

                             rel="noopener noreferrer" className="contact-link">
                            <div className="contactForm">
                                <h2 className="contact-heading">Let's Connect and Achieve Your Fitness Goals
                                    Together!</h2>
                                <p className="contact-para">
                                    At VM4Fitness, we're here to support you every step of the way. Whether you have
                                    questions, need
                                    guidance, or want to learn more about our programs, our team is ready to help.
                                </p>
                                <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                                   rel="noopener noreferrer"><p className="contact-para cont-paraa">Get in touch with us
                                    today <i className="fa-solid fa-arrow-right"></i></p>
                                </a>

                            </div> </div>
                    </div>
                </div>

            </section>
        </>
)
}