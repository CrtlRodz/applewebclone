import { Box, Divider, Grid, Link, List, ListItem, Typography } from '@mui/material';
import "../../styles/footer.css"
const Footer = () => {
  const footerData = [
    {
      title: "Shop and Learn",
      items: [
        { name: "Store", link: "/store" },
        { name: "Mac", link: "/mac" },
        { name: "iPad", link: "/ipad" },
        { name: "iPhone", link: "/iphone" },
        { name: "Watch", link: "/watch" },
        { name: "Vision", link: "/vision" },
        { name: "AirPods", link: "/airpods" },
        { name: "TV & Home", link: "/tv-home" },
        { name: "AirTag", link: "/airtag" },
        { name: "Accessories", link: "/accessories" },
        { name: "Gift Cards", link: "/gift-cards" }
      ]
    },
    {
      title: "Entertainment",
      items: [
        { name: "Apple One", link: "/apple-one" },
        { name: "Apple TV+", link: "/apple-tv-plus" },
        { name: "Apple Music", link: "/apple-music" },
        { name: "Apple Arcade", link: "/apple-arcade" },
        { name: "Apple Fitness+", link: "/apple-fitness-plus" },
        { name: "Apple News+", link: "/apple-news-plus" },
        { name: "Apple Podcasts", link: "/apple-podcasts" },
        { name: "Apple Books", link: "/apple-books" },
        { name: "App Store", link: "/app-store" }
      ]
    },
    {
      title: "Apple Store",
      items: [
        { name: "Find a Store", link: "/find-a-store" },
        { name: "Genius Bar", link: "/genius-bar" },
        { name: "Today at Apple", link: "/today-at-apple" },
        { name: "Apple Camp", link: "/apple-camp" },
        { name: "Apple Store App", link: "/apple-store-app" },
        { name: "Certified Refurbished", link: "/certified-refurbished" },
        { name: "Apple Trade In", link: "/apple-trade-in" },
        { name: "Financing", link: "/financing" },
        { name: "Carrier Deals at Apple", link: "/carrier-deals" },
        { name: "Order Status", link: "/order-status" },
        { name: "Shopping Help", link: "/shopping-help" },
      ]
    },

    {
      title: "Apple Wallet",
      items: [
        { name: "Wallet", link: "/wallet" },
        { name: "Apple Card", link: "/apple-card" },
        { name: "Apple Pay", link: "/apple-pay" },
        { name: "Apple Cash", link: "/apple-cash" },
      ]
    },

    {
      title: "Account",
      items: [
        { name: "Manage your Apple Id", link: "/wallet" },
        { name: "Apple Store Account", link: "/apple-card" },
        { name: "iCloud.com", link: "/apple-pay" },
      ]
    },







  ];
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
        Learn more about how Apple Card applications are evaluated at
        <span>{" "}</span>
        <Link className='footer-links' href="#" underline="always" >support.apple.com/kb/HT209218.
        </Link>
        </Typography>
        <Typography className='paragraph' paragraph>
        A subscription is required for Apple TV+.
        </Typography>
        <Divider orientation="horizontal" variant="fullWidth" />
        <div className="grid-container">
          {/* list  */}
          {footerData.map((section, sectionIndex) => (
  <div className="grid-item" key={sectionIndex}>
    <div className="section-wrapper">
      <Typography>{section.title}</Typography>
      {section.items.map((item, index) => (
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
))}

</div>
        <Typography className='paragraph'>
        More ways to shop:
        <Link>Find an Apple Store</Link><span>{" "}</span>or<span>{" "}</span><Link>other retailer</Link><span>{" "}</span>
        near you. Or call 1-800-MY-APPLE.
        </Typography>
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
