import { t } from "i18next";
import * as Yup from "yup";

export const validationSchema = () => {
  return Yup.object().shape({
    company_name: Yup.string().required(t("app.shared.form.errors.required")!),
    company_owner: Yup.string().required(t("app.shared.form.errors.required")!),
    owner_mobile: Yup.string().required(t("app.shared.form.errors.required")!),
    owner_email: Yup.string().required(t("app.shared.form.errors.required")!),
    service_type: Yup.string().required(t("app.shared.form.errors.required")!),
  });
};
