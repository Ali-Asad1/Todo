import { classNames } from "@/libs/className";
import { useField } from "formik";
import { forwardRef } from "react";

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  lable?: string;
}

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ lable, className, ...props }, ref) => {
    const [field, meta] = useField(props.name as string);

    return (
      <div className="flex flex-col-reverse mt-10">
        <textarea
          className={classNames(
            "peer w-full h-24 mt-2 px-3 pt-3 bg-slate-4 rounded-md border border-slate-6 text-sm focus:border-pink-8 focus:outline-none transition-colors placeholder:font-roboto placeholder:text-sm resize-none",
            meta.touched && meta.error && "!border-red-8",
            className
          )}
          ref={ref}
          {...field}
          {...props}
        />
        {lable && (
          <label
            htmlFor={props.name}
            className={classNames(
              "font-poppins text-base pl-1 transition-colors peer-focus:text-pink-9",
              meta.touched && meta.error && "!text-red-9"
            )}
          >
            {lable}
          </label>
        )}
      </div>
    );
  }
);
export default TextareaField;
