import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/terms">Terms & Conditions</Link>
      </nav>
    </footer>
  )
}