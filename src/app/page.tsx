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
        <div>
          <Link href="/datascript/users">Datascript Users</Link>
        </div>
        <div>
          <Link href="/rxdb/users">RxDB Users</Link>
        </div>
      </div>
    </>
  )
}
