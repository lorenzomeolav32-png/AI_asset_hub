import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? "AI Assets Directory").slice(0, 120);
  const eyebrow = (
    searchParams.get("eyebrow") ?? "verified AI assets & guides for developers"
  ).slice(0, 90);
  const type = (searchParams.get("type") ?? "").slice(0, 40);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#04060a",
          padding: "72px",
          fontFamily: "sans-serif",
          color: "#e6f0ea",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "24px",
            color: "#7c8a83",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "44px",
              width: "44px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              border: "1px solid #1b2b24",
              background: "#0a1310",
              color: "#2ce8a8",
              fontSize: "22px",
            }}
          >
            ›_
          </div>
          <div style={{ display: "flex" }}>
            ~/<span style={{ color: "#e6f0ea" }}>ai_assets_directory</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {type ? (
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                borderRadius: "999px",
                border: "1px solid #1b2b24",
                background: "#0a1310",
                padding: "8px 18px",
                fontSize: "22px",
                color: "#2ce8a8",
              }}
            >
              {type}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: "28px", color: "#9fb0a8", maxWidth: "900px" }}>
            {eyebrow}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "22px",
            color: "#7c8a83",
          }}
        >
          <div
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "999px",
              background: "#2ce8a8",
            }}
          />
          curated · tested · open-source
        </div>
      </div>
    ),
    { ...size },
  );
}
