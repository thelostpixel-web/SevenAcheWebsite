"use client";
import React from "react";
import { FaSpotify, FaInstagram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSoundcloud } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { SpinningText } from "@/components/ui/spinning-text";
import { ImSoundcloud2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { Navbar } from "@/components/main/navbar";


// Add a default export combining all components
export default function MainPage() {
    return (
        <>
            <Navbar />
            <div className="c-wrap">
                <section className="p-title">
                    <h1>Southwark Supertram</h1>
                    <span className="t-line"></span>
                </section>

                <section className="p-desc">
                    <h2>
                        Urban movement reimagined
                    </h2>
                    <a>
                        A brand built to connect people, places, and possibility across one of London’s most dynamic boroughs.
                        <br></br>
                        <br></br>
                        Commissioned by a group of architects, transport planners, and real estate professionals, Southwark Supertram set out to transform how residents and visitors move across the city. The aim was to link hospitals, shopping destinations, and leisure hubs through an accessible, modern tram network.
                        <br></br>
                        <br></br>
                        The identity system brings confidence and clarity to urban mobility. A bold wordmark and directional symbol capture the momentum of the project, a reflection of Southwark’s vibrant character and progressive spirit. Supported by a unified typographic system and way-finding assets, the brand was designed to inspire trust and attract investor confidence.
                    </a>
                </section>

                <section className="p-images">
                    <div className="img-dbl">
                        <video autoPlay loop muted playsInline><source src="southwark/finalloop.mp4" type="video/mp4" /></video>
                        <img src="southwark/sstwall.png" alt="Southwark Supertram" />
                    </div>
                    <div className="img-bg-r">
                        <img src="southwark/sstwebsite.png" alt="Southwark Supertram" />
                    </div>
                    <div className="img-dbl">
                        <video autoPlay loop muted playsInline><source src="southwark/SST_Everett_LOOPED_1.mp4" type="video/mp4" /></video>
                        <img src="southwark/hand.png" alt="Southwark Supertram" />
                    </div>
                    <img src="southwark/sstapp.png" alt="Southwark Supertram" />
                    <div className="img-dbl">
                        <img src="southwark/tram_line.png" alt="Southwark Supertram" />
                        <img src="southwark/markings.png" alt="Southwark Supertram" />
                    </div>
                    <img src="southwark/blind_markings.png" alt="Southwark Supertram" />
                    <div className="foot-nav">
                        <a>Next Project</a>
                        <a>Studio Fox</a>
                        <a></a>
                        <Link href="/studiofox" className="no-underline flex">
                            <GoArrowRight />
                        </Link>

                    </div>
                </section>
            </div>
        </>
    );
}

// Keep named exports as well