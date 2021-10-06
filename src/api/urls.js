export const BASE_API_URL = `https://votingsystem.azurewebsites.net/api`;

export const REGISTER_URL = `${BASE_API_URL}/v1/Authenticate/register`;
export const LOGIN_URL = `${BASE_API_URL}/v1/Authenticate/login`;
export const CANDIDATE_URL = `${BASE_API_URL}/Candidate`;
export const VOTE_URL = `${BASE_API_URL}/Vote`;
export const RESULTS_URL = `${BASE_API_URL}/Vote/results`;
export const VOTERS_URL = `${BASE_API_URL}/Vote/voters`;
export const FORGOT_PASSWORD_URL = `${BASE_API_URL}/Account/forgot-password`;
export const VALIDATE_TOKEN_URL = `${BASE_API_URL}/Account/validate-reset-token`;
export const RESET_PASSWORD_URL = `${BASE_API_URL}/Account/reset-password`;
