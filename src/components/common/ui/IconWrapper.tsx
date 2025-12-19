import type { ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const IconWrapper = ({
  children,
  onClick,
  className = ""
}: IconWrapperProps) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default IconWrapper;
