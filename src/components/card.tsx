import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import { DownloadForOfflineRounded } from "@mui/icons-material";

interface propsType {
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

const OverflowCard = (props: propsType) => {
  console.log(props);
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <Image
            src={props.urls.full}
            loading="lazy"
            alt=""
            width={320}
            height={340}
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
        {props.alt_description}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        Couleur: {props.color}
      </Typography>
      <Divider />
      <CardOverflow
        variant="soft"
        sx={{
          display: "flex",
          gap: 1.5,
          py: 1.5,
          px: "var(--Card-padding)",
          bgcolor: "background.level1",
          alignItems: "center",
        }}
      >
        <Typography
          level="body3"
          sx={{ fontWeight: "md", color: "text.secondary" }}
        >
          {props.likes} likes
        </Typography>
        <Divider orientation="vertical" />
        <Typography
          level="body3"
          sx={{ fontWeight: "md", color: "text.secondary" }}
        >
          {props.created_at}
        </Typography>
        <Divider orientation="vertical" />
        <a
          href={props.urls.regular}
          download
          style={{
            color: "#333",
            textDecoration: "none",
          }}
        >
          <DownloadForOfflineRounded
            sx={{
              width: 40,
              color: "background.level1",
            }}
          />
        </a>
      </CardOverflow>
    </Card>
  );
};

export default OverflowCard;
