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
        WEIGHTS[b.Type] - WEIGHTS[a.Type];

      if (weightDiff !== 0) {
        return weightDiff;
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    })
    .slice(0, limit);
}