import Head from 'next/head'
import UsesJSON from '../../public/uses.json'

const Uses = () => {
  return (
    <>
      <Head>
        <title>Home | Bruno Melo</title>
      </Head>
      <h1>Meu Setup</h1>
      <div className="flex flex-col gap-4">
        {Object.keys(UsesJSON).map((key) => (
          <>
            <h3 key={key}>{key}</h3>
            <ul>
              {
                (UsesJSON as Record<string, string[]>)[key].map((item) =>
                  <li key={item}>{item}</li>
                )
              }
            </ul>
          </>
        )
        )}

      </div>
    </>

  )
}
export default Uses
