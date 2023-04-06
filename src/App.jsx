import { useState } from 'react'
import './App.css'
import { Http } from './provider'

function App() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState({});
  const [tarefas, setTarefas] = useState([]);

  const logar = async () => {
   await Http.post("logar", {
      nome: nome,
      email: email
    }).then((res) => {
      setUsuario(res.data);
      setTarefas(res.data.tarefas)
    })
  }

  const listaTarefas = tarefas.map(t => {
    return <>
              <li key={t.id}>
                <h5>{t.titulo}</h5>
                <p>{t.descricao}</p>
              </li>
           </>
  })



  return (
    <div className="App">
      <div className="sla">
       <input type="text" onChange={(e) => setNome(e.target.value)} placeholder='Coloque seu nome'/>
       <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Coloque seu email'/>
       <button onClick={() => logar()} >Entrar</button>
      </div>
    <h1>{usuario.nome}</h1>
      <ul>
        {listaTarefas}
      </ul>
    </div>
  )
}

export default App
