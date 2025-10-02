interface IntegrationLogoProps {
  name: string
  className?: string
}

export function IntegrationLogo({ name, className = "h-8 w-8" }: IntegrationLogoProps) {
  const logos: Record<string, JSX.Element> = {
    'Google Drive': (
      <svg className={className} viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.6 66.85l15.85 11.15L50 33l-15.75-11z" fill="#0066DA"/>
        <path d="M50 33l21.7 44.9 15.8-11.1L58.25 0H29.1z" fill="#EA4335"/>
        <path d="M22.45 78L6.6 66.85l-6.6 11.1h44.1z" fill="#00AC47"/>
        <path d="M87.5 66.85L58.25 0 50 33z" fill="#FBA51A"/>
        <path d="M50 33L29.1 0 6.6 66.85z" fill="#00832D"/>
        <path d="M22.45 78h48.6l16.45-11.15H6.6z" fill="#2684FC"/>
      </svg>
    ),
    'Slack': (
      <svg className={className} viewBox="0 0 127 127" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2s-13.2-5.9-13.2-13.2V80z" fill="#E01E5A"/>
        <path d="M47 27.2C39.7 27.2 33.8 21.3 33.8 14c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2v13.2H47zm0 6.6c7.3 0 13.2 5.9 13.2 13.2s-5.9 13.2-13.2 13.2H14C6.7 60.2.8 54.3.8 47s5.9-13.2 13.2-13.2h33z" fill="#36C5F0"/>
        <path d="M99.8 47c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2-5.9 13.2-13.2 13.2H99.8V47zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2s-13.2-5.9-13.2-13.2V14c0-7.3 5.9-13.2 13.2-13.2S93.2 6.7 93.2 14v33z" fill="#2EB67D"/>
        <path d="M80 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2v-13.2H80zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2s5.9-13.2 13.2-13.2h33c7.3 0 13.2 5.9 13.2 13.2s-5.9 13.2-13.2 13.2H80z" fill="#ECB22E"/>
      </svg>
    ),
    'Salesforce': (
      <svg className={className} viewBox="0 0 100 71" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 6.1c4.5-5.7 11.4-9.4 19.3-8.6 6.8.6 12.6 4.4 15.9 9.7C81.8 3.9 87.5 2 93.5 2.9c7.5 1.1 13.3 7.3 14 14.8.8 8.1-3.8 15.5-10.9 18.5-.8 6.3-5 11.7-10.7 14.3-7.2 3.2-15.5.7-20.2-5.2-3.8 2.9-8.7 4.3-13.6 3.5-5.8-.9-10.6-4.8-12.5-10.2-7.2 2.4-15.3-.4-19.5-6.8-4.3-6.5-3.2-15.2 2.5-20.5-2.1-6.2 0-13.2 5.2-17 5.2-3.9 12.4-3.9 17.6 0 4.6-5.7 11.5-9.2 18.9-8.4z" fill="#00A1E0"/>
      </svg>
    ),
    'HubSpot': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.164 7.93V5.084a2.198 2.198 0 00-.437-1.455l-.004-.006a1.974 1.974 0 00-1.464-.7h-.018a1.778 1.778 0 00-1.251.516l-6.059 6.039a6.82 6.82 0 104.242 4.242l6.038-6.06a1.73 1.73 0 00.516-1.25 1.664 1.664 0 00-.7-1.464l-.008-.005a2.204 2.204 0 00-1.446-.435h-.005z" fill="#FF7A59"/>
        <circle cx="7.2" cy="16.8" r="4.4" fill="#FF7A59"/>
        <circle cx="16.2" cy="4.8" r="2" fill="#FF7A59"/>
      </svg>
    ),
    'Google Podcast': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12.5v-1a1 1 0 011-1 1 1 0 011 1v1a1 1 0 01-1 1 1 1 0 01-1-1z" fill="#FAB908"/>
        <path d="M7 15.5v-7a1 1 0 011-1 1 1 0 011 1v7a1 1 0 01-1 1 1 1 0 01-1-1z" fill="#EA4335"/>
        <path d="M11 18.5V5.5a1 1 0 011-1 1 1 0 011 1v13a1 1 0 01-1 1 1 1 0 01-1-1z" fill="#4285F4"/>
        <path d="M15 15.5v-7a1 1 0 011-1 1 1 0 011 1v7a1 1 0 01-1 1 1 1 0 01-1-1z" fill="#0F9D58"/>
        <path d="M19 12.5v-1a1 1 0 011-1 1 1 0 011 1v1a1 1 0 01-1 1 1 1 0 01-1-1z" fill="#FAB908"/>
      </svg>
    ),
    'Imo': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5.33" fill="#42C2FF"/>
        <circle cx="8" cy="11" r="3" fill="white"/>
        <circle cx="16" cy="11" r="3" fill="white"/>
        <circle cx="8" cy="11" r="1.5" fill="#42C2FF"/>
        <circle cx="16" cy="11" r="1.5" fill="#42C2FF"/>
        <path d="M8 16c0-1.5 2-3 4-3s4 1.5 4 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'Instagram': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ig" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 23) scale(29)">
            <stop offset="0%" stopColor="#FFDD55"/>
            <stop offset="10%" stopColor="#FFDD55"/>
            <stop offset="50%" stopColor="#FF543E"/>
            <stop offset="100%" stopColor="#C837AB"/>
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#ig)"/>
        <rect x="5" y="5" width="14" height="14" rx="3" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="16" cy="8" r="1" fill="white"/>
      </svg>
    ),
    'Google Meet': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 12.5l3.89 3v-7l-3.89 3z" fill="#00897B"/>
        <path d="M2 6.04c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11.92c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V6.04z" fill="#00ACC1"/>
        <path d="M14 12.5v5.46c0 .55-.45 1-1 1H7.5l6.5-6.46z" fill="#00BFA5"/>
      </svg>
    ),
    'Kickstarted': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#05CE78"/>
        <path d="M7 5v14h2.5v-5.5L16 19h3.5l-7.5-7 7-7h-3.5l-6 6V5H7z" fill="white"/>
      </svg>
    ),
    'Kickstarter': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#05CE78"/>
        <path d="M7 5v14h2.5v-5.5L16 19h3.5l-7.5-7 7-7h-3.5l-6 6V5H7z" fill="white"/>
      </svg>
    ),
    'Line': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5.33" fill="#00B900"/>
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="white"/>
      </svg>
    ),
    'Zoom': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#2D8CFF"/>
        <path d="M4 8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8z" fill="white"/>
        <path d="M16 10.5l4-2.5v8l-4-2.5v-3z" fill="white"/>
      </svg>
    ),
    'Teams': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#5059C9"/>
        <circle cx="14" cy="7" r="2" fill="white"/>
        <circle cx="9" cy="6" r="1.5" fill="white" opacity="0.7"/>
        <path d="M9 9h10v7c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2V9z" fill="white"/>
        <path d="M19 11h2v5c0 1.1-.9 2-2 2s-2-.9-2-2v-3c0-1.1.9-2 2-2z" fill="white" opacity="0.8"/>
        <path d="M5 10h4v5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-5z" fill="white" opacity="0.6"/>
      </svg>
    ),
    'Microsoft Teams': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#5059C9"/>
        <circle cx="14" cy="7" r="2" fill="white"/>
        <circle cx="9" cy="6" r="1.5" fill="white" opacity="0.7"/>
        <path d="M9 9h10v7c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2V9z" fill="white"/>
        <path d="M19 11h2v5c0 1.1-.9 2-2 2s-2-.9-2-2v-3c0-1.1.9-2 2-2z" fill="white" opacity="0.8"/>
        <path d="M5 10h4v5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-5z" fill="white" opacity="0.6"/>
      </svg>
    ),
    'Jira': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="jira" x1="98%" y1="17%" x2="58%" y2="64%">
            <stop offset="0%" stopColor="#0052CC"/>
            <stop offset="100%" stopColor="#2684FF"/>
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="4" fill="url(#jira)"/>
        <path d="M12 4L5 11l7 7 7-7-7-7zM12 11l-4.5 4.5L12 20l4.5-4.5L12 11z" fill="white"/>
      </svg>
    ),
    'Asana': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#FC636B"/>
        <circle cx="8.5" cy="14.5" r="3" fill="white"/>
        <circle cx="15.5" cy="14.5" r="3" fill="white"/>
        <circle cx="12" cy="8.5" r="3" fill="white"/>
      </svg>
    ),
    'Dropbox': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2l6 4-6 4L0 6l6-4z" fill="#0061FF"/>
        <path d="M18 2l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
        <path d="M6 14l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
        <path d="M18 14l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
        <path d="M12 19l-6-4v2l6 3 6-3v-2l-6 4z" fill="#0061FF"/>
      </svg>
    ),
    'Notion': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="white"/>
        <path d="M4 4.3c.4.3.6.4 1.2.4h11.5l.1.1v9.2c0 .3-.2.5-.5.5-.3 0-.4-.1-.7-.4L7.3 5.7v7.7c.1.2 0 .3-.2.3H5.5c-.2 0-.3-.1-.3-.3V4.7c0-.2.1-.5.3-.5h1.3c.5 0 .8 0 1.2.3zm11.6 1L19 8.7V4.5l-.9-.1c-.2-.3 0-.4.3-.4h2.4c.2 0 .3.2.3.4l-.1.1v9c0 .3-.3.5-.6.5s-.5-.1-.8-.4L11 5v7.7c0 .4-.3.7-.7.7H8.7c-.4 0-.6 0-.9-.3-.3-.3-.3-.5-.3-.9V4c0-.4 0-.6.3-.9.2-.2.4-.3.6-.3z" fill="black"/>
      </svg>
    ),
    'Medium': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="black"/>
        <ellipse cx="7" cy="12" rx="3.5" ry="4" fill="white"/>
        <ellipse cx="14.5" cy="12" rx="2" ry="3.5" fill="white"/>
        <ellipse cx="19.5" cy="12" rx="1" ry="3" fill="white"/>
      </svg>
    ),
    'Zapier': (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#FF4A00"/>
        <path d="M12 6l-5 6 5 6 5-6-5-6zm0 3l2 3-2 3-2-3 2-3z" fill="white"/>
      </svg>
    )
  }

  const fallback = (
    <div className={`${className} rounded bg-gray-300 flex items-center justify-center`}>
      <span className="text-xs font-semibold text-white">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  )

  return logos[name] || fallback
}