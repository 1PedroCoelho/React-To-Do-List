import { useState, useEffect } from "react"
const Hooks =()=>{


    const[novaIdade, setNovaidade]=useState(40)
    let idade =30
    const MudaIdade =()=>
    {
        idade=31
    }
    const MudaIdadeNova =()=>
    {
        setNovaidade(novaIdade+1)
    }

    useEffect(()=>
    {
        console.log("testando")
    })


    return (
        <div>
            <p>Idade {idade}</p>
            <button onClick={MudaIdade}>Mudar Idade</button>
            <p>Idade {novaIdade}</p>
            <button onClick={MudaIdadeNova}>Mudar nova Idade</button>
        </div>
    )
}
export default Hooks