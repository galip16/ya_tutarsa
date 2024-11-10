import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';  // "react-dom/client" ile import edilmelidir
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000', // GraphQL sunucunuzun URI'sı
  cache: new InMemoryCache(),
});

// Yeni createRoot API'sini kullanın
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
