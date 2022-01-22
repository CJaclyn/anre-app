import { useState, useEffect } from 'react';
import classNames from "classnames";

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};


export default function Cursor () {
    const [position, setPosition] = useState({ mouseX: 0, mouseY: 0 });
    const [clicked, setClicked] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    //remove custom cursor if mobile
    if (typeof navigator !== "undefined" && isMobile()) return null;

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
        setPosition({ mouseX: e.clientX, mouseY: e.clientY});
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a").forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const cursorClasses = classNames("cursor", {
        "cursor--clicked": clicked,
        "cursor--hidden": hidden,
        "cursor--link-hovered": linkHovered
    });

    return (
        <div
            className={cursorClasses}
            style={{ left: `${position.mouseX}px`, top: `${position.mouseY}px` }}
        />
    );
}