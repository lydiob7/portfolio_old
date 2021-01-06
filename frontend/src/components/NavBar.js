import React from 'react'
import styled from 'styled-components'

const NavBarStyled = styled.div`
    height: 60px;
    width: 100vw;
    background-color: black;
    color: white;
`

const NavBar = () => {
    return (
        <NavBarStyled>
            <h1>Tomi</h1>
        </NavBarStyled>
    )
}

export default NavBar
