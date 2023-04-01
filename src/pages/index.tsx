"use client";
import Header from "@/components/Header";
import { Box, Button, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import OverflowCard from "@/components/card";
import React, { useState } from "react";
interface propsType {
  images: {
    results: {
      id: string;
      alt_description: string;
      likes: number;
      urls: {
        raw: string;
        regular: string;
        full: string;
      };
      created_at: string;
      color: string;
    }[];
  };
}

interface resul {
  id: string;
  alt_description: string;
  likes: number;
  urls: {
    raw: string;
    regular: string;
    full: string;
  };
  created_at: string;
  color: string;
}
[];

const Home = ({ images }: propsType) => {
  const { results } = images;
  const [data, setData] = useState<resul[]>(results);
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=8KoDMXeXXT8vawiVdBj7zsvJx6nVLHPceO6pS1hRwfw`
    );
    const images = await res.json();
    const { results } = images;
    setData(results);
  };

  return (
    <>
      <Header
        title="Accueil sur Match"
        description="Country list est une petite application qui vous donne accès aux informations des pays d'afrique"
      />
      <main>
        <Box>
          <Stack
            sx={{
              display: "flex",
              margin: 8,
              alignItems: "center",
            }}
          >
            <Typography variant="h4" textAlign="center" fontWeight="bold">
              Image gallery
            </Typography>
            <form
              action=""
              style={{
                display: "flex",
                gap: 10,
                marginTop: 20,
                width: "100%",
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                label="Mot clé"
                variant="outlined"
                fullWidth
                name="search"
                onChange={handleChange}
                value={search}
              />
              <Button variant="contained" type="submit">
                Search
              </Button>
            </form>
          </Stack>

          <Stack
            alignItems="center"
            justifyContent="center"
            gap={10}
            flexDirection="row"
            flexWrap="wrap"
            marginBottom={20}
          >
            {data.map((img: resul) => (
              <OverflowCard
                id={img.id}
                alt_description={img.alt_description}
                urls={img.urls}
                likes={img.likes}
                created_at={img.created_at}
                color={img.color}
              />
            ))}
          </Stack>
        </Box>
      </main>
    </>
  );
};

export default Home;
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://api.unsplash.com/search/photos?page=1&query=office&client_id=8KoDMXeXXT8vawiVdBj7zsvJx6nVLHPceO6pS1hRwfw"
  );
  const images = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      images,
    },
  };
}
