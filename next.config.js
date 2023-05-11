/** @type {import('next').NextConfig} */


const nextConfig = {
  env: {
    open_ai_key: process.env.open_ai_key,
    freelancer_oauth: process.env.freelancer_oauth,
    remove_bg_key: process.env.remove_bg_key,
    big_jpg_key: process.env.big_jpg_key,
    eleven_labs_key: process.env.eleven_labs_key,
    cj_dropshipping_key: process.env.cj_dropshipping_key,
    mailchimp_key: process.env.mailchimp_key,
    notion_key: process.env.notion_key,
    marketing_crm_contacts_database_id:
      process.env.marketing_crm_contacts_database_id,
    marketing_crm_opportunities_database_id:
      process.env.marketing_crm_opportunities_database_id,
    marketing_crm_accounts_database_id:
      process.env.marketing_crm_accounts_database_id,
    marketing_crm_activities_database_id:
      process.env.marketing_crm_activities_database_id,
    sales_crm_contacts_database_id: process.env.sales_crm_contacts_database_id,
    sales_crm_opportunities_database_id:
      process.env.sales_crm_opportunities_database_id,
    sales_crm_accounts_database_id: process.env.sales_crm_accounts_database_id,
    sales_crm_activities_database_id:
      process.env.sales_crm_activities_database_id,
    gmail_username: process.env.mail_username,
    gmail_password: process.env.mail_password,
  },
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "www.facebook.com",
      "www.google.com",
      "www.cjdropshipping.com/",
      "www.amazon.com",
      "example.com",
      "images.unsplash.com",
      "via.placeholder.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/CyberOnillc",
        permanent: false,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/softwear4u",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/softwear4u/",
        permanent: false,
      },
      {
        source: "/linked-in",
        destination: "https://www.linkedin.com/company/softwear4u/",
        permanent: false,
      },
      {
        source: "/freelancer",
        destination: "https://www.freelancer.com/u/CodingOni",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
