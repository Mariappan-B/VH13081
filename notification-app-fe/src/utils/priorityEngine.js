const WEIGHTS = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getPriorityNotifications(
  notifications,
  limit = 10
) {
  return [...notifications]
    .sort((a, b) => {
      const weightDiff =
        WEIGHTS[b.type] - WEIGHTS[a.type];

      if (weightDiff !== 0) {
        return weightDiff;
      }

      return (
        new Date(b.timestamp) -
        new Date(a.timestamp)
      );
    })
    .slice(0, limit);
}