Campus Notifications Frontend

Overview

This project is a React-based Campus Notifications application developed as part of the a Campus Hiring Evaluation.

The application allows students to view campus notifications related to Placements, Results, and Events. It includes notification prioritization, filtering, unread notification indicators, pagination support, and logging middleware integration.

---

Features

Notification Display

- Displays all available notifications.
- Supports multiple notification types:
  - Placement
  - Result
  - Event

Priority Notification Processing

- Implements a priority engine based on notification type and recency.
- Priority order:
  1. Placement
  2. Result
  3. Event
- Returns top N notifications according to configured limits.

Notification Filtering

- Filter notifications by type.
- Supported filters:
  - All
  - Placement
  - Result
  - Event

Read / Unread Identification

- Unread notifications are highlighted.
- Notification count badge displays unread notification total.

Pagination Support

- Pagination component implemented using Material UI.
- Structure supports API pagination parameters:
  - page
  - limit

Logging Middleware Integration

- Integrated custom logging middleware throughout the application.
- Logging utility captures application events and important operations.
- Logging is used instead of browser console logging for application workflows.

Responsive User Interface

- Built using Material UI.
- Supports desktop and mobile layouts.
- Clean and minimal notification-focused design.

---

Technology Stack

Frontend

- React
- JavaScript (ES6+)
- Vite

UI Library

- Material UI (MUI)

Development Tools

- Git
- GitHub
- VS Code

---
,,, text

Project Structure

src/
├── api/
│   └── notifications.js
│
├── components/
│   ├── NotificationCard.jsx
│   └── NotificationFilter.jsx
│
├── hooks/
│   └── useNotifications.js
│
├── pages/
│   └── NotificationsPage.jsx
│
├── utils/
│   ├── logger.js
│   └── priorityEngine.js
│
├── App.jsx
├── main.jsx
└── index.css
,,,
---

Priority Engine

Priority is determined using weighted notification categories.

Type| Weight
Placement| 3
Result| 2
Event| 1

Notifications are sorted by:

1. Priority Weight
2. Most Recent Timestamp

The engine returns the top N notifications requested.

---

API Support

The application structure supports the following query parameters:

limit
page
notification_type

Example:

/notifications?page=1&limit=10&notification_type=Placement

---

Running the Application

Install Dependencies

npm install

Start Development Server

npm run dev

Application runs at:

http://localhost:3000

---

Design Considerations

- Component-based architecture
- Reusable notification card design
- Separation of UI, business logic, and API layers
- Centralized logging utilities
- Scalable notification filtering mechanism
- Maintainable code organization

---

Assumptions

- Notifications are retrieved from the provided notification service.
- Notification priority is based on category weight and recency.
- Read/unread state is managed at the frontend layer.
- Authentication is handled externally as specified in the assessment instructions.
