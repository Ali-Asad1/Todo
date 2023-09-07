import { classNames } from "@/libs/className";

export default function Grid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="desktop:container px-5">
      <div
        className={classNames(
          "grid grid-cols-4 tablet:grid-cols-4 desktop:grid-cols-12 gap-x-5",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
