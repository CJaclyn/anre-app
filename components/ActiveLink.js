import { useRouter } from 'next/router'

export default function ActiveLink ({ children, href, className}) {
    const router = useRouter()
    const highlight = {
        border: router.asPath === href ? 'white solid 1px' : '',
        color: router.asPath === href ? 'white' : '#474747',
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={ href } onClick={ handleClick } style={ highlight } className={ className }>
            { children }
        </a>
    )
}