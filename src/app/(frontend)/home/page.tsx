import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="mb-8">This is a simple home page example.</p>
      <Link href="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </Link>
    </div>
  )
}
