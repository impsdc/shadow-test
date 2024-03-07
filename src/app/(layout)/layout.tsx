"use client";
import React, { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { parseAsString, useQueryState } from "nuqs";
import Item from "@components/Item";
import SearchManga from "@/components/SearchManga";
import ItemList from "@components/ItemList";
import useResponsive from "@components/hooks/useResponsive";
import type { Game } from "@api/Model/Game";
import { GetOptions, apiService } from "@api/ApiService";
import { toast } from "sonner";
import HeartOutlineIcon from "@icons/HeartIconOutline";
import HeartIcon from "@icons/HeartIcon";
import { StyledLink, nav } from "@components/styles/layout.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeOutlineIcon from "@icons/HomeOutlineIcon";
import HomeIcon from "@icons/HomeIcon";

interface NavLink {
    text: string;
    link: string;
    icon?: JSX.Element;
    activeIcon?: JSX.Element;
    colorButton?: string;
}

const links: NavLink[] = [
    {
        text: "Accueil",
        link: "/",
        icon: <HomeOutlineIcon stroke="white" />,
        activeIcon: <HomeIcon fill="white" />,
    },
    {
        text: "Vos likes",
        link: "/likes",
        icon: <HeartOutlineIcon stroke="white" />,
        activeIcon: <HeartIcon fill="white" />,
    },
];

interface LayoutProps {
    children: React.ReactNode;
}

export default function DefaultLayout(props: LayoutProps) {
    const isDesktop = useResponsive().isDesktop;
    const pathname = usePathname();
    const [game, setGame] = useQueryState<string>(
        "game",
        parseAsString.withDefault("").withOptions({
            clearOnDefault: true,
        }),
    );
    const [loader, setLoader] = useState(false);
    const [games, setGames] = useState<Game[]>([]);
    const [likes, setLikes] = useState<number[]>([]);

    const getLikesOnClient = useCallback(() => {
        setLikes(JSON.parse(localStorage.getItem('likes') ?? "[]") ?? [])
    }, []);

    const getGame = useCallback(async (search: string) => {
        setLoader(true);
        try {
            const options = new GetOptions();
            options.pageSize = 10;
            options.page = 1;
            options.search = search;
            const res = await apiService.getGame(options);
            setGames(res);
            setLoader(false);
        } catch (error: unknown) {
            setLoader(false);
            if (error instanceof Error) {
                toast(error.message);
            }
        }
    }, []);

    const handleLike = useCallback((id: number) => {
        if (likes.includes(id)) {
            setLikes(likes.filter((item) => item !== id));
            localStorage.setItem('likes', JSON.stringify(likes.filter((item) => item !== id)));
        } else {
            setLikes([...likes, id]);
            localStorage.setItem('likes', JSON.stringify([...likes, id]));
        }
    }, [likes])

    useEffect(() => {
        getLikesOnClient()
        if (game) {
            getGame(game);
        }
    }, [game, getGame]);

    const gamesItems = games?.map((item) => (
        <Item
            key={item.id}
            id={item.id}
            href={`/${item.slug}`}
            isLiked={likes.includes(item.id!)}
            thumb={item.background_image}
            text={item.name}
            onLike={handleLike}
            platform={item.parent_platforms?.map((plat) => plat.platform.name) ?? []}
        />
    ));

    const handleSearchGame = useCallback((text: string) => {
        setGame(text);
    }, []);

    const handleClear = useCallback(() => {
        setGame(null);
        setGames([]);
    }, []);

    const isSearching = useMemo(() => Boolean(game), [game]);

    return (
        <Flex>
            <>
                <Flex w={300} h="100dvh" flexDirection="column" style={{ position: "fixed" }} mx={2}>
                    <Flex alignItems="center" mx={1}>
                        <Suspense>
                            <SearchManga value={game ?? ""} onClear={handleClear} onChange={handleSearchGame} />
                        </Suspense>
                    </Flex>
                    <Flex className={nav} h={1} px={2} flexDirection="column">
                        <Flex alignItems="start" flexDirection="column">
                            <ul>
                                {links.map((link) => {
                                    const active = pathname === link.link;
                                    return (
                                        <li key={link.link}>
                                            <Link href={{ pathname: link.link }}>
                                                <Flex
                                                    className={[active ? "active" : "", StyledLink].join(" ")}
                                                    key={link.link}
                                                    alignItems="center"
                                                    mt={2}
                                                    py={1}
                                                    px={1}
                                                >
                                                    <Flex pr={3}>{active ? link.activeIcon : link.icon}</Flex>
                                                    <Text fontSize="medium">{link.text}</Text>
                                                </Flex>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Flex>
                    </Flex>
                    <Box w="1" py={2} textAlign="center">
                        <Text as="p">Paul Santamaria</Text>
                    </Box>
                </Flex>

                <Flex w={1} ml={isDesktop ? 330 : 0} mt={isDesktop ? 0 : 70} px={2}>
                    {isSearching ? <ItemList title="Games" loading={loader}>
                        {gamesItems}
                    </ItemList> : null}
                    {!isSearching && <main>{props.children}</main>}
                </Flex>
            </>
        </Flex>
    );
};

