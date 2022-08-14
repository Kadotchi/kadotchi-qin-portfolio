import Link from 'next/link'
import styles from './Header.module.css'

type header = {
  title: string
}

export default function Header(props: header) {
  const { title } = props
  return (
    <header className='flex justify-between max-w-screen-lg my-5 mx-auto py-0 px-'>
      <h1 className=' text-lg'>
        <Link href='/'>
          <a>{title}</a>
        </Link>
      </h1>
      <nav>
        <ul className='flex text-lg uppercas list-none'>
          <li className='ml-9'>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li className='ml-9'>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li className='ml-9'>
            <Link href='/portfolio'>
              <a>Portfolio</a>
            </Link>
          </li>
          <li className='ml-9'>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
