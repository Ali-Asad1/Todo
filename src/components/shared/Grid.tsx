export default function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="desktop:container px-5">
      <div className="grid grid-cols-4 tablet:grid-cols-4 desktop:grid-cols-12 gap-x-5 ">
        {children}
      </div>
    </div>
  );
}
