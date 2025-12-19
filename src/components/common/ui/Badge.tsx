interface BadgeProps {
  count: number;
  className?: string;
}

const Badge = ({ count, className = "" }: BadgeProps) => {
  return (
    <span className={className}>
      {count}
    </span>
  );
};

export default Badge;
