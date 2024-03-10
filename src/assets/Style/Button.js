import styled from "styled-components";

export const Button = styled.button`
    text-decoration: none;
    background-color: #C1D224;
    max-width: auto;
    color: black;
    padding: 1.4rem 2.4rem;
    font-weight: 500;
    font-size: 1.4rem;
    border: none;
    border-Radius: 10px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;

    &:hover,
    &:active {
        box-shadow: 0 2rem 2rem 0 rgb(132 122 0 / 30%);
        box-shadow: ${({ theme }) => theme.grey}
        transform: scale(0.96);
    }

    a{
        text-decoration: none;
        color: black;
        font-size 1.8rem;
    }
`
