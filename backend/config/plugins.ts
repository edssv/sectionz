export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "noreply@gmail.com",
        defaultReplyTo: "noreply@gmail.com",
      },
    },
  },
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["profileName", "dob", "gender", "marketingEmails"],
      },
    },
  },
});
