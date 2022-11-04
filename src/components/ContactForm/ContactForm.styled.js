import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
outline: 1px solid black;
padding: 20px;
`

export const Label = styled.label`
display: flex;
flex-direction: column;
font-weight: 600;

`
export const Input = styled.input`
width: 200px;
margin-bottom: 20px;
margin-top: 10px;
border-color: whitesmoke;
outline: transparent;
border-radius: 4px;
height: 20px;
:focus{
    box-shadow: 10px 5px 5px lightblue;
}
`

export const Button = styled.button`
width: 100px;
border-radius: 4px;
background-color: transparent;
border-color: whitesmokes;
:focus{
    box-shadow: 10px 5px 5px lightblue;
}
`