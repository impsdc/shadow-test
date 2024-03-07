import { CSSProperties } from "styled-components";

interface Props {
    src?: string;
    width?: string | number;
    height?: string | number;
    withShadow?: boolean;
    style?: CSSProperties;
    shadowStyle?: CSSProperties;
    blur?: number;
    borderRadius?: number;
    shadowOpacity?: number;
    className?: string;
}

export const BackgroundImage = (props: Props) => (
    <div
        style={{
            backgroundPosition: "center center",
            backgroundSize: "cover",
            position: "relative",
            width: props.width,
            height: props.height,
            backgroundImage: `url(${props.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "50%",
            backgroundPositionY: "50%",
            borderRadius: `${props.borderRadius || 6}px`,
            ...(props.style || {}),
        }}
        className={props.className}
    >
        {props.withShadow ? (
            <div
                style={{
                    zIndex: -1,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    filter: `blur(${props.blur || 18}px)`,
                    backgroundImage: `url(${props.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "50%",
                    backgroundPositionY: "50%",
                    borderRadius: `${props.borderRadius || 6}px`,
                    opacity: props.shadowOpacity || 0.3,
                    ...(props.shadowStyle || {}),
                }}
            />
        ) : null}
    </div>
);

export default BackgroundImage;
