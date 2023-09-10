const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="desktop:container px-5">{children}</div>;
};

export default Container;
