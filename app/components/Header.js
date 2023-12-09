// components/Header.js
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home |</Link>
        <Link href="/aboutme"> About Me |</Link>
        <Link href="/projects"> Projects |</Link>
        <Link href="/contacts"> Contacts</Link>
      </nav>
    </header>
  )
}
