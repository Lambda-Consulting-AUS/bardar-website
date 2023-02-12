import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { EntryProps, Link } from "../types/types";

const Artical = (entry: EntryProps): JSX.Element => {
  return (
    <Card className="max-w-screen-xl mx-auto" sx={{position: 'relative', backgroundColor: 'rgba(0,0,0,0)', marginTop: 8}}> 
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Next level night life
        </Typography>
        <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: 'bold'}}>
          {entry.title}
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton size="large" color="secondary">
            <Instagram fontSize="large"/>
          </IconButton>
          <IconButton size="large" color="secondary">
            <Facebook fontSize="large"/>
          </IconButton>
          <IconButton size="large" color="secondary">
            <LinkedIn fontSize="large"/>
          </IconButton>
        </Stack>
        <Typography gutterBottom variant="overline" component="div">
          {String(entry.date).split(' ').slice(0,4).join(' ')}
        </Typography>
        {entry.image && <CardMedia
        component="img"
        sx={{objectFit: "cover", maxHeight: 500, marginBottom: 2}}
        src={entry.image}
        alt="green iguana"
        />}
        {
          entry.body.map((x) => 
            <Typography gutterBottom variant="body1" component="div">
              {x}
            </Typography>
          )
        }
      </CardContent>
      <CardActions>
        {entry.links && entry.links!.map((x: Link): JSX.Element => {
          return <Button variant="contained" size="small" color="secondary" href={x.link}>{x.title}</Button>
        })}
      </CardActions>
    </Card>
  );
};

export default Artical;
