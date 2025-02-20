import { CSSProperties } from "react";

/**
 * Wraps a React component in a rectangle with a definite width and height
 * @param width the width of the rectangle
 * @param height the height of the rectangle, expressed relative to the
 * container width (e.g. 100% by 100% will be a square)
 * @returns a nestable React component
 */
export default function Rectangle({ width, height, children }: RectangleProps) {
  const outerStyles: CSSProperties = {
    position: "relative",
    width,
    paddingBottom: height,
    overflow: "hidden",
  };
  const innerStyles: CSSProperties = {
    position: "absolute",
    width,
    paddingBottom: height
  };
  return (
    <div style={outerStyles}>
      <div style={innerStyles}>{children}</div>
    </div>
  );
}

type RectangleProps = React.PropsWithChildren<{
  width: string;
  height: string;
}>;
