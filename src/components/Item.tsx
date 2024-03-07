import Link from "next/link";
import React, { useCallback } from "react";
import { Flex, Box } from "@chakra-ui/react";
import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";
import Platform from "./Platform";
import HeartOutlineIcon from "@icons/HeartIconOutline";
import HeartIcon from "@icons/HeartIcon";

const AnimationWrapper = styled(Flex)`
    animation: pop;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-duration: 0.15s;
    animation-timing-function: ease-in-out;
`;

const Wrapper = styled(Flex)`
    width: 100%;
    background: rgba(255, 255, 255, 0.068);
    border-radius: 10px;
    transition: transform 0.2s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        transform: scale(1.03);
        .thumb {
            transform: scale(1.015);
        }
    }

    &:active {
        transform: scale(0.98);
        .thumb {
            transform: scale(0.99);
        }
    }
`;

const ImageWrapper = styled(Flex)`
    padding: 7px;
    padding-bottom: 0;
    border-radius: 8px;
    width: 100%;
    z-index: 0;
    transition: transform 0.2s;
`;

const ItemText = styled(Box)`
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.5em;
    max-width: 100%;
`;

const Likes = styled("div")`
    position: absolute;
    top: 10px;
    left: 10px;
    box-shadow: 0 0 10px 0 rgb(34 35 41 / 50%);
    background: rgba(49, 50, 56, 0.7);
    transition: all 0.2s;
    border-radius: 7px;
    padding: 0.5em 0.8em;
    z-index: 10;
    border-radius: 7px;
    backdrop-filter: blur(20px);
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
        height: 22px;
    }

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.98);
    }
`;

interface ItemProps {
    id?: number;
    text?: string;
    thinText?: string;
    thumb?: string;
    href?: string;
    isLiked?: boolean;
    platform?: string[];
    onLike?: (id: number) => void;
}

export const Item = ({ text, thinText, thumb, onLike, href, id, isLiked, platform }: ItemProps) => {
    const handleLike = useCallback(() => {
        onLike?.(id!);
    }, [onLike, id]);

    return (
        <Flex w={1} style={{ position: "relative" }}>
            <Link href={{ pathname: href ?? "/" }}>
                <AnimationWrapper h={1} flex={1}>
                    <Wrapper width={1} alignItems="center" justifyContent="center" flexDirection="column">
                        <ImageWrapper className="thumb">
                            <BackgroundImage width="100%" height="300px" withShadow shadowOpacity={1} src={thumb} />
                        </ImageWrapper>
                        <ItemText py={2} px={2}>
                            {text}
                            &nbsp;
                            <span style={{ fontWeight: "normal" }}>{thinText}</span>
                        </ItemText>
                        <Flex my={2}>{platform?.map((plt) => <Platform key={plt} platform={plt} />)}</Flex>
                    </Wrapper>
                </AnimationWrapper>
            </Link>
            {id ? (
                <Likes onClick={handleLike}>
                    {isLiked ? <HeartIcon fill="white" /> : <HeartOutlineIcon stroke="white" />}
                </Likes>
            ) : null}
        </Flex>
    );
};
export default Item;
