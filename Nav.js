import React, { useState } from 'react'
import Link from 'next/link'
import ActiveLink from './components/ActiveLink'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import menuAlt3 from '@iconify/icons-heroicons-outline/menu-alt-3'

export default function Nav () {
    const [showMenu, setShowMenu] = useState(false);

    const menuIconStyle = {
        color: showMenu === true ? 'white' : '#BB3A3A'
    }

    const menuStyle = {
        left: showMenu === true ? '0' : '100%'
    }

    return (
        <nav className="main-nav">           
            <div className="nav-container">
                <div className="nav-logo">
                    <Link href="/">
                        <Image 
                            src="/andy_nguyen_real_estate_logo.svg" 
                            alt="andy nguyen real estate"
                            layout="fill"
                            className="nav-logo"
                        />
                    </Link>
                </div> 
                <div className="nav-right">
                    <div className="nav-links">
                        <ActiveLink href="/" className="nav-link">
                            Home
                        </ActiveLink>
                        <ActiveLink href="/properties" className="nav-link">
                            Properties
                        </ActiveLink>
                        <ActiveLink href="/" className="nav-link">
                            About
                        </ActiveLink>
                        <ActiveLink href="/" className="nav-link">
                            Contact
                        </ActiveLink>
                    </div>
                    <a 
                        href="https://www.facebook.com/pages/category/Real-Estate-Agent/Andy-Nguyen-Real-Estate-Inc-102133454501876/" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon icon="brandico:facebook" color="#ffff" />
                    </a>
                    <Icon 
                        icon={ menuAlt3 } 
                        onClick={ () => setShowMenu(!showMenu) }
                        className="nav-menu-icon"
                        style={ menuIconStyle } 
                    />
                </div>
            </div>

            <div className="mobile-nav" style={ menuStyle }>
                <div className="mobile-nav-items">
                    <Link href="/">
                        <a onClick={ () => setShowMenu(!showMenu) }>Home</a>
                    </Link>
                    <Link href="/properties">
                        <a onClick={ () => setShowMenu(!showMenu) }>Properties</a>
                    </Link>
                    <Link href="/">
                        <a onClick={ () => setShowMenu(!showMenu) }>About</a>
                    </Link>
                    <Link href="/">
                        <a onClick={ () => setShowMenu(!showMenu) }>Contact</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}