import { TrafficLight } from "./TrafficLight";

export const TrafficLightPage = () => {
  return (
    <div>
      <TrafficLight yDuration={5} rDuration={5} gDuration={10} />
    </div>
  );
};
