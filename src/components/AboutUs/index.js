import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./style.css";
import About1 from "../images/about1.jpeg";
import About2 from "../images/about2.jpeg";
import About3 from "../images/about3.jpeg";
import About10 from "../images/about10.jpeg";
import About5 from "../images/about5.jpeg";
import About6 from "../images/about6.jpeg";
import About7 from "../images/about7.jpeg";
import About8 from "../images/about8.jpeg";
import About9 from "../images/about9.png";


function AboutUs() {
    return (
        <div className="about">
            <div className="about-container">
                <p > Who we are </p>

                <h1> EP My Pet Care </h1>
                <p className="paragraph"> Welcome to the My Pet Care EP, your one-stop destination for all things pet health, wellness and happiness.
                    Our mission is to provide pet owners with reliable information, expert advice, and ensure their furry friends lead healthy, fulfilling lives.</p>
                <article className="carousel-container">
                    <Carousel autoPlay showThumbs={false} infiniteLoop interval={3000}>
                        <div>
                            <img src={About3} alt="About 3" />
                        </div>
                        <div>
                            <img src={About2} alt="About 2" />
                        </div>
                        <div>
                            <img src={About1} alt="About 1" />
                        </div>
                    </Carousel>
                </article>
                <br />
                <h2>Our Passion </h2>
                <p className="paragraph">At EP My Pet Care, we are driven by our deep love and passion for animals. We believe that pets enrich our lives in countless ways and deserve the best care possible.
                    Whether you have a loyal canine companion, a curious feline friend, or any other beloved pet, we are here to support you every step of the way.</p>

                <article className="carousel-container">
                    <Carousel autoPlay showThumbs={false} infiniteLoop interval={3000}>
                        <div>
                            <img src={About5} alt="About 5" />

                        </div>
                        <div>
                            <img src={About6} alt="About 6" />
                        </div>
                        <div>

                            <img src={About7} alt="About 7" />
                        </div>
                    </Carousel>
                </article>
                <br />
                <h2> Community </h2>
                <p className="paragraph"> At EP My Pet Care, we believe in building a strong and caring community of pet owners. Our platform provides a space for pet lovers to connect, share their experiences, and seek support from like-minded individuals.
                    Whether you have questions, want to share a heartwarming pet story, or simply need a friendly ear, we are here for you.</p>
                <article className="carousel-container">
                    <Carousel autoPlay showThumbs={false} infiniteLoop interval={3000}>
                        <div>

                            <img src={About10} alt="About 10" />
                        </div>
                        <div>
                            <img src={About9} alt="About 9" />
                        </div>
                        <div>
                            <img src={About8} alt="About 8" />

                        </div>
                    </Carousel>
                </article>

                <br />
                <h2>Join Us Today</h2>
                <p className="paragraph"> We invite you to join the EP My Pet Care community and embark on a journey of responsible and loving pet ownership. Together, we can create a brighter, healthier future for our beloved animal companions.
                    Thank you for choosing EP My Pet Care as your trusted resource for all your pet care needs.</p>
                <br />
                <h4>Remember, every step we take is a paw in the right direction!</h4>
                <br />
                <a href="/Register">
                    <button type='submit'>Sign Up Now</button>  </a>
                <br />
                <p><i> EP My Pet Care - Your Partner in Pet Parenthood</i></p>


            </div>
        </div>

    );
}

export default AboutUs;

