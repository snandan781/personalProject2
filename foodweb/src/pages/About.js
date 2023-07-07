import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          padding: "2",
          "& h4": {
            fontWeight: "bold",
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
        }}
      >
        <Typography variant="h4">Welcome to my restraunt</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          molestiae fugiat veniam nihil officiis? Pariatur aut dolore aperiam
          atque aliquam reprehenderit suscipit facere sit repellendus tempora.
          Iure corrupti laudantium deleniti?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          hic tenetur reiciendis obcaecati cumque fugit voluptatem explicabo,
          suscipit, debitis architecto porro soluta dolore rem cum voluptatum
          voluptates quas numquam laboriosam.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
