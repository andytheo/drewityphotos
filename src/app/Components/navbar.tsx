"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="logo">
        <Image 
          src="/images/drewity-logo.png" 
          alt="Drewity Photos" 
          width={120} 
          height={50}
          priority
          style={{ objectFit: 'contain' }}
        />
      </Link>

      {/* Desktop Menu */}
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/#contact">Contact</Link>
      </div>

      {/* Mobile Hamburger */}
      <button className="mobileBtn" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mobileMenu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
