import ClientComponent from "../components/client-components";
import ServerComponent from "../components/server-components";

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
