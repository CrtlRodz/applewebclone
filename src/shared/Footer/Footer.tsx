import { Box, Divider, Grid, Link, Typography } from '@mui/material';
import "../../styles/footer.css"
const Footer = () => {
  return (
    <div className="container">
      <div className="row align-items-start">
      <Box sx={{p:1}}>
        <Divider orientation="horizontal" variant="fullWidth" />
         </Box>
        <div className="col p-2">
          <Typography className='copyRight'>
            Copyright © 2023 Apple Inc. All rights reserved.
          </Typography>
        </div>

        <div className="col p-2">
          <Grid container spacing={2} >
            <Grid item>
            <Link href="#" underline="hover" className='links'>Privacy Policy     </Link>
            </Grid>

            <Grid item>
            <Link href="#" underline="hover" className='links'>Terms of Use     </Link>
            </Grid>

            <Grid item>
            <Link href="#" underline="hover" className='links'>
                Sales and Refunds     </Link>
            </Grid>

            <Grid item>
            <Link href="#" underline="hover" className='links'>Legal     </Link>
            </Grid>

            <Grid item>
            <Link href="#" underline="hover" className='links'>
                Site Map
                </Link>
            </Grid>
          </Grid>
        </div>

        <div className="col p-2 d-flex justify-content-end">
          <Link href="#" underline="hover" className='links'>
            United States
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Footer;
