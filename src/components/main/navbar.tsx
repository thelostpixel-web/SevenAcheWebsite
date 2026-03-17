"use client";

import { Twitter, File, ChartCandlestick, Home, Repeat, } from "lucide-react";
import Link from "next/link";
import React from "react";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/ui/dock";
import { useRouter } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { FaFolder } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaRegIdBadge } from "react-icons/fa";
export type IconProps = React.HTMLAttributes<SVGElement>


export function Navbar() {
  const router = useRouter();


  return (
    <div className="nav">
      <Dock direction="middle">
        <DockIcon>
          <Link href={"/"}>
            <GoHomeFill />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"/work"}>
            <FaFolder />
            
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"/contact"}>
            <MdEmail />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"/about"}>
          <FaRegIdBadge />
        </Link>
      </DockIcon>
    </Dock>
    </div >
  );
}
