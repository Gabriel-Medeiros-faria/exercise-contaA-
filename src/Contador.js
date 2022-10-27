import { useState } from "react"
import styled from "styled-components"

export default function Contador(){
    const[sum, setSum] = useState(0)

    return(
        <>
        <Container>
            <Numero>
            {sum}
            </Numero>
            <Buttons>
                <button onClick={()=>setSum(sum - 1)}>-</button>
                <button onClick={()=>setSum(sum + 1)}>+</button>
            </Buttons>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 420px;
align-items: center;

`
const Numero = styled.div`
font-family: 'Roboto';
font-size: 100px;
`
const Buttons = styled.div`
display: flex;
button{
    background-color: #52B6FF;
    font-size: 50px;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: none;
    margin: 5px;
    color: white;
}
`