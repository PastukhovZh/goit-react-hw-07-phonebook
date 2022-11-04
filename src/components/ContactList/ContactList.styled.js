import styled from "styled-components";

export const FriendList = styled.ul`
display: flex;
width: 300px;
flex-direction: column;
`
export const FriendItem = styled.li`
display: flex;
margin-bottom: 10px;
align-items: center;
justify-content: space-between;
outline: 1px solid black;
border-radius: 4px;
padding: 0 10px;
`

export const Button = styled.button`
width: 50px;
height: 30px;
border-radius: 4px;
background-color: transparent;
border-color: whitesmokes;

:focus{
    box-shadow: 10px 5px 5px lightblue;
}
`
export const Wrap = styled.div`
display: flex;
flex-direction: row;

`
export const Item = styled.p`
margin-right:10px
`