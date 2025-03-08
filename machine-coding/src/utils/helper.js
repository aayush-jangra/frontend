export const getTimeFromSlot = (slot) => {
  const start = slot < 10 ? "0" + slot : slot;
  const end = slot + 1 < 10 ? "0" + (slot + 1) : slot + 1;

  return "" + start + ":00 - " + end + ":00";
};

export const getMinutesFromTime = (time) => {
  const [h, m] = time.split(":").map((v) => Number(v));

  return h * 60 + m;
};

export const getSlotsFromMeetings = (meetings) => {
  const sortedMeetings = meetings.sort(
    (a, b) => getMinutesFromTime(a.startTime) - getMinutesFromTime(b.startTime)
  );

  const slots = [];

  for (let i = 0; i < sortedMeetings.length; ) {
    let endTime = sortedMeetings[i].endTime;
    let j = i + 1;
    const meetingsInSlot = [{ ...sortedMeetings[i] }];

    while (
      j < sortedMeetings.length &&
      getMinutesFromTime(endTime) >
        getMinutesFromTime(sortedMeetings[j].startTime)
    ) {
      if (
        getMinutesFromTime(sortedMeetings[j].endTime) >
        getMinutesFromTime(endTime)
      )
        endTime = sortedMeetings[j].endTime;

      meetingsInSlot.push({ ...sortedMeetings[j] });
      j++;
    }

    slots.push([sortedMeetings[i].startTime, endTime, meetingsInSlot]);

    i = j;
  }

  return slots;
};
