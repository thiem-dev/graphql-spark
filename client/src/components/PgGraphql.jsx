import { useQuery, gql } from '@apollo/client'
import CustomOptions from './CustomOptions';

const PgGraphql = () => {

    const GET_CLUBS = gql `
       query CLUBS {
        clubs {
            id
            image_urls
            title
            price
            sale_price
            description
            left_hand
            loft
            custom_options
        }
        }
    `

    const {loading,error,data} = useQuery(GET_CLUBS);

    if(loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>;
  
    // console.log(data.clubs)
    // console.log(JSON.parse(data.clubs.custom_options))

    return (
        <div>
        <h1>Clubs</h1>
        <ul>
            {data.clubs.map((club) => (
            
            <div key={club.id}>
                <p>{club.id} - {club.title}</p>
                <p>{club.description}</p>
                <p>{club.image_urls}</p>
                <p>{club.price}</p>
                <p>{club.sale_price}</p>
                <p>{club.loft}</p>
                <CustomOptions custom_options={club.custom_options}/>
            </div>
            ))}
        </ul>
        </div>
    )
}

export default PgGraphql