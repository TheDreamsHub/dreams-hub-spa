import { t } from "i18next";
import * as Yup from "yup";

export const validationSchema = () => {
  return Yup.object().shape({
    type: Yup.string().required(t("app.shared.form.errors.required")!),
    subject: Yup.string().required(t("app.shared.form.errors.required")!),
    body: Yup.string()
      .required(t("app.shared.form.errors.required")!)
      .max(250, t("app.shared.form.errors.max")!),
  });
};
