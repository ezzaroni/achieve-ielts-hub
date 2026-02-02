import { cn } from "@/lib/utils";

export const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 md:px-12", className)}>
      {children}
    </div>
  );
};
