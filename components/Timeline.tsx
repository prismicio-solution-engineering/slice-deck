import {
  SalesProcessSliceDefaultPrimaryPlanningItem,
  Simplify,
} from "@/prismicio-types";
import { GroupField } from "@prismicio/client";
import { GlobalPrismicRichText } from "./GlobalPrismicRichText";

const Timeline = ({
  planning,
}: {
  planning: GroupField<Simplify<SalesProcessSliceDefaultPrimaryPlanningItem>>;
}) => {
  return (
    // Replace with cards in 1 or 2 slides ?
    <div className="h-full flex flex-col items-center p-4">
      <div className="relative mt-48 w-full h-0.5 bg-secondary-green">
        {planning.map((planningItem, index) => (
          <div
            key={index}
            className="absolute h-16 w-0.5 bg-secondary-green flex flex-col justify-center -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${index * (100 / (planning.length - 1))}%` }}
          >
            <div className="absolute h-16 w-0.5 bg-secondary-green"></div>
            <div className="absolute -translate-x-1/2 h-[500px] w-40 text-wrap">
              <div className="text-xl text-center h-[300px] flex flex-col justify-center">
                {planningItem.milestone_name}
              </div>
              <div className="h-[200px] flex flex-col justify-start">
                <GlobalPrismicRichText
                  field={planningItem.milestone_description}
                  components={{
                    image: ({ node, key }) => {
                      const img = (
                        <img
                          src={node.url}
                          alt={node.alt ?? undefined}
                          width={32}
                          data-copyright={
                            node.copyright ? node.copyright : undefined
                          }
                          className="h-auto object-contain"
                        />
                      );
                      return (
                        <p
                          key={key}
                          className="block-img text-center self-center"
                        >
                          {img}
                        </p>
                      );
                    },
                  }}
                  classNames="!text-lg text-center mb-4"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
