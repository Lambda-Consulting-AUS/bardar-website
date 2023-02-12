import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  CardActionArea
} from "@mui/material";
import { EntryProps} from "../types/types";
import { Grid } from "@mui/material";

const Entry = (entry: EntryProps): JSX.Element => {
  const link = window.location.origin + "/articals/" + entry.title.split(' ').join('-')

  return (
    <Grid item xs={4}>
      <Card sx={{position: 'relative', borderRadius: 4}} color="black"> 
        <CardActionArea href={link}> 
          <Chip 
            sx={{position: 'absolute', right: 16, top: 16}}
            label={entry.week}
            color="primary"
          />
          {entry.image && <CardMedia
            component="img"
            height="200"
            sx={{objectFit: "cover", height: 200}}
            image={entry.image}
            alt="green iguana"
          />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
              {entry.title}
            </Typography>
            <Typography gutterBottom variant="body1" component="div" >
              {entry.body[0].slice(0,120) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" onClick={() => {
            navigator.clipboard.writeText(link);
          }}>Share</Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default Entry;
