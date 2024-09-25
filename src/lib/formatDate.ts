export function formatDate(timestamp: string, timeZone = "UTC") {
  const date = new Date(timestamp);

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: timeZone, // Use user-specified timezone or default to UTC
  });
}
