import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { EntryProps, Link } from "../types/types";
import * as fs from 'fs'

const Entry = (entry: EntryProps): JSX.Element => {
  const [body, setBody] = useState('');

  useEffect(() => {
    fs.readFile(`./../content/${entry.title}.md`, 'utf8', (err, data) => {
      setBody(data);
    });
  });

  return (
    <Card sx={{position: 'relative'}}> 
      <Chip 
        sx={{position: 'absolute', right: 16, top: 16}}
        label={entry.week}
        color="primary"
      />
      {entry.image && <CardMedia
        component="img"
        height="300"
        sx={{objectFit: "contain"}}
        image={entry.image}
        alt="green iguana"
      />}
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {entry.title}
        </Typography>
        {
          <ReactMarkdown 
            children={body} 
            components={{
              h2: ({node, level, ...props}) => <Typography sx={{ paddingTop: 2, paddingBottom: 1 }} variant="h5" {...props}/>,
              h3: ({node, level, ...props}) => <Typography sx={{ paddingTop: 1}} variant="h6" {...props}/>,
              h4: ({node, level, ...props}) => <Typography sx={{ paddingTop: 1}} variant="subtitle2" {...props}/>,
              p:  ({node, ...props}) => <Typography gutterBottom variant="body1" sx={{ paddingTop: 1 }} {...props}/>,
              li: ({node, ...props}) => <li><Typography {...props}></Typography></li>
            }}
          />
        }
      </CardContent>
      <CardActions>
        {entry.links && entry.links!.map((x: Link): JSX.Element => {
          return <Button size="small" href={x.link}>{x.title}</Button>
        })}
      </CardActions>
    </Card>
  );
};

export default Entry;
