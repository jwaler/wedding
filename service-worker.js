"use strict";var precacheConfig=[["/index.html","09e939b9cae7718d24b28bd81427cb96"],["/static/css/main.0b4281ba.css","b983192403e3e5e472baed5f1e67ec49"],["/static/js/0.b5a90cb9.chunk.js","3fe620fd6d0558fb6284c58c6662c505"],["/static/js/main.e2bc6e09.js","169688955bb74ae1f1317cbce04c74c2"],["/static/media/acf-contact.f4bb61b9.jpg","f4bb61b92bbcc0ae9ed1d464c8e3a5d0"],["/static/media/acf-dessous.7f28831d.jpg","7f28831d66ef2612a73573621b381227"],["/static/media/background.5d5f1f50.jpg","5d5f1f504c5605ea4a73fa5bfb32cfbc"],["/static/media/camb1.1daf4b1c.png","1daf4b1c7243ecec866f2d1e86a96da4"],["/static/media/camb2.572fdf12.png","572fdf1262f43bd7d433438a975346fe"],["/static/media/insta.34ada163.png","34ada1638ef7bef370e593e45e2cd29a"],["/static/media/jardin.c9d5962b.jpg","c9d5962b3b4a80311ae79a9a585ac7ed"],["/static/media/logo.05a29dd3.png","05a29dd3d3dabbd058df281c8a1b4a7b"],["/static/media/mairie.19cb3a68.jpg","19cb3a680a4ad0541867294c75c637af"],["/static/media/rsvp.085da7c9.jpg","085da7c966490c71731b407aa1de951f"],["/static/media/unnamed.83f60acd.png","83f60acd7c5c640d463233c69b3684f8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});