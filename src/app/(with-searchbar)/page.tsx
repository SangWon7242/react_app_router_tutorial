import ClientComponent from "./client-components";
import ServerComponent from "./server-components";

export default function Home() {
  return (
    <div>
      메인 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
