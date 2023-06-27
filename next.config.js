/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    PUBLIC_STRIPE_PUBLISHABLE_KEY:
      "pk_live_51HV9asF0AeV1mX6jPtlCWphIEG9T2ckbUEyuZZ0DjY4GZ0eXXOpScWmXqptKXcylaBRPZKELBQCJ2fDLWOZlZyrH00T1IujvgI",
    STRIPE_SECRET_KEY:
      "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",
    AUTH_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNzkxIiwidXNlck5hbWUiOm51bGwsInBob25lTnVtYmVyIjoiOTMyODUxNzQ2MSIsImNvdW50cnlDb2RlIjpudWxsLCJlbWFpbCI6bnVsbCwiZE9CIjpudWxsLCJnZW5kZXIiOm51bGwsImZpcnN0TmFtZSI6InplZWwxMiIsImxhc3ROYW1lIjoicHJhamFwYXRpIiwibWlkZGxlTmFtZSI6bnVsbCwicGFzc3dvcmQiOiIiLCJtYXJpdHVhbFN0YXR1cyI6bnVsbCwibWVtYmVyc2hpcElkIjpudWxsLCJyb2xlcyI6InVzZXIiLCJpc0FjdGl2ZSI6bnVsbCwicHJvZmlsZVVybCI6IiIsImlhdCI6MTY4NzU4NDQ5M30.9KM2QVl--ZqnVRVT-dNTba54JW5lI73Mr9SvWFhXfEU",
  },
};
