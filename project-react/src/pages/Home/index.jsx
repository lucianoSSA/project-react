
import './style.css'

function Home() {
  
  const users = [
    {
      id: "2536374hff8",
      name: "Shopping",
      adress: "Pirajá, rua velha",
      contact: 71988245679

    },
    {
      id: "2344444374hff8",
      name: "Estação Metô",
      adress: "Acesso Norte",
      contact: 7198824888

    }
  ]


  return (

    <div className='main'>
      <form action="">
        <h1>Cadastro Ponto de Coleta</h1>
        <input placeholder='Nome do ponto de coleta' name='name' type='text' />
        <input placeholder='Endereço do ponto de coleta' name='adress' type='text' />
        <input placeholder='Número de contato' name='contact' type='number' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user)=>
      
      
      <div key={user.id} className='card'>
        <div>
            <p>Nome do Ponto: <span>{user.name}</span></p>
          <p>Endereço: <span>{user.adress}</span></p>
          <p>Contato: <span>{user.contact}</span></p>
        </div>
        <button>
          X
        </button>
      </div>
      
      )}
      
    </div>

  )
}

export default Home
