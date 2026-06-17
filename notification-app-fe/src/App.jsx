import { useEffect } from "react";
import { fetchNotifications } from "./api/notifications";
import { getPriorityNotifications } from "./utils/priorityEngine";

export default function App() {
  useEffect(() => {
    async function loadData() {
      const notifications = await fetchNotifications();

      const prioritized = getPriorityNotifications(
        notifications,
        10
      );

      console.log(
        "Priority Notifications:",
        prioritized
      );
    }

    loadData();
  }, []);

  return <h1>Notifications App</h1>;
}