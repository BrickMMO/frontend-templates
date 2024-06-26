import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";

const Gallery = () => {
   const theme = useTheme();

   const isMd = useMediaQuery(theme.breakpoints.up("md"), {
      defaultMatches: true,
   });

   const photos = [
      {
         src: "https://fakeimg.pl/289x616?text=IMAGE+HERE",
         rows: 2,
         cols: 1,
      },
      {
         src: "https://fakeimg.pl/594x300?text=IMAGE+HERE",
         rows: 1,
         cols: 2,
      },
      {
         src: "https://fakeimg.pl/289x300?text=IMAGE+HERE",
         rows: 1,
         cols: 1,
      },
      {
         src: "https://fakeimg.pl/289x300?text=IMAGE+HERE",
         rows: 1,
         cols: 1,
      },
      {
         src: "https://fakeimg.pl/594x300?text=IMAGE+HERE",
         rows: 1,
         cols: 2,
      },
   ];

   const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

   return (
      <Box>
         <Box display={"flex"} justifyContent={"flex-end"} marginBottom={2}>
            <Button
               color='primary'
               size='large'
               endIcon={
                  <svg width={16} height={16} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                     <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
               }>
               Open the gallery
            </Button>
         </Box>
         <Box>
            <ImageList variant='quilted' cols={4} rowHeight={isMd ? 300 : 220} gap={isMd ? 16 : 8}>
               {photosToShow.map((item, i) => (
                  <ImageListItem key={i} cols={isMd ? item.cols || 1 : 2} rows={isMd ? item.rows || 1 : 1}>
                     <img
                        height={"100%"}
                        width={"100%"}
                        src={item.src}
                        alt='...'
                        loading='lazy'
                        style={{
                           objectFit: "cover",
                           cursor: "poiner",
                           borderRadius: 4,
                        }}
                     />
                  </ImageListItem>
               ))}
            </ImageList>
         </Box>
      </Box>
   );
};

export default Gallery;
