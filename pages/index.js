import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import getCommerce from "../utils/commerce";

import Router from "next/router";
import NProgress from "nprogress";
import { Layout } from "../components/Layout";
import {
  Alert,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Slide,
  Typography,
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

export default function Home(props) {
  const { products } = props;

  return (
      <Layout title="Home" commercePublicKey={props.commercePublicKey}>
        {products.length === 0 && <Alert>No Product Found</Alert>}
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid item key={product.id} md={3}>
              <Slide direction="up" in={true}>
                <Card>
                  <Link href={`/products/${product.permalink}`} passHref>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={product.name}
                        src={product.image.url}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="textPrimary"
                          component="p"
                        >
                          {product.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Layout>
  );
}

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();
  console.log(products);
  return {
    props: {
      products,
    },
  };
}
