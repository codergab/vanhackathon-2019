import React from "react";
import ContentLoader from "react-content-loader";
export default function Loader() {
  return (
    <div>
      <ContentLoader
        height={475}
        width={400}
        speed={2}
        primaryColor="rgba(4, 117, 206, 0.1)"
        secondaryColor="rgba(4, 117, 206, 0.2)"
      >
        <rect x="32" y="8" rx="5" ry="5" width="336" height="260" />
        <rect x="40" y="281" rx="0" ry="0" width="117" height="10" />
        <rect x="38" y="303" rx="0" ry="0" width="203" height="18" />
        <rect x="37" y="335" rx="0" ry="0" width="136" height="10" />
        <rect x="38" y="361" rx="0" ry="0" width="111" height="36" />
      </ContentLoader>
    </div>
  );
}
