// eslint-disable-next-line import/prefer-default-export
export class ApiResponse {
  constructor(response) {
    Object.assign(this, { ...response.data });
  }
}
