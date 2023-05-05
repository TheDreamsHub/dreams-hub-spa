export enum DirectionEnum {
  LTR = "ltr",
  RTL = "rtl",
}

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function InputField({ ...props }: InputFieldProps): JSX.Element {
  return (
    <div dir={props.dir} className="mb-4 w-full">
      {props["aria-label"] && (
        <label className="text-[#6C6868] font-light mb-2 block dark:text-white sm:text-base text-xs">
          {props["aria-label"]}
        </label>
      )}

      <div className="relative">
        <input
          {...props}
          className={`mb-2 dark:bg-white/20 dark:text-white dark:border-0 bg-[#E8ECF2] h-12 w-full rounded-[42px] border border-opacity-20 py-5 px-4 text-base disabled:bg-muted disabled:border-muted focus:ring-primary leading-7 focus:border-transparent focus:outline-none focus:ring-2 disabled:border-opacity-40 disabled:bg-opacity-20 ${
            props.className ?? ""
          } px-4`}
        />
        <div
          className={`absolute top-5 flex items-center justify-center space-x-1 ${
            props.dir === DirectionEnum.RTL ? "left-3" : "right-3"
          }`}
        ></div>
      </div>
    </div>
  );
}
