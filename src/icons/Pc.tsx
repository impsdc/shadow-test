import { SVGProps } from "react";
import SVG from "./SVG";

const PcIcon = (props: SVGProps<SVGElement>) => (
    <SVG xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 0 24 24" {...props}>
        <path d="M0 0h11.377v11.372H0Zm12.623 0H24v11.372H12.623ZM0 12.623h11.377V24H0Zm12.623 0H24V24H12.623" />
    </SVG>
);

export default PcIcon;
