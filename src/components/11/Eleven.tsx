import { Box, CircularProgress, Container, Stack } from '@mui/material';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { isCats } from './Eleven.types';
import { Header } from './Header';

export function Eleven() {
  const navigation = useNavigation();
  const data = useLoaderData();

  if (navigation.state === 'loading' || !data || !isCats(data)) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Header />

      <Container>
        <Stack spacing={2}>
          {data.map((cat: { id: string; url: string }) => (
            <img key={cat.id} alt="Cat" src={cat.url} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
