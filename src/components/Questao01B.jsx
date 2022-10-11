export default function Questao01B() {
  const disciplinas = ["FUP", "Estruturas de Dados", "Introdução à Computação"];

 
    return <>
    <br/>
    <strong>
      Disciplinas: 
    </strong>
      {disciplinas.map((disciplina)=>
        <div key={disciplina}>  {"- "+disciplina}<br/></div>
      )}
    </>
  
} 