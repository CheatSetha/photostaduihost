'use client'
import {useTheme} from "next-themes";
import React, {useEffect, useState} from "react";

export function BtnThemeToggle() {

    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)

    }, [])
    if (!mounted) return null
    const toggleTheme = (e) => {

        //TODO check if input is checked set theme to dark else set theme to light
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (

        <label className="switch">
            <input onChange={(e) => toggleTheme(e)} type="checkbox"/>
            <span class="slider"></span>
        </label>

    )
}