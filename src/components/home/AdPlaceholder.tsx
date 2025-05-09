
import React, { useEffect, useRef } from 'react';

const AdPlaceholder = () => {
  const adRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Try to initialize AdSense ad
    try {
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div ref={adRef} className="w-full my-6">
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-6502311177168321"
           data-ad-slot="auto"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdPlaceholder;
