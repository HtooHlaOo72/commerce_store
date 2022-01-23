import Head from "next/head";
import Image from "next/image";
const { convert } = require("html-to-text");
import getCommerce from "../../utils/commerce";
import {React,useState} from 'react';
import Router from "next/router";
import NProgress from "nprogress";
import { Layout } from "../../components/Layout";
import {
  Alert,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Slide,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button
} from "@mui/material";
import Link from "next/link";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

export default function Product(props) {
  const [quantity,setQuantity]=useState(0);
  const { product } = props;

  const handleQuantityChange=(e)=>{
    setQuantity(e.target.value);
  }

  const addToCartHandler=()=>{

  }
  return (
    <Layout>
      <Slide direction="up" in={true}>
        <Grid container spacing={1}>
          <Grid
            item
            md={6}
            sx={{ position: "relative", aspectRatio: "16/16" }}
            xs={12}
          >
            <Image src={product.image.url} layout="fill" alt={product.name} />
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="h1"
                >
                  {product.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Box dangerouslySetInnterHTML={{ __html: product.description }}>
                  {convert(product.description, { wordwrap: 130 })}
                </Box>
              </ListItem>
              
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      Price
                    </Grid>
                    <Grid item xs={6}>
                      {product.price.raw}
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      Status
                    </Grid>
                    <Grid item xs={6}>
                      {product.quantity > 0 ? (
                        <Alert icon={false} severity="success">
                          In Stock
                        </Alert>
                      ) : (
                        <Alert icon={false} severity="error">
                          Unavailable
                        </Alert>
                      )}
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      Quantity
                    </Grid>
                    <Grid item xs={6}>
                    <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    // labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quantity}
                    // label="Age"
                    onChange={handleQuantityChange}
                  >
                    {
                      [...Array(product.quantity).keys()].map(id=>(
                      <MenuItem value={id} key={id}>{id}</MenuItem>
                      ))
                    }
                    
                    
                  </Select>
                </FormControl>
                    </Grid>
                  </Grid>
                </ListItem>
                
                <ListItem>
                  <Button 
                    type='button'
                    fullWidth
                    variant='contained'
                    color='primary'
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </ListItem>
              
              </List>
            </Card>
          </Grid>
        </Grid>
      </Slide>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { permalink } = params;
  const commerce = getCommerce();
  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}
