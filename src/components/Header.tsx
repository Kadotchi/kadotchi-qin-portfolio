import Link from 'next/link'
import sample from '@/pages/sample'

export default function Header(props: string) {
  return (
    <div>
      <h1>{props.header}</h1>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/portfolio'>
        <a>Portfolio</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
    </div>
  )
}
