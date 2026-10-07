import { useState } from "react";
import "./index.scss";

function Contato() {
    const [descricao1, setDescricao1] = useState("I LOVE ROBÃO 🖤");
    const [descricao2, setDescricao2] = useState("robão is the best");
    const [textoH2, setTextoH2] = useState("");

    const [cor, setCor] = useState("");

    const [var1, setVar1] = useState(true);

    const [num1Soma, setNum1Soma] = useState("");
    const [num2Soma, setNum2Soma] = useState("");
    const [num1Subtracao, setNum1Subtracao] = useState("");
    const [num2Subtracao, setNum2Subtracao] = useState("");
    const [num1Multiplicacao, setNum1Multiplicacao] = useState("");
    const [num2Multiplicacao, setNum2Multiplicacao] = useState("");
    const [num1Divisao, setNum1Divisao] = useState("");
    const [num2Divisao, setNum2Divisao] = useState("");
    const [respSoma, setRespSoma] = useState("");
    const [respSubtracao, setRespSubtracao] = useState("");
    const [respMultiplicacao, setRespMultiplicacao] = useState("");
    const [respDivisao, setRespDivisao] = useState("");

    function mudarH1(e) {
        setDescricao1(e.target.value);
    }

    function mudarH2(e) {
        setTextoH2(e.target.value);
    }

    function alterarH2() {
        setDescricao2(textoH2);
    }

    function alterarcor(e) {
        setCor(e.target.value);
    }

    function mudarcheck(e) {
        setVar1(e.target.checked ? "sim" : "não");
    }

    function somar() {
        let soma = Number(num1Soma) + Number(num2Soma);
        setRespSoma(soma);
    }

      function subtrair() {
        let subtracao = Number(num1Subtracao) - Number(num2Subtracao);
        setRespSubtracao(subtracao);
    }

      function multiplicar() {
        let multiplicacao = Number(num1Multiplicacao) * Number(num2Multiplicacao);
        setRespMultiplicacao(multiplicacao);
    }

     function dividir() {
        let divisao = Number(num1Divisao) / Number(num2Divisao);
        setRespDivisao(divisao);
    }

    return (
        <div className="contador" style={{ backgroundColor: cor }}>

            <section className="secao-titulo">

                <h1>{descricao1}</h1>

                <input
                    type="text"
                    value={descricao1}
                    onChange={mudarH1}
                />

            </section>


            <section className="h2">

                <h2>{descricao2}</h2>

                <input
                    type="text"
                    value={textoH2}
                    onChange={mudarH2}
                    placeholder="Digite algo para o H2"
                />

                <button onClick={alterarH2}>
                    Mudar H2
                </button>

            </section>


           <input
    type="color"
    value={cor || "#211714"}
    onChange={alterarcor}
/>


            <section className="programacao">

                <h1>Gosta de Programar?</h1>

                <input
                    type="checkbox"
                    onChange={mudarcheck}
                />

                <h2>{var1}</h2>

            </section>


            <section className="calculadora">

                <hr />

                <h2>Soma</h2>

                <input
                    type="text"
                    value={num1Soma}
                    onChange={(e) => setNum1Soma(e.target.value)}
                    placeholder="Número 1"
                />

                <input
                    type="text"
                    value={num2Soma}
                    onChange={(e) => setNum2Soma(e.target.value)}
                    placeholder="Número 2"
                />

                <div>
                    =
                </div>

                <h2>{respSoma}</h2>

                <button onClick={somar}>
                    Somar
                </button>

            </section>


              <section className="calculadora">

                <hr />

                <h2>Subtração</h2>

                <input
                    type="text"
                    value={num1Subtracao}
                    onChange={(e) => setNum1Subtracao(e.target.value)}
                    placeholder="Número 1"
                />

                <input
                    type="text"
                    value={num2Subtracao}
                    onChange={(e) => setNum2Subtracao(e.target.value)}
                    placeholder="Número 2"
                />

                <div>
                    =
                </div>

                <h2>{respSubtracao}</h2>

                <button onClick={subtrair}>
                    subtração
                </button>

            </section>


               <section className="calculadora">

                <hr />

                <h2>Multiplicação</h2>

                <input
                    type="text"
                    value={num1Multiplicacao}
                    onChange={(e) => setNum1Multiplicacao(e.target.value)}
                    placeholder="Número 1"
                />

                <input
                    type="text"
                    value={num2Multiplicacao}
                    onChange={(e) => setNum2Multiplicacao(e.target.value)}
                    placeholder="Número 2"
                />

                <div>
                    =
                </div>

                <h2>{respMultiplicacao}</h2>

                <button onClick={multiplicar}>
                   multiplicação
                </button>

            </section>



               <section className="calculadora">

                <hr />

                <h2>divisão</h2>

                <input
                    type="text"
                    value={num1Divisao}
                    onChange={(e) => setNum1Divisao(e.target.value)}
                    placeholder="Número 1"
                />

                <input
                    type="text"
                    value={num2Divisao}
                    onChange={(e) => setNum2Divisao(e.target.value)}
                    placeholder="Número 2"
                />

                <div>
                    =
                </div>

                <h2>{respDivisao}</h2>

                <button onClick={dividir}>
                   divisão
                </button>

            </section>

        </div>
    );
}

export default Contato;