import { useTranslation } from "react-i18next";
import ContactUsFormContainer from "../conatct-us-form-contanier/conatct-us-form-contanier";
import { LanguagesEnum } from "../../core/enums/languages.enum";

export default function ContactUsContainer() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`w-full flex xl:py-64 py-28 relative overflow-hidden items-center justify-center p-2 pb-0 min-h-screen h-full bg-contain sm:bg-form-size ${
        i18n.language === LanguagesEnum.AR
          ? "bg-form-position bg-form dark:bg-form-dark"
          : "bg-form-position-en bg-form-en"
      } bg-no-repeat`}
    >
      <div className="xl:max-w-7xl sm:max-w-2xl mx-auto w-full max-w-xs grid sm:grid-cols-2 items-center gap-10 pb-96">
        <div>
          <h1 className="font-light dark:text-white text-primary text-base sm:text-5xl">
            {t("container.ContactUsContainer.title")}
          </h1>
        </div>
        <div>
          <ContactUsFormContainer />
        </div>
      </div>
    </div>
  );
}
