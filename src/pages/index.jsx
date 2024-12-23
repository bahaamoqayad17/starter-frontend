import SiteLayout from "@/components/site/SiteLayout";

const Page = () => {
  return (
    <>
      <div>test</div>
    </>
  );
};

export default Page;

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
