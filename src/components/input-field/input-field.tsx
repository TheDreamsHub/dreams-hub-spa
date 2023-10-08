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
        <label className="text-slate-500 font-light mb-2 block sm:text-base text-xs">
          {props["aria-label"]}
        </label>
      )}

      <div className="relative">
        <input
          {...props}
          className={`mb-2 bg-slate-500/10 h-12 w-full rounded-lg border border-opacity-20 py-5 px-4 text-base disabled:bg-muted disabled:border-muted focus:ring-accent leading-7 focus:border-transparent focus:outline-none focus:ring-2 disabled:border-opacity-40 disabled:bg-opacity-20 ${
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
