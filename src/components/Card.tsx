/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Container,
  Typography,
  CardMedia,
  Card as MaterialCard,
  useTheme,
} from "@mui/material";

export function Card() {
  const {
    palette: { primary, secondary },
  } = useTheme();
  return (
    <Box sx={{ cursor: "pointer" }}>
      <MaterialCard
        sx={{
          maxWidth: 200,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: 5,
        }}
      >
        <Box
          padding={5}
          bgcolor={primary.main}
          borderRadius={5}
          display="flex"
          flexDirection={"column"}
          gap={3}
        >
          <Box bgcolor={primary.dark} borderRadius={5} padding={1}>
            <Box position={"relative"}>
              <Box
                position={"absolute"}
                bgcolor={secondary.light}
                px={1.4}
                py={0.5}
                borderRadius={10}
                top={-40}
                right={-35}
              >
                <Typography textAlign={"center"} color={secondary.contrastText}>
                  8
                </Typography>
              </Box>
            </Box>
            <CardMedia
              component="img"
              image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg"
              alt="nome"
            />
          </Box>
          <Box>
            <Typography textAlign={"center"} color={secondary.light}>
              Nome
            </Typography>
            <Typography textAlign={"center"} color={secondary.light}>
              Descrição
            </Typography>
          </Box>
        </Box>
      </MaterialCard>
    </Box>
  );
}
