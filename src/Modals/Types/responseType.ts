
export interface IDataResponse {
    code: number,
    message: string,
    metadata: {
      user: {
        id: string,
        name: string,
        email: string,
        role_id: number
      },
      refesherToken: string,
      accessToken: string
    }
  }

export interface IDataResponseLogin {
    
}

