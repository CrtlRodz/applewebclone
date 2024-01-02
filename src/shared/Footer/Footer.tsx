import React from 'react';
import { Box, Divider, Grid, Link, List, ListItem, Typography } from '@mui/material';
import "../../styles/footer.css";
import { footerData } from './FooterData';

interface FooterColumnProps {
  title: string;
  items: { name: string; link: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => (
  <div className="grid-item">
    <div className="section-wrapper">
      <Typography>{title}</Typography>
      {items.map((item, index) => (
        <List key={index} style={{ padding: 0 }}>
          <ListItem style={{ padding: '4px 0', margin: 0 }}>
            <Link className='footer-links' underline='hover' href={item.link} style={{ margin: 0, padding: 0 }}>
              {item.name}
            </Link>
          </ListItem>
        </List>
      ))}
    </div>
  </div>
);


const Footer = () => {

  return (
    <div className="page-wrapper">
    <div className="container">
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
          Learn more about how Apple Card applications are evaluated at
          <span>{" "}</span>
          <Link className='footer-links' href="#" underline="always" >support.apple.com/kb/HT209218.
          </Link>
        </Typography>
        <Typography className='paragraph' paragraph>
          A subscription is required for Apple TV+.
        </Typography>
        <Divider orientation="horizontal" variant="fullWidth" />
      </Box>

 <Box sx={{p:2}}>
 <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={2}>
          <FooterColumn title={footerData[0].title} items={footerData[0].items} />
          <FooterColumn title={footerData[1].title} items={footerData[1].items} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <FooterColumn title={footerData[2].title} items={footerData[2].items} />
          <FooterColumn title={footerData[3].title} items={footerData[3].items} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <FooterColumn title={footerData[4].title} items={footerData[4].items} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <FooterColumn title={footerData[7].title} items={footerData[7].items} />
          <FooterColumn title={footerData[8].title} items={footerData[8].items} />
          <FooterColumn title={footerData[9].title} items={footerData[9].items} />
          <FooterColumn title={footerData[10].title} items={footerData[10].items} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <FooterColumn title={footerData[11].title} items={footerData[11].items} />
          <FooterColumn title={footerData[12].title} items={footerData[12].items} />
        </Grid>
      </Grid>
 </Box>
      <Box sx={{p:2}}>
      <Typography className='paragraph'>
        More ways to shop:
        <Link>Find an Apple Store</Link><span>{" "}</span>or<span>{" "}</span><Link>other retailer</Link><span>{" "}</span>
        near you. Or call 1-800-MY-APPLE.
      </Typography>
      </Box>

      <div className="row align-items-start">
        <Box sx={{ p: 1 }}>
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
              <Link className='footer-links' href="#" underline="hover">Privacy Policy</Link>
            </Grid>

            <Grid item>
              <Link className='footer-links' href="#" underline="hover" >Terms of Use</Link>
            </Grid>

            <Grid item>
              <Link className='footer-links' href="#" underline="hover" >
                Sales and Refunds     </Link>
            </Grid>

            <Grid item>
              <Link  className='footer-links' href="#" underline="hover" >Legal</Link>
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
    </div>
  );
};

export default Footer;
