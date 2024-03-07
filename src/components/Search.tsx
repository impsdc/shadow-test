"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import SearchOutlineIcon from "../icons/SearchOutlineIcon";
import CloseIcon from "@icons/CloseIcon";
import { search } from "./styles/search.css";

interface SearchProps {
    placeholder: string;
    pattern?: string;
    value?: string | number;
    onChange: (chapter: string) => void;
    onClear: () => void;
}

const Search = ({ placeholder, pattern, value, onChange, onClear }: SearchProps) => {
    const [typing, setTyping] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);
    const input = useRef<HTMLInputElement>(null);

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value);
        },
        [onChange],
    );

    useEffect(() => {
        if (value) {
            setTyping(true);
        } else {
            setTyping(false);
        }
    }, [value]);

    const handleFocus = useCallback(() => setFocus(true), []);
    const handleBlur = useCallback(() => setFocus(false), []);
    const handleClear = useCallback(() => onClear(), [onClear]);
    const handleFocusIcon = useCallback(() => input.current && input.current.focus(), []);

    return (
        <Flex w={1} alignItems="center">
            <input
                type="text"
                className={search}
                value={value}
                pattern={pattern}
                placeholder={placeholder}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={input}
            />
            <Flex>
                {typing ? (
                    <CloseIcon opacity={1} fill="white" width="28px" cursor="pointer" onClick={handleClear} />
                ) : (
                    <SearchOutlineIcon
                        stroke="white"
                        width="28px"
                        cursor="text"
                        style={focus ? { opacity: "1" } : { opacity: "0.6" }}
                        onClick={handleFocusIcon}
                    />
                )}
            </Flex>
        </Flex>
    );
};

export default Search;
