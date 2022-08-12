import Link from 'next/link'
import sample from '@/pages/sample'

export default function Header(props: string) {
  return (
    <div>
      <h1>{props.header}</h1>
      {/* <Link href={/about}><a>About</a></Link> */}
    </div>
  )
}
