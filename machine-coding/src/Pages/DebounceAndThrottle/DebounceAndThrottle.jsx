import "./debounceAndThrottleStyles.css";
import { Debounce } from "./Debounce";
import { Throttle } from "./Throttle";

const Container = ({ children, title }) => {
  return (
    <div className="debounce-throttle-container">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

const DebounceAndThrottle = () => {
  return (
    <div className="dt-page-container">
      <Container title={"Debounce"}>
        <Debounce />
      </Container>
      <Container title={"Throttle"}>
        <Throttle />
      </Container>
    </div>
  );
};

export default DebounceAndThrottle;
