"use strict";var precacheConfig=[["/hac-signup-form/index.html","6df31dbb797a2e5840925e257c4d0e40"],["/hac-signup-form/static/css/main.5f615ed1.css","c6204585335ab7d94b077c2bc35b51c1"],["/hac-signup-form/static/js/main.8a04492a.js","d53040749c9187fde435c967339b0e8e"],["/hac-signup-form/static/media/1.bc366ffd.jpg","bc366ffd9b2808e5e7872f643ea229cd"],["/hac-signup-form/static/media/10.a15059be.jpg","a15059be859ee42f6678b60b7b4c66a6"],["/hac-signup-form/static/media/11.abed0615.jpg","abed0615198e00e601ccf9f0f55d5410"],["/hac-signup-form/static/media/12.9fa2d34c.jpg","9fa2d34c87cdd6a7533677199fbf041b"],["/hac-signup-form/static/media/13.21cc8ec1.jpg","21cc8ec1edea6bd998affab145fe0aa8"],["/hac-signup-form/static/media/14.1523aba8.jpg","1523aba8e31f77989171d5d0f1cfc229"],["/hac-signup-form/static/media/15.9ceb9d16.jpg","9ceb9d166720366683bf440a1915e501"],["/hac-signup-form/static/media/16.222d91d4.jpg","222d91d42333f47d947164db8a6fb92f"],["/hac-signup-form/static/media/17.8c3f488f.jpg","8c3f488f2d22deb2a0fb7142332cbb41"],["/hac-signup-form/static/media/18.03bf4688.jpg","03bf4688119f75568ced66383fc10c89"],["/hac-signup-form/static/media/19.f346da5d.jpg","f346da5d2d057e075fce2da47eca693b"],["/hac-signup-form/static/media/2.00817a78.jpg","00817a78251ca972fc45064bf1ff1872"],["/hac-signup-form/static/media/20.9d0853b2.jpg","9d0853b23c9396a31c5a3949d34e2a3e"],["/hac-signup-form/static/media/3.d8925af3.jpg","d8925af3d9139349c336e2dc0d485632"],["/hac-signup-form/static/media/4.0dc84f4a.jpg","0dc84f4a8b0b38078fac284e42d0d311"],["/hac-signup-form/static/media/5.51f580e2.jpg","51f580e29cc72060b6273b27ea501410"],["/hac-signup-form/static/media/6.c667b164.jpg","c667b164d36d5f9af8fb557097453dec"],["/hac-signup-form/static/media/7.8e3bc8b3.jpg","8e3bc8b3c6e3c7c11393feadcca3830b"],["/hac-signup-form/static/media/8.2b6ec831.jpg","2b6ec8316a328dc2709e859afa54e0dc"],["/hac-signup-form/static/media/9.f092711a.jpg","f092711a0483fce61b69b29fe6794432"],["/hac-signup-form/static/media/hac-logo-light.1ffce529.svg","1ffce529a887effbe8d8aa1334d662de"],["/hac-signup-form/static/media/hc-logo-light.aad779c7.svg","aad779c776a41fab05cdaf436ed30a2e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/hac-signup-form/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});