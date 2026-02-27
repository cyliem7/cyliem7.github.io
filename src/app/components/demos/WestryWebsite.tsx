import { useState, useRef } from "react";

interface ExternalSiteEmbedProps {
  url: string;
  title: string;
  description?: string;
  tags?: string[];
  accentColor?: string;
}

const ExternalSiteEmbed: React.FC<ExternalSiteEmbedProps> = ({
  url,
  title,
  description,
  tags = [],
  accentColor = "#e8ff47",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="embed-wrapper">
        {/* iFrame Viewport */}
        <div className="embed-viewport">
          <div className="embed-loader">
            <div className="embed-loader-bar" />
            <span className="embed-loader-text">loading</span>
          </div>
          <iframe
            ref={iframeRef}
            src={url}
            title={title}
            className="embed-iframe"
            onLoad={() => setIsLoading(false)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
    </div>
  );
};

// ── Example usage ──────────────────────────────────────────────────────────────
export function WestryWebsite() {
  return (
    <div style={{ padding: "40px", background: "#080808", minHeight: "100vh" }}>
      <ExternalSiteEmbed
        url="https://westry.co"
        title="Example Project"
        description="A live embed of an external site inside your portfolio."
        tags={["React", "TypeScript", "Open Source"]}
        accentColor="#e8ff47"
      />
    </div>
  );
}