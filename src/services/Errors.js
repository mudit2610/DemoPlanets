export class ApiError {
    constructor(error) {
        if (error.response) {
            Object.assign(this, { ...error.response.data }, { status: error.response.status });
        }
    }
}