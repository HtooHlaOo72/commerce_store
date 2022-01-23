import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

export const theme=createTheme({
    typography:{
        h1:{
            fontSize:"2.2rem",
            fontWeight:400,
            margin:"2rem 0"
        },
        h2:{
            fontSize:"1.8rem",
            fontWeight:400,
            margin:"1rem 0"
        },
        h3:{
            fontSize:"1.4rem",
            fontWeight:400,
            margin:"1rem 0"
        },
        palette:{
            primary:{
                main:'#f0c000'
            },
            secondary:{
                main:'#208080'
            },
            error:{
                main:'#f04000'
            },
            background:{
                main:'#ffffff'
            }
        }
    }
});

export const useStyles = makeStyles(theme=>({
  appBar:{
      borderBottom:`1px solid rgba(0,0,0,0.12)`
  },
  toolbar:{
      flexWrap:"wrap",
  },
  toolbarTitle:{
      flexGrow:'1',
      textDecoration:'none',
      "&:hover":{
          textDecoration:'underline'
      },
      "&::before":{
        textAlign:"start"
    }
    ,"&::after":{
        textDecoration:'end'
    }
  },
  link:{
      padding:'1rem'
  },
  main:{
      padding:'1rem'
  },
  largeImage:{
      maxWidth:'50rem',
      width:'100%'
  },
  mt1:{
      marginTop:'1rem !important'
  },
  p1:{
      padding:'1rem !important'
  },
  formControl:{
      margin:theme.spacing(1),
      minWidth:120,
      width:'100%'
  }
}))

