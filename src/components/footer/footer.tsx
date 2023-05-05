import logo from "../../assets/icons/full-logo.svg";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="shadow-section w-full">
        <div className="xl:max-w-7xl sm:max-w-2xl mx-auto w-full max-w-xs py-16">
          <div className="grid xl:grid-cols-4 grid-cols-2 items-start justify-between gap-10">
            <div>
              <img
                src={logo}
                alt={t("components.Footer.go")!}
                className="w-28 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
