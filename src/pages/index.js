import React, { useState } from "react"

const IndexPage = () => {
  const [email, setEmail] = useState(``);
  const submit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://sincere-heron-48.hasura.app/v1/graphql`, {
      method: `POST`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation Insert_User($email: String) {
            insert_User_one(object: {
              email: $email
            }) {
              email
            }
          }
          `,
          variables: {
            email
          },
      }),
    })
    await response.json();
    setEmail(``);
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
