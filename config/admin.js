module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a15fee4f25cbbbe083b2f9e3ed3a2240'),
  },
});
