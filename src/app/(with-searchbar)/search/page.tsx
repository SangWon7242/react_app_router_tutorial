import ClientComponent from "../../components/client-components";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  // 구조분해 할당
  const { q } = await searchParams;

  return (
    <div>
      검색 페이지 : {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
