import styled from 'styled-components'
import artwork from '../assets/artwork.png'

export const LoginPage = styled.div`
    background-color: #1d1d1d;
    height: 100vh;
    display: flex;
    overflow-x: hidden;
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
    font-family: 'Raleway', sans-serif;
    @media (max-width: 1000px) {
        font-size: small;
    }
        @media (max-width: 800px) {
        display: flex;
        justify-content: center;
    }
`
export const ArtPanel = styled.div`
    background-image: url(${artwork});
    width: 100vh;
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 200px;
    @media (max-width: 800px) {
        display: none;
    }
`

export const LoginPanel = styled.div`
    width: 70vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const InputBox = styled.input`
    border: none;
    border-bottom: 2px solid #5E1A8B;
    background: none;
    padding: px;
    width: 100%;
    margin: 5%;
    outline: none;
    color: #C47AD3;
    transition: 0.5s;
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
    font-family: 'Raleway', sans-serif;
    &:hover {
        border-bottom: 2px solid #a45ad6;
    }
    &:focus-visible {
        outline: none;
        border-bottom: 2px solid #a45ad6;
    }
    &::placeholder {
        color: #C47AD3;
    }
`
export const LogBtn = styled.button`
    padding: 2% 5%;
    margin: 10%;
    cursor: pointer;
    background-color: #412753;
    border: none;
    color: #C47AD3;
    transition: 0.5s;
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
    font-family: 'Raleway', sans-serif;
    &:hover {
        background-color: #513268;
    }
    @media (max-width: 1000px) {
        font-size: small;
    }
        @media (max-width: 800px) {
        font-size: smaller;
    }
`

export const LoginSection = styled.div`
    background-color: #221D22;
    padding: 10% 5%;
    border-radius: 5%;
    color: #C47AD3;
    letter-spacing: 2px;
    h1 {
        margin-top: 15%;
        @media (max-width: 1000px) {
        font-size: small;
    }
        @media (max-width: 800px) {
        font-size: smaller;
    }
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20%;
    a {
        width: 100%;
        text-decoration: none;
    }
    }
    p {
        @media (max-width: 1000px) {
        font-size: smaller;
    }
        @media (max-width: 800px) {
        font-size: xx-small;
    }
    }
    .signup {
        font-weight: 700;
        text-decoration: underline;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
            color: #e19fee;
        }
    }
`
