export const env = {
    "PORT": parseInt(process.env.PORT) || "PORT not set",
    "SALT_ROUNDS": parseInt(process.env.SALT_ROUNDS) || 10,
    "JWT_ACCESS_TOKEN_SECRET": process.env.JWT_TOKEN_SECRET || "JWT_ACCESS_TOKEN_SECRET not set",
    "JWT_REFRESH_TOKEN_SECRET": process.env.JWT_REFRESH_TOKEN_SECRET || "JWT_REFRESH_TOKEN_SECRET not set",
    "IS_TEST_ENVIRONMENT": process.env.IS_TEST_ENVIRONMENT || false
}
