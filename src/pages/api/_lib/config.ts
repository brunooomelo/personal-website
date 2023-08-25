const isProduction = process.env.NODE_ENV === "production";

export const databaseName = isProduction
  ? "personal-website"
  : "personal-website-staging";
