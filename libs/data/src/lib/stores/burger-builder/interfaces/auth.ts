export interface AuthRequest {
  mode: string,
  request: {
   email: string;
   password: string;
   returnSecureToken:boolean
  }
}

export interface  AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
  isAuth: boolean;
}

