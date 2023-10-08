import { useFormik } from "formik";
import { useState } from "react";
import { validationSchema } from "./conatct-us-form-contanier.validation";
import {
  DirectionEnum,
  InputField,
} from "../../components/input-field/input-field";
import ComponentLoader from "../../components/component-loader/component-loader";
import { ContactFormType } from "../../core/types/contact.types";

export type NetlifyType = ContactFormType & {
  "form-name": string;
};

export default function ContactUsFormContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const initalFormData: ContactFormType = {
    company_name: "",
    company_owner: "",
    owner_mobile: "",
    owner_email: "",
    service_type: "",
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
      setIsSubmitted(true);
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
    <div className="w-full bg-primary-50 rounded-3xl p-6 sm:p-12">
      {isSubmitted ? (
        <div className="mx-auto sm:w-[670px] w-full p-3 sm:p-12 bg-primary-50 rounded-xl backdrop-blur-lg">
          <div>
            <p className="text-accent-700 text-center text-lg font-bold mb-2">
              شكرًا على تواصلك معنا، سيتم التواصل معكم في أقرب وقت ممكن
            </p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          data-netlify="true"
          name="contact-us"
        >
          <input type="hidden" name="contact-us" value="contact-us" />
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <div className="w-full">
              <InputField
                aria-label="اسم الشركة"
                name="company_name"
                value={formik.values.company_name ?? ""}
                onChange={formik.handleChange}
                dir={DirectionEnum.RTL}
                className="font-light !text-sm"
              />
              {formik.touched.company_name && formik.errors.company_name && (
                <p className="text-red-500 font-light text-sm -mt-5 mb-5">
                  {formik.errors.company_name}
                </p>
              )}
            </div>
            <div className="w-full">
              <InputField
                aria-label="الاسم الثلاثي"
                name="company_owner"
                value={formik.values.company_owner ?? ""}
                onChange={formik.handleChange}
                dir={DirectionEnum.RTL}
                className="font-light !text-sm"
              />
              {formik.touched.company_owner && formik.errors.company_owner && (
                <p className="text-red-500 font-light text-sm -mt-5 mb-5">
                  {formik.errors.company_owner}
                </p>
              )}
            </div>
            <div className="w-full">
              <InputField
                aria-label="رقم التواصل"
                name="owner_mobile"
                value={formik.values.owner_mobile ?? ""}
                onChange={formik.handleChange}
                dir={DirectionEnum.RTL}
                className="font-light !text-sm"
              />
              {formik.touched.owner_mobile && formik.errors.owner_mobile && (
                <p className="text-red-500 font-light text-sm -mt-5 mb-5">
                  {formik.errors.owner_mobile}
                </p>
              )}
            </div>
            <div className="w-full">
              <InputField
                aria-label="البريد الالكتروني"
                name="owner_email"
                type="email"
                value={formik.values.owner_email ?? ""}
                onChange={formik.handleChange}
                dir={DirectionEnum.RTL}
                className="font-light !text-sm"
              />
              {formik.touched.owner_email && formik.errors.owner_email && (
                <p className="text-red-500 font-light text-sm -mt-5 mb-5">
                  {formik.errors.owner_email}
                </p>
              )}
            </div>
            <div className="w-full">
              <InputField
                aria-label="الخدمة المطلوبة"
                name="service_type"
                value={formik.values.service_type ?? ""}
                onChange={formik.handleChange}
                dir={DirectionEnum.RTL}
                className="font-light !text-sm"
              />
              {formik.touched.service_type && formik.errors.service_type && (
                <p className="text-red-500 font-light text-sm -mt-5 mb-5">
                  {formik.errors.service_type}
                </p>
              )}
            </div>

            <div className="mt-4 flex w-full justify-end gap-2">
              <button
                type="submit"
                disabled={isLoading}
                className="text-primary-50 bg-primary hover:bg-primary-700 transition-all duration-300 text-base font-bold py-3.5 px-4 flex items-center justify-center w-fit gap-1 rounded-lg"
              >
                <div className="flex items-center justify-center cursor-pointer">
                  {isLoading && (
                    <div className="w-6">
                      <ComponentLoader />
                    </div>
                  )}
                  تقديم
                </div>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
