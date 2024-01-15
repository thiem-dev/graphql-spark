import { useQuery, gql } from '@apollo/client'

const PgGraphql = () => {

    const GET_CLUBS = gql `
       query CLUBS {
            clubs {
                id
                description
            }
        }
    `

    const {loading,error,data} = useQuery(GET_CLUBS);

    if(loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>;
  

    return (
        <div>
        <h1>Clubs</h1>
        <ul>
            {data.clubs.map((club) => (
            <div key={club.id}>
                <li>{club.id}</li>
                <li>{club.description}</li>
            </div>
            ))}
        </ul>
        </div>
    )
}

export default PgGraphql