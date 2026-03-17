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
import { GoArrowUpRight } from "react-icons/go";


// Add a default export combining all components
export default function MainPage() {
    return (
        <>
            <div className="land-wrap about-wrap">
                <div className="about-left">
                <span>
                    <img src="landing/logo.png" alt="7ACHE" />
                </span>
                <span>
                    <Link href="/work" className="no-underline flex land-t">
                        <a>Work</a>
                        ↗
                    </Link>
                        <a className="land-t" style={{ textDecoration: 'none', color: 'black' } }>Contact</a>
                        
                    <Link href="/about" className="no-underline flex land-t">
                        <a>About</a>
                        ↗
                    </Link>
                </span>
                </div>
                <div className="contact-right">
                    <span>
                    <input type="text" placeholder="Name"></input>
                    <input type="email" placeholder="Email"></input>
                    </span>
                    <input type="text" placeholder="Message"></input>
                    <button>Send</button>
                </div>
            </div>
        </>
    );
}

// Keep named exports as well