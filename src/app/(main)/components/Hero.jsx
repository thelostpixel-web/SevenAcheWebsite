"use client";
import MorphingText from "../../../components/ui/morphing-text";
import InteractiveHoverButton from "../../../components/ui/interactive-hover-button";
import Particles from "../../../components/ui/particles"
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";
import { toast } from "sonner";
import { Section } from "lucide-react";


export default function Hero({contractAddress}) {
    function copy() {
        try {
            navigator.clipboard.writeText(contractAddress)
            toast.success("Copied CA to clipboard")
        } catch (error) {
            toast.error("Failed to copy to clipboard")
        }
    }

    return (

        <>
            <div className="flex flex-col items-center justify-center flex-wrap bg-black w-full h-full">
            </div>

        </>

    );
}