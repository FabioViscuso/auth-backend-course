import bcrypt from "bcrypt";
import { env } from "../config/env";

export const passwordUtils = {
    async hashPassword(password) {
        return bcrypt.hash(password, env.SALT_ROUNDS)
    },
    async comparePasswords(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword)
    }
}
