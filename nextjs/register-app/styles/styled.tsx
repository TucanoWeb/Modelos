import styled from "styled-components";

/* HEADER */
export const HeaderContainer = styled.div`
    
    width: 100%;
    height: 50px;
    border: 1px solid black;
    align-items: center;
    display: flex;

`
export const LogotipoStyle = styled.div`
    width: 10%;
    border: 1px solid green;
    flex: 2;
    text-align: center;
`

export const SpaceHeader = styled.div`
    width: 30%;
    border: 1px solid red;
    flex: 4;
`

export const MenuHeader = styled.div`
    width: 60%;
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    flex: 4;

    h1{
        text-transform: uppercase;
        margin-left: 25px;
        cursor: pointer;
    }

    h1:hover{
        text-decoration: underline;
    }
`

/*BLOCO FOOTER */

export const ContainerFooter = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
`


/* BLOCO BODY */

export const ContainerBody = styled.div`
    
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    align-items: center;
    justify-content: center;

`