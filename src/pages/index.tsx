import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href={"/home"}>Home</Link>
      </li>
      <li>
        <Link href={"/login"}>Login</Link>
      </li>
    </ul>
  )
}
