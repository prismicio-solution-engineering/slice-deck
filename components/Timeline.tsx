import { SalesProcessSliceDefaultPrimaryPlanningItem, Simplify } from "@/prismicio-types";
import { GroupField } from "@prismicio/client";
import { GlobalPrismicRichText } from "./GlobalPrismicRichText";

const Timeline = ({ planning }: {
    planning: GroupField<
        Simplify<SalesProcessSliceDefaultPrimaryPlanningItem>
    >
}) => {

    return (
        <div className="flex flex-col items-center p-4">
            <div className="relative w-full h-0.5 bg-secondary-green">
                {planning.map((planningItem, index) => (
                    <div
                        key={index}
                        className="absolute h-16 w-0.5 bg-secondary-green flex flex-col justify-center -translate-y-1/2 -translate-x-1/2"
                        style={{ left: `${(index) * (100 / (planning.length - 1))}%` }}
                    >
                        <div className="absolute h-16 w-0.5 bg-secondary-green"></div>
                        <div className="absolute -translate-x-1/2 h-[600px]">
                            <div className="text-center h-[300px] flex flex-col justify-center">
                                {planningItem.milestone_name}
                            </div>
                            <div className="text-center h-[300px] flex flex-col justify-center">
                                <GlobalPrismicRichText field={planningItem.milestone_description} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;