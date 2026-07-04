export interface Profile {
  "id": number;
  "username": string;
  "avatarUrl"?: string;
  "subscribersAmount": number;
  "firstName": string;
  "lastName": string;
  "isActive": boolean;
  "stack": Array<String>;
}
