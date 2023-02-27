import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { EntryProps } from "../types/types";
import { motion } from "framer-motion";

const Artical = (entry: EntryProps): JSX.Element => {

  return (
    <Card className="max-w-screen-xl mx-auto" sx={{position: 'relative', marginTop: 8, backgroundColor: 'transparent',
    boxShadow: 'none'}} elevation={0}> 
      <CardContent>
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.1, opacity: 0.1 }}
          transition={{ duration: 0.2 }}
        >
          <Typography gutterBottom variant="h6" component="div">
            Next Level Nightlife
          </Typography>
          <Typography gutterBottom variant="h3" component="div" sx={{fontWeight: 'bold'}}>
            {entry.title}
          </Typography>
        </motion.div>
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.1, opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        >
          <Stack direction="row" spacing={1}>
            <IconButton sx={{backgroundColor: "secondary.main"}}>
              <Instagram fontSize="large"/>
            </IconButton>
            <IconButton sx={{backgroundColor: "secondary.main"}}>
              <Facebook fontSize="large"/>
            </IconButton>
            <IconButton sx={{backgroundColor: "secondary.main"}}>
              <LinkedIn fontSize="large"/>
            </IconButton>
          </Stack>
        </motion.div>
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.1, opacity: 0.1 }}
          transition={{ duration: 0.4 }}
        >
          <Typography gutterBottom variant="overline" component="div">
            {String(entry.date).split(' ').slice(0,4).join(' ')}
          </Typography>
          {entry.image && <CardMedia
          component="img"
          sx={{objectFit: "cover", maxHeight: 500, marginBottom: 2}}
          src={entry.image}
          alt="green iguana"
          />}
        </motion.div>
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.1, opacity: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          {
            entry.body.map((x) => 
              <Typography gutterBottom variant="body1" component="div">
                {x}
              </Typography>
            )
          }
        </motion.div>
      </CardContent>
      {/* <CardActions>
        {entry.links && entry.links!.map((x: Link): JSX.Element => {
          return <Button variant="contained" size="small" color="secondary" href={x.link}>{x.title}</Button>
        })}
      </CardActions> */}
    </Card>
  );
};

export default Artical;
