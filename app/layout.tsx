import './css/style.css';
import '@/app/(default)/webstories/css/styles.css'
import { Inter } from 'next/font/google';
import Header from '@/components/ui/header';
import React, { ReactNode } from 'react';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export interface Metadata {
  title: string;
  keywords?: string;
  description?: string;
  image?: string;
}

export const defaultMetadata: Metadata = {
  title: 'Keploy | Open Source Stubs and API Test Generator for Developer',
  keywords: "Integration testing, e2e Testing, ai testing, Unit Testing, API Testing, open source ai testing tool, Service Mocking, Dependency Mocking",
  description: 'Keploy is AI based test case and stubs/mocks generator for integration and unit testing. 90% test coverage in minutes with open source testing tool',
  image: "images/logo.svg",
};

interface RootLayoutProps {
  children: ReactNode;
  metadata?: Metadata;
  HeaderDisplayed?:boolean;
}

export default function RootLayout({ children, metadata , HeaderDisplayed=true }: RootLayoutProps) {
  const finalMetadata = {
    title: metadata?.title || defaultMetadata.title,
    keywords: metadata?.keywords || defaultMetadata.keywords,
    description: metadata?.description || defaultMetadata.description,
    image: metadata?.image || defaultMetadata.image,
  };
  return (
    <html lang="en">
      <head>
        <title>{finalMetadata.title}</title>
        <meta name="keywords" content={finalMetadata.keywords} />
        <meta name="description" content={finalMetadata.description} />
        <meta property="og:image" name="image" content={finalMetadata.image} />
        <meta name='twitter:card' content={finalMetadata.image} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TLL6DW2H6N"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TLL6DW2H6N');
            `,
                }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3609484,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
                }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a.q=c[a.q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "iu0391ggta");
            `,
                }}
            />
            <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/43912677.js"></script>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P7DBR4PH');
            `,
                }}
            />
            <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      function initApollo() {
                        var n = Math.random().toString(36).substring(7);
                        var o = document.createElement("script");
                        o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
                        o.async = true;
                        o.defer = true;
                        o.onload = function() {
                          window.trackingFunctions.onLoad({ appId: "6644a0d6a54b5b0438c841cc" });
                        };
                        document.head.appendChild(o);
                      }
                      initApollo();
                    `,
                  }}
                />
                                <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
<script
  dangerouslySetInnerHTML={{
    __html: `
      window._vwo_code || (function() {
        var account_id=943043,
        version=2.1,
        settings_tolerance=2000,
        hide_element='body',
        hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;',
        /* DO NOT EDIT BELOW THIS LINE */
        f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var i=this.getSettings(),n=d.createElement('script'),r=this;t=t||{};if(i){n.textContent=i;d.getElementsByTagName('head')[0].appendChild(n);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.withCredentials=!t.dSC;o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200||o.status===304){_vwo_code.addScript({text:o.responseText})}else{_vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}_vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){_vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var i=this.hide_element(),n=i?i+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=n;else t.appendChild(d.createTextNode(n));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var n=d.createElement('div');n.style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;';n.setAttribute('id','_vis_opt_path_hides');n.classList.add('_vis_hide_layer');t.parentNode.insertBefore(n,t.nextSibling)}var o=window._vis_opt_url||d.URL,s='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(o)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:s})}else{this.load(s+'&x=true')}}};w._vwo_code=code;code.init();})();
    `,
  }}
/>
<script
    dangerouslySetInnerHTML={{
        __html: `
            !function () {
                var reb2b = window.reb2b = window.reb2b || [];
                if (reb2b.invoked) return;
                reb2b.invoked = true;
                reb2b.methods = ["identify", "collect"];
                reb2b.factory = function (method) {
                    return function () {
                        var args = Array.prototype.slice.call(arguments);
                        args.unshift(method);
                        reb2b.push(args);
                        return reb2b;
                    };
                };
                for (var i = 0; i < reb2b.methods.length; i++) {
                    var key = reb2b.methods[i];
                    reb2b[key] = reb2b.factory(key);
                }
                reb2b.load = function (key) {
                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    script.async = true;
                    script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
                    var first = document.getElementsByTagName("script")[0];
                    first.parentNode.insertBefore(script, first);
                };
                reb2b.SNIPPET_VERSION = "1.0.1";
                reb2b.load("LNKLDHM9D0OJ");
            }();
        `,
    }}
/>
        </head>
        <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
         {HeaderDisplayed &&  <Header />}
          {children}
        </div>
        </body>
        </html>
    );
}