import React from "react";

const StorylaneEmbed = () => {
    return (
        <div
            style={{
                position: "relative",
                paddingBottom: "calc(60%)", // Adjusted for larger size
                width: "80%", // Wider container for a bigger view
                height: 0,
                transform: "scale(1)",
                margin: "0 auto", // Center horizontally
            }}
        >
            <iframe
                loading="lazy"
                className="sl-demo"
                src="https://app.storylane.io/demo/yycvc6rwnwtg?embed=inline"
                name="sl-embed"
                allow="fullscreen"
                allowFullScreen
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "1px solid rgba(63,95,172,0.35)",
                    boxShadow: "0px 0px 18px rgba(26, 19, 72, 0.15)",
                    borderRadius: "10px",
                    boxSizing: "border-box",
                }}
            />
        </div>
    );
};

export default StorylaneEmbed;