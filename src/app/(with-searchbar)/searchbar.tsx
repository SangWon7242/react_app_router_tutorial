"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, serSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    serSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력"
        value={search}
        onChange={onChangeSearch}
      />
      <button>검색</button>
    </div>
  );
}
