"use server"

import { DB } from "@/db/db"
import { testUsers } from "@/db/schema/test-user"

export const getData = async () => {
    return await DB.select().from(testUsers);
}