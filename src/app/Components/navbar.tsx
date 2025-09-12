"use client"
import { useState } from "react"
import Link from "next/link"
// import styles from "../CSS/styles.css" // import CSS

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="logo">
        Drewity Photos
      </Link>

      {/* Desktop Menu */}
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/work">My Work</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Mobile Hamburger */}
      <button className="mobileBtn" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mobileMenu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/work" onClick={() => setOpen(false)}>My Work</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
