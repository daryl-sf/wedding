import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'wedding-pictures',
  access: (allow) => ({
    "photos/*": [
      allow.guest.to(["read"]),
      allow.authenticated.to(["write", "delete", "delete", "read"])
    ],
  })
});
