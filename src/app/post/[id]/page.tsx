import ClientComponent from "@/app/components/client-components";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      post/[id] : {id}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
