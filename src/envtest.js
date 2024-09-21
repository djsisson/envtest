import pkg from "@next/env";
const { loadEnvConfig } = pkg;

loadEnvConfig(process.cwd(), true);

console.log("NEXT_PUBLIC_TEST", process.env.NEXT_PUBLIC_TEST);
console.log("Random", process.env.RANDOM);
