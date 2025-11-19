"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [search, serSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    serSearch(e.target.value);
  };

  const onSubmit = () => {
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력"
        value={search}
        onChange={onChangeSearch}
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
