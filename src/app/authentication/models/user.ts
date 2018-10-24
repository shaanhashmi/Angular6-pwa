export class SocialUser {
    provider: string;
    id: string;
    email: string;
    name: string;
    image: string;
    token?: string;
    idToken?: string
}

export class LinkedInResponse {
    emailAddress: string;
    firstName: string;
    id: string;
    lastName: string;
    pictureUrl: string;
}