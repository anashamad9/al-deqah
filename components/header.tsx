"use client"

import type { ComponentProps } from "react"

import NavBar from "@/components/nav-bar"

export type HeaderProps = ComponentProps<typeof NavBar>

export default function Header(props: HeaderProps) {
  return (
    <>
      <NavBar {...props} />
      <div aria-hidden className="h-[72px] w-full md:h-[76px]" />
    </>
  )
}
