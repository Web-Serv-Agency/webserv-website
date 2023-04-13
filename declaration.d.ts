// declare module '*.png';
// declare module '*.jpg';

namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    DB_URI: string;
  }
}

declare module 'framer-motion'
declare module "@mui/styles"
