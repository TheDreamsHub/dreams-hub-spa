export type ContactFormType = {
  company_name: string;
  company_owner: string;
  owner_mobile: string;
  owner_email: string;
  [service_type: string]: string;
};
