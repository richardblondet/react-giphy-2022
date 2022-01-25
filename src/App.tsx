import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useFetch from 'use-http';
import { useDebounce } from 'use-debounce';

import SearchInput from './components/SearchInput';
import Logo from './components/Logo';
import Loading from './components/Loading';
import GifsList from './components/GifsList';

// this should come from process.env. but we'll allow it
const GIHPY_API_KEY = 'gCiS0PvW4dTtFA9OeyoAPJb5NeoQO1Ek';

export default function App() {
  const [searchText, setSearchText] = React.useState('');
  const [showingText, setShowingText] = React.useState('');
  const [debouncedText] = useDebounce(searchText, 500);
  const [gifs, setGifs] = React.useState([]);
  const {
    get, response, loading,
  } = useFetch('https://api.giphy.com/v1/gifs', { data: [] });

  const loadTrendingGifs = async (limit = 22) => {
    const { data } = await get(`/trending?api_key=${GIHPY_API_KEY}&limit=${limit}`);

    if (response.ok) {
      setGifs(data);
      setShowingText('Trending Gifs');
    }
  };

  const queryGifs = async (query: string) => {
    const { data } = await get(`/search?api_key=${GIHPY_API_KEY}&q=${query}`);

    if (response.ok) {
      setGifs(data);
      setShowingText(`Showing results of: ${searchText}`);
    }
  };

  React.useEffect(() => {
    loadTrendingGifs();
  }, []);

  React.useEffect(() => {
    if (debouncedText) {
      queryGifs(debouncedText);
    }
  }, [debouncedText]);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Logo />
        <SearchInput
          id="search-input"
          value={searchText}
          onChange={(e: any) => setSearchText(e.target.value)}
          loadTrending={() => {
            setSearchText('');
            loadTrendingGifs();
          }}
          onSearchClick={() => queryGifs(searchText)}
        />
        { loading ? <Loading /> : <GifsList gifs={gifs} source={showingText} /> }
      </Box>
    </Container>
  );
}
