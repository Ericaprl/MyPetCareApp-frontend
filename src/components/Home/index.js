import React from "react";

import petGrooming from "../images/petGrooming.png";
import aboutImg from "../images/headerIMG.png";
import dogOwner from "../images/dogOwner.png";
import catHome from "../images/catHome.png";
import playPets from "../images/playpets.png";
import playing from "../images/playing.png";

// import api from "../../services/api";

import "./style.css";

function Section () { 
    return(
<div className="section-all">
<section className="section">
                <div className="section-content">
                    <img src={petGrooming} alt="Imagem 1" />
                    <h1>Find the nearest Pet Shops and ensure specialized products and services for your furry friend.</h1>
                    <a href="/Register">
                        <button> Learn more </button>
                    </a>
                </div>
            </section>

            <section className="section">
                <div className="section-content">
                    <img src={aboutImg} alt="Imagem 2" />
                    <h1>We are dedicated to promoting animal welfare by providing valuable information and resources to make your life with your pet even more rewarding.</h1>
                    <a href="/About">
                        <button> Learn more </button>
                    </a>
                </div>
            </section>

            <section className="section">
                <div className="section-content">
                    <img src={playPets} alt="Imagem 3" />
                    <h1>Connect with us to join a community of pet lovers, share your experiences, and stay updated on the latest trends in pet care.</h1>
                    <a href="/Register">
                        <button> Learn more </button>
                    </a>
                </div>
            </section>

            <section className="section2">
                <div className="section-content2">
                <a href="/About">
                    <img src={playing} alt="Imagem 4" />
                    </a>
                </div>
            </section>

            <section className="section2">
                <div className="section-content2">
                <a href="/About">
                    <img src={catHome} alt="Imagem 5" />
                    </a>
                </div>
            </section>

            <section className="section2">
                <div className="section-content2">
                <a href="/About">
                    <img src={dogOwner} alt="Imagem 6" />
                  </a>
                </div>
            </section>
            
            

</div>

    );
 }

 

function Home() {
    return (
        <div>

            <header className="home-header">
                <h1>Connect with other pet owners</h1>
                <p>Help your dog socialize and make new friends</p>
                <a href="/Register">
                    <button> Sign up now </button>
                </a>
            </header>

            <div className="midle-title">
                <h2> Services We Offer </h2>
            </div>
         


            <Section />

        </div>

    );
}

export default Home;