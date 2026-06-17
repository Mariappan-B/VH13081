export async function fetchNotifications() {
  return [
    {
      id: 1,
      type: "Placement",
      message: "CSX Corporation hiring",
      timestamp: "2026-04-22T17:51:18",
      isRead: false,
    },
    {
      id: 2,
      type: "Result",
      message: "Mid-sem results published",
      timestamp: "2026-04-22T17:51:30",
      isRead: false,
    },
    {
      id: 3,
      type: "Event",
      message: "Farewell event announced",
      timestamp: "2026-04-22T17:51:06",
      isRead: true,
    },
  ];
}