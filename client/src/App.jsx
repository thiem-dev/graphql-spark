import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PgGraphql from './components/PgGraphql'


const client = new ApolloClient({
  uri: 'https://grapql-spark.onrender.com/graphql',
  cache: new InMemoryCache(),
})

const App = () => {

  return (
    <>
    <ApolloProvider client={client}>
      <h1>Testing GraphQL</h1>
      <PgGraphql/>
    </ApolloProvider>
    </>
  )
}

export default App
