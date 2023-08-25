import React, { useState, useEffect } from 'react'

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    // preferDarkQuery.matches
    const [mode, setmode] = useState("");

    useEffect(() => {
        const mediaQuerry = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");
        const initialMode = userPref || window.matchMedia(preferDarkQuery).matches ? "dark" : "light";


        const handleChange = () => {
            if (initialMode) {
                let check = userPref === "dark" ? "dark" : "light";
                setmode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                }
                else {
                    document.documentElement.classList.remove("dark")
                }
            } else {
                let check = mediaQuerry.matches ? "dark" : "light";
                setmode(check);

                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                }
                else {
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        handleChange();

        mediaQuerry.addEventListener("change", handleChange)

        return () => mediaQuerry.removeEventListener("change", handleChange)
    }, [])

    useEffect(() => {
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark")
        }
        if(mode=== 'light') {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")
        }
    }, [mode])


    return [mode, setmode]
}

export default useThemeSwitcher