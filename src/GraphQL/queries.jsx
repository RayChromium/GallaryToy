import { gql } from '@apollo/client';

const GET_ALL_ALBUMS = gql`
query Albums {
    albums {
      id
      title
      thumbnail {
        id
        url
      }
    }
  }
`;

const GET_ALBUM = gql`
query Albums ($id: ID!){
    album(where: {id: $id}) {
      thumbnail {
        url
      }
      tags {
        ... on Tag {
          tagName
        }
      }
      description
      id
      publishedAt
      title
      images {
        url
        id
      }
    }
  }
`;

export {
    GET_ALL_ALBUMS,
    GET_ALBUM,
};