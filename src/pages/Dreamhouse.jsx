import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Dreamhouse({ t }) {
  // Safe access to translations for this page
  const dh = t?.dreamhouse || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0C0E14] text-[#F1F5F9]">
      <div
        className="flex items-center"
        style={{
          paddingTop: 'calc(var(--header-h-current, 64px) + clamp(16px, 3vh, 32px))',
          paddingBottom: 'clamp(24px, 5vh, 48px)',
          minHeight: '100vh'
        }}
      >
        <main className="pb-8 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-5">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-4 drop-shadow-lg"
              style={{ color: '#D9B566', textShadow: '0 2px 12px rgba(217,181,102,0.22)' }}
            >
              {dh.startTitle || 'Dreamhouse'}
            </h1>

            <div
              className="border-2 border-[#1E4A6B] rounded-xl px-6 py-5 text-center shadow-2xl backdrop-blur-sm mx-auto max-w-4xl"
              style={{ backgroundColor: '#0A1F35' }}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-3 text-white leading-tight">
                {dh.bannerTitle || dh.startTitle || 'Start the Dream'}
              </h2>

              {/* If your bannerDescription is HTML, render it safely */}
              <div
                className="text-white max-w-3xl mx-auto leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: dh.bannerDescription || '' }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              <Card style={{ backgroundColor: '#0C0E14', borderColor: '#A3D977' }} className="border-2 rounded-2xl shadow-lg">
                <CardContent className="p-5">
                  <h3 className="text-base font-bold mb-2 text-[#E8F1FF]">
                    {dh.startTitle || 'Start the Dream'}
                  </h3>
                  <p className="text-[#E8F1FF] mb-3 leading-relaxed text-sm">
                    {dh.startDescription || ''}
                  </p>
                  <p className="text-[#E8F1FF] text-xs italic opacity-80">
                    {dh.startNote || ''}
                  </p>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: '#111827', borderColor: '#FFB100' }} className="border-2 rounded-2xl shadow-lg h-full flex flex-col">
                <CardHeader className="p-5 pb-3">
                  <CardTitle className="text-lg text-[#F1F5F9] font-bold">
                    {dh.premiumTitle || 'Premium'}
                  </CardTitle>
                  <div className="text-2xl font-bold tracking-tight text-[#FFB100]">
                    {dh.premiumPrice || ''}
                  </div>
                  <p className="text-[#F1F5F9] text-sm font-semibold tracking-wide opacity-0">&nbsp;</p>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0 flex flex-col flex-grow">
                  <ul className="space-y-1.5 text-sm text-[#F1F5F9] mb-4" style={{ minHeight: '200px' }}>
                    {(dh.premiumFeatures || []).map((feature, index) => (
                      <li key={index} className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FFB100] mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Button
                      asChild
                      style={{ backgroundColor: '#FFB100' }}
                      className="hover:bg-[#E69F00] text-white w-full text-sm py-2 font-semibold rounded-2xl"
                    >
                      <Link to={createPageUrl('contact')}>{dh.contactUs || 'Contact Us'}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: '#111827', borderColor: '#FFB100' }} className="border-2 rounded-2xl shadow-lg h-full flex flex-col">
                <CardHeader className="p-5 pb-3">
                  <CardTitle className="text-lg text-[#F1F5F9] font-bold">
                    {dh.premiumPlusTitle || 'Premium Package +'}
                  </CardTitle>
                  <div className="text-2xl font-bold tracking-tight text-[#FFB100]">
                    {dh.premiumPlusPrice || ''}
                  </div>
                  <p className="text-[#F1F5F9] text-sm font-semibold tracking-wide">
                    {dh.premiumPlusSubtitle || ''}
                  </p>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0 flex flex-col flex-grow">
                  <ul className="space-y-1.5 text-sm text-[#F1F5F9] mb-4" style={{ minHeight: '200px' }}>
                    {(dh.premiumPlusFeatures || []).map((feature, index) => (
                      <li key={index} className="flex gap-2">
                        {index === 0 ? (
                          <Sparkles className="w-4 h-4 mr-2 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-[#FFB100] mt-0.5 flex-shrink-0" />
                        )}
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <Button
                      asChild
                      style={{ backgroundColor: '#FFB100' }}
                      className="hover:bg-[#E69F00] text-white w-full text-sm py-2 font-semibold rounded-2xl"
                    >
                      <Link to={createPageUrl('contact')}>{dh.contactUs || 'Contact Us'}</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      style={{ borderColor: '#A78BFA', color: '#F1F5F9' }}
                      className="bg-transparent hover:bg-[#A78BFA]/20 w-full text-sm py-2 font-semibold rounded-2xl border-2"
                    >
                      {/* use lowercase route slug */}
                      <Link to={createPageUrl('technology')} className="flex items-center justify-center gap-2">
                        {dh.exploreTechnology || 'Explore Technology'} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              className="rounded-2xl py-6 px-6 text-center shadow-lg max-w-4xl mx-auto"
              style={{ backgroundColor: '#A3D977' }}
            >
              <p className="font-bold text-[#0C0E14] mb-2 text-base">
                {dh.collaborationTitle || ''}
              </p>
              <p className="font-medium text-[#111827] text-sm leading-tight">
                {dh.collaborationDescription || ''}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
