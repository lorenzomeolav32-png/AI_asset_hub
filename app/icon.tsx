import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
          background: "#0a1310",
          border: "1.5px solid #1b2b24",
          color: "#2ce8a8",
          fontFamily: "sans-serif",
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        ›_
      </div>
    ),
    { ...size },
  );
}
