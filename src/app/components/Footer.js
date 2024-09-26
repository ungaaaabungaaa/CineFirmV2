import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image src="/logo.png" alt="Company Logo" width={150} height={50} />
      </Link>
    </header>
  )
}