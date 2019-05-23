export function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const baseUrl = process.env.API_URL || 'http://localhost:6100/api';

