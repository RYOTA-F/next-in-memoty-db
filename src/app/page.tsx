import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center p-40">
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
    </main>
  )
}
