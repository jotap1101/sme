import { SiteHeader } from "@/components/site-header";

type MainContentProps = {
  children: React.ReactNode;
  titleSiteHeader: string;
};

export function MainContent({ children, titleSiteHeader }: MainContentProps) {
  return (
    <>
      <SiteHeader title={titleSiteHeader} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
