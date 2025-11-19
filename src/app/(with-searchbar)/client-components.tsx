"use client";

import ServerComponent from "./server-components";

export default function ClientComponent() {
  console.log("클라이언트 컴포넌트 실행!!");
  return <ServerComponent />;
}
