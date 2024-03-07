import React from "react";
import Search from "./Search";

interface SearchMangaProps {
    value: string;
    onClear: () => void;
    onChange: (text: string) => void;
}

const SearchManga = ({ onClear, onChange, value }: SearchMangaProps) => {
    return <Search onChange={onChange} value={value} onClear={onClear} placeholder="Search a game" />;
};

export default SearchManga;
