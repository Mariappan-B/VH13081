// src/testLogger.ts

import { Log } from "./utils/logger";

async function testLogger() {
  try {
    const response = await Log(
      "frontend",
      "info",
      "component",
      "Logger test successful"
    );

    console.log("Log sent successfully");
    console.log("Response:", response);
  } catch (error) {
    console.error(" Logger failed:", error);
  }
}

testLogger();