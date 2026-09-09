import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#04060a",
          color: "#2ce8a8",
          fontFamily: "sans-serif",
          fontSize: "88px",
          fontWeight: 700,
        }}
      >
        ›_
      </div>
    ),
    { ...size },
  );
}
