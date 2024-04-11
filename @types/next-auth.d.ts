import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    username?: string;
    phoneNumber?: string;
    street?: string;
    city?: string;
    state?: string;
    postcode?: string;
  }

  interface Session extends DefaultSession {
    user: User;
    accessToken: string;
  }
}