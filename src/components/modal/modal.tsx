import { useEffect, useRef, useState } from "react";

export enum ModalSizeEnum {
  XLARGE = "XLARGE",
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
}

export interface ModalProps {
  children: JSX.Element;
  size?: string;
}

export function Modal({ children, size = ModalSizeEnum.LARGE }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalAnimationDone, setIsModalAnimationDone] =
    useState<boolean>(false);

  const getModalSizeClass = (): string => {
    switch (size) {
      case ModalSizeEnum.SMALL:
        return "sm:w-[343px]";
      case ModalSizeEnum.MEDIUM:
        return "sm:w-[484px]";
      case ModalSizeEnum.LARGE:
        return "sm:max-w-2xl";
      case ModalSizeEnum.XLARGE:
        return "lg:max-w-[990px]";
      default:
        return "lg:max-w-2xl";
    }
  };

  useEffect(() => {
    // disable body scrolling behaviour
    window.document.body.style.overflowY = "hidden";
    window.document.body.style.width = "100%";
    return () => {
      // enable body scrolling behaviour
      window.document.body.style.overflowY = "auto";
    };
  }, []);

  useEffect(() => {
    // check if modal is shown
    if (modalRef?.current) {
      setTimeout(() => {
        setIsModalAnimationDone(true);
      }, 50);
    } else {
      setIsModalAnimationDone(false);
    }
  }, []);

  return (
    <>
      {/* <!--Overlay Effect--> */}
      <div className="z-[9999] fixed inset-0 min-h-full bg-white/5 backdrop-blur-md" />

      <div
        className="z-[9999] fixed inset-0 flex h-full w-full items-center justify-center bg-gray-600 bg-opacity-50"
        id={`my-modal-${Math.random()}`}
        ref={modalRef}
      >
        {/* modal */}

        <div
          className={`max-h-800 bottom-0 mx-auto mt-10 w-11/12 max-w-sm rounded-2xl shadow-lg transition-all duration-500 ${getModalSizeClass()} dark:bg-black border bg-white dark:border-0 ${
            isModalAnimationDone ? "scale-100" : "scale-0"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
