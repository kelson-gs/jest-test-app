import { useEffect, useState } from 'react'

export default function Login(){
  const[email, setEmail] = useState<string>('');
  const[password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    if( email.length !== 0 && password.length !== 0){
      return console.log(email, password);
    }
  }

  return(
    <div>
      <h1>Login...</h1>

      <form>
        <input type="email" />
        <input type="password"/>

        <button onClick={() => handleSubmit()}>Entrar</button>
      </form>
    </div>
  )
}