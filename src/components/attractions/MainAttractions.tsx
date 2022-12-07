import { Badge, Card, CardContent, CardMedia, Theme, Typography } from '@mui/material';
import { Container, SxProps } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';
import { Link } from 'react-router-dom';
import { links } from './attractions.mockData';

const sx: Record<string, SxProps<Theme>> = {
  cardContent: {
    padding: 2,
  },
  cardMedia: {
    borderBottom: '1px solid lightgray',
  },
};

export function MainAttractions() {
  return (
    <Container>
      <Typography sx={sx.heading} variant="h2">
        Navigation
      </Typography>

      <Grid container spacing={2}>
        {links.map((link) => (
          <Grid xs={4}>
            <Link to={link.to}>
              <Card sx={sx.gridItem}>
                <CardMedia
                  alt={`Image of ${link.name}`}
                  component="img"
                  height={90}
                  image={link.image}
                  sx={sx.cardMedia}
                />
                <CardContent sx={sx.cardContent}>
                  <Badge badgeContent="beta" color="secondary" invisible={!link.isBeta}>
                    <Typography variant="subtitle1">{link.name}</Typography>
                  </Badge>
                  <Typography variant="body2">{link.description}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
