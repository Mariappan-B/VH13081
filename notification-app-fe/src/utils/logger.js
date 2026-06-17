export async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    console.log("[LOG]", {
      stack,
      level,
      package: packageName,
      message,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Logger failed:", error);
  }
}