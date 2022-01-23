import React from "react";
import Head from "next/head";

import { theme, useStyles } from "../utils/styles";
import { ThemeProvider } from "@mui/material/styles";
import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Link as MLink } from "@mui/material";
import Link  from 'next/link';
import { Box } from "@mui/system";
import TProvider from "./TProvider";




export function Layout({
  children,
  commercePublicKey,
  title = "Commerce Store",
}) {
    
    return (
    <>
    <TProvider>
        <Head>
        <meta charSet="utf-8" />
        <title>{`${title}-Commerce Store`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width shrink-to-fit=no"
        />
      </Head>
      
        <CssBaseline />
        <Content>
            {children}
        </Content>
      
      
      </TProvider>
    </>
  );
}

function Content({children}){
    const classes = useStyles();
    return (
        <>
        <AppBar
          position="static"
          color="default"
          elevation={0}
           className={classes.appBar}
        >
          <Toolbar 
          className={classes.toolbar}>
        
            <Link href='/' passHref>
            <MLink
              href='/'
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
              sx={{textAlign:'start'}}
            >
                Commerce Store
            </MLink>
            </Link>
            <Link href='/' passHref>
            <MLink
              href='/'
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
              sx={{textAlign:'end'}}
            >
               Cart
            </MLink>
            </Link>

          </Toolbar>
        </AppBar>
        <Container component='main' 
            className={classes.main}
        >
            {children}
        </Container>
        <Container maxWidth='md' componet='footer'>
            <Box mt={5}>
                <Typography variant='body2' color="textSecondary" align='center'>
                    {'©'}
                    Commerce Store 2022
                    {`.`}
                </Typography>
            </Box>
        </Container>
        </>
    )
}