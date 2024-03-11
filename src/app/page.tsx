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
          <Link href="/datascript/todos">Datascript Todos</Link>
        </div>
      </div>
    </>
  )
}
