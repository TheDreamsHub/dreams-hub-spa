import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AppRouting } from "./app.routing";
import ComponentLoader from "./components/component-loader/component-loader";
import { LanguagesEnum } from "./core/enums/languages.enum";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import useModeStore from "./core/store/mode.store";

function App() {
  const { i18n } = useTranslation();
  const { mode } = useModeStore();

  useEffect(() => {
    const storageLang = localStorage.getItem('language') || LanguagesEnum.AR;

    if (storageLang === LanguagesEnum.EN) {
      i18n.changeLanguage(LanguagesEnum.EN);
      localStorage.setItem('language', LanguagesEnum.EN);
    } else {
      i18n.changeLanguage(LanguagesEnum.AR);
      localStorage.setItem('language', LanguagesEnum.AR);
    }
  }, [i18n]);

  return (
    <Suspense fallback={<ComponentLoader />}>
      <div className={mode}>
        <main
          className="bg-white dark:bg-[#131521] overflow-x-hidden min-h-screen w-screen font"
          dir={i18n.language === LanguagesEnum.AR ? "rtl" : "ltr"}
        >
          <Header />
          <div>
            <AppRouting />
          </div>
          <Footer />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
