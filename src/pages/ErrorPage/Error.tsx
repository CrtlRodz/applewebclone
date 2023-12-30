import React from 'react';
import { Container, Card, CardContent, Typography, Box, Link } from '@mui/material';
import SearchField from '../../components/searchField';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ErrorPage: React.FC = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Box sx={{p:10}} className=" text-center">
        <CardContent>
          <Typography variant="h2">
            The page you’re looking
          </Typography>
          <Typography variant="h2">
            for can’t be found.
          </Typography>
          <Box  sx={{ display: 'flex', alignItems: 'flex-end', pl: 1 }}>
            <SearchField
              label="Search apple.com"
              variant="filled"
              fullWidth
              style={{ marginTop: 11 }}
            />
          </Box>
          <Box sx={{p:2}}>
          <Link href="#"  underline="hover">Or see our site map<KeyboardArrowRightIcon/> </Link>
          </Box>
        </CardContent>
      </Box>
    </Container>
  );
};

export default ErrorPage;
