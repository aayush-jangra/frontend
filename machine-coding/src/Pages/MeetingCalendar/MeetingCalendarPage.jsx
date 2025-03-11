import { meetings } from "../../constants/calendar";
import { getTimeFromSlot, getSlotsFromMeetings } from "../../utils/helper";
import "./meetingCalendarStyles.css";
import { MeetingSlot } from "./MeetingSlot";

const HOURS = Array.from({ length: 24 }, (_, index) => getTimeFromSlot(index));

const MeetingCalendarPage = () => {
  const meetingSlots = getSlotsFromMeetings(meetings);

  return (
    <div className="meeting-page-container">
      {HOURS.map((hour) => (
        <div key={hour} className="hour-slots-container">
          <div className="hour-slot">{hour}</div>
        </div>
      ))}
      {meetingSlots.map((slot, index) => (
        <MeetingSlot key={index} slot={slot} />
      ))}
    </div>
  );
};

export default MeetingCalendarPage;
