/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * Note:
 * - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 * Example:
 * S="12:01:00PM"
 * Returns "12:01:00"
 * S="12:01:00AM"
 * Returns "00:01:00"
 */

const timeConversion = (s) => {
  const pmAmSubstring = s.slice(-2);
  const hours = parseInt(s.slice(0, 2));

  if (pmAmSubstring == "PM") {
    if (hours == 12) {
      return `${s.slice(0, -2)}`;
    }
    return `${hours + 12}${s.slice(2, -2)}`;
  } else {
    if (hours == 12) {
      return `00${s.slice(2, -2)}`;
    }
    return `${s.slice(0, -2)}`;
  }
};

export { timeConversion };
