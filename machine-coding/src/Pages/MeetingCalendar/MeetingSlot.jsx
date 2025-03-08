import { getMinutesFromTime } from "../../utils/helper";
import "./meetingCalendarStyles.css";

const Meeting = ({ meeting, parentTop }) => {
  const startTime = getMinutesFromTime(meeting.startTime);
  const endTime = getMinutesFromTime(meeting.endTime);

  // 60 minutes = 1 hour = 160px
  const top = Math.floor((startTime * 160) / 60) + 2;
  const height = Math.floor(((endTime - startTime) * 160) / 60) - 4;

  return (
    <div style={{ top: top - parentTop, height }} className="meeting">
      {meeting.title}
    </div>
  );
};

export const MeetingSlot = ({ slot }) => {
  const startTime = getMinutesFromTime(slot[0]);
  const endTime = getMinutesFromTime(slot[1]);
  const meetingsInSlot = slot[2];

  // 60 minutes = 1 hour = 160px
  const top = Math.floor((startTime * 160) / 60);
  const height = Math.floor(((endTime - startTime) * 160) / 60);
  return (
    <div style={{ height, top }} className="meeting-slot">
      {meetingsInSlot.map((meeting) => (
        <div className="meetings-container">
          <Meeting key={meeting.id} meeting={meeting} parentTop={top} />
        </div>
      ))}
    </div>
  );
};
