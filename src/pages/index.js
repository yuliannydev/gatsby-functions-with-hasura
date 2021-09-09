import React, { useState } from "react"

const IndexPage = () => {
  const [email, setEmail] = useState(``);
  const submit = (event) => {
    event.preventDefault();
    setEmail(``);
    console.log({ email });
  }
  return (
    <main>
      <title>Gatsby Functions with Hasura</title>
      <h1>Gatsby Functions with Hasura</h1>
      <form onSubmit={submit}>
        <input 
        value={email} 
        onChange={(event) => {setEmail(event.target.value)}}/>
        <button type="submit">
          Submit
        </button>
      </form>
    </main>
  )
}

export default IndexPage
