/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Card as MaterialCard,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";

interface CardProps {
  item: {
    id: string;
    name: string;
    image_url: string;
    luckyNumber: number;
    description: string;
  };
}

export function Card({ item }: CardProps) {
  const { description, id, image_url, luckyNumber, name } = item;
  const {
    palette: { primary, secondary },
  } = useTheme();
  return (
    
      <Box
				display={'flex'}
				width={200}
				height={300} 
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
                  {luckyNumber}
                </Typography>
              </Box>
            </Box>
            <Box
              component="img"
              src={image_url}
              alt={name}
							width={100}
							height={100}
							
            />
          </Box>
          <Box>
            <Typography textAlign={"center"} color={secondary.light}>
						{name}
            </Typography>
            <Typography textAlign={"center"} color={secondary.light}>
						{description}
            </Typography>
          </Box>
        </Box>
      </Box>
  );
}
