import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  CardActionArea
} from "@mui/material";
import { EntryProps} from "../types/types";
import { motion, useAnimation } from "framer-motion";
import { Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Entry = (entry: EntryProps): JSX.Element => {
  const link = window.location.origin + "/articals/" + entry.title.split(' ').join('-')

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Grid item xs={4}>
      <motion.div
          initial="hidden"
          transition={{ duration: 0.3 }}
          ref={ref}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
        >
      <Card sx={{position: 'relative', borderRadius: 4}}> 
        <CardActionArea href={link}> 
          <Chip 
            sx={{position: 'absolute', right: 16, top: 16}}
            label={entry.week}
            color="secondary"
          />
          {entry.image && <CardMedia
            component="img"
            height="200"
            sx={{objectFit: "cover", height: 200}}
            image={entry.image}
            alt="green iguana"
          />}
          <CardContent sx={{backgroundColor: 'white', color: 'black'}}>
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
      </motion.div>
    </Grid>
  );
};

export default Entry;
