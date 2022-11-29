import React from "react";
import { ReactComponent as Illustration } from "../assets/experience.svg";
import Heading from "../components/Heading";
import TimelineCard from "../components/TimelineCard";
import { TIMELINE, SECTIONS } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";

const TimelineContainer: React.FC = () => {
  return (
    <div className="md:px-10 text-neutral">
      <Heading
        heading={SECTIONS[1]}
        id="timeline"
        illustration={<Illustration className=" max-h-48" />}
      />
      <div className="relative h-full sm:p-10 overflow-hidden wrap">
        <div className="absolute h-full left-60">
          <div className="relative h-full md:border border-accent border-2-2 border-opacity-20 left-5"/>
        </div>

        {TIMELINE.map(
          (timelineCard) => (
            <AnimateVisible key={timelineCard.id}>
              <>
                  <TimelineCard
                    {...timelineCard}
                  />
                </>
            </AnimateVisible>
          )
        )}
      </div>
    </div>
  );
};

export default TimelineContainer;
