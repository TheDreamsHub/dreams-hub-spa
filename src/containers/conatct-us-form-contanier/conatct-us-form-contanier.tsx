import { useFormik } from "formik";
import { useState } from "react";
import { validationSchema } from "./conatct-us-form-contanier.validation";
import { useTranslation } from "react-i18next";
import {
  DirectionEnum,
  InputField,
} from "../../components/input-field/input-field";
import ComponentLoader from "../../components/component-loader/component-loader";
import { LanguagesEnum } from "../../core/enums/languages.enum";
import { ContactTypeEnum } from "../../core/enums/contact.enum";
import { ContactFormType } from "../../core/types/contact.types";
import { TextAreaField } from "../../components/textarea-field/textarea-field";

export type NetlifyType = ContactFormType & {
  "form-name": string;
};

export default function ContactUsFormContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { i18n, t } = useTranslation();

  const initalFormData: ContactFormType = {
    type: ContactTypeEnum.INDIVIDUAL,
    subject: "",
    body: "",
  };

  const encode = (data: NetlifyType) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (values: ContactFormType) => {
    setIsLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact-us",
        ...formik.values,
      }),
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const formik = useFormik({
    initialValues: initalFormData,
    onSubmit: (values: ContactFormType) => {
      handleSubmit({
        ...values,
      });
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
  });

  return (
    <div className="w-full bg-white dark:bg-black/60 shadow-section rounded-3xl p-6 sm:p-12">
      <form
        onSubmit={formik.handleSubmit}
        data-netlify="true"
        name="contact-us"
      >
        <input type="hidden" name="contact-us" value="contact-us" />
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <h2 className="text-center dark:text-white text-[#6C6868] font-light text-xs sm:text-3xl">
            {t("container.ContactUsFormContainer.title")}
          </h2>
          <div className="w-full">
            <label className="text-[#6C6868] font-light mb-2 block dark:text-white sm:text-base text-xs">
              {t("container.ContactUsFormContainer.type")}
            </label>
            <div className="grid grid-cols-2 gap-3 items-center w-full mt-4">
              <div
                className={`text-center rounded-[42px] transition-all duration-150 cursor-pointer font-light text-xs sm:text-xl p-2 w-full ${
                  formik.values.type === ContactTypeEnum.INDIVIDUAL
                    ? "text-white bg-accent"
                    : "text-muted bg-[#E8ECF2] dark:bg-white/20 dark:text-white"
                }`}
                onClick={() =>
                  formik.setFieldValue("type", ContactTypeEnum.INDIVIDUAL)
                }
              >
                {t("container.ContactUsFormContainer.INDIVIDUAL")}
              </div>
              <div
                className={`text-center rounded-[42px] transition-all duration-150 cursor-pointer font-light text-xs sm:text-xl p-2 w-full ${
                  formik.values.type === ContactTypeEnum.COMPANY
                    ? "text-white bg-secondary"
                    : "text-muted bg-[#E8ECF2] dark:bg-white/20 dark:text-white"
                }`}
                onClick={() =>
                  formik.setFieldValue("type", ContactTypeEnum.COMPANY)
                }
              >
                {t("container.ContactUsFormContainer.COMPANY")}
              </div>
            </div>
          </div>
          <div className="w-full">
            <InputField
              aria-label={t("container.ContactUsFormContainer.subject")!}
              name="subject"
              value={formik.values.subject ?? ""}
              onChange={formik.handleChange}
              dir={
                i18n.language === LanguagesEnum.AR
                  ? DirectionEnum.RTL
                  : DirectionEnum.LTR
              }
              className="font-light !text-sm"
            />
            {formik.touched.subject && formik.errors.subject && (
              <p className="text-danger font-light text-sm -mt-5 mb-5">
                {formik.errors.subject}
              </p>
            )}
          </div>
          <div className="w-full">
            <TextAreaField
              aria-label={t("container.ContactUsFormContainer.body")!}
              name="body"
              value={formik.values.body ?? ""}
              onChange={formik.handleChange}
              dir={
                i18n.language === LanguagesEnum.AR
                  ? DirectionEnum.RTL
                  : DirectionEnum.LTR
              }
              className="font-light !text-sm"
              rows={10}
            />
            {formik.touched.body && formik.errors.body && (
              <p className="text-danger font-light text-sm -mt-5 mb-5">
                {formik.errors.body}
              </p>
            )}
          </div>

          <div className="mt-4 flex w-full justify-center gap-2">
            <button
              type="submit"
              disabled={isLoading}
              className="text-white text-sm sm:text-2xl text-center w-2/3 font-light bg-primary rounded-[38px] px-10 py-2"
            >
              <div className="flex items-center justify-center cursor-pointer">
                {isLoading && (
                  <div className="w-6">
                    <ComponentLoader />
                  </div>
                )}
                {t("container.ContactUsFormContainer.cta")}
              </div>
            </button>
          </div>
        </div>
      </form>

    </div>
  );
}
