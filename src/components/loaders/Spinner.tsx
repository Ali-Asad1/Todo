import { classNames } from "@/libs/className";
import { VariantProps, cva } from "class-variance-authority";

const spinnerVariants = cva(
  "animate-spin border  border-t border-[#ffffff35] border-t-slate-3 dark:border-[#00000035] dark:border-t-slate-3 rounded-full",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-12 h-12",
      },
    },

    compoundVariants: [
      {
        size: "sm",
        className: "border-4 border-t-4",
      },
      {
        size: "md",
        className: "border-4 border-t-4",
      },
      {
        size: "lg",
        className: "border-8 border-t-8",
      },
    ],

    defaultVariants: {
      size: "md",
    },
  }
);

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className, size }) => {
  return <div className={classNames(spinnerVariants({ size, className }))}></div>;
};
export default Spinner;
