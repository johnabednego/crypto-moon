(this["webpackJsonpcrypto-moon"]=this["webpackJsonpcrypto-moon"]||[]).push([[0],{21:function(e,c,a){},40:function(e,c,a){},41:function(e,c,a){},43:function(e,c,a){"use strict";a.r(c);var s=a(2),n=a.n(s),t=a(15),i=a.n(t),r=(a(21),a(6)),o=a(16),l=a.n(o),j=(a(40),a(41),a(0)),m=function(e){var c=e.name,a=e.price,s=e.symbol,n=e.marketcap,t=e.volume,i=e.image,r=e.priceChange;return Object(j.jsxs)("div",{className:"cryptoCoin",children:[Object(j.jsx)("img",{src:i,alt:c,className:"CoinLogo"}),Object(j.jsxs)("div",{className:"coinNameWrap",children:[Object(j.jsx)("h1",{className:"coinName",children:c}),Object(j.jsx)("p",{className:"coinSymbol",children:s})]}),Object(j.jsxs)("p",{className:"coinPrice",children:["$",a]}),Object(j.jsxs)("p",{className:"coinMarketcap",children:["Market Cap: $",n.toLocaleString()]}),Object(j.jsxs)("p",{className:"coinVolume",children:["Volume (24H): $",t.toLocaleString()]}),r<0?Object(j.jsxs)("div",{className:"priceContainerDOWN",children:[Object(j.jsx)("i",{className:"fas fa-angle-down fa-2x"}),Object(j.jsxs)("p",{className:"priceChange",children:[r.toFixed(2),"%"]})]}):Object(j.jsxs)("div",{className:"priceContainerUP",children:[Object(j.jsx)("i",{className:"fas fa-angle-up fa-2x"}),Object(j.jsxs)("p",{className:"priceChange",children:[r,"%"]})]})]})};var p=function(){var e=Object(s.useState)([]),c=Object(r.a)(e,2),a=c[0],n=c[1],t=Object(s.useState)(""),i=Object(r.a)(t,2),o=i[0],p=i[1];Object(s.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){n(e.data)})).catch((function(e){return console.error(e)}))}),[]);var d=a.filter((function(e){return e.name.toLowerCase().includes(o.toLocaleLowerCase())}));return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("h1",{className:"brand",children:[Object(j.jsx)("i",{className:"fas fa-moon"})," CoinMoon "]}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{className:"inputField",type:"text",onChange:function(e){p(e.target.value)},placeholder:"Search a Coin"})})]}),Object(j.jsx)("div",{className:"coinContainer",children:d.map((function(e){return Object(j.jsx)(m,{name:e.name,price:e.price,symbol:e.symbol,marketcap:e.market_cap,volume:e.total_volume,image:e.image,priceChange:e.price_change_percentage_24h},e.id)}))})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3be02f67.chunk.js.map