import { cn } from "@/lib/utils";

export const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24", className)}>
      {children}
    </div>
  );
};
