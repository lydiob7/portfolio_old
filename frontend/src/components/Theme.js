import React, {useState, useEffect} from 'react'
import {ThemeProvider} from 'styled-components'

const Theme = ( { children, color } ) => {
    const dark = {
        color: {
            main: '#1E1E1E',
            mainLight: '#383838',
            secondary: '#6832a8',   
            secondaryLight: '#9a48fa',
            tertiary: 'black',   
            tertiaryLight: 'rgba(0,0,0,.85)'   
        },
        font: {
            primary: "'Roboto', sans-serif",
            color: "white"
        },
        bioImg: "'https://res.cloudinary.com/tomiscattini/image/upload/v1609976839/Portfolio/background-vsc_nbsysf.png'",
        device: {
            lgPhone: '(min-width: 426px)',
            tablet: '(min-width: 769px)',
            laptop: '(min-width: 1025px)',
            desktop: '(min-width: 1200px)'
        }
    }

    const light = {
        color: {
            main: 'white',
            mainLight: 'white',
            secondary: 'gray',   
            secondaryLight: 'gray',
            tertiary: 'white',
            tertiaryLight: 'rgba(255,255,255,.9)'      
        },
        font: {
            primary: "'Roboto', sans-serif",
            color: "black"
        },
        bioImg: "'https://res.cloudinary.com/tomiscattini/image/upload/v1610302672/Portfolio/background-vsc-white_kdsjxj.png'",
        device: {
            lgPhone: '(min-width: 426px)',
            tablet: '(min-width: 769px)',
            laptop: '(min-width: 1025px)',
            desktop: '(min-width: 1200px)'
        }
    }
    const [colorTheme, setColorTheme] = useState(dark)

    useEffect(()=>{
        switch(color) {
            case 'light':
                setColorTheme(light)
                break
            default:
                setColorTheme(dark)
                break
        }
    }, [color])


    return (
        <ThemeProvider theme={colorTheme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme