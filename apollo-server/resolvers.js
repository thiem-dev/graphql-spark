import pg from "pg"
import dotenv from 'dotenv'

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const resolvers = {
    Club: {
        custom_options: (club) => {
            return JSON.stringify(club.custom_options)
        }
    },
    Query: {
      clubs: async () => {
        const result = await pool.query('SELECT * FROM club');
        return result.rows;
      },
      club: async (_, { id }) => {
        const result = await pool.query('SELECT * FROM club WHERE id = $1', [id]);
        return result.rows[0];
      },
    Mutation: InsertClub($input : ClubInput!){
      insertClub(input: $input){
        id
        imageUrls
        title
        price
        salePrice
        description
        
      }
    }
    }
  };



export default resolvers