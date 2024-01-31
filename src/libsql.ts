import { createClient } from "@libsql/client"

const config = {
  url: import.meta.env.LIBSQL_DATABASE_URL
};
export const db = createClient(config);
