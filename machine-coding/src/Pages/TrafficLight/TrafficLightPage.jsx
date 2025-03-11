import { TrafficLight } from "./TrafficLight";

const TrafficLightPage = () => {
  return (
    <div>
      <TrafficLight yDuration={5} rDuration={5} gDuration={10} />
    </div>
  );
};

export default TrafficLightPage;
