import { ContactTypeEnum } from "../enums/contact.enum";

export type ContactFormType = {
  type: ContactTypeEnum;
  subject: string;
  [body: string]: string;
};
