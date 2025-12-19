import type { ReactNode } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

const Container = ({ children, className = "", props }: ContainerProps) => {
  return (
    <div className={className} {...props} >
      {children}
    </div>
  );
};

export default Container;
