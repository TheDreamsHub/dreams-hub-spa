import React, { useRef, useState } from "react";

import feat1 from "../../assets/images/planing-feat-icon.png";
import feat2 from "../../assets/images/prototype-feat-icon.png";
import feat3 from "../../assets/images/style-feat-icon.png";
import feat4 from "../../assets/images/dev-feat-icon.png";
import feat5 from "../../assets/images/deliver-feat-icon.png";

type FeatureType = {
  title: string;
  subTitle: string;
  image: string;
};

export const features: FeatureType[] = [
  {
    title: "التخطيط",
    subTitle: "لجمع متطلبات العمل وتلبية احتياجات شريك المشروع",
    image: feat1,
  },
  {
    title: "النموذج الأولي",
    subTitle:
      "لاختبار المنتج والحلول لتجربة المسخدم قبل البدء في التصميم عالي الدقة",
    image: feat2,
  },
  {
    title: "التصميم",
    subTitle:
      "تحويل المنتج الأولي للتصميم عالي الدقة لنلبي احتياج المستخدم الجمالي والعملي",
    image: feat3,
  },
  {
    title: "التطوير",
    subTitle:
      "هنا يتم تطوير المنتج ببناء الأنظمة وقواعد البيانات وتطوير الواجهات مع الحرص على الأمان مع قابلية الاستخدام",
    image: feat4,
  },
  {
    title: "تسليم المشروع",
    subTitle:
      "بعد التأكد من تطوير وتنفيذ المشروع على المواصفات المحددة يتم تسليمه للعميل",
    image: feat5,
  },
];

export default function FeaturesSectionContainer() {
  const [focusButton, setFocusButton] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeScroll = (event: React.UIEvent<HTMLElement>) => {
    const width = event.currentTarget.scrollLeft;
    //when the scroll in the beginning
    if (width > -233) {
      setFocusButton(1);
    }
    //when the scroll in the middle
    else if (width > -458) {
      setFocusButton(2);
    }
    //when the scroll in the end
    else {
      setFocusButton(3);
    }
  };

  const handleSectionsScroll = () => {
    const sectionHeight = sectionRef.current?.clientHeight ?? 0;
    const scrollPosition = sectionRef.current?.scrollTop ?? 0;
    const currentStep = Math.round(scrollPosition / sectionHeight) + 1;
    setFocusButton(currentStep);
  };

  return (
    <div className="flex w-full flex-col items-center justify-end">
      <h4 className="text-2xl text-start w-full text-secondary">
        أسلوب العمل:
      </h4>
      <div className="relative h-72 w-10/12 rounded-lg sm:h-0">
        {features.map((feature: FeatureType, index: number) => {
          return (
            <React.Fragment key={`feature-image-${index}`}>
              <figure
                className={`absolute top-0 flex items-center justify-center mx-auto h-full w-full overflow-hidden rounded-lg transition-all duration-1000 ${
                  focusButton === index + 1 ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.subTitle}
                  className="mx-auto sm:w-80 w-44 h-auto transition-all duration-1000"
                />
              </figure>
            </React.Fragment>
          );
        })}
      </div>
      <div
        onScroll={activeScroll}
        className="hidden-scrollbar relative w-full justify-center sm:justify-between gap-96 overflow-x-scroll py-8 sm:mb-20 sm:flex sm:flex-row sm:overflow-x-auto"
      >
        {/* fake section to handle on scroll animation */}
        <div
          className="absolute right-0 hidden h-[680px] w-full overflow-scroll opacity-0 sm:block"
          onScroll={handleSectionsScroll}
          ref={sectionRef}
        >
          <div className="h-[680px] w-full" />
          <div className="h-[680px] w-full" />
          <div className="h-[680px] w-full" />
          <div className="h-[680px] w-full" />
          <div className="h-[680px] w-full" />
        </div>
        <div className="flex w-max items-center justify-center sm:flex-col">
          {features.map((feature: FeatureType, index: number) => (
            <button
              key={index}
              className={`relative mx-4 flex h-28 w-80 flex-row items-center rounded-lg bg-transparent px-4 sm:mt-6 sm:w-72
              xl:w-96 ${
                focusButton === index + 1
                  ? "opacity-100 sm:-translate-x-4 sm:transform xl:-translate-x-10"
                  : "opacity-50"
              } transition-all duration-500 sm:transform`}
              onFocus={() => {
                setFocusButton(index + 1);
              }}
            >
              <div
                className={`${
                  focusButton === index + 1 ? "bg-accent" : "bg-transparent"
                } absolute right-0 h-28 w-1 rounded-lg transition-all duration-200`}
              ></div>
              <div className="flex flex-col justify-evenly pr-4 text-right">
                <b
                  className={`${
                    focusButton === index + 1
                      ? "font-bold text-accent"
                      : "text-primary-300 blur-sm"
                  } mb-2 text-sm xl:text-base transition-all duration-200`}
                >
                  {feature.title}
                </b>
                <h2
                  className={`${
                    focusButton === index + 1
                      ? "text-accent opacity-70"
                      : "text-primary-300 opacity-30 blur-sm"
                  } text-sm xl:text-base transition-all duration-200`}
                >
                  {feature.subTitle}
                </h2>
              </div>
            </button>
          ))}
        </div>
        <div className="relative hidden w-96 h-[680px] rounded-3xl sm:block">
          {features.map((feature: FeatureType, index: number) => {
            return (
              <React.Fragment key={`feature-image-${index}`}>
                <figure
                  className={`absolute flex items-center justify-center top-0 mx-auto h-full w-full overflow-hidden rounded-[1.3rem] transition-all duration-1000 ${
                    focusButton === index + 1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={feature.image}
                    alt="feature"
                    className="mx-auto sm:w-80 w-44 h-auto transition-all duration-1000"
                  />
                </figure>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
