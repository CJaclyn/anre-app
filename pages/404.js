import Link from 'next/link'
export default function Custom404() {
    return (
        <div className="not-found">
            <h1>落</h1>
            <h2>404</h2>
            <p>The page you are looking for could not be found.</p>
            <Link href="/">
                <a className="button">Return Home</a>
            </Link>
        </div>
    )
  }
  