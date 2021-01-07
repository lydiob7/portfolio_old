import React from 'react'
import {ThemeProvider} from 'styled-components'

const Theme = ( { children } ) => {
    const theme = {
        color: {
            main: '#1E1E1E',
            mainLight: '#383838',
            secondary: '#6832a8',   
            secondaryLight: '#9a48fa'   
        },
        font: {
            primary: "'Bebas Neue', sans-serif",
            secondary: "'Quicksand', sans-serif"
        },
        device: {
            lgPhone: '(min-width: 426px)',
            tablet: '(min-width: 769px)',
            laptop: '(min-width: 1025px)',
            desktop: '(min-width: 1200px)'
        }
    }

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme