import { ApolloClient, InMemoryCache } from '@apollo/client';
import {GET_ALBUM, GET_ALL_ALBUMS} from '../GraphQL/queries'

const getAlbumList = async () => {

    console.log('hygraphURI : ', process.env.REACT_APP_HYGRAPH_URI);

    const client = new ApolloClient({
        uri: process.env.REACT_APP_HYGRAPH_URI,
        cache: new InMemoryCache(),
    });

    const data = await client.query( {
        query: GET_ALL_ALBUMS,
    });
    console.log('getAlbumList: ',data);
    return data?.data?.albums;
}

const getAlbum = async (id) => {
    const client = new ApolloClient({
        uri: process.env.REACT_APP_HYGRAPH_URI,
        cache: new InMemoryCache(),
    });

    const data = await client.query( {
        query: GET_ALBUM,
        variables: {id: id},
    });
    return data?.data?.album;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAlbum, getAlbumList };