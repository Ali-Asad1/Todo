import { classNames } from "@/libs/className";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex justify-center items-center px-5 rounded-xl text-base font-semibold transition-all select-none",
  {
    variants: {
      btnStyle: {
        primary:
          "bg-teal-9 hover:bg-teal-10 active:bg-teal-11 text-slate-1 hover:text-slate-1/80 active:text-slate-1/60",
        secondary:
          "bg-slate-3 hover:bg-slate-4 active:bg-slate-5 text-teal-11 hover:text-teal-11/80 active:text-teal-11/60",
        tertiary: "bg-transparent text-teal-11 hover:bg-teal-9/10 active:bg-teal-9/20",
        outline:
          "bg-transparent ring-1 ring-slate-6 hover:ring-slate-7 active:ring-slate-8 text-teal-11 hover:bg-slate-9/10 active:bg-slate-9/20",
      },
      btnType: {
        default: "",
        iconOnly: "rounded-full",
        leftIcon: "rounded-l-full",
        rightIcon: "rounded-r-full",
      },
      btnSize: {
        sm: "h-10 rounded-[10px]",
        md: "h-12",
        lg: "h-14",
        iconOnly: "h-10",
      },
    },
    compoundVariants: [
      {
        btnType: "default",
        btnSize: "sm",
        className: "px-4",
      },
      {
        btnType: "default",
        btnSize: "md",
        className: "px-5",
      },
      {
        btnType: "default",
        btnSize: "lg",
        className: "px-6",
      },
      {
        btnType: "iconOnly",
        btnSize: "sm",
        className: "px-2",
      },
      {
        btnType: "iconOnly",
        btnSize: "md",
        className: "px-3",
      },
      {
        btnType: "iconOnly",
        btnSize: "lg",
        className: "px-4",
      },
      {
        btnType: "leftIcon",
        btnSize: "sm",
        className: "pl-2 pr-4 gap-1",
      },
      {
        btnType: "leftIcon",
        btnSize: "md",
        className: "pl-3 pr-5 gap-2",
      },
      {
        btnType: "leftIcon",
        btnSize: "lg",
        className: "pl-4 pr-6 gap-3",
      },
      {
        btnType: "rightIcon",
        btnSize: "sm",
        className: "pl-4 pr-2 gap-1",
      },
      {
        btnType: "rightIcon",
        btnSize: "md",
        className: "pl-5 pr-3 gap-2",
      },
      {
        btnType: "rightIcon",
        btnSize: "lg",
        className: "pl-6 pr-4 gap-3",
      },
    ],
    defaultVariants: {
      btnStyle: "primary",
      btnType: "default",
      btnSize: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({ btnSize, btnStyle, btnType, className, ...props }) => {
  return (
    <button
      className={classNames(buttonVariants({ btnSize, btnStyle, btnType, className }))}
      {...props}
    />
  );
};
