"use strict";var e=require("react");function t({timezone:e}){return Intl.DateTimeFormat("en-US",{timeZone:e,timeStyle:"medium",hour12:!1}).format(new Date)}exports.Clock=({timezone:r})=>{const[n,a]=e.useState(t(r));return e.useEffect((()=>{setInterval((()=>{a(t(r))}),1e3)}),[]),React.createElement(React.Fragment,null,n)};
