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
            <div className="work-wrap">
                <div className="land-left">
                    <span>
                        <img src="landing/logo.png" alt="7ACHE" />
                    </span>
                    <span>
                    <a className="land-t" style={{ textDecoration: 'none', color: 'black' } }>Work</a>
                        <Link href="/contact" className="no-underline flex land-t">
                            <a>Contact</a>
                            ↗
                        </Link>
                        <Link href="/about" className="no-underline flex land-t">
                            <a>About</a>
                            ↗
                        </Link>
                    </span>
                </div>
                <div className="land-right">
                    <Link href="/studiofox" className="no-underline">
                        <span>
                            <a>Studio fox</a>
                            <a>Full brand</a>
                        </span>
                    </Link>
                    <Link href="/tcsound" className="no-underline">
                        <span>
                            <a>TCS</a>
                            <a>Full brand</a>
                        </span>
                    </Link>
                    <Link href="/parade" className="no-underline">
                        <span>
                            <a>Parade Tattoo Parlour</a>
                            <a>Site and assets</a>
                        </span>
                    </Link>
                    <Link href="/southwark" className="no-underline">
                        <span>
                            <a>Southwark Supertram</a>
                            <a>B2B brand</a>
                        </span>
                    </Link>

                </div>
            </div>
        </>
    );
}

// Keep named exports as well