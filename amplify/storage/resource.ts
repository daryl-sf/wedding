import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'wedding-pictures',
  access: (allow) => ({
    "photos/*": [
      allow.guest.to(["list", "get", "write"]),
    ]
  }),
});
