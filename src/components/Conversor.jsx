import { useState } from "react"
import './Conversor.css'

const Conversor = (props) => {
    const [valorA, setValorA] = useState("")
    const [valorB, setValorB] = useState(0)

    function converter(){
        let de_para = `${props.moedaA}_${props.moedaB}`
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=${process.env.REACT_APP_CONVERSOR_API_KEY}`
        fetch(url).then(res => {
            return res.json()
        }).then(json => {
            let cotacao = json[de_para]
            let valorB = (parseFloat(valorA) * cotacao).toFixed(2)
            setValorB(valorB) 
        })
    }

    return(
        <div className="conversor">
            <h2>{props.moedaA} para {props.moedaB}</h2>
            <input type="text"
                onChange={(e) => {
                    setValorA(e.target.value)
                }}
            />               
            <button onClick={converter}>Converter</button>
            <h2>valor convertido = {valorB}</h2>
        </div>
    )
}

export default Conversor