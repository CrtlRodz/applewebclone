import { Box, Divider, Grid, Link, Typography } from '@mui/material';
import "../../styles/footer.css"
const Footer = () => {
  return (
    <div className="container">
      {/* Paragrahs */}
      <Box>
        <Typography className='paragraph' paragraph>
        1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
        </Typography>
        <Typography className='paragraph' paragraph>
        To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </Typography>
        <Typography className='paragraph' paragraph>
        If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
        </Typography>
        <Typography className='paragraph' paragraph>
        Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
        </Typography>
        <Typography className='paragraph' paragraph>
        A subscription is required for Apple TV+.
        </Typography>
        <Divider orientation="horizontal" variant="fullWidth" />
      </Box>
      {/* List of links and shortcuts */}
      {/* Lower footer */}
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
          <Grid container spacing={2}  >
            <Grid item >
            <Link className='footer-links'  href="#" underline="hover">Privacy Policy     </Link>
            </Grid>

            <Grid item>
            <Link className='footer-links' href="#" underline="hover" >Terms of Use     </Link>
            </Grid>

            <Grid item>
            <Link className='footer-links' href="#" underline="hover" >
                Sales and Refunds     </Link>
            </Grid>

            <Grid item>
            <Link  className='footer-links' href="#" underline="hover" >Legal     </Link>
            </Grid>

            <Grid item>
            <Link className='footer-links' href="#" underline="hover" >
                Site Map
                </Link>
            </Grid>
          </Grid>
        </div>

        <div className="col p-2 d-flex justify-content-end">
          <Link href="#" underline="hover"  className='footer-links'>
            United States
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Footer;
