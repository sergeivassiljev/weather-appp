import { ApolloClient, InMemoryCache } from "@apollo/client";


//export const getClient = () => {
//	let client: ApolloClient<any> | null = null;
	
//	try {
//	  client = new ApolloClient({
//		uri: process.env.API_URL,
//		cache: new InMemoryCache(),
//		headers: {
//		  Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
//		},
//	  });
//	} catch (error) {
//	  // Handle the error if client creation fails
//	  console.error('Failed to create client:', error);
//	}
  
//	return client;
//  };

export const getClient = () => {
	const client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
    },
  });

  return client;
};
