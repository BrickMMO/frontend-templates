/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import RocketIllustration from "svg/illustrations/Rocket";

const Hero = () => {
   const theme = useTheme();
   const isMd = useMediaQuery(theme.breakpoints.up("md"), {
      defaultMatches: true,
   });

   return (
      <Grid container spacing={4}>
         <Grid item container alignItems={"center"} xs={12} md={6}>
            <Box data-aos={isMd ? "fade-right" : "fade-up"}>
               <Box marginBottom={2}>
                  <Typography
                     variant='h2'
                     color='textPrimary'
                     sx={{
                        fontWeight: 700,
                     }}>
                     Turn your ideas
                     <br />
                     into a{" "}
                     <Typography color={"primary"} component={"span"} variant={"inherit"}>
                        success.
                     </Typography>
                  </Typography>
               </Box>
               <Box display='flex' flexDirection={{ xs: "column", sm: "row" }} alignItems={{ xs: "stretched", sm: "flex-start" }}>
                  <Box marginTop={{ xs: 2, sm: 0 }} marginLeft={{ sm: 2 }} width={{ xs: "100%", md: "auto" }}>
                     <Button
                        component={"a"}
                        href={"/docs-introduction"}
                        variant='outlined'
                        color='primary'
                        size='large'
                        fullWidth={isMd ? false : true}>
                        View documentation
                     </Button>
                  </Box>
               </Box>
            </Box>
         </Grid>
         <Grid item xs={12} md={6}>
            <Box height={"100%"} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
               <Box height={"100%"} width={"100%"} maxHeight={600}>
                  <RocketIllustration width={"100%"} height={"100%"} />
               </Box>
            </Box>
         </Grid>
      </Grid>
   );
};

export default Hero;
