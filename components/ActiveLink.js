import { useRouter } from 'next/router'

export default function ActiveLink ({ children, href, className }) {
    const router = useRouter()
    const style = {
        background: router.asPath === href ? '#BB3A3A' : '',
        color: router.asPath === href ? 'white' : '#474747',
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={ href } onClick={ handleClick } style={ style } className={ className }>
            { children }
        </a>
    )
}