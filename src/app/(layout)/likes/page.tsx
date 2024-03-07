"use client";
import { useCallback, useEffect, useState } from "react";
import {  apiService } from "@api/ApiService";
import { toast } from "sonner";
import { Flex } from "@chakra-ui/react";
import type { Game } from "@api/Model/Game";
import { Text } from "@chakra-ui/react"
import Item from "@components/Item";
import ItemList from "@components/ItemList";

export default function LikesPage() {
    const [loader, setLoader] = useState(false);
    const [games, setGames] = useState<Game[]>([]);

    const getGame = useCallback(async (id: number) => {
        try {
            const res = await apiService.getGameById(id);
            setGames((prev) => [...prev, res]);
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast(error.message);
                setLoader(false);
            }
        }
    }, []);

    const handleLike = useCallback((id: number) => {
        const likes =  JSON.parse(window.localStorage.getItem('likes') ?? "[]") ?? [] as number[];
        if (likes.includes(id)) {
            localStorage.setItem('likes', JSON.stringify(likes.filter((item : number) => item !== id)));
            setGames((prev) => prev.filter((item) => item.id !== id));
        }
    }, [])

    useEffect(() => {
        const likes =  JSON.parse(window.localStorage.getItem('likes') ?? "[]") ?? [] as number[];
        setLoader(true);
        if (games.length !==  likes.length) {
            likes.map((id: number)  => getGame(id));
        }
        setLoader(false);
    }, []);

    const listItems =  games?.length > 0 ? games?.map((item) => {
        return (
            <Item
                key={item.id}
                id={item.id}
                href={`/${item.slug}`}
                isLiked
                thumb={item.background_image}
                text={item.name}
                onLike={handleLike}
                platform={item.parent_platforms?.map((plat) => plat.platform.name) ?? []}
        />

        )
    }) : undefined;

    return (
        <Flex w={1} py={2}>
            {games?.length > 0 ?
                <ItemList title="Your likes" loading={loader}>
                    {listItems}
                </ItemList> : <Text as="p">You do not have like yet</Text>}
        </Flex>
    )
}
