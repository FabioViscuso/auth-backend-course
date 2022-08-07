import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const JWTUtils = {
    generateAccessToken(payload, options = {}) {
        const { expiresIn = '1d' } = options;
        return jwt.sign(payload, env.JWT_ACCESS_TOKEN_SECRET, { expiresIn })
    },

    generateRefreshToken(payload) {
        return jwt.sign(payload, env.JWT_REFRESH_TOKEN_SECRET)
    },

    verifyAccessToken(accessToken) {
        return jwt.verify(accessToken, env.JWT_ACCESS_TOKEN_SECRET)
    },

    verifyRefreshToken(refreshToken) {
        return jwt.verify(refreshToken, env.JWT_REFRESH_TOKEN_SECRET)
    }
}
