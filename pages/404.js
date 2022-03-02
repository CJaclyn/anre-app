import Link from 'next/link'
import HeaderNav from '../components/HeaderNav'

export default function Custom404() {
    return (
        <div className="not-found">
            <header>
                <HeaderNav />
            </header>
            <main>
                <h1>You&apos;re away from home.</h1>
                <h2>404</h2>
                <p>The page you are looking for could not be found.</p>
                <Link href="/">
                    <a className="button">Return Home</a>
                </Link>
                <img src="/neighborhood.png" alt="" width="1000"/>
            </main>

        </div>
    )
  }
  