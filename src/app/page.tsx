import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Link href="/counter">Counter</Link>
        </div>
        <div>
          <Link href="/swr">SWR</Link>
        </div>
        <div>
          <Link href="/datascript">Datascript</Link>
        </div>
      </div>
    </>
  )
}
