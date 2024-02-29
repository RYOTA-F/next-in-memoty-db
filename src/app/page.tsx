import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center p-40">
      <Link href="/counter">Counter</Link>
    </main>
  )
}
