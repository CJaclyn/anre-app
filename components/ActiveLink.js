import { useRouter } from 'next/router'

export default function ActiveLink ({ children, href, className }) {
    const router = useRouter()
    const style = {
        background: router.asPath === href ? '' : '',
        color: router.asPath === href ? 'white' : ''
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