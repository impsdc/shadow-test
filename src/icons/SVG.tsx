import { SVGProps } from "react";
import styled from "styled-components";

const SVG = styled.svg<SVGProps<SVGSVGElement>>`
    min-width: 20px;
    stroke-width: 32px;
`;

export default SVG;
