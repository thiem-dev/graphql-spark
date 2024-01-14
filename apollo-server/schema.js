const typeDefs = `#graphql
  type Club {
    id: ID!
    image_urls: [String!]!
    title: String!
    price: Float!
    sale_price: Float!
    description: String!
    left_hand: Boolean!
    loft: [Float!]!
    custom_options: String!
  }
  type Query {
    clubs: [Club!]!
    club(id: ID!): Club
  }
`
export default typeDefs