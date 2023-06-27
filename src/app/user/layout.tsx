import React from 'react';

export default function Layout({ children }:{children: React.ReactNode}) {
  return (
      <div className="md:py-20 py-10 w-full min-h-[80vh]" style={{
        backgroundImage:'url("https://bizweb.dktcdn.net/100/438/408/themes/904142/assets/bg_login.jpg?1686967931217")',
        backgroundRepeat:"no-repeat",
        backgroundSize:"100% 100%"
      }}>
        <div className="max-w-7xl mx-auto mt-10">
          <div className="flex justify-center">
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
  )
}