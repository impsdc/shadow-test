import React from "react";
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { PlatformEnum, getPlatformValue } from "@api/Model/Game";
import PlaystationIcon from "../icons/Playstation";
import XboxIcon from "@icons/Xbox";
import PcIcon from "@icons/Pc";

const MobileLink = styled(Flex)`
    cursor: pointer;
    width: 26px;
    align-items: center;
    font-size: 1.2rem;
    margin: auto;
    border-radius: 9px;
    transition: all 0.2s;
    user-select: none;

    svg {
        min-width: 28px;
    }
`;

interface PlatformProps {
    platform?: string;
}

const Plaform = ({ platform }: PlatformProps) => {
    const platformValue = getPlatformValue(platform ?? "");
    switch (platformValue) {
        case PlatformEnum.PlayStation:
            return (
                <MobileLink>
                    <PlaystationIcon fill="white" height="20px" />
                </MobileLink>
            );
        case PlatformEnum.Xbox:
            return (
                <MobileLink>
                    <XboxIcon fill="white" height="20px" />
                </MobileLink>
            );
        case PlatformEnum.PC:
            return (
                <MobileLink>
                    <PcIcon fill="white" height="20px" />
                </MobileLink>
            );
        default:
            return;
    }
};
export default Plaform;
