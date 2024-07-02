'use client'

import Script from 'next/script'
import * as gtag from '@/lib/gtag'

const GoogleAnalytics = () => {
  console.log('Google Analytics', gtag.NEXT_PUBLIC_GOOGLE_ID)
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.NEXT_PUBLIC_GOOGLE_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gtag.NEXT_PUBLIC_GOOGLE_ID}', {
                      page_path: window.location.pathname,
                      });
                    `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
