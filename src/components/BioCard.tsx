import React from "react";
import { BioProps } from "../types/types";
import AnimateVisible from "../utils/AnimateVisible";

const BioCard: React.FC<BioProps> = (props) => {
    return (
        <AnimateVisible key={props.id}>
            <div className="card shadow-xl max-w-xl bg-white">
                <figure><img src={props.image} alt={"Image of:" + props.name} /></figure>
                <div className="card-body p-6 bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
                    <h2 className="card-title">
                        {props.name}
                    </h2>
                    {props.description.map((x: string) => {
                        return <p>{x}</p>
                    })
                    }
                    <div className="card-actions">
                        {props.tags.map((x: string) => {
                            return <div className="badge badge-outline">{x}</div> 
                        })}
                    </div>
                </div>
            </div>
        </AnimateVisible>
    );
  };
  
  export default BioCard;