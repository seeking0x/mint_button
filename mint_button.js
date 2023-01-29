`));d(w,p,k=>[{...v,status:"pending"},...k.filter(({hash:y})=>y!==v.hash)])}function l(w,p){d(w,p,()=>[])}function u(w,p,v,x){d(w,p,k=>k.map(y=>y.hash===v?{...y,status:x}:y))}async function c(w,p){await Promise.all(o(w,p).filter(v=>v.status==="pending").map(async v=>{const{confirmations:x,hash:k}=v,y=i.get(k);if(y)return await y;const I=r.waitForTransaction(k,x).then(({status:N})=>{i.delete(k),N!==void 0&&u(w,p,k,N===0?"failed":"confirmed")});return i.set(k,I),await I}))}function d(w,p,v){var x,k;e=j4(),e[w]=(x=e[w])!=null?x:{};let y=0;const I=10,N=v((k=e[w][p])!=null?k:[]).filter(({status:U})=>U==="pending"?!0:y++<=I);e[w][p]=N.length>0?N:void 0,h(),m(),c(w,p)}function h(){localStorage.setItem(_A,JSON.stringify(e))}function m(){n.forEach(w=>w())}function b(w){return n.add(w),()=>{n.delete(w)}}return{addTransaction:s,clearTransactions:l,getTransactions:o,onChange:b,setProvider:a,waitForPendingTransactions:c}}var ag,AA=Q.exports.createContext(null);function Uie({children:t}){const e=Gp(),{address:r}=cn(),n=tx(),[i]=Q.exports.useState(()=>ag??(ag=Bie({provider:e})));return Q.exports.useEffect(()=>{i.setProvider(e)},[i,e]),Q.exports.useEffect(()=>{r&&n&&i.waitForPendingTransactions(r,n)},[i,r,n]),f.createElement(AA.Provider,{value:i},t)}function TA(){const t=Q.exports.useContext(AA);if(!t)throw new Error("Transaction hooks must be used within RainbowKitProvider");return t}function SA(){const t=TA(),{address:e}=cn(),r=tx(),[n,i]=Q.exports.useState(()=>t&&e&&r?t.getTransactions(e,r):[]);return Q.exports.useEffect(()=>{if(t&&e&&r)return i(t.getTransactions(e,r)),t.onChange(()=>{i(t.getTransactions(e,r))})},[t,e,r]),n}var F4=t=>typeof t=="function"?t():t;function $ie(t,{extends:e}={}){const r={...A4(P4,F4(t))};if(!e)return r;const n=A4(P4,F4(e));return Object.fromEntries(Object.entries(r).filter(([a,o])=>o!==n[a]))}function D4(t,e={}){return Object.entries($ie(t,e)).map(([r,n])=>`
$ {
    r
}: $ {
    n.replace(/[:;{}</>]/g, "")
};
`).join("")}var OA=()=>{const[t,e]=Q.exports.useState({height:void 0,width:void 0});return Q.exports.useEffect(()=>{function r(){e({height:window.innerHeight,width:window.innerWidth})}return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]),t},PA={appName:void 0,disclaimer:void 0,learnMoreUrl:"https://learn.rainbow.me/what-is-a-cryptoweb3-wallet-actually"},Pu=Q.exports.createContext(PA),RA=Q.exports.createContext(!1),Kf={COMPACT:"compact",WIDE:"wide"},bm=Q.exports.createContext(Kf.WIDE),rx=Q.exports.createContext(!1);function Wie(t){const e=[];for(const r of t)e.push(...r);return e}function zie(t,e){const r={};return t.forEach(n=>{const i=e(n);!i||(r[i]=n)}),r}var NA="rk-recent";function Hie(t){try{const e=t?JSON.parse(t):[];return Array.isArray(e)?e:[]}catch{return[]}}function MA(){return typeof localStorage<"u"?Hie(localStorage.getItem(NA)):[]}function qie(t){return[...new Set(t)]}function Kie(t){const e=qie([t,...MA()]);localStorage.setItem(NA,JSON.stringify(e))}function xm(){const t=ym(),e=Iie(),{connectAsync:r,connectors:n}=oU(),i=n;async function a(h,m){var b,w,p;const v=await m.getChainId(),x=await r({chainId:(p=e??((b=t.find(({id:k})=>k===v))==null?void 0:b.id))!=null?p:(w=t[0])==null?void 0:w.id,connector:m});return x&&Kie(h),x}const o=Wie(i.map(h=>{var m;return(m=h._wallets)!=null?m:[]})).sort((h,m)=>h.index-m.index),s=zie(o,h=>h.id),l=3,u=MA().map(h=>s[h]).filter(Z2).slice(0,l),c=[...u,...o.filter(h=>!u.includes(h))],d=[];return c.forEach(h=>{var m;if(!h)return;const b=u.includes(h);d.push({...h,connect:()=>a(h.id,h.connector),groupName:h.groupName,onConnecting:w=>h.connector.on("message",({type:p})=>p==="connecting"?w():void 0),ready:((m=h.installed)!=null?m:!0)&&h.connector.ready,recent:b,showWalletConnectModal:h.walletConnectModalConnector?async()=>{try{await a(h.id,h.walletConnectModalConnector)}catch(w){if(!(w.name==="UserRejectedRequestError"))throw w}}:void 0})}),d}var IA=async()=>(await or(()=>import("./assets/assets-7THATBKH-ebee59af.js"),[])).default,Gie=()=>So(IA),Vie=()=>f.createElement(jr,{background:"#d0d5de",borderRadius:"10",height:"48",src:IA,width:"48"}),LA=async()=>(await or(()=>import("./assets/login-EJZTP74Q-b8add756.js"),[])).default,Yie=()=>So(LA),Qie=()=>f.createElement(jr,{background:"#d0d5de",borderRadius:"10",height:"48",src:LA,width:"48"}),$e=f.forwardRef(({as:t="div",children:e,className:r,color:n,display:i,font:a="body",id:o,size:s="16",style:l,tabIndex:u,textAlign:c="inherit",weight:d="regular"},h)=>f.createElement(J,{as:t,className:r,color:n,display:i,fontFamily:a,fontSize:s,fontWeight:d,id:o,ref:h,style:l,tabIndex:u,textAlign:c},e));$e.displayName="Text";var Jie={large:{fontSize:"16",paddingX:"24",paddingY:"10"},medium:{fontSize:"14",height:"28",paddingX:"12",paddingY:"4"},small:{fontSize:"14",paddingX:"10",paddingY:"5"}};function In({disabled:t=!1,href:e,label:r,onClick:n,rel:i="noreferrer noopener",size:a="medium",target:o="_blank",testId:s,type:l="primary"}){const u=l==="primary",c=a!=="large",d=Xr(),h=t?"actionButtonSecondaryBackground":u?"accentColor":c?"actionButtonSecondaryBackground":null,{fontSize:m,height:b,paddingX:w,paddingY:p}=Jie[a],v=!d||!c;return f.createElement(J,{...e?t?{}:{as:"a",href:e,rel:i,target:o}:{as:"button",type:"button"},onClick:t?void 0:n,...v?{borderColor:d&&!c&&!u?"actionButtonBorderMobile":"actionButtonBorder",borderStyle:"solid",borderWidth:"1"}:{},borderRadius:"actionButton",className:!t&&Lr({active:"shrinkSm",hover:"grow"}),display:"block",paddingX:w,paddingY:p,style:{willChange:"transform"},testId:s,textAlign:"center",transition:"transform",...h?{background:h}:{},...b?{height:b}:{}},f.createElement($e,{color:t?"modalTextSecondary":u?"accentColorForeground":"accentColor",size:m,weight:"bold"},r))}var Xie=()=>Xr()?f.createElement("svg",{"aria-hidden":!0,fill:"none",height:"11.5",viewBox:"0 0 11.5 11.5",width:"11.5",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M2.13388 0.366117C1.64573 -0.122039 0.854272 -0.122039 0.366117 0.366117C-0.122039 0.854272 -0.122039 1.64573 0.366117 2.13388L3.98223 5.75L0.366117 9.36612C-0.122039 9.85427 -0.122039 10.6457 0.366117 11.1339C0.854272 11.622 1.64573 11.622 2.13388 11.1339L5.75 7.51777L9.36612 11.1339C9.85427 11.622 10.6457 11.622 11.1339 11.1339C11.622 10.6457 11.622 9.85427 11.1339 9.36612L7.51777 5.75L11.1339 2.13388C11.622 1.64573 11.622 0.854272 11.1339 0.366117C10.6457 -0.122039 9.85427 -0.122039 9.36612 0.366117L5.75 3.98223L2.13388 0.366117Z",fill:"currentColor"})):f.createElement("svg",{"aria-hidden":!0,fill:"none",height:"10",viewBox:"0 0 10 10",width:"10",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z",fill:"currentColor"})),ou=({"aria-label":t="Close",onClose:e})=>{const r=Xr();return f.createElement(J,{alignItems:"center","aria-label":t,as:"button",background:"closeButtonBackground",borderColor:"actionButtonBorder",borderRadius:"full",borderStyle:"solid",borderWidth:r?"0":"1",className:Lr({active:"shrinkSm",hover:"growLg"}),color:"closeButton",display:"flex",height:r?"30":"28",justifyContent:"center",onClick:e,style:{willChange:"transform"},transition:"default",type:"button",width:r?"30":"28"},f.createElement(Xie,null))},jA=async()=>(await or(()=>import("./assets/sign-3FIRYJVD-f23ac888.js"),[])).default;function Zie({onClose:t}){const[{status:e,...r},n]=f.useState({status:"idle"}),i=vie(),a=Q.exports.useCallback(async()=>{try{const b=await i.getNonce();n(w=>({...w,nonce:b}))}catch{n(w=>({...w,errorMessage:"Error preparing message, please retry!",status:"idle"}))}},[i]),o=Q.exports.useRef(!1);f.useEffect(()=>{o.current||(o.current=!0,a())},[a]);const s=Xr(),{address:l}=cn(),{chain:u}=$a(),{signMessageAsync:c}=hU(),{disconnect:d}=fd(),h=()=>d(),m=async()=>{try{const b=u==null?void 0:u.id,{nonce:w}=r;if(!l||!b||!w)return;n(x=>({...x,errorMessage:void 0,status:"signing"}));const p=i.createMessage({address:l,chainId:b,nonce:w});let v;try{v=await c({message:i.getMessageBody({message:p})})}catch(x){return x instanceof ni?n(k=>({...k,status:"idle"})):n(k=>({...k,errorMessage:"Error signing message, please retry!",status:"idle"}))}n(x=>({...x,status:"verifying"}));try{if(await i.verify({message:p,signature:v}))return;throw new Error}catch{return n(k=>({...k,errorMessage:"Error verifying signature, please retry!",status:"idle"}))}}catch{n({errorMessage:"Oops, something went wrong!",status:"idle"})}};return f.createElement(J,{position:"relative"},f.createElement(J,{display:"flex",paddingRight:"16",paddingTop:"16",position:"absolute",right:"0"},f.createElement(ou,{onClose:t})),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:s?"32":"24",padding:"24",paddingX:"18",style:{paddingTop:s?"60px":"36px"}},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:s?"6":"4",style:{maxWidth:s?320:280}},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:s?"32":"16"},f.createElement(jr,{height:40,src:jA,width:40}),f.createElement($e,{color:"modalText",size:s?"20":"18",textAlign:"center",weight:"heavy"},"Verify your account")),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:s?"16":"12"},f.createElement($e,{color:"modalTextSecondary",size:s?"16":"14",textAlign:"center"},"To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account."),e==="idle"&&r.errorMessage?f.createElement($e,{color:"error",size:s?"16":"14",textAlign:"center",weight:"bold"},r.errorMessage):null)),f.createElement(J,{alignItems:s?void 0:"center",display:"flex",flexDirection:"column",gap:"8",width:"full"},f.createElement(In,{disabled:!r.nonce||e==="signing"||e==="verifying",label:r.nonce?e==="signing"?"Waiting for signature...":e==="verifying"?"Verifying signature...":"Send message":"Preparing message...",onClick:m,size:s?"large":"medium",testId:"auth-message-button"}),s?f.createElement(In,{label:"Cancel",onClick:h,size:"large",type:"secondary"}):f.createElement(J,{as:"button",borderRadius:"full",className:Lr({active:"shrink",hover:"grow"}),display:"block",onClick:h,paddingX:"10",paddingY:"5",rel:"noreferrer",style:{willChange:"transform"},target:"_blank",transition:"default"},f.createElement($e,{color:"closeButton",size:s?"16":"14",weight:"bold"},"Cancel")))))}function eae(){const t=ym(),e=xm(),r=vm()==="unauthenticated",n=Q.exports.useCallback(()=>{So(...e.map(i=>i.iconUrl),...t.map(i=>i.iconUrl).filter(Z2)),Xr()||(Gie(),Yie()),r&&So(jA)},[e,t,r]);Q.exports.useEffect(()=>{n()},[n])}var FA="WALLETCONNECT_DEEPLINK_CHOICE";function tae({mobileUri:t,name:e}){localStorage.setItem(FA,JSON.stringify({href:t.split("?")[0],name:e}))}function rae(){localStorage.removeItem(FA)}var DA=Q.exports.createContext(void 0),sy="data-rk",BA=t=>({[sy]:t||""}),nae=t=>{if(t&&!/^[a-zA-Z0-9_]+$/.test(t))throw new Error(`
Invalid ID: $ {
    t
}
`);return t?` [$ {
    sy
} = "${t}"] `:` [$ {
    sy
}] `},iae=()=>{const t=Q.exports.useContext(DA);return BA(t)},aae=B_();function oae({chains:t,initialChain:e,id:r,theme:n=aae,children:i,appInfo:a,showRecentTransactions:o=!1,coolMode:s=!1,avatar:l,modalSize:u=Kf.WIDE}){if(eae(),cn({onDisconnect:rae}),typeof n=="function")throw new Error('A theme function was provided to the "theme" prop instead of a theme object. You must execute this function to get the resulting theme object.');const c=nae(r),d={...PA,...a},h=l??yA,{width:m}=OA(),b=m&&m<die;return f.createElement(Mie,{chains:t,initialChain:e},f.createElement(RA.Provider,{value:s},f.createElement(bm.Provider,{value:b?Kf.COMPACT:u},f.createElement(rx.Provider,{value:o},f.createElement(Uie,null,f.createElement(bA.Provider,{value:h},f.createElement(Pu.Provider,{value:d},f.createElement(DA.Provider,{value:r},f.createElement(loe,null,n?f.createElement("div",{...BA(r)},f.createElement("style",{dangerouslySetInnerHTML:{__html:[`
$ {
    c
} {
    $ {
        D4("lightMode" in n ? n.lightMode : n)
    }
}
`,"darkMode"in n?`
@media(prefers - color - scheme: dark) {
    $ {
        c
    } {
        $ {
            D4(n.darkMode, {
                extends: n.lightMode
            })
        }
    }
}
`:null].join("")}}),i):i)))))))))}var sae="_9pm4ki5 ju367va ju367v10 ju367v8m",lae="_9pm4ki3 ju367v9b ju367vax ju367va ju367v2l ju367v8l",B4=(t,e)=>{const r=t.querySelectorAll("button:not(:disabled), a[href]");r.length!==0&&r[e==="end"?r.length-1:0].focus()};function uae(t){const e=Q.exports.useRef(null);return Q.exports.useEffect(()=>{const r=document.activeElement;return()=>{var n;(n=r.focus)==null||n.call(r)}},[]),Q.exports.useEffect(()=>{if(e.current){const r=e.current.querySelector("[data-auto-focus]");r?r.focus():e.current.focus()}},[e]),f.createElement(f.Fragment,null,f.createElement("div",{onFocus:Q.exports.useCallback(()=>e.current&&B4(e.current,"end"),[]),tabIndex:0}),f.createElement("div",{ref:e,style:{outline:"none"},tabIndex:-1,...t}),f.createElement("div",{onFocus:Q.exports.useCallback(()=>e.current&&B4(e.current,"start"),[]),tabIndex:0}))}var cae=t=>t.stopPropagation();function rp({children:t,onClose:e,open:r,titleId:n}){Q.exports.useEffect(()=>{const u=c=>r&&c.key==="Escape"&&e();return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[r,e]);const[i,a]=Q.exports.useState(!0);Q.exports.useEffect(()=>{a(getComputedStyle(window.document.body).overflow!=="hidden")},[]);const o=Q.exports.useCallback(()=>e(),[e]),s=iae(),l=Xr();return f.createElement(f.Fragment,null,r?Yf.exports.createPortal(f.createElement(Ene,{enabled:i},f.createElement(J,{...s},f.createElement(J,{...s,alignItems:l?"flex-end":"center","aria-labelledby":n,"aria-modal":!0,className:lae,onClick:o,position:"fixed",role:"dialog"},f.createElement(uae,{className:sae,onClick:cae,role:"document"},t)))),document.body):null)}var fae="_1ckjpok7",dae="_1ckjpok1 ju367vb0 ju367vdl ju367vp ju367vt ju367vv ju367vef ju367va ju367v10 ju367v67 ju367v8m",hae="_1ckjpok4 _1ckjpok1 ju367vb0 ju367vdl ju367vp ju367vt ju367vv ju367vef ju367va ju367v10 ju367v67 ju367v8m",pae="_1ckjpok6 ju367vq",mae="_1ckjpok3 _1ckjpok1 ju367vb0 ju367vdl ju367vp ju367vt ju367vv ju367vef ju367va ju367v10 ju367v67 ju367v8m",gae="_1ckjpok2 _1ckjpok1 ju367vb0 ju367vdl ju367vp ju367vt ju367vv ju367vef ju367va ju367v10 ju367v67 ju367v8m";function np({bottomSheetOnMobile:t=!1,children:e,marginTop:r,padding:n="16",wide:i=!1}){const a=Xr(),s=Q.exports.useContext(bm)===Kf.COMPACT;return f.createElement(J,{marginTop:r},f.createElement(J,{className:[i?a?gae:s?hae:mae:dae,a?pae:null,a&&t?fae:null].join(" ")},f.createElement(J,{padding:n},e)))}var U4=["k","m","b","t"];function v0(t,e=1){return t.toString().replace(new RegExp(`(. + \\.\\d {
    $ {
        e
    }
})\\ d + `),"$1").replace(/(\.[1-9]*)0+$/,"$1").replace(/\.$/,"")}function UA(t){if(t<1)return v0(t,3);if(t<10**2)return v0(t,2);if(t<10**4)return new Intl.NumberFormat().format(parseFloat(v0(t,1)));const e=10**1;let r=String(t);for(let n=U4.length-1;n>=0;n--){const i=10**((n+1)*3);if(i<=t){t=t*e/i/e,r=v0(t,1)+U4[n];break}}return r}function $A(t){return t.length<4+4?t:`
$ {
    t.substring(0, 4)
}…
$ {
    t.substring(t.length - 4)
}
`}function WA(t){const e=t.split("."),r=e.pop();return e.join(".").length>24?`
$ {
    e.join(".").substring(0, 24)
}...`:`
$ {
    e.join(".")
}.$ {
    r
}
`}var vae=()=>f.createElement("svg",{fill:"none",height:"13",viewBox:"0 0 13 13",width:"13",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M4.94568 12.2646C5.41052 12.2646 5.77283 12.0869 6.01892 11.7109L12.39 1.96973C12.5677 1.69629 12.6429 1.44336 12.6429 1.2041C12.6429 0.561523 12.1644 0.0966797 11.5082 0.0966797C11.057 0.0966797 10.7767 0.260742 10.5033 0.691406L4.9115 9.50977L2.07458 5.98926C1.82166 5.68848 1.54822 5.55176 1.16541 5.55176C0.502319 5.55176 0.0238037 6.02344 0.0238037 6.66602C0.0238037 6.95312 0.112671 7.20605 0.358765 7.48633L3.88611 11.7588C4.18005 12.1074 4.50818 12.2646 4.94568 12.2646Z",fill:"currentColor"})),yae=()=>f.createElement("svg",{fill:"none",height:"16",viewBox:"0 0 17 16",width:"17",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M3.04236 12.3027H4.18396V13.3008C4.18396 14.8525 5.03845 15.7002 6.59705 15.7002H13.6244C15.183 15.7002 16.0375 14.8525 16.0375 13.3008V6.24609C16.0375 4.69434 15.183 3.84668 13.6244 3.84668H12.4828V2.8418C12.4828 1.29688 11.6283 0.442383 10.0697 0.442383H3.04236C1.48376 0.442383 0.629272 1.29004 0.629272 2.8418V9.90332C0.629272 11.4551 1.48376 12.3027 3.04236 12.3027ZM3.23376 10.5391C2.68689 10.5391 2.39294 10.2656 2.39294 9.68457V3.06055C2.39294 2.47949 2.68689 2.21289 3.23376 2.21289H9.8783C10.4252 2.21289 10.7191 2.47949 10.7191 3.06055V3.84668H6.59705C5.03845 3.84668 4.18396 4.69434 4.18396 6.24609V10.5391H3.23376ZM6.78845 13.9365C6.24158 13.9365 5.94763 13.6699 5.94763 13.0889V6.45801C5.94763 5.87695 6.24158 5.61035 6.78845 5.61035H13.433C13.9799 5.61035 14.2738 5.87695 14.2738 6.45801V13.0889C14.2738 13.6699 13.9799 13.9365 13.433 13.9365H6.78845Z",fill:"currentColor"})),bae=()=>f.createElement("svg",{fill:"none",height:"16",viewBox:"0 0 18 16",width:"18",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M2.67834 15.5908H9.99963C11.5514 15.5908 12.399 14.7432 12.399 13.1777V10.2656H10.6354V12.9863C10.6354 13.5332 10.3688 13.8271 9.78772 13.8271H2.89026C2.3092 13.8271 2.0426 13.5332 2.0426 12.9863V3.15625C2.0426 2.60254 2.3092 2.30859 2.89026 2.30859H9.78772C10.3688 2.30859 10.6354 2.60254 10.6354 3.15625V5.89746H12.399V2.95801C12.399 1.39941 11.5514 0.544922 9.99963 0.544922H2.67834C1.12659 0.544922 0.278931 1.39941 0.278931 2.95801V13.1777C0.278931 14.7432 1.12659 15.5908 2.67834 15.5908ZM7.43616 8.85059H14.0875L15.0924 8.78906L14.566 9.14453L13.6842 9.96484C13.5406 10.1016 13.4586 10.2861 13.4586 10.4844C13.4586 10.8398 13.7321 11.168 14.1217 11.168C14.3199 11.168 14.4635 11.0928 14.6002 10.9561L16.7809 8.68652C16.986 8.48145 17.0543 8.27637 17.0543 8.06445C17.0543 7.85254 16.986 7.64746 16.7809 7.43555L14.6002 5.17285C14.4635 5.03613 14.3199 4.9541 14.1217 4.9541C13.7321 4.9541 13.4586 5.27539 13.4586 5.6377C13.4586 5.83594 13.5406 6.02734 13.6842 6.15723L14.566 6.98438L15.0924 7.33984L14.0875 7.27148H7.43616C7.01917 7.27148 6.65686 7.62012 6.65686 8.06445C6.65686 8.50195 7.01917 8.85059 7.43616 8.85059Z",fill:"currentColor"}));function xae(){const t=TA(),{address:e}=cn(),r=tx();return Q.exports.useCallback(()=>{if(!e||!r)throw new Error("No address or chain ID found");t.clearTransactions(e,r)},[t,e,r])}var zA=t=>{var e,r;return(r=(e=t==null?void 0:t.blockExplorers)==null?void 0:e.default)==null?void 0:r.url},HA=()=>f.createElement("svg",{fill:"none",height:"19",viewBox:"0 0 20 19",width:"20",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM12.7158 12.1416C13.2432 12.1416 13.5684 11.7549 13.5684 11.1836V7.19336C13.5684 6.44629 13.1377 6.05957 12.417 6.05957H8.40918C7.8291 6.05957 7.45117 6.38477 7.45117 6.91211C7.45117 7.43945 7.8291 7.77344 8.40918 7.77344H9.69238L10.7207 7.63281L9.53418 8.67871L6.73047 11.4912C6.53711 11.6758 6.41406 11.9395 6.41406 12.2031C6.41406 12.7832 6.85352 13.1699 7.39844 13.1699C7.68848 13.1699 7.92578 13.0732 8.1543 12.8623L10.9316 10.0762L11.9775 8.89844L11.8545 9.98828V11.1836C11.8545 11.7725 12.1885 12.1416 12.7158 12.1416Z",fill:"currentColor"})),wae=()=>f.createElement("svg",{fill:"none",height:"19",viewBox:"0 0 20 19",width:"20",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM7.29297 13.3018C7.58301 13.3018 7.81152 13.2139 7.99609 13.0205L10 11.0166L12.0127 13.0205C12.1973 13.2051 12.4258 13.3018 12.707 13.3018C13.2432 13.3018 13.6562 12.8887 13.6562 12.3525C13.6562 12.0977 13.5508 11.8691 13.3662 11.6934L11.3535 9.67188L13.375 7.6416C13.5596 7.44824 13.6562 7.22852 13.6562 6.98242C13.6562 6.44629 13.2432 6.0332 12.7158 6.0332C12.4346 6.0332 12.2148 6.12109 12.0215 6.31445L10 8.32715L7.9873 6.32324C7.80273 6.12988 7.58301 6.04199 7.29297 6.04199C6.76562 6.04199 6.35254 6.45508 6.35254 6.99121C6.35254 7.2373 6.44922 7.46582 6.63379 7.6416L8.65527 9.67188L6.63379 11.6934C6.44922 11.8691 6.35254 12.1064 6.35254 12.3525C6.35254 12.8887 6.76562 13.3018 7.29297 13.3018Z",fill:"currentColor"})),Eae=()=>f.createElement("svg",{fill:"none",height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M10 19.4443C15.0977 19.4443 19.2812 15.252 19.2812 10.1543C19.2812 5.06543 15.0889 0.873047 10 0.873047C4.90234 0.873047 0.71875 5.06543 0.71875 10.1543C0.71875 15.252 4.91113 19.4443 10 19.4443ZM10 17.1328C6.1416 17.1328 3.03906 14.0215 3.03906 10.1543C3.03906 6.2959 6.13281 3.18457 10 3.18457C13.8584 3.18457 16.9697 6.2959 16.9697 10.1543C16.9785 14.0215 13.8672 17.1328 10 17.1328ZM9.07715 14.3379C9.4375 14.3379 9.7627 14.1533 9.97363 13.8369L13.7441 8.00977C13.8848 7.79883 13.9814 7.5791 13.9814 7.36816C13.9814 6.84961 13.5244 6.48926 13.0322 6.48926C12.707 6.48926 12.4258 6.66504 12.2148 7.0166L9.05957 12.0967L7.5918 10.2949C7.37207 10.0225 7.13477 9.9082 6.84473 9.9082C6.33496 9.9082 5.92188 10.3125 5.92188 10.8223C5.92188 11.0684 6.00098 11.2793 6.18555 11.5078L8.1543 13.8545C8.40918 14.1709 8.70801 14.3379 9.07715 14.3379Z",fill:"currentColor"})),Cae=t=>{switch(t){case"pending":return qf;case"confirmed":return Eae;case"failed":return wae;default:return qf}};function kae({tx:t}){const e=Xr(),r=Cae(t.status),n=t.status==="failed"?"error":"accentColor",{chain:i}=$a(),a=t.status==="confirmed"?"Confirmed":t.status==="failed"?"Failed":"Pending",o=zA(i);return f.createElement(f.Fragment,null,f.createElement(J,{...o?{as:"a",background:{hover:"profileForeground"},borderRadius:"menuButton",className:Lr({active:"shrink"}),href:`
$ {
    o
}
/tx/$ {
    t.hash
}
`,rel:"noreferrer noopener",target:"_blank",transition:"default"}:{},color:"modalText",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"8",width:"full"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",gap:e?"16":"14"},f.createElement(J,{color:n},f.createElement(r,null)),f.createElement(J,{display:"flex",flexDirection:"column",gap:e?"3":"1"},f.createElement(J,null,f.createElement($e,{color:"modalText",font:"body",size:e?"16":"14",weight:"bold"},t==null?void 0:t.description)),f.createElement(J,null,f.createElement($e,{color:t.status==="pending"?"modalTextSecondary":n,font:"body",size:"14",weight:e?"medium":"regular"},a)))),o&&f.createElement(J,{alignItems:"center",color:"modalTextDim",display:"flex"},f.createElement(HA,null))))}var _ae=3;function Aae({address:t}){const e=SA(),r=xae(),{chain:n}=$a(),i=zA(n),a=e.slice(0,_ae),o=a.length>0,s=Xr(),{appName:l}=Q.exports.useContext(Pu);return f.createElement(f.Fragment,null,f.createElement(J,{display:"flex",flexDirection:"column",gap:"10",paddingBottom:"2",paddingTop:"16",paddingX:s?"8":"18"},o&&f.createElement(J,{paddingBottom:s?"4":"0",paddingTop:"8",paddingX:s?"12":"6"},f.createElement(J,{display:"flex",justifyContent:"space-between"},f.createElement($e,{color:"modalTextSecondary",size:s?"16":"14",weight:"semibold"},"Recent Transactions"),f.createElement(J,{style:{marginBottom:-6,marginLeft:-10,marginRight:-10,marginTop:-6}},f.createElement(J,{as:"button",background:{hover:"profileForeground"},borderRadius:"actionButton",className:Lr({active:"shrink"}),onClick:r,paddingX:s?"8":"12",paddingY:s?"4":"5",transition:"default",type:"button"},f.createElement($e,{color:"modalTextSecondary",size:s?"16":"14",weight:"semibold"},"Clear All"))))),f.createElement(J,{display:"flex",flexDirection:"column",gap:"4"},o?a.map(u=>f.createElement(kae,{key:u.hash,tx:u})):f.createElement(f.Fragment,null,f.createElement(J,{padding:s?"12":"8"},f.createElement($e,{color:"modalTextDim",size:s?"16":"14",weight:s?"medium":"bold"},l??"Your"," transactions will appear here...")),s&&f.createElement(J,{background:"generalBorderDim",height:"1",marginX:"12",marginY:"8"})))),i&&f.createElement(J,{paddingBottom:"18",paddingX:s?"8":"18"},f.createElement(J,{alignItems:"center",as:"a",background:{hover:"profileForeground"},borderRadius:"menuButton",className:Lr({active:"shrink"}),color:"modalTextDim",display:"flex",flexDirection:"row",href:`
$ {
    i
}
/address/$ {
    t
}
`,justifyContent:"space-between",paddingX:"8",paddingY:"12",rel:"noreferrer noopener",style:{willChange:"transform"},target:"_blank",transition:"default",width:"full",...s?{paddingLeft:"12"}:{}},f.createElement($e,{color:"modalText",font:"body",size:s?"16":"14",weight:s?"semibold":"bold"},"View more on Explorer"),f.createElement(HA,null))))}function $4({action:t,icon:e,label:r,testId:n,url:i}){const a=Xr();return f.createElement(J,{...i?{as:"a",href:i,rel:"noreferrer noopener",target:"_blank"}:{as:"button",type:"button"},background:{base:"profileAction",...a?{}:{hover:"profileActionHover"}},borderRadius:"menuButton",boxShadow:"profileDetailsAction",className:Lr({active:"shrinkSm",hover:a?void 0:"grow"}),display:"flex",onClick:t,padding:a?"6":"8",style:{willChange:"transform"},testId:n,transition:"default",width:"full"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"1",justifyContent:"center",paddingTop:"2",width:"full"},f.createElement(J,{color:"modalText",height:"max"},e),f.createElement(J,null,f.createElement($e,{color:"modalText",size:a?"12":"13",weight:"semibold"},r))))}function Tae({address:t,balanceData:e,ensAvatar:r,ensName:n,onClose:i,onDisconnect:a}){const o=Q.exports.useContext(rx),[s,l]=Q.exports.useState(!1),u=Q.exports.useCallback(()=>{t&&(navigator.clipboard.writeText(t),l(!0))},[t]);if(Q.exports.useEffect(()=>{if(s){const w=setTimeout(()=>{l(!1)},1500);return()=>clearTimeout(w)}},[s]),!t)return null;const c=n?WA(n):$A(t),d=e==null?void 0:e.formatted,h=d?UA(parseFloat(d)):void 0,m="rk_profile_title",b=Xr();return f.createElement(f.Fragment,null,f.createElement(J,{display:"flex",flexDirection:"column"},f.createElement(J,{background:"profileForeground",padding:"16"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:b?"16":"12",justifyContent:"center",margin:"8",style:{textAlign:"center"}},f.createElement(J,{style:{position:"absolute",right:16,top:16,willChange:"transform"}},f.createElement(ou,{onClose:i}))," ",f.createElement(J,{marginTop:b?"24":"0"},f.createElement(xA,{address:t,imageUrl:r,size:b?82:74})),f.createElement(J,{display:"flex",flexDirection:"column",gap:b?"4":"0",textAlign:"center"},f.createElement(J,{textAlign:"center"},f.createElement($e,{as:"h1",color:"modalText",id:m,size:b?"20":"18",weight:"heavy"},c)),e&&f.createElement(J,{textAlign:"center"},f.createElement($e,{as:"h1",color:"modalTextSecondary",id:m,size:b?"16":"14",weight:"semibold"},h," ",e.symbol)))),f.createElement(J,{display:"flex",flexDirection:"row",gap:"8",margin:"2",marginTop:"16"},f.createElement($4,{action:u,icon:s?f.createElement(vae,null):f.createElement(yae,null),label:s?"Copied!":"Copy Address"}),f.createElement($4,{action:a,icon:f.createElement(bae,null),label:"Disconnect",testId:"disconnect-button"}))),o&&f.createElement(f.Fragment,null,f.createElement(J,{background:"generalBorder",height:"1",marginTop:"-1"}),f.createElement(J,null,f.createElement(Aae,{address:t})))))}function Sae({onClose:t,open:e}){const{address:r}=cn(),{data:n}=Yp({addressOrName:r}),i=CA(r),a=kA(r),{disconnect:o}=fd();if(!r)return null;const s="rk_account_modal_title";return f.createElement(f.Fragment,null,r&&f.createElement(rp,{onClose:t,open:e,titleId:s},f.createElement(np,{bottomSheetOnMobile:!0,padding:"0"},f.createElement(Tae,{address:r,balanceData:n,ensAvatar:i,ensName:a,onClose:t,onDisconnect:o}))))}var Oae=({size:t})=>f.createElement("svg",{fill:"none",height:t,viewBox:"0 0 28 28",width:t,xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M6.742 22.195h8.367c1.774 0 2.743-.968 2.743-2.758V16.11h-2.016v3.11c0 .625-.305.96-.969.96H6.984c-.664 0-.968-.335-.968-.96V7.984c0-.632.304-.968.968-.968h7.883c.664 0 .969.336.969.968v3.133h2.016v-3.36c0-1.78-.97-2.757-2.743-2.757H6.742C4.97 5 4 5.977 4 7.758v11.68c0 1.789.969 2.757 2.742 2.757Zm5.438-7.703h7.601l1.149-.07-.602.406-1.008.938a.816.816 0 0 0-.258.593c0 .407.313.782.758.782.227 0 .39-.086.547-.243l2.492-2.593c.235-.235.313-.47.313-.711 0-.242-.078-.477-.313-.719l-2.492-2.586c-.156-.156-.32-.25-.547-.25-.445 0-.758.367-.758.781 0 .227.094.446.258.594l1.008.945.602.407-1.149-.079H12.18a.904.904 0 0 0 0 1.805Z",fill:"currentColor"})),Pae="v9horb0",ly=f.forwardRef(({children:t,currentlySelected:e=!1,onClick:r,testId:n,...i},a)=>{const o=Xr();return f.createElement(J,{as:"button",borderRadius:"menuButton",disabled:e,display:"flex",onClick:r,ref:a,testId:n,type:"button"},f.createElement(J,{borderRadius:"menuButton",className:[o?Pae:void 0,!e&&Lr({active:"shrink"})],padding:o?"8":"6",transition:"default",width:"full",...e?{background:"accentColor",borderColor:"selectedOptionBorder",borderStyle:"solid",borderWidth:"1",boxShadow:"selectedOption",color:"accentColorForeground"}:{background:{hover:"menuItemBackground"},color:"modalText",transition:"default"},...i},t))});ly.displayName="MenuButton";function Rae({onClose:t,open:e}){var r;const{chain:n}=$a(),{chains:i,error:a,switchNetwork:o}=q9(),{disconnect:s}=fd(),{connector:l}=cn(),[u,c]=Q.exports.useState(),d="rk_chain_modal_title",h=Xr(),m=wA(),b=(r=n==null?void 0:n.unsupported)!=null?r:!1,w=h?"36":"28",p=Q.exports.useCallback(()=>{c(null),t()},[t]);Q.exports.useEffect(()=>{var x;if(!l)return;const k=()=>{c(null),t()};let y;return(x=l==null?void 0:l.getProvider)==null||x.call(l).then(I=>{y=I,y.on("chainChanged",k)}),()=>{y==null||y.removeListener("chainChanged",k)}},[l,t,p]),Q.exports.useEffect(()=>{a&&a.name==="UserRejectedRequestError"&&p()},[a,p]);const{appName:v}=Q.exports.useContext(Pu);return!n||!(n!=null&&n.id)?null:f.createElement(rp,{onClose:t,open:e,titleId:d},f.createElement(np,{bottomSheetOnMobile:!0},f.createElement(J,{display:"flex",flexDirection:"column",gap:"14"},f.createElement(J,{display:"flex",flexDirection:"row",justifyContent:"space-between"},h&&f.createElement(J,{width:"30"}),f.createElement(J,{paddingBottom:"0",paddingLeft:"8",paddingTop:"4"},f.createElement($e,{as:"h1",color:"modalText",id:d,size:h?"20":"18",weight:"heavy"},"Switch Networks")),f.createElement(ou,{onClose:t})),b&&f.createElement(J,{marginX:"8",textAlign:h?"center":"left"},f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"medium"},"Wrong network detected, switch or disconnect to continue.")),f.createElement(J,{display:"flex",flexDirection:"column",gap:"4",padding:"2"},o?i.map((x,k)=>{const y=x.id===(n==null?void 0:n.id),I=x.id===u,N=m[x.id],U=h?"36":"28",W=N==null?void 0:N.iconUrl,H=N==null?void 0:N.iconBackground;return f.createElement(Q.exports.Fragment,{key:x.id},f.createElement(ly,{currentlySelected:y,onClick:y?void 0:()=>{c(x.id),o(x.id)},testId:`
chain - option - $ {
    x.id
}
`},f.createElement(J,{fontFamily:"body",fontSize:"16",fontWeight:"bold"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",gap:"4",height:U},W?f.createElement(J,{height:"full",marginRight:"8"},f.createElement(jr,{alt:x.name,background:H,borderRadius:"full",height:U,src:W,width:U})):null,f.createElement("div",null,x.name)),y&&f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",marginRight:"6"},f.createElement($e,{color:"accentColorForeground",size:"14",weight:"medium"},"Connected"),f.createElement(J,{background:"connectionIndicator",borderColor:"selectedOptionBorder",borderRadius:"full",borderStyle:"solid",borderWidth:"1",height:"8",marginLeft:"8",width:"8"})),I&&f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",marginRight:"6"},f.createElement($e,{color:"modalText",size:"14",weight:"medium"},"Confirm in Wallet"),f.createElement(J,{background:"standby",borderRadius:"full",height:"8",marginLeft:"8",width:"8"}))))),h&&k<(i==null?void 0:i.length)-1&&f.createElement(J,{background:"generalBorderDim",height:"1",marginX:"8"}))}):f.createElement(J,{background:"generalBorder",borderRadius:"menuButton",paddingX:"18",paddingY:"12"},f.createElement($e,{color:"modalText",size:"14",weight:"medium"},"Your wallet does not support switching networks from"," ",v??"this app",". Try switching networks from within your wallet instead.")),b&&f.createElement(f.Fragment,null,f.createElement(J,{background:"generalBorderDim",height:"1",marginX:"8"}),f.createElement(ly,{onClick:()=>s(),testId:"chain-option-disconnect"},f.createElement(J,{color:"error",fontFamily:"body",fontSize:"16",fontWeight:"bold"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",gap:"4",height:w},f.createElement(J,{alignItems:"center",color:"error",height:w,justifyContent:"center",marginRight:"8"},f.createElement(Oae,{size:Number(w)})),f.createElement("div",null,"Disconnect"))))))))))}function qA(){return typeof navigator<"u"&&/Version\/([0-9._]+).*Safari/.test(navigator.userAgent)}function KA(){var t;let e=navigator.userAgent.toLowerCase();return(t=navigator==null?void 0:navigator.brave)!=null&&t.isBrave?"Brave":e.indexOf("edge")>-1||e.indexOf("edg/")>-1?"Edge":e.indexOf("chrome")>-1?"Chrome":e.indexOf("firefox")>-1?"Firefox":"Browser"}function Nae(t,e){const r={};return t.forEach(n=>{const i=e(n);!i||(r[i]||(r[i]=[]),r[i].push(n))}),r}var nx=({children:t,href:e})=>f.createElement(J,{as:"a",color:"accentColor",href:e,rel:"noreferrer",target:"_blank"},t),ix=({children:t})=>f.createElement($e,{color:"modalTextSecondary",size:"12",weight:"medium"},t);function W4({compactModeEnabled:t=!1,getWallet:e}){const{disclaimer:r,learnMoreUrl:n}=Q.exports.useContext(Pu);return f.createElement(f.Fragment,null,f.createElement(J,{alignItems:"center",color:"accentColor",display:"flex",flexDirection:"column",height:"full",justifyContent:"space-around"},f.createElement(J,{marginBottom:"10"},!t&&f.createElement($e,{color:"modalText",size:"18",weight:"heavy"},"What is a Wallet?")),f.createElement(J,{display:"flex",flexDirection:"column",gap:"32",justifyContent:"center",marginY:"20",style:{maxWidth:312}},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",gap:"16"},f.createElement(J,{borderRadius:"6",height:"48",minWidth:"48",width:"48"},f.createElement(Vie,null)),f.createElement(J,{display:"flex",flexDirection:"column",gap:"4"},f.createElement($e,{color:"modalText",size:"14",weight:"bold"},"A Home for your Digital Assets"),f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"medium"},"Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."))),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",gap:"16"},f.createElement(J,{borderRadius:"6",height:"48",minWidth:"48",width:"48"},f.createElement(Qie,null)),f.createElement(J,{display:"flex",flexDirection:"column",gap:"4"},f.createElement($e,{color:"modalText",size:"14",weight:"bold"},"A New Way to Log In"),f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"medium"},"Instead of creating new accounts and passwords on every website, just connect your wallet.")))),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"12",justifyContent:"center",margin:"10"},f.createElement(In,{label:"Get a Wallet",onClick:e}),f.createElement(J,{as:"a",className:Lr({active:"shrink",hover:"grow"}),display:"block",href:n,paddingX:"12",paddingY:"4",rel:"noreferrer",style:{willChange:"transform"},target:"_blank",transition:"default"},f.createElement($e,{color:"accentColor",size:"14",weight:"bold"},"Learn More"))),r&&!t&&f.createElement(J,{marginBottom:"8",marginTop:"12",textAlign:"center"},f.createElement(r,{Link:nx,Text:ix}))))}var GA=()=>f.createElement("svg",{fill:"none",height:"17",viewBox:"0 0 11 17",width:"11",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M0.99707 8.6543C0.99707 9.08496 1.15527 9.44531 1.51562 9.79688L8.16016 16.3096C8.43262 16.5732 8.74902 16.7051 9.13574 16.7051C9.90918 16.7051 10.5508 16.0811 10.5508 15.3076C10.5508 14.9121 10.3838 14.5605 10.0938 14.2705L4.30176 8.64551L10.0938 3.0293C10.3838 2.74805 10.5508 2.3877 10.5508 2.00098C10.5508 1.23633 9.90918 0.603516 9.13574 0.603516C8.74902 0.603516 8.43262 0.735352 8.16016 0.999023L1.51562 7.51172C1.15527 7.85449 1.00586 8.21484 0.99707 8.6543Z",fill:"currentColor"})),Mae=()=>f.createElement("svg",{fill:"none",height:"12",viewBox:"0 0 8 12",width:"8",xmlns:"http://www.w3.org/2000/svg"},f.createElement("path",{d:"M3.64258 7.99609C4.19336 7.99609 4.5625 7.73828 4.68555 7.24609C4.69141 7.21094 4.70312 7.16406 4.70898 7.13477C4.80859 6.60742 5.05469 6.35547 6.04492 5.76367C7.14648 5.10156 7.67969 4.3457 7.67969 3.24414C7.67969 1.39844 6.17383 0.255859 3.95898 0.255859C2.32422 0.255859 1.05859 0.894531 0.548828 1.86719C0.396484 2.14844 0.320312 2.44727 0.320312 2.74023C0.314453 3.37305 0.742188 3.79492 1.42188 3.79492C1.91406 3.79492 2.33594 3.54883 2.53516 3.11523C2.78711 2.47656 3.23242 2.21289 3.83594 2.21289C4.55664 2.21289 5.10742 2.65234 5.10742 3.29102C5.10742 3.9707 4.7793 4.29883 3.81836 4.87891C3.02148 5.36523 2.50586 5.92773 2.50586 6.76562V6.90039C2.50586 7.55664 2.96289 7.99609 3.64258 7.99609ZM3.67188 11.4473C4.42773 11.4473 5.04297 10.8672 5.04297 10.1406C5.04297 9.41406 4.42773 8.83984 3.67188 8.83984C2.91602 8.83984 2.30664 9.41406 2.30664 10.1406C2.30664 10.8672 2.91602 11.4473 3.67188 11.4473Z",fill:"currentColor"})),Iae=({"aria-label":t="Info",onClick:e})=>{const r=Xr();return f.createElement(J,{alignItems:"center","aria-label":t,as:"button",background:"closeButtonBackground",borderColor:"actionButtonBorder",borderRadius:"full",borderStyle:"solid",borderWidth:r?"0":"1",className:Lr({active:"shrinkSm",hover:"growLg"}),color:"closeButton",display:"flex",height:r?"30":"28",justifyContent:"center",onClick:e,style:{willChange:"transform"},transition:"default",type:"button",width:r?"30":"28"},f.createElement(Mae,null))},VA=t=>{const e=Q.exports.useRef(null),r=Q.exports.useContext(RA),n=X2(t);return Q.exports.useEffect(()=>{if(r&&e.current&&n)return jae(e.current,n)},[r,n]),e},Lae=()=>{const t="_rk_coolMode",e=document.getElementById(t);if(e)return e;const r=document.createElement("div");return r.setAttribute("id",t),r.setAttribute("style",["overflow:hidden","position:fixed","height:100%","top:0","left:0","right:0","bottom:0","pointer-events:none","z-index:2147483647"].join(";")),document.body.appendChild(r),r},z4=0;function jae(t,e){z4++;const r=[15,20,25,35,45],n=35;let i=[],a=!1,o=0,s=0;const l=Lae();function u(){const y=r[Math.floor(Math.random()*r.length)],I=Math.random()*10,N=Math.random()*25,U=Math.random()*360,W=Math.random()*35*(Math.random()<=.5?-1:1),H=s-y/2,ue=o-y/2,L=Math.random()<=.5?-1:1,g=document.createElement("div");g.innerHTML=` < img src = "${e}"
width = "${y}"
height = "${y}"
style = "border-radius: 25%" > `,g.setAttribute("style",["position:absolute","will-change:transform",`
top: $ {
    H
}
px`,`
left: $ {
    ue
}
px`,`
transform: rotate($ {
        U
    }
    deg)`].join(";")),l.appendChild(g),i.push({direction:L,element:g,left:ue,size:y,speedHorz:I,speedUp:N,spinSpeed:W,spinVal:U,top:H})}function c(){i.forEach(y=>{y.left=y.left-y.speedHorz*y.direction,y.top=y.top-y.speedUp,y.speedUp=Math.min(y.size,y.speedUp-1),y.spinVal=y.spinVal+y.spinSpeed,y.top>=Math.max(window.innerHeight,document.body.clientHeight)+y.size&&(i=i.filter(I=>I!==y),y.element.remove()),y.element.setAttribute("style",["position:absolute","will-change:transform",`
top: $ {
    y.top
}
px`,`
left: $ {
    y.left
}
px`,`
transform: rotate($ {
        y.spinVal
    }
    deg)`].join(";"))})}let d;function h(){a&&i.length<n&&u(),c(),d=requestAnimationFrame(h)}h();const m="ontouchstart"in window||navigator.msMaxTouchPoints,b=m?"touchstart":"mousedown",w=m?"touchend":"mouseup",p=m?"touchmove":"mousemove",v=y=>{var I,N;"touches"in y?(o=(I=y.touches)==null?void 0:I[0].clientX,s=(N=y.touches)==null?void 0:N[0].clientY):(o=y.clientX,s=y.clientY)},x=y=>{v(y),a=!0},k=()=>{a=!1};return t.addEventListener(p,v,{passive:!1}),t.addEventListener(b,x),t.addEventListener(w,k),t.addEventListener("mouseleave",k),()=>{t.removeEventListener(p,v),t.removeEventListener(b,x),t.removeEventListener(w,k),t.removeEventListener("mouseleave",k);let y=setInterval(()=>{d&&i.length===0&&(cancelAnimationFrame(d),clearInterval(y),--z4===0&&l.remove())},500)}}var Fae="g5kl0l0",YA=({as:t="button",currentlySelected:e=!1,iconBackground:r,iconUrl:n,name:i,onClick:a,ready:o,recent:s,testId:l,...u})=>{const c=VA(n),[d,h]=Q.exports.useState(!1);return f.createElement(J,{display:"flex",flexDirection:"column",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),ref:c},f.createElement(J,{as:t,borderRadius:"menuButton",borderStyle:"solid",borderWidth:"1",className:e?void 0:[Fae,Lr({active:"shrink"})],disabled:e,onClick:a,padding:"5",style:{willChange:"transform"},testId:l,transition:"default",width:"full",...e?{background:"accentColor",borderColor:"selectedOptionBorder",boxShadow:"selectedWallet"}:{background:{hover:"menuItemBackground"}},...u},f.createElement(J,{color:e?"accentColorForeground":"modalText",disabled:!o,fontFamily:"body",fontSize:"16",fontWeight:"bold",transition:"default"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",gap:"12"},f.createElement(jr,{background:r,...d?{}:{borderColor:"actionButtonBorder"},borderRadius:"6",height:"28",src:n,width:"28"}),f.createElement(J,null,f.createElement(J,{style:{marginTop:s?-2:void 0}},i),s&&f.createElement($e,{color:e?"accentColorForeground":"accentColor",size:"12",style:{lineHeight:1,marginTop:-1},weight:"medium"},"Recent"))))))};YA.displayName="ModalSelection";var og=(t,e=1)=>{let r=t.replace("#","");r.length===3&&(r=`
$ {
    r[0]
}
$ {
    r[0]
}
$ {
    r[1]
}
$ {
    r[1]
}
$ {
    r[2]
}
$ {
    r[2]
}
`);const n=parseInt(r.substring(0,2),16),i=parseInt(r.substring(2,4),16),a=parseInt(r.substring(4,6),16);return e>1&&e<=100&&(e=e/100),`
rgba($ {
    n
}, $ {
    i
}, $ {
    a
}, $ {
    e
})`},Dae=t=>t?[og(t,.2),og(t,.14),og(t,.1)]:null,Bae=t=>/^#([0-9a-f]{3}){1,2}$/i.test(t),QA=async()=>(await or(()=>import("./assets/create-GVGWOEGN-ebff10a4.js"),[])).default,JA=()=>So(QA),Uae=()=>f.createElement(jr,{background:"#e3a5e8",borderColor:"generalBorder",borderRadius:"10",height:"48",src:QA,width:"48"}),XA=async()=>(await or(()=>import("./assets/refresh-J4PXTKTR-ba752184.js"),[])).default,$ae=()=>So(XA),Wae=()=>f.createElement(jr,{background:"#515a70",borderColor:"generalBorder",borderRadius:"10",height:"48",src:XA,width:"48"}),ZA=async()=>(await or(()=>import("./assets/scan-RESLZYEA-eb21bae1.js"),[])).default,eT=()=>So(ZA),zae=()=>f.createElement(jr,{background:"#515a70",borderColor:"generalBorder",borderRadius:"10",height:"48",src:ZA,width:"48"}),Hae="_1vwt0cg0",qae="_1vwt0cg2 ju367v75 ju367v7q",Kae="_1vwt0cg3",Gae="_1vwt0cg4",Vae=(t,e)=>{const r=Array.prototype.slice.call(bd.create(t,{errorCorrectionLevel:e}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((i,a,o)=>(o%n===0?i.push([a]):i[i.length-1].push(a))&&i,[])};function tT({ecl:t="M",logoBackground:e,logoMargin:r=10,logoSize:n=50,logoUrl:i,size:a=200,uri:o}){const s="20",l=a-parseInt(s,10)*2,u=Q.exports.useMemo(()=>{const h=[],m=Vae(o,t),b=l/m.length;[{x:0,y:0},{x:1,y:0},{x:0,y:1}].forEach(({x:k,y})=>{const I=(m.length-7)*b*k,N=(m.length-7)*b*y;for(let U=0;U<3;U++)h.push(f.createElement("rect",{fill:U%2!==0?"white":"black",height:b*(7-U*2),key:`
$ {
    U
} - $ {
    k
} - $ {
    y
}
`,rx:(U-2)*-5+(U===0?2:0),ry:(U-2)*-5+(U===0?2:0),width:b*(7-U*2),x:I+b*U,y:N+b*U}))});const p=Math.floor((n+25)/b),v=m.length/2-p/2,x=m.length/2+p/2-1;return m.forEach((k,y)=>{k.forEach((I,N)=>{m[y][N]&&(y<7&&N<7||y>m.length-8&&N<7||y<7&&N>m.length-8||y>v&&y<x&&N>v&&N<x||h.push(f.createElement("circle",{cx:y*b+b/2,cy:N*b+b/2,fill:"black",key:`
circle - $ {
    y
} - $ {
    N
}
`,r:b/3})))})}),h},[t,n,l,o]),c=l/2-n/2,d=n+r*2;return f.createElement(J,{borderColor:"generalBorder",borderRadius:"menuButton",borderStyle:"solid",borderWidth:"1",className:Hae,padding:s,width:"max"},f.createElement(J,{style:{height:l,userSelect:"none",width:l},userSelect:"none"},f.createElement(J,{display:"flex",justifyContent:"center",position:"relative",style:{height:0,top:c,width:l},width:"full"},f.createElement(jr,{background:e,borderColor:{custom:"rgba(0, 0, 0, 0.06)"},borderRadius:"13",height:n,src:i,width:n})),f.createElement("svg",{height:l,style:{all:"revert"},width:l},f.createElement("defs",null,f.createElement("clipPath",{id:"clip-wrapper"},f.createElement("rect",{height:d,width:d})),f.createElement("clipPath",{id:"clip-logo"},f.createElement("rect",{height:n,width:n}))),f.createElement("rect",{fill:"transparent",height:l,width:l}),u)))}var rT=async()=>{switch(KA()){case"Chrome":return(await or(()=>import("./assets/Chrome-J3SNM3VC-f104e3bc.js"),[])).default;case"Brave":return(await or(()=>import("./assets/Brave-AYENFWW6-7f4f924c.js"),[])).default;case"Edge":return(await or(()=>import("./assets/Edge-L7ZZC477-e4909cbd.js"),[])).default;case"Firefox":return(await or(()=>import("./assets/Firefox-JUUNEJSG-47084019.js"),[])).default;default:return(await or(()=>import("./assets/Browser-MZYY2QO6-2ca1b32c.js"),[])).default}},Yae=()=>So(rT);function Qae({getWalletDownload:t}){const r=xm().splice(0,5);return f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",height:"full",marginTop:"18",width:"full"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"28",height:"full",width:"full"},r==null?void 0:r.filter(n=>{var i,a;return((i=n.downloadUrls)==null?void 0:i.browserExtension)||n.qrCode&&((a=n.downloadUrls)==null?void 0:a.qrCode)}).map(n=>{const{downloadUrls:i,iconBackground:a,iconUrl:o,id:s,name:l,qrCode:u}=n,c=(i==null?void 0:i.qrCode)&&u,d=(i==null?void 0:i.qrCode)&&(i==null?void 0:i.browserExtension);return f.createElement(J,{alignItems:"center",display:"flex",gap:"16",justifyContent:"space-between",key:n.id,width:"full"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",gap:"16"},f.createElement(jr,{background:a,borderColor:"actionButtonBorder",borderRadius:"10",height:"48",src:o,width:"48"}),f.createElement(J,{display:"flex",flexDirection:"column",gap:"2"},f.createElement($e,{color:"modalText",size:"14",weight:"bold"},l),f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"medium"},d?"Mobile Wallet and Extension":c?"Mobile Wallet":i!=null&&i.browserExtension?"Browser Extension":null))),f.createElement(J,{display:"flex",flexDirection:"column",gap:"4"},f.createElement(In,{label:"GET",onClick:()=>t(s),type:"secondary"})))})),f.createElement(J,{alignItems:"center",borderRadius:"10",display:"flex",flexDirection:"column",gap:"8",justifyContent:"space-between",marginBottom:"4",paddingY:"8",style:{maxWidth:275,textAlign:"center"}},f.createElement($e,{color:"modalText",size:"14",weight:"bold"},"Not what you’re looking for?"),f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"medium"},"Select a wallet on the left to get started with a different wallet provider.")))}var sg="44";function Jae({changeWalletStep:t,compactModeEnabled:e,connectionError:r,qrCodeUri:n,reconnect:i,wallet:a}){var o;const{downloadUrls:s,iconBackground:l,iconUrl:u,name:c,qrCode:d,ready:h,showWalletConnectModal:m}=a,b=(o=a.desktop)==null?void 0:o.getUri,w=qA(),p=(s==null?void 0:s.qrCode)&&(s==null?void 0:s.browserExtension),v=d&&n,x=m?{description:`
Need the $ {
    e ? "" : "official"
}
WalletConnect modal ? `,label:"OPEN",onClick:m}:v?{description:`
Don’ t have $ {
    c
} ? `,label:"GET",onClick:()=>t(p?"DOWNLOAD_OPTIONS":"DOWNLOAD")}:null,{width:k}=OA(),y=k&&k<768;return Q.exports.useEffect(()=>{Yae()},[]),f.createElement(J,{display:"flex",flexDirection:"column",height:"full",width:"full"},v?f.createElement(J,{alignItems:"center",display:"flex",height:"full",justifyContent:"center"},f.createElement(tT,{logoBackground:l,logoSize:e?60:72,logoUrl:u,size:e?318:y?Math.max(280,Math.min(k-308,382)):382,uri:n})):f.createElement(J,{alignItems:"center",display:"flex",justifyContent:"center",style:{flexGrow:1}},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"8"},f.createElement(J,{borderRadius:"10",height:sg,overflow:"hidden"},f.createElement(jr,{height:sg,src:u,width:sg})),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"4",paddingX:"32",style:{textAlign:"center"}},f.createElement($e,{color:"modalText",size:"18",weight:"bold"},h?`
Opening $ {
    c
}...`:s!=null&&s.browserExtension?`
$ {
    c
}
is not installed`:`
$ {
    c
}
is not available`),!h&&(s!=null&&s.browserExtension)?f.createElement(J,{paddingTop:"20"},f.createElement(In,{href:s.browserExtension,label:"INSTALL",type:"secondary"})):null,h&&!v&&f.createElement(f.Fragment,null,f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},f.createElement($e,{color:"modalTextSecondary",size:"14",textAlign:"center",weight:"medium"},"Confirm connection in the extension")),f.createElement(J,{alignItems:"center",color:"modalText",display:"flex",flexDirection:"row",height:"32",marginTop:"8"},r?f.createElement(In,{label:"RETRY",onClick:b?async()=>{const I=await b();window.open(I,w?"_blank":"_self")}:()=>{i(a)}}):f.createElement(J,{color:"modalTextSecondary"},f.createElement(qf,null))))))),f.createElement(J,{alignItems:"center",borderRadius:"10",display:"flex",flexDirection:"row",gap:"8",height:"28",justifyContent:"space-between",marginTop:"12"},h&&x&&f.createElement(f.Fragment,null,f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"medium"},x.description),f.createElement(In,{label:x.label,onClick:x.onClick,type:"secondary"}))))}var H4=({actionLabel:t,description:e,iconAccent:r,iconBackground:n,iconUrl:i,isCompact:a,onAction:o,title:s,url:l,variant:u})=>{const c=u==="browser",d=!c&&r&&Dae(r);return f.createElement(J,{alignItems:"center",borderRadius:"13",display:"flex",justifyContent:"center",overflow:"hidden",paddingX:a?"18":"44",position:"relative",style:{flex:1,isolation:"isolate"},width:"full"},f.createElement(J,{borderColor:"actionButtonBorder",borderRadius:"13",borderStyle:"solid",borderWidth:"1",style:{bottom:"0",left:"0",position:"absolute",right:"0",top:"0",zIndex:1}}),c&&f.createElement(J,{background:"downloadTopCardBackground",height:"full",position:"absolute",style:{zIndex:0},width:"full"},f.createElement(J,{display:"flex",flexDirection:"row",justifyContent:"space-between",style:{bottom:"0",filter:"blur(20px)",left:"0",position:"absolute",right:"0",top:"0",transform:"translate3d(0, 0, 0)"}},f.createElement(J,{style:{filter:"blur(100px)",marginLeft:-27,marginTop:-20,opacity:.6,transform:"translate3d(0, 0, 0)"}},f.createElement(jr,{borderRadius:"full",height:"200",src:i,width:"200"})),f.createElement(J,{style:{filter:"blur(100px)",marginRight:0,marginTop:105,opacity:.6,overflow:"auto",transform:"translate3d(0, 0, 0)"}},f.createElement(jr,{borderRadius:"full",height:"200",src:i,width:"200"})))),!c&&d&&f.createElement(J,{background:"downloadBottomCardBackground",style:{bottom:"0",left:"0",position:"absolute",right:"0",top:"0"}},f.createElement(J,{position:"absolute",style:{background:`
radial - gradient(50 % 50 % at 50 % 50 % , $ {
        d[0]
    }
    0 % , $ {
        d[1]
    }
    25 % , rgba(0, 0, 0, 0) 100 % )`,height:564,left:-215,top:-197,transform:"translate3d(0, 0, 0)",width:564}}),f.createElement(J,{position:"absolute",style:{background:`
radial - gradient(50 % 50 % at 50 % 50 % , $ {
        d[2]
    }
    0 % , rgba(0, 0, 0, 0) 100 % )`,height:564,left:-1,top:-76,transform:"translate3d(0, 0, 0)",width:564}})),f.createElement(J,{alignItems:"flex-start",display:"flex",flexDirection:"row",gap:"24",height:"max",justifyContent:"center",style:{zIndex:1}},f.createElement(J,null,f.createElement(jr,{height:"60",src:i,width:"60",...n?{background:n,borderColor:"generalBorder",borderRadius:"10"}:null})),f.createElement(J,{display:"flex",flexDirection:"column",gap:"4",style:{flex:1},width:"full"},f.createElement($e,{color:"modalText",size:"14",weight:"bold"},s),f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"medium"},e),f.createElement(J,{marginTop:"14",width:"max"},f.createElement(In,{href:l,label:t,onClick:o,size:"medium"})))))};function Xae({changeWalletStep:t,wallet:e}){var r;const n=KA(),a=Q.exports.useContext(bm)==="compact";return Q.exports.useEffect(()=>{JA(),eT(),$ae()},[]),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"24",height:"full",marginBottom:"8",marginTop:"4",width:"full"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"8",height:"full",justifyContent:"center",width:"full"},f.createElement(H4,{actionLabel:`
Add to $ {
    n
}
`,description:"Access your wallet right from your favorite web browser.",iconUrl:rT,isCompact:a,onAction:()=>t("INSTRUCTIONS_EXTENSION"),title:`
$ {
    e.name
}
for $ {
    n
}
`,url:(r=e==null?void 0:e.downloadUrls)==null?void 0:r.browserExtension,variant:"browser"}),f.createElement(H4,{actionLabel:"Get the app",description:"Use the mobile wallet to explore the world of Ethereum.",iconAccent:e.iconAccent,iconBackground:e.iconBackground,iconUrl:e.iconUrl,isCompact:a,onAction:()=>{t("DOWNLOAD")},title:`
$ {
    e.name
}
for Mobile`,variant:"app"})))}function Zae({changeWalletStep:t,wallet:e}){const{downloadUrls:r,qrCode:n}=e;return Q.exports.useEffect(()=>{JA(),eT()},[]),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"24",height:"full",width:"full"},f.createElement(J,{style:{maxWidth:220,textAlign:"center"}},f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"semibold"},"Scan with your phone to download on iOS or Android")),f.createElement(J,{height:"full"},r!=null&&r.qrCode?f.createElement(tT,{logoSize:0,size:268,uri:r.qrCode}):null),f.createElement(J,{alignItems:"center",borderRadius:"10",display:"flex",flexDirection:"row",gap:"8",height:"34",justifyContent:"space-between",marginBottom:"12",paddingY:"8"},f.createElement(In,{label:"Continue",onClick:()=>t(n!=null&&n.instructions?"INSTRUCTIONS_MOBILE":"CONNECT")})))}var ip={create:()=>f.createElement(Uae,null),install:t=>f.createElement(jr,{background:t.iconBackground,borderColor:"generalBorder",borderRadius:"10",height:"48",src:t.iconUrl,width:"48"}),refresh:()=>f.createElement(Wae,null),scan:()=>f.createElement(zae,null)};function eoe({connectWallet:t,wallet:e}){var r,n,i,a;return f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",height:"full",width:"full"},f.createElement(J,{display:"flex",flexDirection:"column",gap:"28",height:"full",justifyContent:"center",paddingY:"32",style:{maxWidth:320}},(n=(r=e==null?void 0:e.qrCode)==null?void 0:r.instructions)==null?void 0:n.steps.map((o,s)=>{var l;return f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",gap:"16",key:s},f.createElement(J,{borderRadius:"10",height:"48",minWidth:"48",overflow:"hidden",position:"relative",width:"48"},(l=ip[o.step])==null?void 0:l.call(ip,e)),f.createElement(J,{display:"flex",flexDirection:"column",gap:"4"},f.createElement($e,{color:"modalText",size:"14",weight:"bold"},o.title),f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"medium"},o.description)))})),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"12",justifyContent:"center",marginBottom:"16"},f.createElement(In,{label:"Connect",onClick:()=>t(e)}),f.createElement(J,{as:"a",className:Lr({active:"shrink",hover:"grow"}),display:"block",href:(a=(i=e==null?void 0:e.qrCode)==null?void 0:i.instructions)==null?void 0:a.learnMoreUrl,paddingX:"12",paddingY:"4",rel:"noreferrer",style:{willChange:"transform"},target:"_blank",transition:"default"},f.createElement($e,{color:"accentColor",size:"14",weight:"bold"},"Learn More"))))}function toe({wallet:t}){var e,r;return f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",height:"full",width:"full"},f.createElement(J,{display:"flex",flexDirection:"column",gap:"28",height:"full",justifyContent:"center",paddingY:"32",style:{maxWidth:320}},(r=(e=t==null?void 0:t.extension)==null?void 0:e.instructions)==null?void 0:r.steps.map((n,i)=>{var a;return f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",gap:"16",key:i},f.createElement(J,{borderRadius:"10",height:"48",minWidth:"48",overflow:"hidden",position:"relative",width:"48"},(a=ip[n.step])==null?void 0:a.call(ip,t)),f.createElement(J,{display:"flex",flexDirection:"column",gap:"4"},f.createElement($e,{color:"modalText",size:"14",weight:"bold"},n.title),f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"medium"},n.description)))})),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"12",justifyContent:"center",marginBottom:"16"},f.createElement(In,{label:"Refresh",onClick:window.location.reload.bind(window.location)})))}function roe({onClose:t}){var e,r,n;const i="rk_connect_title",a=qA(),[o,s]=Q.exports.useState(),[l,u]=Q.exports.useState(),[c,d]=Q.exports.useState(),h=!!(l!=null&&l.qrCode)&&c,[m,b]=Q.exports.useState(!1),p=Q.exports.useContext(bm)===Kf.COMPACT,{disclaimer:v}=Q.exports.useContext(Pu),x=xm().filter(K=>{var B;return K.ready||((B=K.downloadUrls)==null?void 0:B.browserExtension)}).sort((K,B)=>K.groupIndex-B.groupIndex),k=Nae(x,K=>K.groupName),y=K=>{var B,C,A;if(b(!1),K.ready){(C=(B=K==null?void 0:K.connect)==null?void 0:B.call(K))==null||C.catch(()=>{b(!0)});const $=(A=K.desktop)==null?void 0:A.getUri;$&&setTimeout(async()=>{const X=await $();window.open(X,a?"_blank":"_self")},0)}},I=K=>{var B;if(y(K),s(K.id),K.ready){let C=!1;(B=K==null?void 0:K.onConnecting)==null||B.call(K,async()=>{var A,$;if(C)return;C=!0;const X=x.find(se=>K.id===se.id),V=await((A=X==null?void 0:X.qrCode)==null?void 0:A.getUri());d(V),setTimeout(()=>{u(X),W("CONNECT")},V?0:50);const _=await(X==null?void 0:X.connector.getProvider()),ee=($=_==null?void 0:_.signer)==null?void 0:$.connection;if(ee!=null&&ee.on&&(ee!=null&&ee.off)){const se=()=>{ce(),I(K)},ce=()=>{ee.off("close",se),ee.off("open",ce)};ee.on("close",se),ee.on("open",ce)}})}else u(K),W("CONNECT")},N=K=>{var B,C;s(K);const A=x.find(V=>K===V.id),$=(B=A==null?void 0:A.downloadUrls)==null?void 0:B.qrCode,X=(C=A==null?void 0:A.downloadUrls)==null?void 0:C.browserExtension;u(A),W($&&X?"DOWNLOAD_OPTIONS":$?"DOWNLOAD":"INSTRUCTIONS_EXTENSION")},U=()=>{s(void 0),u(void 0),d(void 0)},W=(K,B=!1)=>{B&&K==="GET"&&H==="GET"?U():!B&&K==="GET"?ue("GET"):!B&&K==="CONNECT"&&ue("CONNECT"),g(K)},[H,ue]=Q.exports.useState("NONE"),[L,g]=Q.exports.useState("NONE");let E=null,P=null,M=null,D;Q.exports.useEffect(()=>{b(!1)},[L,l]);const G=!!((e=l==null?void 0:l.downloadUrls)!=null&&e.browserExtension&&((r=l==null?void 0:l.downloadUrls)!=null&&r.android||(n=l==null?void 0:l.downloadUrls)!=null&&n.ios));switch(L){case"NONE":E=f.createElement(W4,{getWallet:()=>W("GET")});break;case"LEARN_COMPACT":E=f.createElement(W4,{compactModeEnabled:p,getWallet:()=>W("GET")}),P="What is a Wallet?",M="NONE";break;case"GET":E=f.createElement(Qae,{getWalletDownload:N}),P="Get a Wallet",M=p?"LEARN_COMPACT":"NONE";break;case"CONNECT":E=l&&f.createElement(Jae,{changeWalletStep:W,compactModeEnabled:p,connectionError:m,qrCodeUri:c,reconnect:y,wallet:l}),P=h&&`
Scan with $ {
    l.name === "WalletConnect" ? "your phone" : l.name
}
`,M=p?"NONE":null,D=p?U:()=>{};break;case"DOWNLOAD_OPTIONS":E=l&&f.createElement(Xae,{changeWalletStep:W,wallet:l}),P=l&&`
Get $ {
    l.name
}
`,M=H;break;case"DOWNLOAD":E=l&&f.createElement(Zae,{changeWalletStep:W,wallet:l}),P=l&&`
Install $ {
    l.name
}
`,M=G?"DOWNLOAD_OPTIONS":H;break;case"INSTRUCTIONS_MOBILE":E=l&&f.createElement(eoe,{connectWallet:I,wallet:l}),P=l&&`
Get started with $ {
    p && l.shortName || l.name
}
`,M="DOWNLOAD";break;case"INSTRUCTIONS_EXTENSION":E=l&&f.createElement(toe,{wallet:l}),P=l&&`
Get started with $ {
    p && l.shortName || l.name
}
`,M="DOWNLOAD_OPTIONS";break}return f.createElement(J,{display:"flex",flexDirection:"row",style:{maxHeight:p?468:504}},(p?L==="NONE":!0)&&f.createElement(J,{className:p?Gae:Kae,display:"flex",flexDirection:"column",marginTop:"16"},f.createElement(J,{display:"flex",justifyContent:"space-between"},p&&v&&f.createElement(J,{marginLeft:"16",width:"28"},f.createElement(Iae,{onClick:()=>W("LEARN_COMPACT")})),p&&!v&&f.createElement(J,{marginLeft:"16",width:"28"}),f.createElement(J,{marginLeft:p?"0":"6",paddingBottom:"8",paddingTop:"2",paddingX:"18"},f.createElement($e,{as:"h1",color:"modalText",id:i,size:"18",weight:"heavy"},"Connect a Wallet")),p&&f.createElement(J,{marginRight:"16"},f.createElement(ou,{onClose:t}))),f.createElement(J,{className:qae,paddingBottom:"18"},Object.entries(k).map(([K,B],C)=>B.length>0&&f.createElement(Q.exports.Fragment,{key:C},K?f.createElement(J,{marginBottom:"8",marginTop:"16",marginX:"6"},f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"bold"},K)):null,f.createElement(J,{display:"flex",flexDirection:"column",gap:"4"},B.map(A=>f.createElement(YA,{currentlySelected:A.id===o,iconBackground:A.iconBackground,iconUrl:A.iconUrl,key:A.id,name:A.name,onClick:()=>I(A),ready:A.ready,recent:A.recent,testId:`
wallet - option - $ {
    A.id
}
`})))))),p&&f.createElement(f.Fragment,null,f.createElement(J,{background:"generalBorder",height:"1",marginTop:"-1"}),v?f.createElement(J,{paddingX:"24",paddingY:"16",textAlign:"center"},f.createElement(v,{Link:nx,Text:ix})):f.createElement(J,{alignItems:"center",display:"flex",justifyContent:"space-between",paddingX:"24",paddingY:"16"},f.createElement(J,{paddingY:"4"},f.createElement($e,{color:"modalTextSecondary",size:"14",weight:"medium"},"New to Ethereum wallets?")),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"row",gap:"4",justifyContent:"center"},f.createElement(J,{className:Lr({active:"shrink",hover:"grow"}),cursor:"pointer",onClick:()=>W("LEARN_COMPACT"),paddingY:"4",style:{willChange:"transform"},transition:"default"},f.createElement($e,{color:"accentColor",size:"14",weight:"bold"},"Learn More")))))),(p?L!=="NONE":!0)&&f.createElement(f.Fragment,null,!p&&f.createElement(J,{background:"generalBorder",minWidth:"1",width:"1"}),f.createElement(J,{display:"flex",flexDirection:"column",margin:"16",style:{flexGrow:1}},f.createElement(J,{alignItems:"center",display:"flex",justifyContent:"space-between",marginBottom:"12"},f.createElement(J,{width:"28"},M&&f.createElement(J,{as:"button",className:Lr({active:"shrinkSm",hover:"growLg"}),color:"accentColor",onClick:()=>{M&&W(M,!0),D==null||D()},paddingX:"8",paddingY:"4",style:{boxSizing:"content-box",height:17,willChange:"transform"},transition:"default",type:"button"},f.createElement(GA,null))),f.createElement(J,{display:"flex",justifyContent:"center",style:{flexGrow:1}},P&&f.createElement($e,{color:"modalText",size:"18",textAlign:"center",weight:"heavy"},P)),f.createElement(ou,{onClose:t})),f.createElement(J,{display:"flex",flexDirection:"column",style:{minHeight:p?396:432}},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"6",height:"full",justifyContent:"center",marginX:"8"},E)))))}var noe="_1am14410";function ioe({wallet:t}){const{connect:e,connector:r,iconBackground:n,iconUrl:i,id:a,mobile:o,name:s,onConnecting:l,ready:u,shortName:c}=t,d=o==null?void 0:o.getUri,h=VA(i);return f.createElement(J,{as:"button",color:u?"modalText":"modalTextSecondary",disabled:!u,fontFamily:"body",key:a,onClick:Q.exports.useCallback(async()=>{e==null||e();let m=!1;l==null||l(async()=>{if(!m&&(m=!0,d)){const b=await d();if(r.id==="walletConnect"&&tae({mobileUri:b,name:s}),b.startsWith("http")){const w=document.createElement("a");w.href=b,w.target="_blank",w.rel="noreferrer noopener",w.click()}else window.location.href=b}})},[r,e,d,l,s]),ref:h,style:{overflow:"visible",textAlign:"center"},testId:`
wallet - option - $ {
    a
}
`,type:"button",width:"full"},f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},f.createElement(J,{paddingBottom:"8",paddingTop:"10"},f.createElement(jr,{background:n,borderRadius:"13",boxShadow:"walletLogo",height:"60",src:i,width:"60"})),f.createElement(J,{display:"flex",flexDirection:"column",textAlign:"center"},f.createElement($e,{as:"h2",color:t.ready?"modalText":"modalTextSecondary",size:"13",weight:"medium"},f.createElement(J,{as:"span",position:"relative"},c??s,!t.ready&&" (unsupported)")),t.recent&&f.createElement($e,{color:"accentColor",size:"12",weight:"medium"},"Recent"))))}function aoe({onClose:t}){var e;const r="rk_connect_title",n=xm(),{disclaimer:i,learnMoreUrl:a}=Q.exports.useContext(Pu);let o=null,s=null,l=!1,u=null;const[c,d]=Q.exports.useState("CONNECT"),h=J2();switch(c){case"CONNECT":{o="Connect a Wallet",l=!0,s=f.createElement(J,null,f.createElement(J,{background:"profileForeground",className:noe,display:"flex",paddingBottom:"20",paddingTop:"6"},f.createElement(J,{display:"flex",style:{margin:"0 auto"}},n.filter(m=>m.ready).map(m=>f.createElement(J,{key:m.id,paddingX:"20"},f.createElement(J,{width:"60"},f.createElement(ioe,{wallet:m})))))),f.createElement(J,{background:"generalBorder",height:"1",marginBottom:"32",marginTop:"-1"}),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"32",paddingX:"32",style:{textAlign:"center"}},f.createElement(J,{display:"flex",flexDirection:"column",gap:"8",textAlign:"center"},f.createElement($e,{color:"modalText",size:"16",weight:"bold"},"What is a Wallet?"),f.createElement($e,{color:"modalTextSecondary",size:"16"},"A wallet is used to send, receive, store, and display digital assets. It’s also a new way to log in, without needing to create new accounts and passwords on every website."))),f.createElement(J,{paddingTop:"32",paddingX:"20"},f.createElement(J,{display:"flex",gap:"14",justifyContent:"center"},f.createElement(In,{label:"Get a Wallet",onClick:()=>d("GET"),size:"large",type:"secondary"}),f.createElement(In,{href:a,label:"Learn More",size:"large",type:"secondary"}))),i&&f.createElement(J,{marginTop:"28",marginX:"32",textAlign:"center"},f.createElement(i,{Link:nx,Text:ix})));break}case"GET":{o="Get a Wallet",u="CONNECT";const m=(e=n==null?void 0:n.filter(b=>{var w,p;return((w=b.downloadUrls)==null?void 0:w.ios)||((p=b.downloadUrls)==null?void 0:p.android)}))==null?void 0:e.splice(0,3);s=f.createElement(J,null,f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",height:"full",marginBottom:"36",marginTop:"5",paddingTop:"12",width:"full"},m.map((b,w)=>{const{downloadUrls:p,iconBackground:v,iconUrl:x,name:k}=b;return!(p!=null&&p.ios)&&!(p!=null&&p.android)?null:f.createElement(J,{display:"flex",gap:"16",key:b.id,paddingX:"20",width:"full"},f.createElement(J,{style:{minHeight:48,minWidth:48}},f.createElement(jr,{background:v,borderColor:"generalBorder",borderRadius:"10",height:"48",src:x,width:"48"})),f.createElement(J,{display:"flex",flexDirection:"column",width:"full"},f.createElement(J,{alignItems:"center",display:"flex",height:"48"},f.createElement(J,{width:"full"},f.createElement($e,{color:"modalText",size:"18",weight:"bold"},k)),f.createElement(In,{href:h?p==null?void 0:p.ios:p==null?void 0:p.android,label:"GET",size:"small",type:"secondary"})),w<m.length-1&&f.createElement(J,{background:"generalBorderDim",height:"1",marginY:"10",width:"full"})))})),f.createElement(J,{style:{marginBottom:"42px"}}),f.createElement(J,{alignItems:"center",display:"flex",flexDirection:"column",gap:"36",paddingX:"36",style:{textAlign:"center"}},f.createElement(J,{display:"flex",flexDirection:"column",gap:"12",textAlign:"center"},f.createElement($e,{color:"modalText",size:"16",weight:"bold"},"Not what you’re looking for?"),f.createElement($e,{color:"modalTextSecondary",size:"16"},"Select a wallet on the main screen to get started with a different wallet provider."))));break}}return f.createElement(J,{display:"flex",flexDirection:"column",paddingBottom:"36"},f.createElement(J,{background:l?"profileForeground":"modalBackground",display:"flex",flexDirection:"column",paddingBottom:"4",paddingTop:"14"},f.createElement(J,{display:"flex",justifyContent:"center",paddingBottom:"6",paddingX:"20",position:"relative"},u&&f.createElement(J,{display:"flex",position:"absolute",style:{left:0,marginBottom:-20,marginTop:-20}},f.createElement(J,{alignItems:"center",as:"button",className:Lr({active:"shrinkSm",hover:"growLg"}),color:"accentColor",display:"flex",marginLeft:"4",marginTop:"20",onClick:()=>d(u),padding:"16",style:{height:17,willChange:"transform"},transition:"default",type:"button"},f.createElement(GA,null))),f.createElement(J,{marginTop:"4",textAlign:"center",width:"full"},f.createElement($e,{as:"h1",color:"modalText",id:r,size:"20",weight:"bold"},o)),f.createElement(J,{alignItems:"center",display:"flex",height:"32",paddingRight:"14",position:"absolute",right:"0"},f.createElement(J,{style:{marginBottom:-20,marginTop:-20}},f.createElement(ou,{onClose:t}))))),f.createElement(J,{display:"flex",flexDirection:"column"},s))}function ooe({onClose:t}){return Xr()?f.createElement(aoe,{onClose:t}):f.createElement(roe,{onClose:t})}function soe({onClose:t,open:e}){const r="rk_connect_title",n=Y2();return n==="disconnected"?f.createElement(rp,{onClose:t,open:e,titleId:r},f.createElement(np,{bottomSheetOnMobile:!0,padding:"0",wide:!0},f.createElement(ooe,{onClose:t}))):n==="unauthenticated"?f.createElement(rp,{onClose:t,open:e,titleId:r},f.createElement(np,{bottomSheetOnMobile:!0,padding:"0"},f.createElement(Zie,{onClose:t}))):null}function lg(){const[t,e]=Q.exports.useState(!1);return{closeModal:Q.exports.useCallback(()=>e(!1),[]),isModalOpen:t,openModal:Q.exports.useCallback(()=>e(!0),[])}}var wd=Q.exports.createContext({accountModalOpen:!1,chainModalOpen:!1,connectModalOpen:!1});function loe({children:t}){const{closeModal:e,isModalOpen:r,openModal:n}=lg(),{closeModal:i,isModalOpen:a,openModal:o}=lg(),{closeModal:s,isModalOpen:l,openModal:u}=lg(),c=Y2(),{chain:d}=$a(),h=!(d!=null&&d.unsupported);function m({keepConnectModalOpen:w=!1}={}){w||e(),i(),s()}const b=vm()==="unauthenticated";return cn({onConnect:()=>m({keepConnectModalOpen:b}),onDisconnect:()=>m()}),f.createElement(wd.Provider,{value:Q.exports.useMemo(()=>({accountModalOpen:a,chainModalOpen:l,connectModalOpen:r,openAccountModal:h&&c==="connected"?o:void 0,openChainModal:c==="connected"?u:void 0,openConnectModal:c==="disconnected"||c==="unauthenticated"?n:void 0}),[c,h,a,l,r,o,u,n])},t,f.createElement(soe,{onClose:e,open:r}),f.createElement(Sae,{onClose:i,open:a}),f.createElement(Rae,{onClose:s,open:l}))}function uoe(){const{accountModalOpen:t,chainModalOpen:e,connectModalOpen:r}=Q.exports.useContext(wd);return{accountModalOpen:t,chainModalOpen:e,connectModalOpen:r}}function coe(){const{openAccountModal:t}=Q.exports.useContext(wd);return{openAccountModal:t}}function foe(){const{openChainModal:t}=Q.exports.useContext(wd);return{openChainModal:t}}function doe(){const{openConnectModal:t}=Q.exports.useContext(wd);return{openConnectModal:t}}var ug=()=>{};function ax({children:t}){var e,r,n;const i=Lie(),{address:a}=cn(),o=CA(a),s=kA(a),{data:l}=Yp({addressOrName:a}),{chain:u}=$a(),c=wA(),d=(e=vm())!=null?e:void 0,h=u?c[u.id]:void 0,m=(r=h==null?void 0:h.iconUrl)!=null?r:void 0,b=(n=h==null?void 0:h.iconBackground)!=null?n:void 0,w=X2(m),p=Q.exports.useContext(rx),v=SA().some(({status:H})=>H==="pending")&&p,x=l?`
$ {
    UA(parseFloat(l.formatted))
}
$ {
    l.symbol
}
`:void 0,{openConnectModal:k}=doe(),{openChainModal:y}=foe(),{openAccountModal:I}=coe(),{accountModalOpen:N,chainModalOpen:U,connectModalOpen:W}=uoe();return f.createElement(f.Fragment,null,t({account:a?{address:a,balanceDecimals:l==null?void 0:l.decimals,balanceFormatted:l==null?void 0:l.formatted,balanceSymbol:l==null?void 0:l.symbol,displayBalance:x,displayName:s?WA(s):$A(a),ensAvatar:o??void 0,ensName:s??void 0,hasPendingTransactions:v}:void 0,accountModalOpen:N,authenticationStatus:d,chain:u?{hasIcon:Boolean(m),iconBackground:b,iconUrl:w,id:u.id,name:u.name,unsupported:u.unsupported}:void 0,chainModalOpen:U,connectModalOpen:W,mounted:i,openAccountModal:I??ug,openChainModal:y??ug,openConnectModal:k??ug}))}ax.displayName="ConnectButton.Custom";var Rc={accountStatus:"full",chainStatus:{largeScreen:"full",smallScreen:"icon"},label:"Connect Wallet",showBalance:{largeScreen:!0,smallScreen:!1}};function ox({accountStatus:t=Rc.accountStatus,chainStatus:e=Rc.chainStatus,label:r=Rc.label,showBalance:n=Rc.showBalance}){const i=ym(),a=Y2();return f.createElement(ax,null,({account:o,chain:s,mounted:l,openAccountModal:u,openChainModal:c,openConnectModal:d})=>{var h,m,b;const w=l&&a!=="loading",p=(h=s==null?void 0:s.unsupported)!=null?h:!1;return f.createElement(J,{display:"flex",gap:"12",...!w&&{"aria-hidden":!0,style:{opacity:0,pointerEvents:"none",userSelect:"none"}}},w&&o&&a==="connected"?f.createElement(f.Fragment,null,s&&(i.length>1||p)&&f.createElement(J,{alignItems:"center","aria-label":"Chain Selector",as:"button",background:p?"connectButtonBackgroundError":"connectButtonBackground",borderRadius:"connectButton",boxShadow:"connectButton",className:Lr({active:"shrink",hover:"grow"}),color:p?"connectButtonTextError":"connectButtonText",display:ol(e,v=>v==="none"?"none":"flex"),fontFamily:"body",fontWeight:"bold",gap:"6",key:p?"unsupported":"supported",onClick:c,paddingX:"10",paddingY:"8",testId:p?"wrong-network-button":"chain-button",transition:"default",type:"button"},p?f.createElement(J,{alignItems:"center",display:"flex",height:"24",paddingX:"4"},"Wrong network"):f.createElement(J,{alignItems:"center",display:"flex",gap:"6"},s.hasIcon?f.createElement(J,{display:ol(e,v=>v==="full"||v==="icon"?"block":"none"),height:"24",width:"24"},f.createElement(jr,{alt:(m=s.name)!=null?m:"Chain icon",background:s.iconBackground,borderRadius:"full",height:"24",src:s.iconUrl,width:"24"})):null,f.createElement(J,{display:ol(e,v=>v==="icon"&&!s.iconUrl||v==="full"||v==="name"?"block":"none")},(b=s.name)!=null?b:s.id)),f.createElement(N4,null)),!p&&f.createElement(J,{alignItems:"center",as:"button",background:"connectButtonBackground",borderRadius:"connectButton",boxShadow:"connectButton",className:Lr({active:"shrink",hover:"grow"}),color:"connectButtonText",display:"flex",fontFamily:"body",fontWeight:"bold",onClick:u,testId:"account-button",transition:"default",type:"button"},o.displayBalance&&f.createElement(J,{display:ol(n,v=>v?"block":"none"),padding:"8",paddingLeft:"12"},o.displayBalance),f.createElement(J,{background:hie(n)[Xr()?"smallScreen":"largeScreen"]?"connectButtonInnerBackground":"connectButtonBackground",borderColor:"connectButtonBackground",borderRadius:"connectButton",borderStyle:"solid",borderWidth:"2",color:"connectButtonText",fontFamily:"body",fontWeight:"bold",paddingX:"8",paddingY:"6",transition:"default"},f.createElement(J,{alignItems:"center",display:"flex",gap:"6",height:"24"},f.createElement(J,{display:ol(t,v=>v==="full"||v==="avatar"?"block":"none")},f.createElement(xA,{address:o.address,imageUrl:o.ensAvatar,loading:o.hasPendingTransactions,size:24})),f.createElement(J,{alignItems:"center",display:"flex",gap:"6"},f.createElement(J,{display:ol(t,v=>v==="full"||v==="address"?"block":"none")},o.displayName),f.createElement(N4,null)))))):f.createElement(J,{as:"button",background:"accentColor",borderRadius:"connectButton",boxShadow:"connectButton",className:Lr({active:"shrink",hover:"grow"}),color:"accentColorForeground",fontFamily:"body",fontWeight:"bold",height:"40",key:"connect",onClick:d,paddingX:"14",testId:"connect-button",transition:"default",type:"button"},r))})}ox.__defaultProps=Rc;ox.Custom=ax;const hoe=/(imtoken|metamask|rainbow|trust wallet)/i;var y0=new WeakMap,q4=new WeakSet;class nT extends a2{constructor(e){super(e),Lf(this,q4),ze(this,"id","walletConnect"),ze(this,"name","WalletConnect"),ze(this,"ready",!0),Ia(this,y0,{writable:!0,value:void 0}),ze(this,"onAccountsChanged",r=>{r.length===0?this.emit("disconnect"):this.emit("change",{account:xr.getAddress(r[0])})}),ze(this,"onChainChanged",r=>{const n=Xl(r),i=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:i}})}),ze(this,"onDisconnect",()=>{this.emit("disconnect")})}async connect(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{var r,n;let i=e;if(!i){const d=hr().lastUsedChainId;d&&!this.isChainUnsupported(d)&&(i=d)}const a=await this.getProvider({chainId:i,create:!0});a.on("accountsChanged",this.onAccountsChanged),a.on("chainChanged",this.onChainChanged),a.on("disconnect",this.onDisconnect),setTimeout(()=>this.emit("message",{type:"connecting"}),0);const o=await a.enable(),s=xr.getAddress(o[0]),l=await this.getChainId(),u=this.isChainUnsupported(l),c=((r=a.connector)===null||r===void 0||(n=r.peerMeta)===null||n===void 0?void 0:n.name)??"";return hoe.test(c)&&(this.switchChain=To(this,q4,poe)),{account:s,chain:{id:l,unsupported:u},provider:new xs(a)}}catch(i){throw/user closed modal/i.test(i.message)?new ni(i):i}}async disconnect(){const e=await this.getProvider();await e.disconnect(),e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),typeof localStorage<"u"&&localStorage.removeItem("walletconnect")}async getAccount(){const r=(await this.getProvider()).accounts;return xr.getAddress(r[0])}async getChainId(){const e=await this.getProvider();return Xl(e.chainId)}async getProvider(){let{chainId:e,create:r}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!Rn(this,y0)||e||r){var n,i;const a=(n=this.options)!==null&&n!==void 0&&n.infuraId?{}:this.chains.reduce((s,l)=>({...s,[l.id]:l.rpcUrls.default}),{}),o=(await or(()=>import("./assets/index-7a7a8e94.js"),["assets/index-7a7a8e94.js","assets/hooks.module-310355bc.js"])).default;ti(this,y0,new o({...this.options,chainId:e,rpc:{...a,...(i=this.options)===null||i===void 0?void 0:i.rpc}}))}return Rn(this,y0)}async getSigner(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[r,n]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]);return new xs(r,e).getSigner(n)}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}}async function poe(t){const e=await this.getProvider(),r=xr.hexValue(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(n=>n.id===t)??{id:t,name:`
Chain $ {
    r
}
`,network:`
$ {
    r
}
`,rpcUrls:{default:""}}}catch(n){const i=typeof n=="string"?n:n==null?void 0:n.message;throw/user rejected request/i.test(i)?new ni(n):new i2(n)}}var b0=new WeakMap,vc=new WeakMap,cg=new WeakSet;class moe extends a2{constructor(e){let{chains:r,options:n}=e;super({chains:r,options:{reloadOnDisconnect:!1,...n}}),Lf(this,cg),ze(this,"id","coinbaseWallet"),ze(this,"name","Coinbase Wallet"),ze(this,"ready",!0),Ia(this,b0,{writable:!0,value:void 0}),Ia(this,vc,{writable:!0,value:void 0}),ze(this,"onAccountsChanged",i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:xr.getAddress(i[0])})}),ze(this,"onChainChanged",i=>{const a=Xl(i),o=this.isChainUnsupported(a);this.emit("change",{chain:{id:a,unsupported:o}})}),ze(this,"onDisconnect",()=>{this.emit("disconnect")})}async connect(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const r=await this.getProvider();r.on("accountsChanged",this.onAccountsChanged),r.on("chainChanged",this.onChainChanged),r.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await r.enable(),i=xr.getAddress(n[0]);let a=await this.getChainId(),o=this.isChainUnsupported(a);return e&&a!==e&&(a=(await this.switchChain(e)).id,o=this.isChainUnsupported(a)),{account:i,chain:{id:a,unsupported:o},provider:new xs(r)}}catch(r){throw/(user closed modal|accounts received is empty)/i.test(r.message)?new ni(r):r}}async disconnect(){if(!Rn(this,vc))return;const e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){const r=await(await this.getProvider()).request({method:"eth_accounts"});return xr.getAddress(r[0])}async getChainId(){const e=await this.getProvider();return Xl(e.chainId)}async getProvider(){if(!Rn(this,vc)){var e;let r=(await or(()=>import("./assets/index-4ad9e2df.js").then(s=>s.i),["assets/index-4ad9e2df.js","assets/hooks.module-310355bc.js"])).default;typeof r!="function"&&typeof r.default=="function"&&(r=r.default),ti(this,b0,new r(this.options));const n=(e=Rn(this,b0).walletExtension)===null||e===void 0?void 0:e.getChainId(),i=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],a=this.options.chainId||(i==null?void 0:i.id),o=this.options.jsonRpcUrl||(i==null?void 0:i.rpcUrls.default);ti(this,vc,Rn(this,b0).makeWeb3Provider(o,a))}return Rn(this,vc)}async getSigner(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[r,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new xs(r,e).getSigner(n)}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){const r=await this.getProvider(),n=xr.hexValue(e);try{return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(i=>i.id===e)??{id:e,name:`
Chain $ {
    n
}
`,network:`
$ {
    n
}
`,rpcUrls:{default:""}}}catch(i){const a=this.chains.find(o=>o.id===e);if(!a)throw new r2({chainId:e,connectorId:this.id});if(i.code===4902)try{return await r.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[a.rpcUrls.public??a.rpcUrls.default],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),a}catch(o){throw To(this,cg,K4).call(this,o)?new ni(o):new P9}throw To(this,cg,K4).call(this,i)?new ni(i):new i2(i)}}async watchAsset(e){let{address:r,decimals:n=18,image:i,symbol:a}=e;return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:r,decimals:n,image:i,symbol:a}}})}}function K4(t){return/(user rejected)/i.test(t.message)}var fg=new WeakMap,dg=new WeakMap,uy=new WeakSet,hg=new WeakSet;class goe extends Zl{constructor(){let{chains:e,options:r}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={name:"MetaMask",shimDisconnect:!0,shimChainChangedDisconnect:!0,...r};super({chains:e,options:n}),Lf(this,hg),Lf(this,uy),ze(this,"id","metaMask"),ze(this,"ready",typeof window<"u"&&!!To(this,hg,V4).call(this,window.ethereum)),Ia(this,fg,{writable:!0,value:void 0}),Ia(this,dg,{writable:!0,value:void 0}),ti(this,dg,n.UNSTABLE_shimOnConnectSelectAccount)}async connect(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{var r,n,i,a;const o=await this.getProvider();if(!o)throw new Xn;o.on&&(o.on("accountsChanged",this.onAccountsChanged),o.on("chainChanged",this.onChainChanged),o.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"}),Rn(this,dg)&&(r=this.options)!==null&&r!==void 0&&r.shimDisconnect&&!((n=hr().storage)!==null&&n!==void 0&&n.getItem(this.shimDisconnectKey))&&(await o.request({method:"eth_accounts"}).catch(()=>[]))[0]&&await o.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});const s=await this.getAccount();let l=await this.getChainId(),u=this.isChainUnsupported(l);return e&&l!==e&&(l=(await this.switchChain(e)).id,u=this.isChainUnsupported(l)),(i=this.options)!==null&&i!==void 0&&i.shimDisconnect&&((a=hr().storage)===null||a===void 0||a.setItem(this.shimDisconnectKey,!0)),{account:s,chain:{id:l,unsupported:u},provider:o}}catch(o){throw this.isUserRejectedRequestError(o)?new ni(o):o.code===-32002?new M9(o):o}}async getProvider(){return typeof window<"u"&&ti(this,fg,To(this,hg,V4).call(this,window.ethereum)),Rn(this,fg)}}function G4(t){if(!!(t!=null&&t.isMetaMask)&&!(t.isBraveWallet&&!t._events&&!t._state)&&!t.isAvalanche&&!t.isKuCoinWallet&&!t.isPortal&&!t.isTokenPocket&&!t.isTokenary)return t}function V4(t){return t!=null&&t.providers?t.providers.find(To(this,uy,G4)):To(this,uy,G4).call(this,t)}function voe(t){return Object.fromEntries(Object.entries(t).filter(([e,r])=>r!==void 0))}var yoe=t=>()=>{let e=-1;const r=[],n=[],i=[],a=[];return t.forEach(({groupName:s,wallets:l},u)=>{l.forEach(c=>{if(e++,c!=null&&c.iconAccent&&!Bae(c==null?void 0:c.iconAccent))throw new Error(`
Property`iconAccent\` is not a hex value for wallet: ${c.name}`);
const d = {
    ...c,
    groupIndex: u,
    groupName: s,
    index: e
};
typeof c.hidden == "function" ? i.push(d) : n.push(d)
})
}), [...n, ...i].forEach(({
    createConnector: s,
    groupIndex: l,
    groupName: u,
    hidden: c,
    index: d,
    ...h
}) => {
    if (typeof c == "function" && c({
            wallets: [...a.map(({
                connector: x,
                id: k,
                installed: y
            }) => ({
                connector: x,
                id: k,
                installed: y
            }))]
        })) return;
    const {
        connector: m,
        ...b
    } = voe(s());
    let w;
    if (h.id === "walletConnect" && b.qrCode && !Xr()) {
        const {
            chains: v,
            options: x
        } = m;
        w = new nT({
            chains: v,
            options: {
                ...x,
                qrcode: !0
            }
        }), r.push(w)
    }
    const p = {
        connector: m,
        groupIndex: l,
        groupName: u,
        index: d,
        walletConnectModalConnector: w,
        ...h,
        ...b
    };
    a.push(p), r.includes(m) || (r.push(m), m._wallets = []), m._wallets.push(p)
}), r
}, boe = ({
    chains: t,
    shimDisconnect: e
}) => {
    var r;
    return {
        id: "brave",
        name: "Brave Wallet",
        iconUrl: async () => (await or(() => import("./assets/braveWallet-VWIUQB2U-77ab02b2.js"), [])).default,
        iconBackground: "#fff",
        installed: typeof window < "u" && ((r = window.ethereum) == null ? void 0 : r.isBraveWallet) === !0,
        downloadUrls: {},
        createConnector: () => ({
            connector: new Zl({
                chains: t,
                options: {
                    shimDisconnect: e
                }
            })
        })
    }
}, xoe = ({
    appName: t,
    chains: e
}) => {
    var r;
    const n = typeof window < "u" && ((r = window.ethereum) == null ? void 0 : r.isCoinbaseWallet) === !0;
    return {
        id: "coinbase",
        name: "Coinbase Wallet",
        shortName: "Coinbase",
        iconUrl: async () => (await or(() => import("./assets/coinbaseWallet-VVDQG4AO-f6c629ff.js"), [])).default,
        iconAccent: "#2c5ff6",
        iconBackground: "#2c5ff6",
        installed: n || void 0,
        downloadUrls: {
            browserExtension: "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
            android: "https://play.google.com/store/apps/details?id=org.toshi",
            ios: "https://apps.apple.com/us/app/coinbase-wallet-store-crypto/id1278383455",
            qrCode: "https://coinbase-wallet.onelink.me/q5Sx/fdb9b250"
        },
        createConnector: () => {
            const i = J2(),
                a = new moe({
                    chains: e,
                    options: {
                        appName: t,
                        headlessMode: !0
                    }
                });
            return {
                connector: a,
                ...i ? {} : {
                    qrCode: {
                        getUri: async () => (await a.getProvider()).qrUrl,
                        instructions: {
                            learnMoreUrl: "https://www.coinbase.com/learn/tips-and-tutorials/how-to-set-up-a-crypto-wallet",
                            steps: [{
                                description: "We recommend putting Coinbase Wallet on your home screen for quicker access.",
                                step: "install",
                                title: "Open the Coinbase Wallet app"
                            }, {
                                description: "You can easily backup your wallet using the cloud backup feature.",
                                step: "create",
                                title: "Create or Import a Wallet"
                            }, {
                                description: "After you scan, a connection prompt will appear for you to connect your wallet.",
                                step: "scan",
                                title: "Tap the scan button"
                            }]
                        }
                    },
                    extension: {
                        instructions: {
                            steps: [{
                                description: "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
                                step: "install",
                                title: "Install the Coinbase Wallet extension"
                            }, {
                                description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
                                step: "create",
                                title: "Create or Import a Wallet"
                            }, {
                                description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
                                step: "refresh",
                                title: "Refresh your browser"
                            }]
                        }
                    }
                }
            }
        }
    }
}, woe = ({
    chains: t,
    shimDisconnect: e
}) => ({
    id: "injected",
    name: "Injected Wallet",
    iconUrl: async () => (await or(() => import("./assets/injectedWallet-FYEFRY76-ae13e4da.js"), [])).default,
    iconBackground: "#fff",
    hidden: ({
        wallets: r
    }) => r.some(n => n.installed && (n.connector instanceof Zl || n.id === "coinbase")),
    createConnector: () => ({
        connector: new Zl({
            chains: t,
            options: {
                shimDisconnect: e
            }
        })
    })
}), iT = new Map;

function Eoe(t) {
    const e = new nT(t);
    return iT.set(JSON.stringify(t), e), e
}

function sx({
    chains: t,
    qrcode: e = !1
}) {
    const r = {
            chains: t,
            options: {
                qrcode: e
            }
        },
        n = JSON.stringify(r),
        i = iT.get(n);
    return i ?? Eoe(r)
}

function Coe(t) {
    return !(!Boolean(t.isMetaMask) || t.isBraveWallet && !t._events && !t._state || t.isTokenPocket || t.isTokenary)
}
var koe = ({
    chains: t,
    shimDisconnect: e
}) => {
    const r = typeof window < "u" && typeof window.ethereum < "u" && Coe(window.ethereum),
        n = !r;
    return {
        id: "metaMask",
        name: "MetaMask",
        iconUrl: async () => (await or(() => import("./assets/metaMaskWallet-F3BDZH5W-ac2ea8b3.js"), [])).default,
        iconAccent: "#f6851a",
        iconBackground: "#fff",
        installed: n ? void 0 : r,
        downloadUrls: {
            browserExtension: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",
            android: "https://play.google.com/store/apps/details?id=io.metamask",
            ios: "https://apps.apple.com/us/app/metamask/id1438144202",
            qrCode: "https://metamask.io/download/"
        },
        createConnector: () => {
            const i = n ? sx({
                    chains: t
                }) : new goe({
                    chains: t,
                    options: {
                        shimDisconnect: e
                    }
                }),
                a = async () => {
                    const {
                        uri: o
                    } = (await i.getProvider()).connector;
                    return Q2() ? o : `https://metamask.app.link/wc?uri=${encodeURIComponent(o)}`
                };
            return {
                connector: i,
                mobile: {
                    getUri: n ? a : void 0
                },
                qrCode: n ? {
                    getUri: a,
                    instructions: {
                        learnMoreUrl: "https://metamask.io/faqs/",
                        steps: [{
                            description: "We recommend putting MetaMask on your home screen for quicker access.",
                            step: "install",
                            title: "Open the MetaMask app"
                        }, {
                            description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
                            step: "create",
                            title: "Create or Import a Wallet"
                        }, {
                            description: "After you scan, a connection prompt will appear for you to connect your wallet.",
                            step: "scan",
                            title: "Tap the scan button"
                        }]
                    }
                } : void 0,
                extension: {
                    learnMoreUrl: "https://metamask.io/faqs/",
                    instructions: {
                        steps: [{
                            description: "We recommend pinning MetaMask to your taskbar for quicker access to your wallet.",
                            step: "install",
                            title: "Install the MetaMask extension"
                        }, {
                            description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
                            step: "create",
                            title: "Create or Import a Wallet"
                        }, {
                            description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
                            step: "refresh",
                            title: "Refresh your browser"
                        }]
                    }
                }
            }
        }
    }
};

function _oe(t) {
    return !!Boolean(t.isRainbow)
}
var Aoe = ({
        chains: t,
        shimDisconnect: e
    }) => {
        const n = !(typeof window < "u" && typeof window.ethereum < "u" && _oe(window.ethereum));
        return {
            id: "rainbow",
            name: "Rainbow",
            iconUrl: async () => (await or(() => import("./assets/rainbowWallet-KSMGN6MJ-80e56a37.js"), [])).default,
            iconBackground: "#0c2f78",
            downloadUrls: {
                android: "https://play.google.com/store/apps/details?id=me.rainbow",
                ios: "https://apps.apple.com/us/app/rainbow-ethereum-wallet/id1457119021",
                qrCode: "https://rainbow.download"
            },
            createConnector: () => {
                const i = n ? sx({
                        chains: t
                    }) : new Zl({
                        chains: t,
                        options: {
                            shimDisconnect: e
                        }
                    }),
                    a = async () => {
                        const {
                            uri: o
                        } = (await i.getProvider()).connector;
                        return Q2() ? o : `https://rnbwapp.com/wc?uri=${encodeURIComponent(o)}`
                    };
                return {
                    connector: i,
                    mobile: {
                        getUri: n ? a : void 0
                    },
                    qrCode: n ? {
                        getUri: a,
                        instructions: {
                            learnMoreUrl: "https://learn.rainbow.me/connect-your-wallet-to-a-website-or-app",
                            steps: [{
                                description: "We recommend putting Rainbow on your home screen for faster access to your wallet.",
                                step: "install",
                                title: "Open the Rainbow app"
                            }, {
                                description: "You can easily backup your wallet using our backup feature on your phone.",
                                step: "create",
                                title: "Create or Import a Wallet"
                            }, {
                                description: "After you scan, a connection prompt will appear for you to connect your wallet.",
                                step: "scan",
                                title: "Tap the scan button"
                            }]
                        }
                    } : void 0
                }
            }
        }
    },
    Toe = ({
        chains: t
    }) => ({
        id: "walletConnect",
        name: "WalletConnect",
        iconUrl: async () => (await or(() => import("./assets/walletConnectWallet-GTSESN7Q-c1d5c644.js"), [])).default,
        iconBackground: "#3b99fc",
        createConnector: () => {
            const e = J2(),
                r = sx({
                    chains: t,
                    qrcode: e
                }),
                n = async () => (await r.getProvider()).connector.uri;
            return {
                connector: r,
                ...e ? {} : {
                    mobile: {
                        getUri: n
                    },
                    qrCode: {
                        getUri: n
                    }
                }
            }
        }
    }),
    Soe = ({
        appName: t,
        chains: e
    }) => {
        const r = [{
            groupName: "Popular",
            wallets: [woe({
                chains: e
            }), Aoe({
                chains: e
            }), xoe({
                appName: t,
                chains: e
            }), koe({
                chains: e
            }), Toe({
                chains: e
            }), boe({
                chains: e
            })]
        }];
        return {
            connectors: yoe(r),
            wallets: r
        }
    };
const Ooe = !!{}.NEXT_PUBLIC_LOCAL_CHAIN,
    Poe = {}.NEXT_PUBLIC_VERCEL_ENV === "preview",
    Roe = Poe ? {}.NEXT_PUBLIC_VERCEL_URL : "nft.bueno.art",
    Noe = "__BUENO_SNAPSHOT__";
var aT = {},
    Ed = {},
    lx = {},
    hi = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FLOAT_COMPRESSION_PRECISION = 1e3, t.DATE_LOW_PRECISION = 1e5, t.FLOAT_FULL_PRECISION_DELIMITER = ",", t.FLOAT_REDUCED_PRECISION_DELIMITER = ".", t.INTEGER_TOKEN = "¢", t.FLOAT_TOKEN = "£", t.STRING_TOKEN = "¨", t.DATE_TOKEN = "ø", t.LP_DATE_TOKEN = "±", t.UNREFERENCED_INTEGER_TOKEN = "¤", t.UNREFERENCED_FLOAT_TOKEN = "¥", t.UNREFERENCED_STRING_TOKEN = "´", t.UNREFERENCED_DATE_TOKEN = "¿", t.UNREFERENCED_LP_DATE_TOKEN = "ÿ", t.REF_INTEGER_TOKEN = "º", t.REF_FLOAT_TOKEN = "Ý", t.REF_STRING_TOKEN = "ß", t.REF_DATE_TOKEN = "×", t.REF_LP_DATE_TOKEN = "ü", t.NULL_TOKEN = "§", t.UNDEFINED_TOKEN = "µ", t.BOOLEAN_TRUE_TOKEN = "»", t.BOOLEAN_FALSE_TOKEN = "«", t.ESCAPE_CHARACTER = "\\", t.ESCAPED_STRING_TOKEN = "" + t.ESCAPE_CHARACTER + t.STRING_TOKEN, t.ESCAPED_UNREFERENCED_STRING_TOKEN = "" + t.ESCAPE_CHARACTER + t.UNREFERENCED_STRING_TOKEN, t.REGEX_ESCAPE_CHARACTER = new RegExp(t.ESCAPE_CHARACTER.replace("\\", "\\\\"), "g"), t.REGEX_ESCAPED_ESCAPE_CHARACTER = new RegExp(t.ESCAPE_CHARACTER.replace("\\", "\\\\") + t.ESCAPE_CHARACTER.replace("\\", "\\\\"), "g"), t.REGEX_STRING_TOKEN = new RegExp(t.STRING_TOKEN, "g"), t.REGEX_ESCAPED_STRING_TOKEN = new RegExp(t.ESCAPE_CHARACTER + t.ESCAPED_STRING_TOKEN, "g"), t.REGEX_UNREFERENCED_STRING_TOKEN = new RegExp(t.UNREFERENCED_STRING_TOKEN, "g"), t.REGEX_UNREFERENCED_ESCAPED_STRING_TOKEN = new RegExp(t.ESCAPE_CHARACTER + t.ESCAPED_UNREFERENCED_STRING_TOKEN, "g"), t.DATE_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z/, t.OBJECT_START_TOKEN = "{", t.OBJECT_END_TOKEN = "}", t.TEMPLATE_OBJECT_START = "¦", t.TEMPLATE_OBJECT_END = "‡", t.TEMPLATE_OBJECT_FINAL = "—", t.ARRAY_START_TOKEN = "|", t.ARRAY_END_TOKEN = "÷", t.ARRAY_REPEAT_TOKEN = "þ", t.ARRAY_REPEAT_MANY_TOKEN = "^", t.ARRAY_REPEAT_COUNT_THRESHOLD = 4, t.REFERENCE_HEADER_LENGTH = 1, t.DELIMITING_TOKENS_THRESHOLD = 122, t.STRING_IDENT_PREFIX = "$", t.INTEGER_SMALL_EXCLUSIVE_BOUND_LOWER = -10, t.INTEGER_SMALL_EXCLUSIVE_BOUND_UPPER = 10, t.INTEGER_SMALL_TOKEN_EXCLUSIVE_BOUND_LOWER = 191, t.INTEGER_SMALL_TOKEN_EXCLUSIVE_BOUND_UPPER = 211, t.INTEGER_SMALL_TOKEN_OFFSET = -201, t.INTEGER_SMALL_TOKEN_ELEMENT_OFFSET = 9, t.INTEGER_SMALL_TOKENS = ["À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò"]
})(hi);
Object.defineProperty(lx, "__esModule", {
    value: !0
});
var x0 = hi;

function Moe(t, e, r, n, i, a) {
    var o = typeof r;
    o === "number" ? t.number(t, e, r, n, i, a) : o === "string" ? t.string(t, e, r, n, i, a) : o === "boolean" ? i.write(r ? x0.BOOLEAN_TRUE_TOKEN : x0.BOOLEAN_FALSE_TOKEN) : r === null ? i.write(x0.NULL_TOKEN) : r === void 0 ? i.write(x0.UNDEFINED_TOKEN) : Array.isArray(r) ? t.array(t, e, r, n, i, a) : r instanceof Date ? t.date(t, e, r.getTime(), n, i, a) : t.object(t, e, r, n, i, a)
}
lx.compressAny = Moe;
var ux = {},
    su = {},
    Ioe = xt && xt.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, r) {
            e.__proto__ = r
        } || function(e, r) {
            for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
        };
        return function(e, r) {
            t(e, r);

            function n() {
                this.constructor = e
            }
            e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n)
        }
    }();
Object.defineProperty(su, "__esModule", {
    value: !0
});
var oT = function() {
    function t() {}
    return t
}();
su.ZipsonWriter = oT;
var Loe = function(t) {
    Ioe(e, t);

    function e() {
        var r = t !== null && t.apply(this, arguments) || this;
        return r.value = "", r
    }
    return e.prototype.write = function(r) {
        this.value += r
    }, e.prototype.end = function() {}, e
}(oT);
su.ZipsonStringWriter = Loe;
var pa = {};
Object.defineProperty(pa, "__esModule", {
    value: !0
});
var ls = hi,
    joe = 2147483648,
    Foe = -2147483649,
    Doe = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function Q0(t) {
    if (t === 0) return "0";
    for (var e = "", r = t < 0 ? -t : t, n = 0, i; r > 0;) r = r / 62, i = r % 1, n = i * 62 + .1 << 0, r -= i, e = Doe[n] + e;
    return e = t < 0 ? "-" + e : e, e
}
pa.compressInteger = Q0;

function J0(t) {
    var e = 0;
    if (t[0] === "0") return e;
    for (var r = t[0] === "-", n = 1, i = r ? 1 : 0, a = t.length - 1; a >= i; a--) {
        var o = t.charCodeAt(a),
            s = o - 48;
        o >= 97 ? s -= 13 : o >= 65 && (s -= 7), e += s * n, n *= 62
    }
    return r ? -e : e
}
pa.decompressInteger = J0;

function Boe(t, e) {
    if (e === void 0 && (e = !1), e) {
        var r = t.toString().split("."),
            n = r[0],
            i = r[1],
            a = n === "-0" ? "-" : "";
        return "" + a + Q0(parseInt(n)) + ls.FLOAT_FULL_PRECISION_DELIMITER + i
    } else {
        var n = t >= joe ? Math.floor(t) : t <= Foe ? Math.ceil(t) : t << 0,
            i = Math.round(ls.FLOAT_COMPRESSION_PRECISION * (t % 1));
        return "" + Q0(n) + ls.FLOAT_REDUCED_PRECISION_DELIMITER + Q0(i)
    }
}
pa.compressFloat = Boe;

function Uoe(t) {
    if (t.indexOf(ls.FLOAT_FULL_PRECISION_DELIMITER) > -1) {
        var e = t.split(ls.FLOAT_FULL_PRECISION_DELIMITER),
            r = e[0],
            n = e[1],
            i = r === "-0" ? -1 : 1,
            a = J0(r);
        return i * parseFloat(a + "." + n)
    } else {
        var o = t.split(ls.FLOAT_REDUCED_PRECISION_DELIMITER),
            r = o[0],
            n = o[1],
            a = J0(r),
            s = J0(n);
        return a + s / ls.FLOAT_COMPRESSION_PRECISION
    }
}
pa.decompressFloat = Uoe;
Object.defineProperty(ux, "__esModule", {
    value: !0
});
var yc = hi,
    $oe = su,
    Y4 = pa;

function Woe(t, e, r, n, i, a) {
    e.arrayLevel++, e.arrayLevel > e.arrayItemWriters.length && e.arrayItemWriters.push(new $oe.ZipsonStringWriter);
    var o = e.arrayItemWriters[e.arrayLevel - 1],
        s = e.arrayItemWriters[e.arrayLevel - 2] || i;
    s.write(yc.ARRAY_START_TOKEN);
    var l = "",
        u = 0,
        c = 0,
        d = new t.template.Object(r[0], r[1]);
    d.isTemplating && d.compressTemplate(t, e, n, s, a);
    for (var h = 0; h < r.length; h++) {
        var m = r[h];
        o.value = "", m === void 0 && (m = null), h > 1 && d.isTemplating && d.isNextTemplateable(r[h], s), d.isTemplating ? d.compressTemplateValues(t, e, n, o, a, r[h]) : t.any(t, e, m, n, o, a), o.value === l ? (u++, u >= yc.ARRAY_REPEAT_COUNT_THRESHOLD ? (c === 0 && s.write(yc.ARRAY_REPEAT_MANY_TOKEN), c++) : s.write(yc.ARRAY_REPEAT_TOKEN)) : (u = 0, c > 0 && (s.write(Y4.compressInteger(c)), c = 0), s.write(o.value), l = o.value)
    }
    c > 0 && s.write(Y4.compressInteger(c)), d.isTemplating && d.end(s), s.write(yc.ARRAY_END_TOKEN), e.arrayLevel--
}
ux.compressArray = Woe;
var cx = {};
Object.defineProperty(cx, "__esModule", {
    value: !0
});
var Nr = hi,
    zoe = pa;

function Hoe(t, e, r, n, i, a) {
    var o, s = Nr.STRING_IDENT_PREFIX + r;
    if (a.detectUtcTimestamps && r[r.length - 1] === "Z" && r.match(Nr.DATE_REGEX)) {
        var l = Date.parse(r);
        t.date(t, e, l, n, i, a)
    } else if ((o = n.stringMap[s]) !== void 0) i.write("" + Nr.REF_STRING_TOKEN + o);
    else {
        var u = zoe.compressInteger(n.stringCount),
            c = "" + Nr.STRING_TOKEN + r.replace(Nr.REGEX_ESCAPE_CHARACTER, Nr.ESCAPE_CHARACTER + Nr.ESCAPE_CHARACTER).replace(Nr.REGEX_STRING_TOKEN, Nr.ESCAPED_STRING_TOKEN) + Nr.STRING_TOKEN;
        u.length + Nr.REFERENCE_HEADER_LENGTH + 1 < c.length ? (n.stringMap[s] = u, n.stringCount++, i.write(c)) : i.write("" + Nr.UNREFERENCED_STRING_TOKEN + r.replace(Nr.REGEX_ESCAPE_CHARACTER, Nr.ESCAPE_CHARACTER + Nr.ESCAPE_CHARACTER).replace(Nr.REGEX_UNREFERENCED_STRING_TOKEN, Nr.ESCAPED_UNREFERENCED_STRING_TOKEN) + Nr.UNREFERENCED_STRING_TOKEN)
    }
}
cx.compressString = Hoe;
var fx = {};
Object.defineProperty(fx, "__esModule", {
    value: !0
});
var Gn = hi,
    w0 = pa;

function qoe(t, e, r, n, i, a) {
    var o;
    if (r % 1 === 0)
        if (r < Gn.INTEGER_SMALL_EXCLUSIVE_BOUND_UPPER && r > Gn.INTEGER_SMALL_EXCLUSIVE_BOUND_LOWER) i.write(Gn.INTEGER_SMALL_TOKENS[r + Gn.INTEGER_SMALL_TOKEN_ELEMENT_OFFSET]);
        else if ((o = n.integerMap[r]) !== void 0) i.write("" + Gn.REF_INTEGER_TOKEN + o);
    else {
        var s = w0.compressInteger(n.integerCount),
            l = w0.compressInteger(r),
            u = "" + Gn.INTEGER_TOKEN + l;
        s.length + Gn.REFERENCE_HEADER_LENGTH < u.length ? (n.integerMap[r] = s, n.integerCount++, i.write(u)) : i.write("" + Gn.UNREFERENCED_INTEGER_TOKEN + l)
    } else {
        var c = w0.compressFloat(r, a.fullPrecisionFloats);
        if ((o = n.floatMap[c]) !== void 0) i.write("" + Gn.REF_FLOAT_TOKEN + o);
        else {
            var s = w0.compressInteger(n.floatCount),
                u = "" + Gn.FLOAT_TOKEN + c;
            s.length + Gn.REFERENCE_HEADER_LENGTH < u.length ? (n.floatMap[c] = s, n.floatCount++, i.write(u)) : i.write("" + Gn.UNREFERENCED_FLOAT_TOKEN + c)
        }
    }
}
fx.compressNumber = qoe;
var dx = {};
Object.defineProperty(dx, "__esModule", {
    value: !0
});
var Q4 = hi;

function Koe(t, e, r, n, i, a) {
    i.write(Q4.OBJECT_START_TOKEN);
    var o = Object.keys(r),
        s = new t.template.Object(r[o[0]], r[o[1]]);
    s.isTemplating && s.compressTemplate(t, e, n, i, a);
    for (var l = 0; l < o.length; l++)
        if (l > 1 && s.isTemplating && s.isNextTemplateable(r[o[l]], i), s.isTemplating) t.string(t, e, o[l], n, i, a), s.compressTemplateValues(t, e, n, i, a, r[o[l]]);
        else {
            var u = o[l],
                c = r[u];
            c !== void 0 && (t.string(t, e, u, n, i, a), t.any(t, e, c, n, i, a))
        } s.isTemplating && s.end(i), i.write(Q4.OBJECT_END_TOKEN)
}
dx.compressObject = Koe;
var hx = {};
Object.defineProperty(hx, "__esModule", {
    value: !0
});
var ya = hi,
    E0 = pa;

function Goe(t, e, r, n, i, a) {
    var o, s = r / ya.DATE_LOW_PRECISION,
        l = s % 1 === 0;
    if (l)
        if ((o = n.lpDateMap[s]) !== void 0) i.write("" + ya.REF_LP_DATE_TOKEN + o);
        else {
            var u = E0.compressInteger(n.lpDateCount),
                c = E0.compressInteger(s),
                d = "" + ya.LP_DATE_TOKEN + c;
            u.length + ya.REFERENCE_HEADER_LENGTH < d.length ? (n.lpDateMap[s] = u, n.lpDateCount++, i.write(d)) : i.write("" + ya.UNREFERENCED_LP_DATE_TOKEN + c)
        }
    else if ((o = n.dateMap[r]) !== void 0) i.write("" + ya.REF_DATE_TOKEN + o);
    else {
        var u = E0.compressInteger(n.dateCount),
            c = E0.compressInteger(r),
            d = "" + ya.DATE_TOKEN + c;
        u.length + ya.REFERENCE_HEADER_LENGTH < d.length ? (n.dateMap[r] = u, n.dateCount++, i.write(d)) : i.write("" + ya.UNREFERENCED_DATE_TOKEN + c)
    }
}
hx.compressDate = Goe;
var px = {},
    mx = {};
Object.defineProperty(mx, "__esModule", {
    value: !0
});

function Voe(t) {
    var e = typeof t;
    return e === "number" || e === "string" || e === "boolean" || t === null || Array.isArray(t) || t instanceof Date ? !1 : t !== void 0
}
mx.isObject = Voe;
Object.defineProperty(px, "__esModule", {
    value: !0
});
var ap = hi,
    Nc = mx,
    Yoe = function() {
        function t(e, r) {
            this.isTemplating = !1, this.struct = [], e != null && r != null && (this.isTemplating = sT(e, r, this.struct))
        }
        return t.prototype.compressTemplate = function(e, r, n, i, a) {
            uT(e, r, n, i, a, this.struct)
        }, t.prototype.compressTemplateValues = function(e, r, n, i, a, o) {
            cT(e, r, n, i, a, this.struct, o)
        }, t.prototype.isNextTemplateable = function(e, r) {
            this.isTemplating = lT(this.struct, e), this.isTemplating || r.write(ap.TEMPLATE_OBJECT_FINAL)
        }, t.prototype.end = function(e) {
            e.write(ap.TEMPLATE_OBJECT_FINAL)
        }, t
    }();
px.TemplateObject = Yoe;

function sT(t, e, r, n) {
    if (n === void 0 && (n = 0), n > 6) return !1;
    var i = Object.keys(t),
        a = Object.keys(e);
    if (i.length !== a.length || i.length > 10) return !1;
    i.sort(function(h, m) {
        return h.localeCompare(m)
    }), a.sort(function(h, m) {
        return h.localeCompare(m)
    });
    for (var o = 0; o < i.length; o++) {
        var s = i[o],
            l = a[o];
        if (s !== l) return !1;
        var u = t[s],
            c = e[l];
        if (Nc.isObject(u)) {
            if (!Nc.isObject(c)) return !1;
            var d = [];
            if (r.push([s, d]), !sT(u, c, d, n + 1)) return !1
        } else {
            if (Nc.isObject(c)) return !1;
            r.push([s])
        }
    }
    return n > 0 || Nc.isObject(t)
}

function lT(t, e) {
    if (!e || Object.keys(e).length !== t.length) return !1;
    for (var r = 0; r < t.length; r++) {
        var n = t[r][0],
            i = t[r].length > 1;
        if (e[n] === void 0) return !1;
        if (i) {
            var a = t[r];
            if (a[1], !lT(t[r][1], e[n])) return !1
        } else if (Nc.isObject(e[n])) return !1
    }
    return !0
}

function uT(t, e, r, n, i, a) {
    n.write(ap.TEMPLATE_OBJECT_START);
    for (var o = 0; o < a.length; o++) {
        var s = a[o][0],
            l = a[o].length > 1;
        t.string(t, e, s, r, n, i), l && uT(t, e, r, n, i, a[o][1])
    }
    n.write(ap.TEMPLATE_OBJECT_END)
}

function cT(t, e, r, n, i, a, o) {
    for (var s = 0; s < a.length; s++) {
        var l = a[s][0],
            u = o[l],
            c = a[s].length > 1;
        c ? cT(t, e, r, n, i, a[s][1], u) : t.any(t, e, u, r, n, i)
    }
}
Object.defineProperty(Ed, "__esModule", {
    value: !0
});
var Qoe = lx,
    Joe = ux,
    Xoe = cx,
    Zoe = fx,
    ese = dx,
    tse = hx,
    rse = px,
    J4 = {
        any: Qoe.compressAny,
        array: Joe.compressArray,
        object: ese.compressObject,
        string: Xoe.compressString,
        date: tse.compressDate,
        number: Zoe.compressNumber,
        template: {
            Object: rse.TemplateObject
        }
    };

function nse() {
    return {
        arrayItemWriters: [],
        arrayLevel: 0
    }
}
Ed.makeCompressContext = nse;

function ise() {
    return {
        stringMap: {},
        integerMap: {},
        floatMap: {},
        dateMap: {},
        lpDateMap: {},
        stringCount: 0,
        integerCount: 0,
        floatCount: 0,
        dateCount: 0,
        lpDateCount: 0
    }
}
Ed.makeInvertedIndex = ise;

function ase(t, e, r, n, i) {
    J4.any(J4, t, e, r, n, i)
}
Ed.compress = ase;
var Cd = {},
    Ru = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SKIP_SCALAR = {},
        function(e) {
            e.ARRAY = "ARRAY", e.OBJECT = "OBJECT", e.SCALAR = "SCALAR", e.TEMPLATE_OBJECT = "TEMPLATE_OBJECT", e.TEMPLATE_OBJECT_PROPERTIES = "TEMPLATE_OBJECT_PROPERTIES", e.TEMPLATE_OBJECT_ELEMENTS = "TEMPLATE_OBJECT_ELEMENTS"
        }(t.TargetType || (t.TargetType = {}))
})(Ru);
var gx = {},
    wm = {};
Object.defineProperty(wm, "__esModule", {
    value: !0
});
var nt = hi,
    ose = Ru,
    Tn = pa;

function sse(t, e, r, n) {
    var i = r.index,
        a = r.index + 1,
        o;
    if (t === nt.STRING_TOKEN && (o = nt.STRING_TOKEN) || t === nt.UNREFERENCED_STRING_TOKEN && (o = nt.UNREFERENCED_STRING_TOKEN)) {
        for (var s = !0; s && a < e.length;) {
            a = e.indexOf(o, a);
            var l = 1;
            for (s = !1; e[a - l] === nt.ESCAPE_CHARACTER;) s = l % 2 === 1, l++;
            a++
        }
        a <= i && (a = e.length)
    } else
        for (; !(e.charCodeAt(a) > nt.DELIMITING_TOKENS_THRESHOLD) && a < e.length;) a++;
    if (!r.drain && a === e.length) return ose.SKIP_SCALAR;
    r.index = a - 1;
    var u = t.charCodeAt(0);
    if (u > nt.INTEGER_SMALL_TOKEN_EXCLUSIVE_BOUND_LOWER && u < nt.INTEGER_SMALL_TOKEN_EXCLUSIVE_BOUND_UPPER) return u + nt.INTEGER_SMALL_TOKEN_OFFSET;
    if (t === nt.ARRAY_REPEAT_MANY_TOKEN) return Tn.decompressInteger(e.substring(i + 1, a));
    if (t === nt.REF_STRING_TOKEN) return n.strings[Tn.decompressInteger(e.substring(i + 1, a))];
    if (t === nt.REF_INTEGER_TOKEN) return n.integers[Tn.decompressInteger(e.substring(i + 1, a))];
    if (t === nt.REF_FLOAT_TOKEN) return n.floats[Tn.decompressInteger(e.substring(i + 1, a))];
    if (t === nt.REF_DATE_TOKEN) return n.dates[Tn.decompressInteger(e.substring(i + 1, a))];
    if (t === nt.REF_LP_DATE_TOKEN) return n.lpDates[Tn.decompressInteger(e.substring(i + 1, a))];
    if (t === nt.STRING_TOKEN) return n.strings[n.strings.length] = e.substring(i + 1, a - 1).replace(nt.REGEX_ESCAPED_ESCAPE_CHARACTER, nt.ESCAPE_CHARACTER).replace(nt.REGEX_ESCAPED_STRING_TOKEN, nt.STRING_TOKEN);
    if (t === nt.INTEGER_TOKEN) return n.integers[n.integers.length] = Tn.decompressInteger(e.substring(i + 1, a));
    if (t === nt.FLOAT_TOKEN) return n.floats[n.floats.length] = Tn.decompressFloat(e.substring(i + 1, a));
    if (t === nt.DATE_TOKEN) return n.dates[n.dates.length] = new Date(Tn.decompressInteger(e.substring(i + 1, a))).toISOString();
    if (t === nt.LP_DATE_TOKEN) return n.lpDates[n.lpDates.length] = new Date(nt.DATE_LOW_PRECISION * Tn.decompressInteger(e.substring(i + 1, a))).toISOString();
    if (t === nt.UNREFERENCED_STRING_TOKEN) return e.substring(i + 1, a - 1).replace(nt.REGEX_ESCAPED_ESCAPE_CHARACTER, nt.ESCAPE_CHARACTER).replace(nt.REGEX_UNREFERENCED_ESCAPED_STRING_TOKEN, nt.UNREFERENCED_STRING_TOKEN);
    if (t === nt.UNREFERENCED_INTEGER_TOKEN) return Tn.decompressInteger(e.substring(i + 1, a));
    if (t === nt.UNREFERENCED_FLOAT_TOKEN) return Tn.decompressFloat(e.substring(i + 1, a));
    if (t === nt.UNREFERENCED_DATE_TOKEN) return new Date(Tn.decompressInteger(e.substring(i + 1, a))).toISOString();
    if (t === nt.UNREFERENCED_LP_DATE_TOKEN) return new Date(nt.DATE_LOW_PRECISION * Tn.decompressInteger(e.substring(i + 1, a))).toISOString();
    if (t === nt.BOOLEAN_TRUE_TOKEN) return !0;
    if (t === nt.BOOLEAN_FALSE_TOKEN) return !1;
    if (t === nt.NULL_TOKEN) return null;
    if (t === nt.UNDEFINED_TOKEN) return;
    throw new Error("Unexpected scalar " + t + " at " + i + "-" + a)
}
wm.decompressScalar = sse;
var vx = {},
    Em = {};
Object.defineProperty(Em, "__esModule", {
    value: !0
});

function fT(t, e) {
    for (var r = t.paths[t.currentPathIndex], n = 0, i = t.currentObject; n < r.length - 1; n++) {
        var a = r[n];
        i = i[a] = i[a] || {}
    }
    e !== void 0 && (i[r[n]] = e)
}

function lse(t, e) {
    t.currentPathIndex === -1 ? t.value[e] = t.currentObject = {} : fT(t, e), ++t.currentPathIndex === t.expectedPaths && (t.currentPathIndex = -1)
}
Em.appendTemplateObjectPropertiesValue = lse;

function use(t, e) {
    t.currentPathIndex === 0 && (t.currentObject = {}, t.value.push(t.currentObject)), fT(t, e), ++t.currentPathIndex === t.expectedPaths && (t.currentPathIndex = 0)
}
Em.appendTemplateObjectElementsValue = use;
Object.defineProperty(vx, "__esModule", {
    value: !0
});
var X4 = hi,
    Ko = Ru,
    cse = wm,
    Z4 = Em;

function fse(t, e, r, n) {
    var i;
    if (t === X4.ARRAY_END_TOKEN || t === X4.OBJECT_END_TOKEN) i = e.currentTarget.value, e.currentTarget = e.stack[e.pointer - 1], e.pointer--;
    else if (i = cse.decompressScalar(t, r, e, n), i === Ko.SKIP_SCALAR) return !1;
    return e.currentTarget.type === Ko.TargetType.SCALAR ? e.currentTarget.value = i : e.currentTarget.type === Ko.TargetType.ARRAY ? e.currentTarget.value[e.currentTarget.value.length] = i : e.currentTarget.type === Ko.TargetType.OBJECT ? e.currentTarget.key != null ? (e.currentTarget.value[e.currentTarget.key] = i, e.currentTarget.key = void 0) : e.currentTarget.key = i : e.currentTarget.type === Ko.TargetType.TEMPLATE_OBJECT ? (e.currentTarget.currentToken = i, e.currentTarget.currentTokens.push(i)) : e.currentTarget.type === Ko.TargetType.TEMPLATE_OBJECT_PROPERTIES ? Z4.appendTemplateObjectPropertiesValue(e.currentTarget, i) : e.currentTarget.type === Ko.TargetType.TEMPLATE_OBJECT_ELEMENTS && Z4.appendTemplateObjectElementsValue(e.currentTarget, i), !0
}
vx.decompressElement = fse;
Object.defineProperty(gx, "__esModule", {
    value: !0
});
var Go = hi,
    $r = Ru,
    dse = wm,
    hse = vx;

function pse(t, e, r) {
    for (; t.index < e.length; t.index++) {
        var n = e[t.index];
        if (n === Go.ARRAY_START_TOKEN) t.currentTarget = {
            type: $r.TargetType.ARRAY,
            value: []
        }, t.stack[++t.pointer] = t.currentTarget;
        else if (n === Go.OBJECT_START_TOKEN) t.currentTarget = {
            type: $r.TargetType.OBJECT,
            value: {}
        }, t.stack[++t.pointer] = t.currentTarget;
        else if (n === Go.ARRAY_REPEAT_TOKEN && (t.currentTarget.type === $r.TargetType.ARRAY || t.currentTarget.type === $r.TargetType.TEMPLATE_OBJECT_ELEMENTS)) {
            var i = t.currentTarget.value[t.currentTarget.value.length - 1];
            t.currentTarget.value.push(i)
        } else if (n === Go.ARRAY_REPEAT_MANY_TOKEN && (t.currentTarget.type === $r.TargetType.ARRAY || t.currentTarget.type === $r.TargetType.TEMPLATE_OBJECT_ELEMENTS)) {
            var a = dse.decompressScalar(e[t.index], e, t, r);
            if (a === $r.SKIP_SCALAR) return;
            for (var i = t.currentTarget.value[t.currentTarget.value.length - 1], o = 0; o < a; o++) t.currentTarget.value.push(i)
        } else if (n === Go.TEMPLATE_OBJECT_START && (t.currentTarget.type === $r.TargetType.TEMPLATE_OBJECT || t.currentTarget.type === $r.TargetType.OBJECT || t.currentTarget.type === $r.TargetType.ARRAY))
            if (t.currentTarget.type !== $r.TargetType.TEMPLATE_OBJECT) {
                var s = t.currentTarget;
                t.currentTarget = {
                    type: $r.TargetType.TEMPLATE_OBJECT,
                    value: void 0,
                    currentTokens: [],
                    currentRoute: [],
                    paths: [],
                    level: 0,
                    parentTarget: s
                }, t.stack[++t.pointer] = t.currentTarget
            } else {
                for (var o = 0; o < t.currentTarget.currentTokens.length - 1; o++) {
                    var l = t.currentTarget.currentTokens[o];
                    t.currentTarget.paths[t.currentTarget.paths.length] = t.currentTarget.currentRoute.concat(l)
                }
                t.currentTarget.currentToken != null && t.currentTarget.currentRoute.push(t.currentTarget.currentToken), t.currentTarget.currentTokens = [], t.currentTarget.level++
            }
        else if (n === Go.TEMPLATE_OBJECT_END && t.currentTarget.type === $r.TargetType.TEMPLATE_OBJECT) {
            for (var o = 0; o < t.currentTarget.currentTokens.length; o++) {
                var l = t.currentTarget.currentTokens[o];
                t.currentTarget.paths[t.currentTarget.paths.length] = t.currentTarget.currentRoute.concat(l)
            }
            if (t.currentTarget.currentTokens = [], t.currentTarget.currentRoute = t.currentTarget.currentRoute.slice(0, -1), t.currentTarget.level--, t.currentTarget.level < 0) {
                var u = t.currentTarget.paths,
                    s = t.currentTarget.parentTarget;
                t.pointer--, s.type === $r.TargetType.ARRAY ? t.currentTarget = {
                    type: $r.TargetType.TEMPLATE_OBJECT_ELEMENTS,
                    value: s.value,
                    paths: u,
                    currentPathIndex: 0,
                    expectedPaths: u.length,
                    currentObject: {}
                } : s.type === $r.TargetType.OBJECT && (t.currentTarget = {
                    type: $r.TargetType.TEMPLATE_OBJECT_PROPERTIES,
                    value: s.value,
                    paths: u,
                    currentPathIndex: -1,
                    expectedPaths: u.length,
                    currentObject: {}
                }), t.stack[++t.pointer] = t.currentTarget
            }
        } else if (n === Go.TEMPLATE_OBJECT_FINAL) t.currentTarget = t.stack[--t.pointer];
        else if (!hse.decompressElement(n, t, e, r)) return
    }
}
gx.decompressStages = pse;
Object.defineProperty(Cd, "__esModule", {
    value: !0
});
var mse = Ru,
    dT = gx;

function gse() {
    return {
        strings: [],
        integers: [],
        floats: [],
        dates: [],
        lpDates: []
    }
}
Cd.makeOrderedIndex = gse;

function hT(t) {
    var e = {
            type: mse.TargetType.SCALAR,
            value: void 0
        },
        r = new Array(10);
    return r[0] = e, {
        index: 0,
        rootTarget: e,
        stack: r,
        currentTarget: e,
        pointer: 0,
        drain: t
    }
}

function vse(t, e) {
    var r = hT(!0);
    return dT.decompressStages(r, t, e), r.rootTarget.value
}
Cd.decompress = vse;

function yse(t) {
    var e = hT(!1),
        r = "";

    function n(i) {
        if (i === null) e.drain = !0;
        else {
            if (i.length === 0) return;
            r += i
        }
        var a = e.index;
        dT.decompressStages(e, r, t);
        var o = e.index - a;
        o > 0 && (r = r.substring(o), e.index -= o)
    }
    return {
        increment: n,
        cursor: e
    }
}
Cd.decompressIncremental = yse;
(function(t) {
    function e(u) {
        for (var c in u) t.hasOwnProperty(c) || (t[c] = u[c])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Ed,
        n = su,
        i = Cd;
    e(su), e(Ru);

    function a(u) {
        var c = i.makeOrderedIndex();
        return i.decompress(u, c)
    }
    t.parse = a;

    function o() {
        var u = i.makeOrderedIndex(),
            c = i.decompressIncremental(u),
            d = c.cursor,
            h = c.increment;
        return function(m) {
            if (h(m), m === null) return d.rootTarget.value
        }
    }
    t.parseIncremental = o;

    function s(u, c, d) {
        d === void 0 && (d = {});
        var h = r.makeInvertedIndex(),
            m = r.makeCompressContext();
        r.compress(m, u, h, c, d), c.end()
    }
    t.stringifyTo = s;

    function l(u, c) {
        var d = new n.ZipsonStringWriter;
        return s(u, d, c), d.value
    }
    t.stringify = l
})(aT);
const cy = {
    getBaseUri() {
        return ""
    },
    async getAuthToken() {
        return ""
    }
};

function bse(t) {
    Object.assign(cy, t)
}

function pT() {
    return kd
}
const kd = async function(e, r = {}) {
    const n = `${cy.getBaseUri()}${e}`,
        i = await cy.getAuthToken(),
        {
            skipAuth: a,
            ...o
        } = r,
        s = {
            "content-type": "application/json",
            ...r == null ? void 0 : r.headers
        };
    i && !a && (s.Authorization = `Bearer ${i}`);
    const l = await fetch(n, {
        ...o,
        headers: s,
        credentials: a ? void 0 : "include"
    });
    if (!l.ok) return xse(l);
    if (wse(e) && mT(l)) try {
        const u = await l.json();
        return u != null && u.__data ? aT.parse(u.__data) : u
    } catch {}
    return l
};
async function xse(t) {
    const e = {
        message: "Failed ",
        code: t.status
    };
    try {
        if (mT(t)) {
            const a = await t.json();
            if (a) {
                Object.assign(e, a);
                const o = a.error || a.message;
                o && (e.message = o)
            }
        } else e.message = await t.text()
    } catch {}
    const {
        message: r,
        ...n
    } = e, i = new Error(r);
    throw Object.assign(i, n), i
}

function wse(t) {
    return t.startsWith("/api")
}

function mT(t) {
    var e;
    return !!((e = t.headers.get("content-type")) != null && e.toLowerCase().includes("application/json"))
}
async function of(t, e) {
    return kd(t, e)
}
async function fy(t, e, r) {
    return kd(t, {
        method: "POST",
        body: e ? JSON.stringify(e) : null,
        ...r
    })
}
async function pl(t, e, r) {
    return kd(t, {
        method: "PATCH",
        body: JSON.stringify(e),
        ...r
    })
}
async function e8(t, e, r) {
    return kd(t, {
        method: "DELETE",
        body: JSON.stringify(e || {}),
        ...r
    })
}
const Ot = {
    ADMIN_PROJECTS: "/api/admin/projects?address=:address",
    ADMIN_CREATOR_PROFILES: "/api/admin/creatorProfiles",
    ADMIN_CREATOR_PROFILE: "/api/admin/creatorProfiles/[address]",
    ADMIN_DEACTIVATE_METADATA: "/api/admin/contracts/[contractSk]/deactivate",
    ADMIN_ANNOUNCEMENTS: "/api/admin/announcements",
    ADMIN_ANNOUNCEMENT: "/api/admin/announcements/[announcementSk]",
    ADMIN_COLLECTION: "/api/admin/collections/[collectionSk]",
    ADMIN_CONTRACT: "/api/admin/contracts/[contractSk]",
    ADMIN_FORMS_BY_SLUG: "/api/admin/forms/:slug",
    ADMIN_FORM: "/api/admin/form/:formSk",
    ANNOUNCEMENTS: "/api/announcements",
    ASSETS_UPLOAD: "/api/assets/signUploadRequest",
    FORM: "/api/forms/:formSk",
    FORM_ENTRIES: "/api/forms/:formSk/entries",
    FORM_ENTRY: "/api/forms/:formSk/entries/:formEntrySk",
    FORM_ENTRY_VERIFY_REQUIREMENT: "/api/forms/:formSk/verify",
    FORM_VERIFY_SLUG: "/api/forms/:formSk/slug",
    FORM_LOGIN: "/api/forms/:formSk/login",
    FORM_DUPLICATE: "/api/forms/:formSk/duplicate",
    COLLECTION: "/api/collections/:collectionSk",
    COLLECTION_COMPONENT: "/api/collections/:collectionSk/components/:id",
    COLLECTION_COMPONENTS: "/api/collections/:collectionSk/components",
    COLLECTION_COMPONENTS_UPDATE: "/api/collections/:collectionSk/upload/updateAttribute",
    COLLECTION_CREATE_THUMBNAIL: "/api/collections/:collectionSk/createCollectionThumbnail",
    COLLECTION_DOWNLOAD_TOKEN: "/api/collections/:collectionSk/download",
    COLLECTION_DOWNLOAD_TOKEN_BATCH: "/api/collections/:collectionSk/tokenBatches/:id/download",
    COLLECTION_DOWNLOAD_TOKEN_BATCH_CSV: "/api/collections/:collectionSk/tokenBatches/:id/csv",
    COLLECTION_DOWNLOAD_TOKEN_STATUS: "/api/collections/:collectionSk/download/:id",
    COLLECTION_DUPLICATE: "/api/collections/:collectionSk/duplicate",
    COLLECTION_GENERATE_TOKEN_BATCH: "/api/collections/:collectionSk/tokenBatches/:id/generate",
    COLLECTION_GENERATE_TOKEN_BATCH_SAMPLE: "/api/collections/:collectionSk/tokenBatches/:id/sample",
    COLLECTION_GET_SAVED_TOKENS: "/api/collections/:collectionSk/savedTokens?groupId=:groupId",
    COLLECTION_PREVIEW: "/api/collections/:collectionSk/preview?shareKey=:shareKey",
    COLLECTION_REGENERATE_TOKEN_BATCH_METADATA: "/api/collections/:collectionSk/tokenBatches/:id/metadata",
    COLLECTION_RENAME_ATTRIBUTE: "/api/collections/:collectionSk/renameAttribute",
    COLLECTION_RULES: "/api/collections/:collectionSk/rules",
    COLLECTION_RULES_CONSOLIDATE: "/api/collections/:collectionSk/rules/consolidate",
    COLLECTION_SAVED_TOKENS: "/api/collections/:collectionSk/savedTokens",
    COLLECTION_SAVED_TOKEN: "/api/collections/:collectionSk/savedTokens/:id",
    COLLECTION_SAVED_TOKENS_CUSTOM: "/api/collections/:collectionSk/savedTokens/custom",
    COLLECTION_SAVE_GROUPS: "/api/collections/:collectionSk/saveGroups",
    COLLECTION_SHARE_URL: "/api/collections/:collectionSk/share",
    COLLECTION_TAGS: "/api/collections/:collectionSk/tags",
    COLLECTION_TAG_CATEGORY: "/api/collections/:collectionSk/tags/:id",
    COLLECTION_TEMPLATE: "/api/collections/:collectionSk/templates/:id",
    COLLECTION_TEMPLATES: "/api/collections/:collectionSk/templates",
    COLLECTION_TOKEN_BATCH: "/api/collections/:collectionSk/tokenBatches/:id",
    COLLECTION_TOKEN_BATCH_DETAILS: "/api/collections/:collectionSk/tokenBatches/:id/details?mode=:mode",
    COLLECTION_TOKEN_BATCH_TOKENS: "/api/collections/:collectionSk/tokenBatches/:id/tokens",
    COLLECTION_TOKEN_BATCHES: "/api/collections/:collectionSk/tokenBatches",
    COLLECTION_UPLOAD_TOKEN_BATCH: "/api/collections/:collectionSk/tokenBatches/:id/upload",
    COLLECTION_ZIP_TOKEN_BATCH: "/api/collections/:collectionSk/tokenBatches/:id/zip",
    CONTRACT_TOKEN_METADATA: "/api/contract/:contractSk/chain/:chainId/metadata/:tokenId",
    CONTRACT_BATCH_TOKEN_METADATA: "/api/contract/:contractSk/chain/:chainId/metadata/batch?tokenIds=:tokenIds",
    DISCORD_GUILDS: "/api/discord/guilds",
    DISCORD_ROLES: "/api/discord/roles?guildId=:guildId",
    CONTRACT: "/api/contract/:contractSk",
    CONTRACT_PLACEHOLDER_IMAGE: "/api/contract/:contractSk/placeholder",
    CONTRACT_MINT_PAGE: "/api/contract/:contractSk/mint",
    CONTRACT_REFRESH_OPENSEA: "/api/contract/:contractSk/chain/:chainId/refresh",
    CONTRACT_REPORT: "/api/contract/:contractSk/report",
    LOGIN: "/api/auth/login",
    LOGOUT: "/api/auth/logout",
    NONCE: "/api/auth/nonce",
    PROJECT: "/api/projects/:projectSk",
    PROJECT_ENTITIES: "/api/projects/:projectSk/entities",
    PROJECT_FORMS: "/api/projects/:projectSk/forms",
    PROJECT_COLLECTIONS: "/api/projects/:projectSk/collections",
    PROJECT_MEMBERS: "/api/projects/:projectSk/members",
    PROJECT_CONTRACTS: "/api/projects/:projectSk/contracts",
    PROJECT_SNAPSHOTS: "/api/projects/:projectSk/snapshots?formSk=:formSk",
    SNAPSHOT: "/api/projects/:projectSk/snapshots/:snapshotSk",
    SNAPSHOT_MERKLE_PROOF: "/api/projects/:projectSk/snapshots/:snapshotSk/merkle?address=:address",
    PROJECTS: "/api/projects",
    CREATOR_PROFILE: "/api/creatorProfile",
    PUBLIC_PROFILE: "/api/publicProfile",
    PUBLIC_PROFILE_AVATAR: "/api/publicProfile/[address]/avatar?type=:type",
    ADDRESS_BOOK: "/api/addressBook",
    ADDRESS_BOOK_TYPE: "/api/addressBook/[type]",
    ADDRESS_BOOK_ENTRY: "/api/addressBook/[type]/[walletAddress]",
    ADDRESS_BOOK_LOOKUP: "/api/addressBook/addressLookup?address=:address",
    MICROVERSE_PROXY: "/api/microverse",
    TWITTER_CONNECT: "/api/twitter/connect?sk=:sk&type=:type"
};

function gT(t, e, r, n) {
    function i(a) {
        return a instanceof r ? a : new r(function(o) {
            o(a)
        })
    }
    return new(r || (r = Promise))(function(a, o) {
        function s(c) {
            try {
                u(n.next(c))
            } catch (d) {
                o(d)
            }
        }

        function l(c) {
            try {
                u(n.throw(c))
            } catch (d) {
                o(d)
            }
        }

        function u(c) {
            c.done ? a(c.value) : i(c.value).then(s, l)
        }
        u((n = n.apply(t, e || [])).next())
    })
}

function vT(t, e) {
    var r = {
            label: 0,
            sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        },
        n, i, a, o;
    return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }), o;

    function s(u) {
        return function(c) {
            return l([u, c])
        }
    }

    function l(u) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; r;) try {
            if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
            switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
                case 0:
                case 1:
                    a = u;
                    break;
                case 4:
                    return r.label++, {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    r.label++, i = u[1], u = [0];
                    continue;
                case 7:
                    u = r.ops.pop(), r.trys.pop();
                    continue;
                default:
                    if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
                        r.label = u[1];
                        break
                    }
                    if (u[0] === 6 && r.label < a[1]) {
                        r.label = a[1], a = u;
                        break
                    }
                    if (a && r.label < a[2]) {
                        r.label = a[2], r.ops.push(u);
                        break
                    }
                    a[2] && r.ops.pop(), r.trys.pop();
                    continue
            }
            u = e.call(t, r)
        } catch (c) {
            u = [6, c], i = 0
        } finally {
            n = a = 0
        }
        if (u[0] & 5) throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}
var Qi = function() {},
    nn = Qi(),
    sf = Object,
    dn = function(t) {
        return t === nn
    },
    so = function(t) {
        return typeof t == "function"
    },
    ja = function(t, e) {
        return sf.assign({}, t, e)
    },
    yx = "undefined",
    bx = function() {
        return typeof window != yx
    },
    Ese = function() {
        return typeof document != yx
    },
    Cse = function() {
        return bx() && typeof window.requestAnimationFrame != yx
    },
    C0 = new WeakMap,
    kse = 0,
    Gf = function(t) {
        var e = typeof t,
            r = t && t.constructor,
            n = r == Date,
            i, a;
        if (sf(t) === t && !n && r != RegExp) {
            if (i = C0.get(t), i) return i;
            if (i = ++kse + "~", C0.set(t, i), r == Array) {
                for (i = "@", a = 0; a < t.length; a++) i += Gf(t[a]) + ",";
                C0.set(t, i)
            }
            if (r == sf) {
                i = "#";
                for (var o = sf.keys(t).sort(); !dn(a = o.pop());) dn(t[a]) || (i += a + ":" + Gf(t[a]) + ",");
                C0.set(t, i)
            }
        } else i = n ? t.toJSON() : e == "symbol" ? t.toString() : e == "string" ? JSON.stringify(t) : "" + t;
        return i
    },
    dy = !0,
    _se = function() {
        return dy
    },
    yT = bx(),
    xx = Ese(),
    hy = yT && window.addEventListener ? window.addEventListener.bind(window) : Qi,
    Ase = xx ? document.addEventListener.bind(document) : Qi,
    py = yT && window.removeEventListener ? window.removeEventListener.bind(window) : Qi,
    Tse = xx ? document.removeEventListener.bind(document) : Qi,
    Sse = function() {
        var t = xx && document.visibilityState;
        return dn(t) || t !== "hidden"
    },
    Ose = function(t) {
        return Ase("visibilitychange", t), hy("focus", t),
            function() {
                Tse("visibilitychange", t), py("focus", t)
            }
    },
    Pse = function(t) {
        var e = function() {
                dy = !0, t()
            },
            r = function() {
                dy = !1
            };
        return hy("online", e), hy("offline", r),
            function() {
                py("online", e), py("offline", r)
            }
    },
    Rse = {
        isOnline: _se,
        isVisible: Sse
    },
    Nse = {
        initFocus: Ose,
        initReconnect: Pse
    },
    Cm = !bx() || "Deno" in window,
    Mse = function(t) {
        return Cse() ? window.requestAnimationFrame(t) : setTimeout(t, 1)
    },
    lf = Cm ? Q.exports.useEffect : Q.exports.useLayoutEffect,
    pg = typeof navigator < "u" && navigator.connection,
    t8 = !Cm && pg && (["slow-2g", "2g"].includes(pg.effectiveType) || pg.saveData),
    bT = function(t) {
        if (so(t)) try {
            t = t()
        } catch {
            t = ""
        }
        var e = [].concat(t);
        t = typeof t == "string" ? t : (Array.isArray(t) ? t.length : t) ? Gf(t) : "";
        var r = t ? "$swr$" + t : "";
        return [t, e, r]
    },
    us = new WeakMap,
    xT = 0,
    wT = 1,
    ET = 2,
    uf = function(t, e, r, n, i, a, o) {
        o === void 0 && (o = !0);
        var s = us.get(t),
            l = s[0],
            u = s[1],
            c = s[3],
            d = l[e],
            h = u[e];
        if (o && h)
            for (var m = 0; m < h.length; ++m) h[m](r, n, i);
        return a && (delete c[e], d && d[0]) ? d[0](ET).then(function() {
            return t.get(e)
        }) : t.get(e)
    },
    Ise = 0,
    my = function() {
        return ++Ise
    },
    CT = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return gT(void 0, void 0, void 0, function() {
            var r, n, i, a, o, s, l, u, c, d, h, m, b, w, p, v, x, k, y, I, N;
            return vT(this, function(U) {
                switch (U.label) {
                    case 0:
                        if (r = t[0], n = t[1], i = t[2], a = t[3], o = typeof a == "boolean" ? {
                                revalidate: a
                            } : a || {}, s = dn(o.populateCache) ? !0 : o.populateCache, l = o.revalidate !== !1, u = o.rollbackOnError !== !1, c = o.optimisticData, d = bT(n), h = d[0], m = d[2], !h) return [2];
                        if (b = us.get(r), w = b[2], t.length < 3) return [2, uf(r, h, r.get(h), nn, nn, l, !0)];
                        if (p = i, x = my(), w[h] = [x, 0], k = !dn(c), y = r.get(h), k && (I = so(c) ? c(y) : c, r.set(h, I), uf(r, h, I)), so(p)) try {
                            p = p(r.get(h))
                        } catch (W) {
                            v = W
                        }
                        return p && so(p.then) ? [4, p.catch(function(W) {
                            v = W
                        })] : [3, 2];
                    case 1:
                        if (p = U.sent(), x !== w[h][0]) {
                            if (v) throw v;
                            return [2, p]
                        } else v && k && u && (s = !0, p = y, r.set(h, y));
                        U.label = 2;
                    case 2:
                        return s && (v || (so(s) && (p = s(p, y)), r.set(h, p)), r.set(m, ja(r.get(m), {
                            error: v
                        }))), w[h][1] = my(), [4, uf(r, h, p, v, nn, l, !!s)];
                    case 3:
                        if (N = U.sent(), v) throw v;
                        return [2, s ? N : p]
                }
            })
        })
    },
    r8 = function(t, e) {
        for (var r in t) t[r][0] && t[r][0](e)
    },
    kT = function(t, e) {
        if (!us.has(t)) {
            var r = ja(Nse, e),
                n = {},
                i = CT.bind(nn, t),
                a = Qi;
            if (us.set(t, [n, {}, {}, {}, i]), !Cm) {
                var o = r.initFocus(setTimeout.bind(nn, r8.bind(nn, n, xT))),
                    s = r.initReconnect(setTimeout.bind(nn, r8.bind(nn, n, wT)));
                a = function() {
                    o && o(), s && s(), us.delete(t)
                }
            }
            return [t, i, a]
        }
        return [t, us.get(t)[4]]
    },
    Lse = function(t, e, r, n, i) {
        var a = r.errorRetryCount,
            o = i.retryCount,
            s = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * r.errorRetryInterval;
        !dn(a) && o > a || setTimeout(n, s, i)
    },
    _T = kT(new Map),
    AT = _T[0],
    Dn = _T[1],
    TT = ja({
        onLoadingSlow: Qi,
        onSuccess: Qi,
        onError: Qi,
        onErrorRetry: Lse,
        onDiscarded: Qi,
        revalidateOnFocus: !0,
        revalidateOnReconnect: !0,
        revalidateIfStale: !0,
        shouldRetryOnError: !0,
        errorRetryInterval: t8 ? 1e4 : 5e3,
        focusThrottleInterval: 5 * 1e3,
        dedupingInterval: 2 * 1e3,
        loadingTimeout: t8 ? 5e3 : 3e3,
        compare: function(t, e) {
            return Gf(t) == Gf(e)
        },
        isPaused: function() {
            return !1
        },
        cache: AT,
        mutate: Dn,
        fallback: {}
    }, Rse),
    ST = function(t, e) {
        var r = ja(t, e);
        if (e) {
            var n = t.use,
                i = t.fallback,
                a = e.use,
                o = e.fallback;
            n && a && (r.use = n.concat(a)), i && o && (r.fallback = ja(i, o))
        }
        return r
    },
    gy = Q.exports.createContext({}),
    jse = function(t) {
        var e = t.value,
            r = ST(Q.exports.useContext(gy), e),
            n = e && e.provider,
            i = Q.exports.useState(function() {
                return n ? kT(n(r.cache || AT), e) : nn
            })[0];
        return i && (r.cache = i[0], r.mutate = i[1]), lf(function() {
            return i ? i[2] : nn
        }, []), Q.exports.createElement(gy.Provider, ja(t, {
            value: r
        }))
    },
    Fse = function(t, e) {
        var r = Q.exports.useState({})[1],
            n = Q.exports.useRef(t),
            i = Q.exports.useRef({
                data: !1,
                error: !1,
                isValidating: !1
            }),
            a = Q.exports.useCallback(function(o) {
                var s = !1,
                    l = n.current;
                for (var u in o) {
                    var c = u;
                    l[c] !== o[c] && (l[c] = o[c], i.current[c] && (s = !0))
                }
                s && !e.current && r({})
            }, []);
        return lf(function() {
            n.current = t
        }), [n, i.current, a]
    },
    Dse = function(t) {
        return so(t[1]) ? [t[0], t[1], t[2] || {}] : [t[0], null, (t[1] === null ? t[2] : t[1]) || {}]
    },
    Bse = function() {
        return ja(TT, Q.exports.useContext(gy))
    },
    Use = function(t) {
        return function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            var i = Bse(),
                a = Dse(r),
                o = a[0],
                s = a[1],
                l = a[2],
                u = ST(i, l),
                c = t,
                d = u.use;
            if (d)
                for (var h = d.length; h-- > 0;) c = d[h](c);
            return c(o, s || u.fetcher, u)
        }
    },
    n8 = function(t, e, r) {
        var n = e[t] || (e[t] = []);
        return n.push(r),
            function() {
                var i = n.indexOf(r);
                i >= 0 && (n[i] = n[n.length - 1], n.pop())
            }
    },
    mg = {
        dedupe: !0
    },
    $se = function(t, e, r) {
        var n = r.cache,
            i = r.compare,
            a = r.fallbackData,
            o = r.suspense,
            s = r.revalidateOnMount,
            l = r.refreshInterval,
            u = r.refreshWhenHidden,
            c = r.refreshWhenOffline,
            d = us.get(n),
            h = d[0],
            m = d[1],
            b = d[2],
            w = d[3],
            p = bT(t),
            v = p[0],
            x = p[1],
            k = p[2],
            y = Q.exports.useRef(!1),
            I = Q.exports.useRef(!1),
            N = Q.exports.useRef(v),
            U = Q.exports.useRef(e),
            W = Q.exports.useRef(r),
            H = function() {
                return W.current
            },
            ue = function() {
                return H().isVisible() && H().isOnline()
            },
            L = function(se) {
                return n.set(k, ja(n.get(k), se))
            },
            g = n.get(v),
            E = dn(a) ? r.fallback[v] : a,
            P = dn(g) ? E : g,
            M = n.get(k) || {},
            D = M.error,
            G = !y.current,
            K = function() {
                return G && !dn(s) ? s : H().isPaused() ? !1 : o ? dn(P) ? !1 : r.revalidateIfStale : dn(P) || r.revalidateIfStale
            },
            B = function() {
                return !v || !e ? !1 : M.isValidating ? !0 : G && K()
            },
            C = B(),
            A = Fse({
                data: P,
                error: D,
                isValidating: C
            }, I),
            $ = A[0],
            X = A[1],
            V = A[2],
            _ = Q.exports.useCallback(function(se) {
                return gT(void 0, void 0, void 0, function() {
                    var ce, fe, be, Pe, q, oe, ie, ge, xe, we, j, S, O;
                    return vT(this, function(z) {
                        switch (z.label) {
                            case 0:
                                if (ce = U.current, !v || !ce || I.current || H().isPaused()) return [2, !1];
                                Pe = !0, q = se || {}, oe = !w[v] || !q.dedupe, ie = function() {
                                    return !I.current && v === N.current && y.current
                                }, ge = function() {
                                    var re = w[v];
                                    re && re[1] === be && delete w[v]
                                }, xe = {
                                    isValidating: !1
                                }, we = function() {
                                    L({
                                        isValidating: !1
                                    }), ie() && V(xe)
                                }, L({
                                    isValidating: !0
                                }), V({
                                    isValidating: !0
                                }), z.label = 1;
                            case 1:
                                return z.trys.push([1, 3, , 4]), oe && (uf(n, v, $.current.data, $.current.error, !0), r.loadingTimeout && !n.get(v) && setTimeout(function() {
                                    Pe && ie() && H().onLoadingSlow(v, r)
                                }, r.loadingTimeout), w[v] = [ce.apply(void 0, x), my()]), O = w[v], fe = O[0], be = O[1], [4, fe];
                            case 2:
                                return fe = z.sent(), oe && setTimeout(ge, r.dedupingInterval), !w[v] || w[v][1] !== be ? (oe && ie() && H().onDiscarded(v), [2, !1]) : (L({
                                    error: nn
                                }), xe.error = nn, j = b[v], !dn(j) && (be <= j[0] || be <= j[1] || j[1] === 0) ? (we(), oe && ie() && H().onDiscarded(v), [2, !1]) : (i($.current.data, fe) ? xe.data = $.current.data : xe.data = fe, i(n.get(v), fe) || n.set(v, fe), oe && ie() && H().onSuccess(fe, v, r), [3, 4]));
                            case 3:
                                return S = z.sent(), ge(), H().isPaused() || (L({
                                    error: S
                                }), xe.error = S, oe && ie() && (H().onError(S, v, r), (typeof r.shouldRetryOnError == "boolean" && r.shouldRetryOnError || so(r.shouldRetryOnError) && r.shouldRetryOnError(S)) && ue() && H().onErrorRetry(S, v, r, _, {
                                    retryCount: (q.retryCount || 0) + 1,
                                    dedupe: !0
                                }))), [3, 4];
                            case 4:
                                return Pe = !1, we(), ie() && oe && uf(n, v, xe.data, xe.error, !1), [2, !0]
                        }
                    })
                })
            }, [v]),
            ee = Q.exports.useCallback(CT.bind(nn, n, function() {
                return N.current
            }), []);
        if (lf(function() {
                U.current = e, W.current = r
            }), lf(function() {
                if (!!v) {
                    var se = v !== N.current,
                        ce = _.bind(nn, mg),
                        fe = function(ie, ge, xe) {
                            V(ja({
                                error: ge,
                                isValidating: xe
                            }, i($.current.data, ie) ? nn : {
                                data: ie
                            }))
                        },
                        be = 0,
                        Pe = function(ie) {
                            if (ie == xT) {
                                var ge = Date.now();
                                H().revalidateOnFocus && ge > be && ue() && (be = ge + H().focusThrottleInterval, ce())
                            } else if (ie == wT) H().revalidateOnReconnect && ue() && ce();
                            else if (ie == ET) return _()
                        },
                        q = n8(v, m, fe),
                        oe = n8(v, h, Pe);
                    return I.current = !1, N.current = v, y.current = !0, se && V({
                            data: P,
                            error: D,
                            isValidating: C
                        }), K() && (dn(P) || Cm ? ce() : Mse(ce)),
                        function() {
                            I.current = !0, q(), oe()
                        }
                }
            }, [v, _]), lf(function() {
                var se;

                function ce() {
                    var be = so(l) ? l(P) : l;
                    be && se !== -1 && (se = setTimeout(fe, be))
                }

                function fe() {
                    !$.current.error && (u || H().isVisible()) && (c || H().isOnline()) ? _(mg).then(ce) : ce()
                }
                return ce(),
                    function() {
                        se && (clearTimeout(se), se = -1)
                    }
            }, [l, u, c, _]), Q.exports.useDebugValue(P), o && dn(P) && v) throw U.current = e, W.current = r, I.current = !1, dn(D) ? _(mg) : D;
        return {
            mutate: ee,
            get data() {
                return X.data = !0, P
            },
            get error() {
                return X.error = !0, D
            },
            get isValidating() {
                return X.isValidating = !0, C
            }
        }
    },
    Wse = sf.defineProperty(jse, "default", {
        value: TT
    }),
    OT = Use($se);

function i8(t) {
    return t === null || typeof t > "u" ? "" : Array.isArray(t) ? t.join(",") : t == null ? void 0 : t.toString()
}

function Rt(t, e = {}) {
    return Object.entries(e).reduce((r, [n, i]) => r.replace(`[${n}]`, encodeURIComponent(i8(i))).replace(`:${n}`, encodeURIComponent(i8(i))), t)
}

function PT(t, e = {}) {
    return Object.values(e).some(r => r === void 0) ? null : Rt(t, e)
}
async function cf(t, e, {
    key: r = "sk",
    optimistic: n = !0
} = {}) {
    const a = (Array.isArray(e) ? e : [e]).reduce((o, s) => (o[s[r]] = s, o), {});
    await Dn(t, o => o == null ? void 0 : o.map(s => {
        const l = a[s[r]];
        return l ? {
            ...s,
            ...l
        } : s
    }), !n)
}
async function zse(t, e, {
    key: r = "sk",
    optimistic: n = !0
} = {}) {
    const a = (Array.isArray(e) ? e : [e]).map(o => o[r]);
    await Dn(t, o => o == null ? void 0 : o.filter(s => !a.includes(s[r])), !n)
}
async function RT(t, e, {
    optimistic: r = !0
} = {}) {
    const n = Array.isArray(e) ? e : [e];
    await Dn(t, i => [...n, ...i || []], !r)
}

function Hse(t) {
    const {
        data: e,
        error: r,
        mutate: n
    } = OT(PT(Ot.CONTRACT_MINT_PAGE, {
        contractSk: t
    }), pT()), i = f.useCallback(() => n(), [n]);
    return {
        data: e,
        error: r,
        loading: !e && !r,
        refetch: i
    }
}
var vy;
(t => {
    async function e(h) {
        const {
            projectSk: m,
            collectionSk: b
        } = h, w = Rt(Ot.PROJECT_CONTRACTS, {
            projectSk: m
        }), p = await fy(w, h);
        if (p) {
            const v = p.sk,
                x = Rt(Ot.CONTRACT, {
                    contractSk: v
                });
            await Dn(x, p, !1), await RT(w, p);
            const k = Rt(Ot.COLLECTION, {
                    collectionSk: b
                }),
                y = Rt(Ot.PROJECT_ENTITIES, {
                    projectSk: m
                }),
                I = Rt(Ot.PROJECT_COLLECTIONS, {
                    projectSk: m
                }),
                N = {
                    sk: b,
                    contractSk: v
                };
            await Dn(k, U => ({
                ...U,
                ...N
            }), !1), await cf(y, N), await cf(I, N)
        }
        return p
    }
    t.create = e;
    async function r(h) {
        const m = Rt(Ot.CONTRACT, {
                contractSk: h.sk
            }),
            b = await pl(m, h),
            w = Rt(Ot.PROJECT_CONTRACTS, {
                projectSk: b.projectSk
            });
        return await Dn(m, b, !1), await cf(w, b), b
    }
    t.update = r;
    async function n(h) {
        const m = Rt(Ot.CONTRACT_MINT_PAGE, {
            contractSk: h
        });
        return of(m)
    }
    t.getMintPageSettings = n;
    async function i(h) {
        const m = Rt(Ot.CONTRACT_MINT_PAGE, {
                contractSk: h.contractSk
            }),
            b = await pl(m, h);
        return await Dn(Rt(Ot.CONTRACT, {
            contractSk: h.contractSk
        }), w => {
            if (w) return {
                ...w,
                mintPageSettings: b
            }
        }, !1), b
    }
    t.updateMintPageSettings = i;
    async function a(h, m = 1) {
        const b = Rt(Ot.CONTRACT_REFRESH_OPENSEA, {
            contractSk: h,
            chainId: m
        });
        return of(b)
    }
    t.refreshOpenSeaSlug = a;
    async function o(h) {
        const m = Rt(Ot.CONTRACT, {
                contractSk: h.sk
            }),
            b = Rt(Ot.CONTRACT_PLACEHOLDER_IMAGE, {
                contractSk: h.sk
            }),
            p = (await pl(b, h)).url;
        return await Dn(m, v => v && {
            ...v,
            placeholderImage: p
        }), p
    }
    t.updatePlaceholderImage = o;
    async function s(h) {
        const m = Rt(Ot.CONTRACT, {
                contractSk: h.sk
            }),
            b = Rt(Ot.CONTRACT_PLACEHOLDER_IMAGE, {
                contractSk: h.sk
            });
        await e8(b, h), await Dn(m, w => w && {
            ...w,
            placeholderImage: void 0
        })
    }
    t.removePlaceholderImage = s;
    async function l(h, m) {
        const b = Rt(Ot.CONTRACT, {
                contractSk: m
            }),
            w = Rt(Ot.PROJECT_CONTRACTS, {
                projectSk: h
            });
        await e8(b, {}), await zse(w, {
            sk: m
        })
    }
    t.remove = l;
    async function u(h) {
        const m = await pl(Rt(Ot.ADMIN_DEACTIVATE_METADATA, {
            contractSk: h.contractSk
        }), h);
        return await Dn(Rt(Ot.CONTRACT, {
            contractSk: h.contractSk
        })), m
    }
    t.deactivate = u;
    async function c(h, m) {
        const b = Rt(Ot.ADMIN_CONTRACT, {
                contractSk: h
            }),
            w = await pl(b, m),
            p = Rt(Ot.CONTRACT, {
                contractSk: h
            });
        await Dn(p, w, !1)
    }
    t.adminUpdate = c;
    async function d(h) {
        return fy(Rt(Ot.CONTRACT_REPORT, {
            contractSk: h.contractSk
        }), {
            ...h
        })
    }
    t.report = d
})(vy || (vy = {}));
var yy;
(t => {
    async function e(u, c) {
        const d = Rt(Ot.PROJECT_SNAPSHOTS, {
            projectSk: u,
            formSk: c
        });
        return await of(d)
    }
    t.list = e;
    async function r(u) {
        const c = Rt(Ot.PROJECT_SNAPSHOTS, {
                formSk: u.formSk,
                projectSk: u.projectSk
            }),
            d = await fy(c, u);
        return await RT(c, d), d
    }
    t.create = r;
    async function n(u) {
        return r({
            ...u,
            formSk: Noe
        })
    }
    t.createOrphan = n;
    async function i(u, c) {
        const d = Rt(Ot.SNAPSHOT, {
            projectSk: u,
            snapshotSk: c
        });
        return of(d)
    }
    t.get = i;
    async function a(u) {
        return await (await window.fetch(u)).text()
    }
    t.download = a;
    async function o(u, c = {}) {
        const {
            id: d,
            formSk: h,
            projectSk: m
        } = u, b = Rt(Ot.SNAPSHOT, {
            formSk: h,
            projectSk: m,
            snapshotSk: d
        }), w = Rt(Ot.PROJECT_SNAPSHOTS, {
            formSk: h,
            projectSk: m
        });
        c.optimistic && await cf(w, u, {
            key: "id"
        }), await pl(b, u), c.optimistic || await cf(w, u, {
            key: "id"
        })
    }
    t.update = o;
    async function s(u) {
        const c = Rt(Ot.SNAPSHOT_MERKLE_PROOF, {
            projectSk: u.projectSk,
            snapshotSk: u.snapshotSk,
            address: u.address
        });
        return await of(c, {
            skipAuth: !0
        })
    }
    t.getProof = s;
    async function l(u, c, d) {
        const h = Rt(Ot.PROJECT_SNAPSHOTS, {
            projectSk: u,
            formSk: c
        });
        await Dn(h, d, !1)
    }
    t.mutateList = l
})(yy || (yy = {}));

function qse(t, e, r = []) {
    const {
        data: n,
        error: i,
        mutate: a
    } = OT(PT(Ot.CONTRACT_BATCH_TOKEN_METADATA, {
        contractSk: t,
        chainId: e,
        tokenIds: r.join(",")
    }), pT()), o = f.useCallback(() => a(), [a]);
    return {
        data: n,
        error: i,
        loading: !n && !i,
        refetch: o
    }
}

function Kse(t) {
    bse(t)
}

function by() {
    let {
        apiKey: t = ID,
        priority: e,
        stallTimeout: r,
        weight: n
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return function(i) {
        return i.rpcUrls.alchemy ? {
            chain: {
                ...i,
                rpcUrls: {
                    ...i.rpcUrls,
                    default: `${i.rpcUrls.alchemy}/${t}`
                }
            },
            provider: () => {
                const a = new Wp(i.id, t);
                return Object.assign(a, {
                    priority: e,
                    stallTimeout: r,
                    weight: n
                })
            },
            webSocketProvider: () => new Jb(i.id, t)
        } : null
    }
}

function Gse(t) {
    let {
        priority: e,
        rpc: r,
        stallTimeout: n,
        static: i = !0,
        weight: a
    } = t;
    return function(o) {
        const s = r(o);
        return !s || s.http === "" ? null : {
            chain: {
                ...o,
                rpcUrls: {
                    ...o.rpcUrls,
                    default: s.http
                }
            },
            provider: () => {
                var l;
                const u = i ? Qb : Ao,
                    c = new u(s.http, {
                        ensAddress: (l = o.ens) === null || l === void 0 ? void 0 : l.address,
                        chainId: o.id,
                        name: o.network
                    });
                return Object.assign(c, {
                    priority: e,
                    stallTimeout: n,
                    weight: a
                })
            },
            ...s.webSocket && {
                webSocketProvider: () => new ld(s.webSocket, o.id)
            }
        }
    }
}
const sl = {
        RECAPTCHA_SITE_KEY: "6LdIP1ceAAAAAIuZYr5mIBZeOxvSN7tdMV3Z02Pt",
        APP_BASE_URL: {}.NEXT_PUBLIC_VERCEL_URL ? `https://${{}.NEXT_PUBLIC_VERCEL_URL}` : "https://nft.bueno.art"
    },
    nr = {
        DEV: "http://localhost:3000/development/v1",
        PREVIEW: "https://3jbi869q6b.execute-api.us-west-1.amazonaws.com/preview/v1",
        PROD: "https://j2ugknioc1.execute-api.us-west-1.amazonaws.com/production/v1"
    },
    Vse = {
        development: {
            ...sl,
            IMGIX_DOMAIN: "bueno-preview.imgix.net",
            S3_BUCKET: "nft-api-development-storage",
            ALCHEMY_KEY: "x0oaLVRMnsyPHTMTsEWLFOCjSIhUrGPb",
            CHAIN_ID: 1,
            DYNAMO: {
                nftBuilderTable: "nft-api-development-primary"
            },
            DISCORD: {
                clientId: "942918810120388618",
                redirectUri: "https://localhost:5005/api/discord/callback"
            },
            PAYMENT_CONTRACT_ADDRESS: "0xcd04419220bef347b409055ac4e9ad50ee1ad6d6",
            FORM_PUBLIC_URL: `${sl.APP_BASE_URL}/form`,
            SERVERLESS_ROUTES: {
                SNAPSHOT: `${nr.DEV}/snapshot`,
                GIF: `${nr.DEV}/gif`,
                RENDER: `${nr.DEV}/render`,
                RENDER_ASYNC: `${nr.DEV}/renderAsync`,
                START_TOKEN_BATCH_GENERATION: `${nr.DEV}/generate`,
                START_TOKEN_BATCH_UPLOAD: `${nr.DEV}/ipfs`,
                START_TOKEN_BATCH_ZIP: `${nr.DEV}/zip`,
                TOKEN_BATCH_CSV: `${nr.DEV}/csv`,
                VALIDATE: `${nr.DEV}/validate`
            }
        },
        preview: {
            ...sl,
            IMGIX_DOMAIN: "bueno-preview.imgix.net",
            S3_BUCKET: "nft-api-preview-storage",
            ALCHEMY_KEY: "x0oaLVRMnsyPHTMTsEWLFOCjSIhUrGPb",
            CHAIN_ID: 1,
            DYNAMO: {
                nftBuilderTable: "nft-api-preview-primary"
            },
            DISCORD: {
                clientId: "942918810120388618",
                redirectUri: `${sl.APP_BASE_URL}/api/discord/callback`
            },
            PAYMENT_CONTRACT_ADDRESS: "0xcd04419220bef347b409055ac4e9ad50ee1ad6d6",
            FORM_PUBLIC_URL: `${sl.APP_BASE_URL}/form`,
            SERVERLESS_ROUTES: {
                SNAPSHOT: `${nr.PREVIEW}/snapshot`,
                GIF: "https://fh6fvyn7n23f5tkhitc374ih4a0ixhzj.lambda-url.us-west-1.on.aws",
                RENDER: `${nr.PREVIEW}/render`,
                RENDER_ASYNC: `${nr.PREVIEW}/renderAsync`,
                START_TOKEN_BATCH_GENERATION: `${nr.PREVIEW}/generate`,
                START_TOKEN_BATCH_UPLOAD: `${nr.PREVIEW}/ipfs`,
                START_TOKEN_BATCH_ZIP: `${nr.PREVIEW}/zip`,
                TOKEN_BATCH_CSV: `${nr.PREVIEW}/csv`,
                VALIDATE: `${nr.PREVIEW}/validate`
            }
        },
        production: {
            ...sl,
            IMGIX_DOMAIN: "assets.bueno.art",
            S3_BUCKET: "nft-api-production-storage",
            CHAIN_ID: 1,
            ALCHEMY_KEY: "uI1nCalW82o4-0hfPsBAtTEW_MERj6Sg",
            DYNAMO: {
                nftBuilderTable: "nft-api-production-primary"
            },
            DISCORD: {
                clientId: "942918810120388618",
                redirectUri: "https://nft.bueno.art/api/discord/callback"
            },
            PAYMENT_CONTRACT_ADDRESS: "0xcd04419220bef347b409055ac4e9ad50ee1ad6d6",
            FORM_PUBLIC_URL: "https://forms.bueno.art",
            SERVERLESS_ROUTES: {
                SNAPSHOT: `${nr.PROD}/snapshot`,
                GIF: "https://5r6fngmamo24tlf4zq34hfxtfe0yhbxe.lambda-url.us-west-1.on.aws",
                RENDER: `${nr.PROD}/render`,
                RENDER_ASYNC: `${nr.PROD}/renderAsync`,
                START_TOKEN_BATCH_GENERATION: `${nr.PROD}/generate`,
                START_TOKEN_BATCH_UPLOAD: `${nr.PROD}/ipfs`,
                START_TOKEN_BATCH_ZIP: `${nr.PROD}/zip`,
                TOKEN_BATCH_CSV: `${nr.PROD}/csv`,
                VALIDATE: `${nr.PROD}/validate`
            }
        }
    },
    Yse = {}.NEXT_PUBLIC_VERCEL_ENV || {}.STAGE || "preview",
    a8 = Vse[Yse],
    Qse = Ooe ? [by({
        apiKey: a8.ALCHEMY_KEY
    }), Gse({
        rpc: t => ({
            http: gr.localhost.rpcUrls.default
        })
    })] : [by({
        apiKey: a8.ALCHEMY_KEY
    })],
    Jse = [gr.mainnet];

function Xse({
    appName: t,
    supportedChains: e = Jse,
    providers: r = Qse
}) {
    const {
        chains: n,
        provider: i
    } = dB(e, r), {
        connectors: a
    } = Soe({
        appName: t,
        chains: n
    });
    return {
        client: qB({
            autoConnect: !0,
            connectors: a,
            provider: i
        }),
        chains: n
    }
}

function Zse(t) {
    return `${t.slice(0,4)}...${t.slice(-4)}`
}

function ele({
    children: t,
    avatar: e,
    supportedChains: r = [gr.mainnet],
    appName: n,
    providers: i
}) {
    const a = f.useMemo(() => Xse({
        appName: n,
        supportedChains: r,
        providers: i
    }), []);
    return le(KB, {
        client: a.client,
        children: le(oae, {
            chains: a.chains,
            avatar: e,
            children: t
        })
    })
}
const tle = {
    [gr.mainnet.id]: "https://opensea.io/assets/ethereum",
    [gr.goerli.id]: "https://testnets.opensea.io/assets/goerli",
    [gr.polygon.id]: "https://opensea.io/assets/polygon",
    [gr.polygonMumbai.id]: "https://testnets.opensea.io/assets/mumbai"
};

function rle(t, e) {
    return `${Roe}/mint/${t}/share/${e}`
}

function nle(t, e, r) {
    return `${tle[e]}/${t}/${r}`
}

function ile(t, e) {
    const r = rle(t.sk, e),
        n = t.mintPageSettings.social.twitter,
        i = `Look! I just minted a token from ${t.name}${n?`by ${n}`:""}`;
    return `http://twitter.com/share?text=${encodeURIComponent(i)}&url=${encodeURIComponent(r)}`
}

function ale(t) {
    var e;
    return (e = t.image) == null ? void 0 : e.replace("ipfs://", "https://nftstorage.link/ipfs/")
}
const NT = f.createContext({
    abi: [],
    contract: {},
    contractAddress: "",
    chainId: -1,
    projectSk: ""
});

function pi() {
    return f.useContext(NT)
}
const ole = [{
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error"
}, {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error"
}, {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error"
}, {
    inputs: [],
    name: "BurningNotAllowed",
    type: "error"
}, {
    inputs: [],
    name: "ExceedMaxPerWallet",
    type: "error"
}, {
    inputs: [],
    name: "InvalidAirdrop",
    type: "error"
}, {
    inputs: [],
    name: "InvalidMintFunction",
    type: "error"
}, {
    inputs: [],
    name: "InvalidPhase",
    type: "error"
}, {
    inputs: [],
    name: "InvalidPrice",
    type: "error"
}, {
    inputs: [],
    name: "InvalidProof",
    type: "error"
}, {
    inputs: [],
    name: "InvalidQueryRange",
    type: "error"
}, {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error"
}, {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error"
}, {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error"
}, {
    inputs: [{
        internalType: "address",
        name: "operator",
        type: "address"
    }],
    name: "OperatorNotAllowed",
    type: "error"
}, {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error"
}, {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error"
}, {
    inputs: [],
    name: "PhaseNotActive",
    type: "error"
}, {
    inputs: [],
    name: "SoldOut",
    type: "error"
}, {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error"
}, {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error"
}, {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error"
}, {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error"
}, {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "approved",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "approved",
        type: "bool"
    }],
    name: "ApprovalForAll",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        components: [{
            internalType: "uint64",
            name: "maxSupply",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "maxPerWallet",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "amountMinted",
            type: "uint64"
        }, {
            internalType: "uint256",
            name: "price",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct BaseSettings",
        name: "settings",
        type: "tuple"
    }],
    name: "BaseSettingsUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "string",
        name: "baseURI",
        type: "string"
    }],
    name: "BaseURIUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "bool",
        name: "burnActive",
        type: "bool"
    }],
    name: "BurnStatusChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256"
    }, {
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }],
    name: "ConsecutiveTransfer",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "ERC20PaymentReleased",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8"
    }],
    name: "Initialized",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
    }],
    name: "PayeeAdded",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "PaymentReceived",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "PaymentReleased",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "phaseIds",
        type: "uint256"
    }],
    name: "PhaseEnded",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "phaseId",
        type: "uint256"
    }, {
        components: [{
            internalType: "uint64",
            name: "maxSupply",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "amountMinted",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "maxPerWallet",
            type: "uint64"
        }, {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32"
        }, {
            internalType: "bool",
            name: "isActive",
            type: "bool"
        }, {
            internalType: "uint256",
            name: "price",
            type: "uint256"
        }],
        indexed: !1,
        internalType: "struct PhaseSettings",
        name: "settings",
        type: "tuple"
    }],
    name: "PhaseSettingsUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256[]",
        name: "phaseIds",
        type: "uint256[]"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "activatedPublic",
        type: "bool"
    }],
    name: "PhasesActivated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256[]",
        name: "phaseIds",
        type: "uint256[]"
    }, {
        indexed: !1,
        internalType: "bool",
        name: "pausedPublic",
        type: "bool"
    }],
    name: "PhasesPaused",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "royaltyAddress",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint96",
        name: "royaltyAmount",
        type: "uint96"
    }],
    name: "RoyaltyUpdated",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "TokenBurned",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint256",
        name: "numRecipients",
        type: "uint256"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "numTokens",
        type: "uint256"
    }],
    name: "TokensAirdropped",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "quantity",
        type: "uint256"
    }],
    name: "TokensMinted",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    inputs: [],
    name: "_baseTokenURI",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256[]",
        name: "phaseIndices",
        type: "uint256[]"
    }, {
        internalType: "bool",
        name: "activatePublic",
        type: "bool"
    }],
    name: "activatePhases",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "phaseIndex",
        type: "uint256"
    }, {
        internalType: "uint64[]",
        name: "quantities",
        type: "uint64[]"
    }, {
        internalType: "address[]",
        name: "recipients",
        type: "address[]"
    }],
    name: "airdropForPhase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint64[]",
        name: "quantities",
        type: "uint64[]"
    }, {
        internalType: "address[]",
        name: "recipients",
        type: "address[]"
    }],
    name: "airdropPublic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "baseSettings",
    outputs: [{
        internalType: "uint64",
        name: "maxSupply",
        type: "uint64"
    }, {
        internalType: "uint64",
        name: "maxPerWallet",
        type: "uint64"
    }, {
        internalType: "uint64",
        name: "amountMinted",
        type: "uint64"
    }, {
        internalType: "uint256",
        name: "price",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "phaseIndex",
        type: "uint256"
    }],
    name: "endPhase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint64[]",
        name: "phaseIndices",
        type: "uint64[]"
    }],
    name: "endPhases",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "explicitOwnershipOf",
    outputs: [{
        components: [{
            internalType: "address",
            name: "addr",
            type: "address"
        }, {
            internalType: "uint64",
            name: "startTimestamp",
            type: "uint64"
        }, {
            internalType: "bool",
            name: "burned",
            type: "bool"
        }, {
            internalType: "uint24",
            name: "extraData",
            type: "uint24"
        }],
        internalType: "struct IERC721AUpgradeable.TokenOwnership",
        name: "",
        type: "tuple"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]"
    }],
    name: "explicitOwnershipsOf",
    outputs: [{
        components: [{
            internalType: "address",
            name: "addr",
            type: "address"
        }, {
            internalType: "uint64",
            name: "startTimestamp",
            type: "uint64"
        }, {
            internalType: "bool",
            name: "burned",
            type: "bool"
        }, {
            internalType: "uint24",
            name: "extraData",
            type: "uint24"
        }],
        internalType: "struct IERC721AUpgradeable.TokenOwnership[]",
        name: "",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "wallet",
        type: "address"
    }],
    name: "getAmountMintedForOwner",
    outputs: [{
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "phaseIndex",
        type: "uint256"
    }, {
        internalType: "address",
        name: "wallet",
        type: "address"
    }],
    name: "getAmountMintedForPhase",
    outputs: [{
        internalType: "uint64",
        name: "",
        type: "uint64"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "getApproved",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "phaseIndex",
        type: "uint256"
    }],
    name: "getDataForPhase",
    outputs: [{
        components: [{
            internalType: "uint64",
            name: "maxSupply",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "amountMinted",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "maxPerWallet",
            type: "uint64"
        }, {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32"
        }, {
            internalType: "bool",
            name: "isActive",
            type: "bool"
        }, {
            internalType: "uint256",
            name: "price",
            type: "uint256"
        }],
        internalType: "struct PhaseSettings",
        name: "",
        type: "tuple"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "wallet",
        type: "address"
    }],
    name: "getMintBalance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "_name",
        type: "string"
    }, {
        internalType: "string",
        name: "_symbol",
        type: "string"
    }, {
        internalType: "string",
        name: "_baseUri",
        type: "string"
    }, {
        components: [{
            internalType: "address",
            name: "royaltyAddress",
            type: "address"
        }, {
            internalType: "uint96",
            name: "royaltyAmount",
            type: "uint96"
        }],
        internalType: "struct RoyaltySettings",
        name: "_royaltySettings",
        type: "tuple"
    }, {
        components: [{
            internalType: "uint64",
            name: "maxSupply",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "amountMinted",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "maxPerWallet",
            type: "uint64"
        }, {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32"
        }, {
            internalType: "bool",
            name: "isActive",
            type: "bool"
        }, {
            internalType: "uint256",
            name: "price",
            type: "uint256"
        }],
        internalType: "struct PhaseSettings[]",
        name: "_phases",
        type: "tuple[]"
    }, {
        components: [{
            internalType: "uint64",
            name: "maxSupply",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "maxPerWallet",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "amountMinted",
            type: "uint64"
        }, {
            internalType: "uint256",
            name: "price",
            type: "uint256"
        }],
        internalType: "struct BaseSettings",
        name: "_baseSettings",
        type: "tuple"
    }, {
        components: [{
            internalType: "address[]",
            name: "payees",
            type: "address[]"
        }, {
            internalType: "uint256[]",
            name: "shares",
            type: "uint256[]"
        }],
        internalType: "struct PaymentSplitterSettings",
        name: "_paymentSplitterSettings",
        type: "tuple"
    }, {
        internalType: "uint256",
        name: "_maxIntendedSupply",
        type: "uint256"
    }, {
        internalType: "bool",
        name: "_allowBurning",
        type: "bool"
    }, {
        internalType: "address",
        name: "_deployer",
        type: "address"
    }, {
        internalType: "address",
        name: "_operatorFilter",
        type: "address"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "operator",
        type: "address"
    }],
    name: "isApprovedForAll",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "isPublicActive",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint64[]",
        name: "quantities",
        type: "uint64[]"
    }, {
        internalType: "bytes32[][]",
        name: "proofs",
        type: "bytes32[][]"
    }, {
        internalType: "uint256[]",
        name: "phaseIndices",
        type: "uint256[]"
    }, {
        internalType: "uint64",
        name: "publicQuantity",
        type: "uint64"
    }],
    name: "mintBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "phaseIndex",
        type: "uint256"
    }, {
        internalType: "uint64",
        name: "quantity",
        type: "uint64"
    }],
    name: "mintPhase",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "phaseIndex",
        type: "uint256"
    }, {
        internalType: "uint64",
        name: "quantity",
        type: "uint64"
    }, {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]"
    }],
    name: "mintPhaseAllowlist",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint64",
        name: "quantity",
        type: "uint64"
    }],
    name: "mintPublic",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "ownerOf",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256[]",
        name: "phaseIndices",
        type: "uint256[]"
    }, {
        internalType: "bool",
        name: "pausePublic",
        type: "bool"
    }],
    name: "pausePhases",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "index",
        type: "uint256"
    }],
    name: "payee",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "releasable",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address"
    }, {
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "releasable",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address payable",
        name: "account",
        type: "address"
    }],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address"
    }, {
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address"
    }, {
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "released",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "released",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256"
    }],
    name: "royaltyInfo",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }, {
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "saleState",
    outputs: [{
        internalType: "uint64",
        name: "numPhases",
        type: "uint64"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        internalType: "bool",
        name: "approved",
        type: "bool"
    }],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "baseURI",
        type: "string"
    }],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "receiver",
        type: "address"
    }, {
        internalType: "uint96",
        name: "feeBasisPoints",
        type: "uint96"
    }],
    name: "setRoyaltyInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "shares",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
    }],
    name: "supportsInterface",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "toggleBurning",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "tokenURI",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }],
    name: "tokensOfOwner",
    outputs: [{
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "uint256",
        name: "start",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "stop",
        type: "uint256"
    }],
    name: "tokensOfOwnerIn",
    outputs: [{
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address"
    }],
    name: "totalReleased",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalReleased",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalShares",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        components: [{
            internalType: "uint64",
            name: "maxSupply",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "maxPerWallet",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "amountMinted",
            type: "uint64"
        }, {
            internalType: "uint256",
            name: "price",
            type: "uint256"
        }],
        internalType: "struct BaseSettings",
        name: "_baseSettings",
        type: "tuple"
    }],
    name: "updateBaseSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "phaseIndex",
        type: "uint256"
    }, {
        components: [{
            internalType: "uint64",
            name: "maxSupply",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "amountMinted",
            type: "uint64"
        }, {
            internalType: "uint64",
            name: "maxPerWallet",
            type: "uint64"
        }, {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32"
        }, {
            internalType: "bool",
            name: "isActive",
            type: "bool"
        }, {
            internalType: "uint256",
            name: "price",
            type: "uint256"
        }],
        internalType: "struct PhaseSettings",
        name: "phase",
        type: "tuple"
    }],
    name: "updatePhaseSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "withdrawAddresses",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    stateMutability: "payable",
    type: "receive"
}];

function sle({
    children: t,
    settings: e,
    refresh: r
}) {
    const [n, i] = f.useReducer(Date.now, Date.now()), a = f.useMemo(() => {
        const {
            contractAddress: o,
            chainId: s,
            contract: l
        } = e;
        return {
            abi: ole,
            contractAddress: o,
            chainId: s,
            contract: l,
            projectSk: l.projectSk,
            refresh() {
                return i(), r()
            },
            lastRefresh: n
        }
    }, [e, n]);
    return le(NT.Provider, {
        value: a,
        children: t
    })
}

function lle() {
    const {
        address: t
    } = cn(), {
        abi: e,
        contract: r,
        contractAddress: n,
        chainId: i
    } = pi(), {
        phases: a,
        maxPerWallet: o,
        projectSk: s
    } = r, {
        data: l
    } = Tc({
        address: n,
        abi: e,
        functionName: "totalSupply",
        chainId: i,
        watch: !uc
    }), {
        data: u,
        error: c
    } = Tc({
        address: n,
        abi: e,
        functionName: "isPublicActive",
        chainId: i,
        watch: !uc
    }), {
        data: d,
        error: h
    } = Tc({
        address: n,
        abi: e,
        functionName: "baseSettings",
        chainId: i,
        watch: !uc
    }), {
        data: m,
        error: b
    } = xU({
        contracts: r.phases.map(({
            id: g
        }) => ({
            address: n,
            abi: e,
            functionName: "getDataForPhase",
            args: [Ce.from(g)],
            chainId: i
        })),
        allowFailure: !0,
        watch: !uc
    }), {
        data: w
    } = Tc({
        address: n,
        abi: e,
        watch: !uc,
        functionName: "getAmountMintedForOwner",
        args: t ? [t] : void 0,
        enabled: !!t,
        chainId: i
    }), [{
        data: p,
        error: v
    }, x] = Ik(g => Promise.all(g.map(({
        snapshotSk: E
    }) => {
        if (E) return yy.getProof({
            projectSk: s,
            snapshotSk: E,
            address: t
        })
    }))), k = r.phases.some(({
        snapshotSk: g
    }) => g);
    f.useEffect(() => {
        k && x(r.phases).catch(g => {})
    }, [r]);
    const y = w || [],
        I = (m || []).filter(Boolean),
        N = I.length === a.length,
        U = (d == null ? void 0 : d.maxSupply.toNumber()) ?? 0;
    let W = [],
        H = 0;
    if (d && N && y) {
        const g = y.slice(0, y.length - 1),
            E = y[y.length - 1],
            P = E ? E.sub(g.reduce((K, B) => K.add(B), Ce.from(0))) : void 0;
        H = (E == null ? void 0 : E.toNumber()) || 0;
        const M = d.maxPerWallet.toNumber() || 1 / 0,
            D = Math.max(0, M - H);
        W = [...a.map(K => {
            const B = I[K.id];
            return {
                isOpen: !!B.isActive,
                mintBalance: g[K.id],
                phase: K,
                merkleProof: p == null ? void 0 : p[K.id],
                data: B
            }
        }), {
            data: d,
            isOpen: !!u,
            mintBalance: P,
            merkleProof: void 0,
            phase: {
                id: -1,
                name: "Public Sale",
                supply: U,
                maxPerWallet: o,
                price: d.price.toString(),
                snapshotSk: void 0
            }
        }].filter(({
            data: K,
            mintBalance: B,
            phase: C,
            isOpen: A,
            merkleProof: $
        }) => {
            if (C.snapshotSk && !($ != null && $.length)) return !1;
            const {
                maxSupply: X,
                amountMinted: V
            } = K, _ = !D || (X == null ? void 0 : X.gt(0)) && (V == null ? void 0 : V.gte(X));
            return !A || _ ? B == null ? void 0 : B.gt(0) : !0
        })
    }
    const ue = typeof u != "boolean" || !d || !N || k && !p || t && !w,
        L = c || h || b || v;
    return {
        phases: W,
        isSoldOut: Boolean(l == null ? void 0 : l.gte(r.supply)),
        amountMinted: (l == null ? void 0 : l.toNumber()) ?? 0,
        amountMintedByWallet: H,
        globalMaxPerWallet: (d == null ? void 0 : d.maxPerWallet.toNumber()) || 1 / 0,
        loading: ue,
        error: L
    }
}

function MT(t) {
    const e = AX(t),
        r = i_(t) === 1 ? void 0 : t;
    return {
        className: $t("border-base-border-faint", e ? "text-reverse-text" : "text-base-text"),
        style: {
            borderColor: r,
            backgroundColor: t
        },
        variant: e ? "base" : "reverse"
    }
}
const ule = ({
    address: t
}) => {
    const {
        disconnect: e
    } = fd(), {
        contract: r
    } = pi(), {
        buttonColor: n
    } = r.mintPageSettings, {
        className: i,
        ...a
    } = MT(n);
    return t ? De(Tr, {
        size: "default",
        variant: "reverse",
        border: !0,
        className: "rounded-full min-w-40",
        iconRight: le(Zp, {}),
        onClick: () => e(),
        children: [le("div", {
            className: "border border-base-border-faint rounded-full flex items-center -ml-2 mr-2",
            children: le(c$, {
                size: 24,
                address: t
            })
        }), Zse(t)]
    }) : le(ox.Custom, {
        children: ({
            account: o,
            chain: s,
            openChainModal: l,
            openConnectModal: u,
            mounted: c
        }) => le("div", {
            "aria-hidden": !c,
            className: c ? "w-full" : "opacity-0 pointer-events-none select-none",
            children: (() => {
                if (s && s.unsupported) return le(Tr, {
                    onClick: l,
                    variant: "highlight",
                    type: "button",
                    iconRight: le(Xp, {}),
                    size: "default",
                    className: "w-full",
                    iconLeft: le(jv, {}),
                    children: "Wrong network"
                });
                const d = !!(c && o && s);
                return le(Tr, {
                    onClick: u,
                    type: "button",
                    size: "default",
                    variant: "highlight",
                    "data-testid": "connect-wallet-button",
                    loading: d,
                    disabled: d,
                    iconLeft: le(jv, {}),
                    className: $t("w-full", i),
                    ...a,
                    children: "Connect Wallet"
                })
            })()
        })
    })
};
var _d = t => t.type === "checkbox",
    Al = t => t instanceof Date,
    pn = t => t == null;
const IT = t => typeof t == "object";
var Gr = t => !pn(t) && !Array.isArray(t) && IT(t) && !Al(t),
    cle = t => Gr(t) && t.target ? _d(t.target) ? t.target.checked : t.target.value : t,
    fle = t => t.substring(0, t.search(/\.\d+(\.|$)/)) || t,
    dle = (t, e) => t.has(fle(e)),
    Ad = t => Array.isArray(t) ? t.filter(Boolean) : [],
    Ir = t => t === void 0,
    Be = (t, e, r) => {
        if (!e || !Gr(t)) return r;
        const n = Ad(e.split(/[,[\].]+?/)).reduce((i, a) => pn(i) ? i : i[a], t);
        return Ir(n) || n === t ? Ir(t[e]) ? r : t[e] : n
    };
const o8 = {
        BLUR: "blur",
        FOCUS_OUT: "focusout",
        CHANGE: "change"
    },
    Ti = {
        onBlur: "onBlur",
        onChange: "onChange",
        onSubmit: "onSubmit",
        onTouched: "onTouched",
        all: "all"
    },
    ba = {
        max: "max",
        min: "min",
        maxLength: "maxLength",
        minLength: "minLength",
        pattern: "pattern",
        required: "required",
        validate: "validate"
    };
f.createContext(null);
var hle = (t, e, r, n = !0) => {
        const i = {
            defaultValues: e._defaultValues
        };
        for (const a in t) Object.defineProperty(i, a, {
            get: () => {
                const o = a;
                return e._proxyFormState[o] !== Ti.all && (e._proxyFormState[o] = !n || Ti.all), r && (r[o] = !0), t[o]
            }
        });
        return i
    },
    Jn = t => Gr(t) && !Object.keys(t).length,
    ple = (t, e, r) => {
        const {
            name: n,
            ...i
        } = t;
        return Jn(i) || Object.keys(i).length >= Object.keys(e).length || Object.keys(i).find(a => e[a] === (!r || Ti.all))
    },
    gg = t => Array.isArray(t) ? t : [t];

function mle(t) {
    const e = f.useRef(t);
    e.current = t, f.useEffect(() => {
        const r = !t.disabled && e.current.subject.subscribe({
            next: e.current.callback
        });
        return () => {
            r && r.unsubscribe()
        }
    }, [t.disabled])
}
var Si = t => typeof t == "string",
    gle = (t, e, r, n) => {
        const i = Array.isArray(t);
        return Si(t) ? (n && e.watch.add(t), Be(r, t)) : i ? t.map(a => (n && e.watch.add(a), Be(r, a))) : (n && (e.watchAll = !0), r)
    },
    op = t => typeof t == "function",
    LT = t => {
        for (const e in t)
            if (op(t[e])) return !0;
        return !1
    },
    vle = (t, e, r, n, i) => e ? {
        ...r[t],
        types: {
            ...r[t] && r[t].types ? r[t].types : {},
            [n]: i || !0
        }
    } : {},
    wx = t => /^\w*$/.test(t),
    jT = t => Ad(t.replace(/["|']|\]/g, "").split(/\.|\[/));

function lr(t, e, r) {
    let n = -1;
    const i = wx(e) ? [e] : jT(e),
        a = i.length,
        o = a - 1;
    for (; ++n < a;) {
        const s = i[n];
        let l = r;
        if (n !== o) {
            const u = t[s];
            l = Gr(u) || Array.isArray(u) ? u : isNaN(+i[n + 1]) ? {} : []
        }
        t[s] = l, t = t[s]
    }
    return t
}
const xy = (t, e, r) => {
    for (const n of r || Object.keys(t)) {
        const i = Be(t, n);
        if (i) {
            const {
                _f: a,
                ...o
            } = i;
            if (a && e(a.name)) {
                if (a.ref.focus) {
                    a.ref.focus();
                    break
                } else if (a.refs && a.refs[0].focus) {
                    a.refs[0].focus();
                    break
                }
            } else Gr(o) && xy(o, e)
        }
    }
};
var s8 = (t, e, r) => !r && (e.watchAll || e.watch.has(t) || [...e.watch].some(n => t.startsWith(n) && /^\.\w+/.test(t.slice(n.length)))),
    yle = (t, e, r) => {
        const n = Ad(Be(t, r));
        return lr(n, "root", e[r]), lr(t, r, n), t
    },
    ff = t => typeof t == "boolean",
    Ex = t => t.type === "file",
    X0 = t => Si(t) || f.isValidElement(t),
    Cx = t => t.type === "radio",
    sp = t => t instanceof RegExp;
const l8 = {
        value: !1,
        isValid: !1
    },
    u8 = {
        value: !0,
        isValid: !0
    };
var FT = t => {
    if (Array.isArray(t)) {
        if (t.length > 1) {
            const e = t.filter(r => r && r.checked && !r.disabled).map(r => r.value);
            return {
                value: e,
                isValid: !!e.length
            }
        }
        return t[0].checked && !t[0].disabled ? t[0].attributes && !Ir(t[0].attributes.value) ? Ir(t[0].value) || t[0].value === "" ? u8 : {
            value: t[0].value,
            isValid: !0
        } : u8 : l8
    }
    return l8
};
const c8 = {
    isValid: !1,
    value: null
};
var DT = t => Array.isArray(t) ? t.reduce((e, r) => r && r.checked && !r.disabled ? {
    isValid: !0,
    value: r.value
} : e, c8) : c8;

function f8(t, e, r = "validate") {
    if (X0(t) || Array.isArray(t) && t.every(X0) || ff(t) && !t) return {
        type: r,
        message: X0(t) ? t : "",
        ref: e
    }
}
var ll = t => Gr(t) && !sp(t) ? t : {
        value: t,
        message: ""
    },
    d8 = async (t, e, r, n, i) => {
        const {
            ref: a,
            refs: o,
            required: s,
            maxLength: l,
            minLength: u,
            min: c,
            max: d,
            pattern: h,
            validate: m,
            name: b,
            valueAsNumber: w,
            mount: p,
            disabled: v
        } = t._f;
        if (!p || v) return {};
        const x = o ? o[0] : a,
            k = L => {
                n && Si(L) && (x.setCustomValidity(L), x.reportValidity())
            },
            y = {},
            I = Cx(a),
            N = _d(a),
            U = I || N,
            W = (w || Ex(a)) && !a.value || e === "" || Array.isArray(e) && !e.length,
            H = vle.bind(null, b, r, y),
            ue = (L, g, E, P = ba.maxLength, M = ba.minLength) => {
                const D = L ? g : E;
                y[b] = {
                    type: L ? P : M,
                    message: D,
                    ref: a,
                    ...H(L ? P : M, D)
                }
            };
        if (i ? !Array.isArray(e) || !e.length : s && (!U && (W || pn(e)) || ff(e) && !e || N && !FT(o).isValid || I && !DT(o).isValid)) {
            const {
                value: L,
                message: g
            } = X0(s) ? {
                value: !!s,
                message: s
            } : ll(s);
            if (L && (y[b] = {
                    type: ba.required,
                    message: g,
                    ref: x,
                    ...H(ba.required, g)
                }, !r)) return k(g), y
        }
        if (!W && (!pn(c) || !pn(d))) {
            let L, g;
            const E = ll(d),
                P = ll(c);
            if (!pn(e) && !isNaN(e)) {
                const M = a.valueAsNumber || e && +e;
                pn(E.value) || (L = M > E.value), pn(P.value) || (g = M < P.value)
            } else {
                const M = a.valueAsDate || new Date(e),
                    D = B => new Date(new Date().toDateString() + " " + B),
                    G = a.type == "time",
                    K = a.type == "week";
                Si(E.value) && e && (L = G ? D(e) > D(E.value) : K ? e > E.value : M > new Date(E.value)), Si(P.value) && e && (g = G ? D(e) < D(P.value) : K ? e < P.value : M < new Date(P.value))
            }
            if ((L || g) && (ue(!!L, E.message, P.message, ba.max, ba.min), !r)) return k(y[b].message), y
        }
        if ((l || u) && !W && (Si(e) || i && Array.isArray(e))) {
            const L = ll(l),
                g = ll(u),
                E = !pn(L.value) && e.length > L.value,
                P = !pn(g.value) && e.length < g.value;
            if ((E || P) && (ue(E, L.message, g.message), !r)) return k(y[b].message), y
        }
        if (h && !W && Si(e)) {
            const {
                value: L,
                message: g
            } = ll(h);
            if (sp(L) && !e.match(L) && (y[b] = {
                    type: ba.pattern,
                    message: g,
                    ref: a,
                    ...H(ba.pattern, g)
                }, !r)) return k(g), y
        }
        if (m) {
            if (op(m)) {
                const L = await m(e),
                    g = f8(L, x);
                if (g && (y[b] = {
                        ...g,
                        ...H(ba.validate, g.message)
                    }, !r)) return k(g.message), y
            } else if (Gr(m)) {
                let L = {};
                for (const g in m) {
                    if (!Jn(L) && !r) break;
                    const E = f8(await m[g](e), x, g);
                    E && (L = {
                        ...E,
                        ...H(g, E.message)
                    }, k(E.message), r && (y[b] = L))
                }
                if (!Jn(L) && (y[b] = {
                        ref: x,
                        ...L
                    }, !r)) return y
            }
        }
        return k(!0), y
    }, ble = t => {
        const e = t.constructor && t.constructor.prototype;
        return Gr(e) && e.hasOwnProperty("isPrototypeOf")
    }, wy = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function Zo(t) {
    let e;
    const r = Array.isArray(t);
    if (t instanceof Date) e = new Date(t);
    else if (t instanceof Set) e = new Set(t);
    else if (!(wy && (t instanceof Blob || t instanceof FileList)) && (r || Gr(t)))
        if (e = r ? [] : {}, !Array.isArray(t) && !ble(t)) e = t;
        else
            for (const n in t) e[n] = Zo(t[n]);
    else return t;
    return e
}
var h8 = t => ({
    isOnSubmit: !t || t === Ti.onSubmit,
    isOnBlur: t === Ti.onBlur,
    isOnChange: t === Ti.onChange,
    isOnAll: t === Ti.all,
    isOnTouch: t === Ti.onTouched
});

function xle(t, e) {
    const r = e.slice(0, -1).length;
    let n = 0;
    for (; n < r;) t = Ir(t) ? n++ : t[e[n++]];
    return t
}

function wle(t) {
    for (const e in t)
        if (!Ir(t[e])) return !1;
    return !0
}

function fn(t, e) {
    const r = wx(e) ? [e] : jT(e),
        n = r.length == 1 ? t : xle(t, r),
        i = r[r.length - 1];
    let a;
    n && delete n[i];
    for (let o = 0; o < r.slice(0, -1).length; o++) {
        let s = -1,
            l;
        const u = r.slice(0, -(o + 1)),
            c = u.length - 1;
        for (o > 0 && (a = t); ++s < u.length;) {
            const d = u[s];
            l = l ? l[d] : t[d], c === s && (Gr(l) && Jn(l) || Array.isArray(l) && wle(l)) && (a ? delete a[d] : delete t[d]), a = l
        }
    }
    return t
}

function vg() {
    let t = [];
    return {
        get observers() {
            return t
        },
        next: i => {
            for (const a of t) a.next(i)
        },
        subscribe: i => (t.push(i), {
            unsubscribe: () => {
                t = t.filter(a => a !== i)
            }
        }),
        unsubscribe: () => {
            t = []
        }
    }
}
var lp = t => pn(t) || !IT(t);

function Tl(t, e) {
    if (lp(t) || lp(e)) return t === e;
    if (Al(t) && Al(e)) return t.getTime() === e.getTime();
    const r = Object.keys(t),
        n = Object.keys(e);
    if (r.length !== n.length) return !1;
    for (const i of r) {
        const a = t[i];
        if (!n.includes(i)) return !1;
        if (i !== "ref") {
            const o = e[i];
            if (Al(a) && Al(o) || Gr(a) && Gr(o) || Array.isArray(a) && Array.isArray(o) ? !Tl(a, o) : a !== o) return !1
        }
    }
    return !0
}
var Ey = t => {
        const e = t ? t.ownerDocument : 0,
            r = e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement;
        return t instanceof r
    },
    BT = t => t.type === "select-multiple",
    Ele = t => Cx(t) || _d(t),
    yg = t => Ey(t) && t.isConnected;

function up(t, e = {}) {
    const r = Array.isArray(t);
    if (Gr(t) || r)
        for (const n in t) Array.isArray(t[n]) || Gr(t[n]) && !LT(t[n]) ? (e[n] = Array.isArray(t[n]) ? [] : {}, up(t[n], e[n])) : pn(t[n]) || (e[n] = !0);
    return e
}

function UT(t, e, r) {
    const n = Array.isArray(t);
    if (Gr(t) || n)
        for (const i in t) Array.isArray(t[i]) || Gr(t[i]) && !LT(t[i]) ? Ir(e) || lp(r[i]) ? r[i] = Array.isArray(t[i]) ? up(t[i], []) : {
            ...up(t[i])
        } : UT(t[i], pn(e) ? {} : e[i], r[i]) : Tl(t[i], e[i]) ? delete r[i] : r[i] = !0;
    return r
}
var bg = (t, e) => UT(t, e, up(e)),
    $T = (t, {
        valueAsNumber: e,
        valueAsDate: r,
        setValueAs: n
    }) => Ir(t) ? t : e ? t === "" ? NaN : t && +t : r && Si(t) ? new Date(t) : n ? n(t) : t;

function xg(t) {
    const e = t.ref;
    if (!(t.refs ? t.refs.every(r => r.disabled) : e.disabled)) return Ex(e) ? e.files : Cx(e) ? DT(t.refs).value : BT(e) ? [...e.selectedOptions].map(({
        value: r
    }) => r) : _d(e) ? FT(t.refs).value : $T(Ir(e.value) ? t.ref.value : e.value, t)
}
var Cle = (t, e, r, n) => {
        const i = {};
        for (const a of t) {
            const o = Be(e, a);
            o && lr(i, a, o._f)
        }
        return {
            criteriaMode: r,
            names: [...t],
            fields: i,
            shouldUseNativeValidation: n
        }
    },
    bc = t => Ir(t) ? void 0 : sp(t) ? t.source : Gr(t) ? sp(t.value) ? t.value.source : t.value : t,
    kle = t => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate);

function p8(t, e, r) {
    const n = Be(t, r);
    if (n || wx(r)) return {
        error: n,
        name: r
    };
    const i = r.split(".");
    for (; i.length;) {
        const a = i.join("."),
            o = Be(e, a),
            s = Be(t, a);
        if (o && !Array.isArray(o) && r !== a) return {
            name: r
        };
        if (s && s.type) return {
            name: a,
            error: s
        };
        i.pop()
    }
    return {
        name: r
    }
}
var _le = (t, e, r, n, i) => i.isOnAll ? !1 : !r && i.isOnTouch ? !(e || t) : (r ? n.isOnBlur : i.isOnBlur) ? !t : (r ? n.isOnChange : i.isOnChange) ? t : !0,
    Ale = (t, e) => !Ad(Be(t, e)).length && fn(t, e);
const Tle = {
    mode: Ti.onSubmit,
    reValidateMode: Ti.onChange,
    shouldFocusError: !0
};

function Sle(t = {}) {
    let e = {
            ...Tle,
            ...t
        },
        r = {
            submitCount: 0,
            isDirty: !1,
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            errors: {}
        },
        n = {},
        i = Zo(e.defaultValues) || {},
        a = e.shouldUnregister ? {} : Zo(i),
        o = {
            action: !1,
            mount: !1,
            watch: !1
        },
        s = {
            mount: new Set,
            unMount: new Set,
            array: new Set,
            watch: new Set
        },
        l, u = 0,
        c = {};
    const d = {
            isDirty: !1,
            dirtyFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1
        },
        h = {
            watch: vg(),
            array: vg(),
            state: vg()
        },
        m = h8(e.mode),
        b = h8(e.reValidateMode),
        w = e.criteriaMode === Ti.all,
        p = q => oe => {
            clearTimeout(u), u = window.setTimeout(q, oe)
        },
        v = async () => {
            let q = !1;
            return d.isValid && (q = e.resolver ? Jn((await U()).errors) : await H(n, !0), q !== r.isValid && (r.isValid = q, h.state.next({
                isValid: q
            }))), q
        }, x = (q, oe = [], ie, ge, xe = !0, we = !0) => {
            if (ge && ie) {
                if (o.action = !0, we && Array.isArray(Be(n, q))) {
                    const j = ie(Be(n, q), ge.argA, ge.argB);
                    xe && lr(n, q, j)
                }
                if (d.errors && we && Array.isArray(Be(r.errors, q))) {
                    const j = ie(Be(r.errors, q), ge.argA, ge.argB);
                    xe && lr(r.errors, q, j), Ale(r.errors, q)
                }
                if (d.touchedFields && we && Array.isArray(Be(r.touchedFields, q))) {
                    const j = ie(Be(r.touchedFields, q), ge.argA, ge.argB);
                    xe && lr(r.touchedFields, q, j)
                }
                d.dirtyFields && (r.dirtyFields = bg(i, a)), h.state.next({
                    isDirty: L(q, oe),
                    dirtyFields: r.dirtyFields,
                    errors: r.errors,
                    isValid: r.isValid
                })
            } else lr(a, q, oe)
        }, k = (q, oe) => {
            lr(r.errors, q, oe), h.state.next({
                errors: r.errors
            })
        }, y = (q, oe, ie, ge) => {
            const xe = Be(n, q);
            if (xe) {
                const we = Be(a, q, Ir(ie) ? Be(i, q) : ie);
                Ir(we) || ge && ge.defaultChecked || oe ? lr(a, q, oe ? we : xg(xe._f)) : P(q, we), o.mount && v()
            }
        }, I = (q, oe, ie, ge, xe) => {
            let we = !1;
            const j = {
                    name: q
                },
                S = Be(r.touchedFields, q);
            if (d.isDirty) {
                const O = r.isDirty;
                r.isDirty = j.isDirty = L(), we = O !== j.isDirty
            }
            if (d.dirtyFields && (!ie || ge)) {
                const O = Be(r.dirtyFields, q);
                Tl(Be(i, q), oe) ? fn(r.dirtyFields, q) : lr(r.dirtyFields, q, !0), j.dirtyFields = r.dirtyFields, we = we || O !== Be(r.dirtyFields, q)
            }
            return ie && !S && (lr(r.touchedFields, q, ie), j.touchedFields = r.touchedFields, we = we || d.touchedFields && S !== ie), we && xe && h.state.next(j), we ? j : {}
        }, N = (q, oe, ie, ge) => {
            const xe = Be(r.errors, q),
                we = d.isValid && ff(oe) && r.isValid !== oe;
            if (t.delayError && ie ? (l = p(() => k(q, ie)), l(t.delayError)) : (clearTimeout(u), l = null, ie ? lr(r.errors, q, ie) : fn(r.errors, q)), (ie ? !Tl(xe, ie) : xe) || !Jn(ge) || we) {
                const j = {
                    ...ge,
                    ...we && ff(oe) ? {
                        isValid: oe
                    } : {},
                    errors: r.errors,
                    name: q
                };
                r = {
                    ...r,
                    ...j
                }, h.state.next(j)
            }
            c[q]--, d.isValidating && !Object.values(c).some(j => j) && (h.state.next({
                isValidating: !1
            }), c = {})
        }, U = async q => e.resolver ? await e.resolver({
            ...a
        }, e.context, Cle(q || s.mount, n, e.criteriaMode, e.shouldUseNativeValidation)) : {}, W = async q => {
            const {
                errors: oe
            } = await U();
            if (q)
                for (const ie of q) {
                    const ge = Be(oe, ie);
                    ge ? lr(r.errors, ie, ge) : fn(r.errors, ie)
                } else r.errors = oe;
            return oe
        }, H = async (q, oe, ie = {
            valid: !0
        }) => {
            for (const ge in q) {
                const xe = q[ge];
                if (xe) {
                    const {
                        _f: we,
                        ...j
                    } = xe;
                    if (we) {
                        const S = s.array.has(we.name),
                            O = await d8(xe, Be(a, we.name), w, e.shouldUseNativeValidation, S);
                        if (O[we.name] && (ie.valid = !1, oe)) break;
                        !oe && (Be(O, we.name) ? S ? yle(r.errors, O, we.name) : lr(r.errors, we.name, O[we.name]) : fn(r.errors, we.name))
                    }
                    j && await H(j, oe, ie)
                }
            }
            return ie.valid
        }, ue = () => {
            for (const q of s.unMount) {
                const oe = Be(n, q);
                oe && (oe._f.refs ? oe._f.refs.every(ie => !yg(ie)) : !yg(oe._f.ref)) && V(q)
            }
            s.unMount = new Set
        }, L = (q, oe) => (q && oe && lr(a, q, oe), !Tl(B(), i)), g = (q, oe, ie) => {
            const ge = {
                ...o.mount ? a : Ir(oe) ? i : Si(q) ? {
                    [q]: oe
                } : oe
            };
            return gle(q, s, ge, ie)
        }, E = q => Ad(Be(o.mount ? a : i, q, t.shouldUnregister ? Be(i, q, []) : [])), P = (q, oe, ie = {}) => {
            const ge = Be(n, q);
            let xe = oe;
            if (ge) {
                const we = ge._f;
                we && (!we.disabled && lr(a, q, $T(oe, we)), xe = wy && Ey(we.ref) && pn(oe) ? "" : oe, BT(we.ref) ? [...we.ref.options].forEach(j => j.selected = xe.includes(j.value)) : we.refs ? _d(we.ref) ? we.refs.length > 1 ? we.refs.forEach(j => (!j.defaultChecked || !j.disabled) && (j.checked = Array.isArray(xe) ? !!xe.find(S => S === j.value) : xe === j.value)) : we.refs[0] && (we.refs[0].checked = !!xe) : we.refs.forEach(j => j.checked = j.value === xe) : Ex(we.ref) ? we.ref.value = "" : (we.ref.value = xe, we.ref.type || h.watch.next({
                    name: q
                })))
            }(ie.shouldDirty || ie.shouldTouch) && I(q, xe, ie.shouldTouch, ie.shouldDirty, !0), ie.shouldValidate && K(q)
        }, M = (q, oe, ie) => {
            for (const ge in oe) {
                const xe = oe[ge],
                    we = `${q}.${ge}`,
                    j = Be(n, we);
                (s.array.has(q) || !lp(xe) || j && !j._f) && !Al(xe) ? M(we, xe, ie) : P(we, xe, ie)
            }
        }, D = (q, oe, ie = {}) => {
            const ge = Be(n, q),
                xe = s.array.has(q),
                we = Zo(oe);
            lr(a, q, we), xe ? (h.array.next({
                name: q,
                values: a
            }), (d.isDirty || d.dirtyFields) && ie.shouldDirty && (r.dirtyFields = bg(i, a), h.state.next({
                name: q,
                dirtyFields: r.dirtyFields,
                isDirty: L(q, we)
            }))) : ge && !ge._f && !pn(we) ? M(q, we, ie) : P(q, we, ie), s8(q, s) && h.state.next({}), h.watch.next({
                name: q
            })
        }, G = async q => {
            const oe = q.target;
            let ie = oe.name;
            const ge = Be(n, ie);
            if (ge) {
                let xe, we;
                const j = oe.type ? xg(ge._f) : cle(q),
                    S = q.type === o8.BLUR || q.type === o8.FOCUS_OUT,
                    O = !kle(ge._f) && !e.resolver && !Be(r.errors, ie) && !ge._f.deps || _le(S, Be(r.touchedFields, ie), r.isSubmitted, b, m),
                    z = s8(ie, s, S);
                lr(a, ie, j), S ? (ge._f.onBlur && ge._f.onBlur(q), l && l(0)) : ge._f.onChange && ge._f.onChange(q);
                const re = I(ie, j, S, !1),
                    ye = !Jn(re) || z;
                if (!S && h.watch.next({
                        name: ie,
                        type: q.type
                    }), O) return d.isValid && v(), ye && h.state.next({
                    name: ie,
                    ...z ? {} : re
                });
                if (!S && z && h.state.next({}), c[ie] = c[ie] ? c[ie] + 1 : 1, h.state.next({
                        isValidating: !0
                    }), e.resolver) {
                    const {
                        errors: ve
                    } = await U([ie]), Le = p8(r.errors, n, ie), et = p8(ve, n, Le.name || ie);
                    xe = et.error, ie = et.name, we = Jn(ve)
                } else xe = (await d8(ge, Be(a, ie), w, e.shouldUseNativeValidation))[ie], v();
                ge._f.deps && K(ge._f.deps), N(ie, we, xe, re)
            }
        }, K = async (q, oe = {}) => {
            let ie, ge;
            const xe = gg(q);
            if (h.state.next({
                    isValidating: !0
                }), e.resolver) {
                const we = await W(Ir(q) ? q : xe);
                ie = Jn(we), ge = q ? !xe.some(j => Be(we, j)) : ie
            } else q ? (ge = (await Promise.all(xe.map(async we => {
                const j = Be(n, we);
                return await H(j && j._f ? {
                    [we]: j
                } : j)
            }))).every(Boolean), !(!ge && !r.isValid) && v()) : ge = ie = await H(n);
            return h.state.next({
                ...!Si(q) || d.isValid && ie !== r.isValid ? {} : {
                    name: q
                },
                ...e.resolver || !q ? {
                    isValid: ie
                } : {},
                errors: r.errors,
                isValidating: !1
            }), oe.shouldFocus && !ge && xy(n, we => we && Be(r.errors, we), q ? xe : s.mount), ge
        }, B = q => {
            const oe = {
                ...i,
                ...o.mount ? a : {}
            };
            return Ir(q) ? oe : Si(q) ? Be(oe, q) : q.map(ie => Be(oe, ie))
        }, C = (q, oe) => ({
            invalid: !!Be((oe || r).errors, q),
            isDirty: !!Be((oe || r).dirtyFields, q),
            isTouched: !!Be((oe || r).touchedFields, q),
            error: Be((oe || r).errors, q)
        }), A = q => {
            q ? gg(q).forEach(oe => fn(r.errors, oe)) : r.errors = {}, h.state.next({
                errors: r.errors
            })
        }, $ = (q, oe, ie) => {
            const ge = (Be(n, q, {
                _f: {}
            })._f || {}).ref;
            lr(r.errors, q, {
                ...oe,
                ref: ge
            }), h.state.next({
                name: q,
                errors: r.errors,
                isValid: !1
            }), ie && ie.shouldFocus && ge && ge.focus && ge.focus()
        }, X = (q, oe) => op(q) ? h.watch.subscribe({
            next: ie => q(g(void 0, oe), ie)
        }) : g(q, oe, !0), V = (q, oe = {}) => {
            for (const ie of q ? gg(q) : s.mount) s.mount.delete(ie), s.array.delete(ie), Be(n, ie) && (oe.keepValue || (fn(n, ie), fn(a, ie)), !oe.keepError && fn(r.errors, ie), !oe.keepDirty && fn(r.dirtyFields, ie), !oe.keepTouched && fn(r.touchedFields, ie), !e.shouldUnregister && !oe.keepDefaultValue && fn(i, ie));
            h.watch.next({}), h.state.next({
                ...r,
                ...oe.keepDirty ? {
                    isDirty: L()
                } : {}
            }), !oe.keepIsValid && v()
        }, _ = (q, oe = {}) => {
            let ie = Be(n, q);
            const ge = ff(oe.disabled);
            return lr(n, q, {
                ...ie || {},
                _f: {
                    ...ie && ie._f ? ie._f : {
                        ref: {
                            name: q
                        }
                    },
                    name: q,
                    mount: !0,
                    ...oe
                }
            }), s.mount.add(q), ie ? ge && lr(a, q, oe.disabled ? void 0 : Be(a, q, xg(ie._f))) : y(q, !0, oe.value), {
                ...ge ? {
                    disabled: oe.disabled
                } : {},
                ...e.shouldUseNativeValidation ? {
                    required: !!oe.required,
                    min: bc(oe.min),
                    max: bc(oe.max),
                    minLength: bc(oe.minLength),
                    maxLength: bc(oe.maxLength),
                    pattern: bc(oe.pattern)
                } : {},
                name: q,
                onChange: G,
                onBlur: G,
                ref: xe => {
                    if (xe) {
                        _(q, oe), ie = Be(n, q);
                        const we = Ir(xe.value) && xe.querySelectorAll && xe.querySelectorAll("input,select,textarea")[0] || xe,
                            j = Ele(we),
                            S = ie._f.refs || [];
                        if (j ? S.find(O => O === we) : we === ie._f.ref) return;
                        lr(n, q, {
                            _f: {
                                ...ie._f,
                                ...j ? {
                                    refs: [...S.filter(yg), we, ...Array.isArray(Be(i, q)) ? [{}] : []],
                                    ref: {
                                        type: we.type,
                                        name: q
                                    }
                                } : {
                                    ref: we
                                }
                            }
                        }), y(q, !1, void 0, we)
                    } else ie = Be(n, q, {}), ie._f && (ie._f.mount = !1), (e.shouldUnregister || oe.shouldUnregister) && !(dle(s.array, q) && o.action) && s.unMount.add(q)
                }
            }
        }, ee = () => e.shouldFocusError && xy(n, q => q && Be(r.errors, q), s.mount), se = (q, oe) => async ie => {
            ie && (ie.preventDefault && ie.preventDefault(), ie.persist && ie.persist());
            let ge = !0,
                xe = Zo(a);
            h.state.next({
                isSubmitting: !0
            });
            try {
                if (e.resolver) {
                    const {
                        errors: we,
                        values: j
                    } = await U();
                    r.errors = we, xe = j
                } else await H(n);
                Jn(r.errors) ? (h.state.next({
                    errors: {},
                    isSubmitting: !0
                }), await q(xe, ie)) : (oe && await oe({
                    ...r.errors
                }, ie), ee())
            } catch (we) {
                throw ge = !1, we
            } finally {
                r.isSubmitted = !0, h.state.next({
                    isSubmitted: !0,
                    isSubmitting: !1,
                    isSubmitSuccessful: Jn(r.errors) && ge,
                    submitCount: r.submitCount + 1,
                    errors: r.errors
                })
            }
        }, ce = (q, oe = {}) => {
            Be(n, q) && (Ir(oe.defaultValue) ? D(q, Be(i, q)) : (D(q, oe.defaultValue), lr(i, q, oe.defaultValue)), oe.keepTouched || fn(r.touchedFields, q), oe.keepDirty || (fn(r.dirtyFields, q), r.isDirty = oe.defaultValue ? L(q, Be(i, q)) : L()), oe.keepError || (fn(r.errors, q), d.isValid && v()), h.state.next({
                ...r
            }))
        }, fe = (q, oe = {}) => {
            const ie = q || i,
                ge = Zo(ie),
                xe = q && !Jn(q) ? ge : i;
            if (oe.keepDefaultValues || (i = ie), !oe.keepValues) {
                if (oe.keepDirtyValues)
                    for (const we of s.mount) Be(r.dirtyFields, we) ? lr(xe, we, Be(a, we)) : D(we, Be(xe, we));
                else {
                    if (wy && Ir(q))
                        for (const we of s.mount) {
                            const j = Be(n, we);
                            if (j && j._f) {
                                const S = Array.isArray(j._f.refs) ? j._f.refs[0] : j._f.ref;
                                if (Ey(S)) {
                                    const O = S.closest("form");
                                    if (O) {
                                        O.reset();
                                        break
                                    }
                                }
                            }
                        }
                    n = {}
                }
                a = t.shouldUnregister ? oe.keepDefaultValues ? Zo(i) : {} : ge, h.array.next({
                    values: xe
                }), h.watch.next({
                    values: xe
                })
            }
            s = {
                mount: new Set,
                unMount: new Set,
                array: new Set,
                watch: new Set,
                watchAll: !1,
                focus: ""
            }, o.mount = !d.isValid || !!oe.keepIsValid, o.watch = !!t.shouldUnregister, h.state.next({
                submitCount: oe.keepSubmitCount ? r.submitCount : 0,
                isDirty: oe.keepDirty || oe.keepDirtyValues ? r.isDirty : !!(oe.keepDefaultValues && !Tl(q, i)),
                isSubmitted: oe.keepIsSubmitted ? r.isSubmitted : !1,
                dirtyFields: oe.keepDirty || oe.keepDirtyValues ? r.dirtyFields : oe.keepDefaultValues && q ? bg(i, q) : {},
                touchedFields: oe.keepTouched ? r.touchedFields : {},
                errors: oe.keepErrors ? r.errors : {},
                isSubmitting: !1,
                isSubmitSuccessful: !1
            })
        };
    return {
        control: {
            register: _,
            unregister: V,
            getFieldState: C,
            _executeSchema: U,
            _focusError: ee,
            _getWatch: g,
            _getDirty: L,
            _updateValid: v,
            _removeUnmounted: ue,
            _updateFieldArray: x,
            _getFieldArray: E,
            _subjects: h,
            _proxyFormState: d,
            get _fields() {
                return n
            },
            get _formValues() {
                return a
            },
            get _stateFlags() {
                return o
            },
            set _stateFlags(q) {
                o = q
            },
            get _defaultValues() {
                return i
            },
            get _names() {
                return s
            },
            set _names(q) {
                s = q
            },
            get _formState() {
                return r
            },
            set _formState(q) {
                r = q
            },
            get _options() {
                return e
            },
            set _options(q) {
                e = {
                    ...e,
                    ...q
                }
            }
        },
        trigger: K,
        register: _,
        handleSubmit: se,
        watch: X,
        setValue: D,
        getValues: B,
        reset: (q, oe) => fe(op(q) ? q(a) : q, oe),
        resetField: ce,
        clearErrors: A,
        unregister: V,
        setError: $,
        setFocus: (q, oe = {}) => {
            const ie = Be(n, q),
                ge = ie && ie._f;
            if (ge) {
                const xe = ge.refs ? ge.refs[0] : ge.ref;
                xe.focus && (xe.focus(), oe.shouldSelect && xe.select())
            }
        },
        getFieldState: C
    }
}

function Ole(t = {}) {
    const e = f.useRef(),
        [r, n] = f.useState({
            isDirty: !1,
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            errors: {},
            defaultValues: t.defaultValues
        });
    e.current || (e.current = {
        ...Sle(t),
        formState: r
    });
    const i = e.current.control;
    return i._options = t, mle({
        subject: i._subjects.state,
        callback: f.useCallback(a => {
            ple(a, i._proxyFormState, !0) && (i._formState = {
                ...i._formState,
                ...a
            }, n({
                ...i._formState
            }))
        }, [i])
    }), f.useEffect(() => {
        i._stateFlags.mount || (i._proxyFormState.isValid && i._updateValid(), i._stateFlags.mount = !0), i._stateFlags.watch && (i._stateFlags.watch = !1, i._subjects.state.next({})), i._removeUnmounted()
    }), f.useEffect(() => {
        r.submitCount && i._focusError()
    }, [i, r.submitCount]), e.current.formState = hle(r, i), e.current
}
const Ple = [{
        value: "stolen",
        label: "Minting Stolen Artwork"
    }, {
        value: "explicit",
        label: "Minting Explicit or Sensitive Content"
    }, {
        value: "spam",
        label: "Spam"
    }],
    Rle = ({
        close: t,
        contractSk: e
    }) => {
        const {
            register: r,
            handleSubmit: n
        } = Ole(), {
            address: i
        } = cn(), {
            addToast: a
        } = O2();
        async function o(s) {
            try {
                await vy.report({
                    contractSk: e,
                    reason: s.reason,
                    details: s.details,
                    reporter: i || "Unknown"
                })
            } catch {} finally {
                a({
                    level: "success",
                    message: "Report received - thank you."
                }), t()
            }
        }
        return le(M_, {
            size: "sm",
            close: t,
            header: De(Pt, {
                gap: 2,
                className: "items-center",
                children: [le(ok, {
                    size: "1.5rem"
                }), le(pt, {
                    as: "h2",
                    size: "lg",
                    weight: "bold",
                    children: "Report this project"
                })]
            }),
            children: De(Pt, {
                stack: !0,
                gap: 4,
                className: "mt-4",
                as: "form",
                onSubmit: n(o),
                children: [le(N_, {
                    label: "This project is...",
                    options: Ple,
                    ...r("reason")
                }), le(P2, {
                    label: "Additional Details (optional)",
                    ...r("details")
                }), De(Pt, {
                    gap: 2,
                    className: "justify-end",
                    children: [le(Tr, {
                        size: "default",
                        variant: "reverse",
                        border: !0,
                        onClick: t,
                        children: "Cancel"
                    }), le(Tr, {
                        size: "default",
                        variant: "highlight",
                        type: "submit",
                        children: "Submit Report"
                    })]
                })]
            })
        })
    },
    km = () => {
        const {
            contract: t
        } = pi(), [e, r] = f.useReducer(n => !n, !1);
        return De(Do, {
            children: [e && le(Rle, {
                close: r,
                contractSk: t.sk
            }), De(pt, {
                as: "footer",
                size: "xs",
                color: "base-text-muted",
                className: "text-center p-2 items-center",
                children: ["This project was created through", " ", le("a", {
                    href: "https://bueno.art",
                    className: "text-base-text font-medium underline",
                    children: "Bueno"
                }), ", a no-code platform for Web3 tools.", " ", le(Tr, {
                    iconRight: le(ok, {
                        size: "1rem"
                    }),
                    size: "xs",
                    className: "px-0",
                    variant: "muted-transparent",
                    onClick: r,
                    children: "Report"
                })]
            })]
        })
    },
    Nle = () => De(Pt, {
        stack: !0,
        gap: 4,
        className: "items-center text-center p-5",
        children: [le(jv, {
            size: "4rem"
        }), De(Pt, {
            stack: !0,
            gap: 2,
            children: [le(pt, {
                size: "md",
                weight: "medium",
                children: "Let’s get started!"
            }), le(pt, {
                size: "base",
                children: "Please connect your Wallet to see what Minting Phases are currently available to you to mint from."
            })]
        }), le(ule, {}), le(km, {})]
    }),
    WT = ({
        title: t
    }) => {
        const {
            disconnect: e
        } = fd();
        return De(Pt, {
            stack: !0,
            gap: 4,
            className: "items-center text-center py-5",
            children: [De(Pt, {
                stack: !0,
                gap: 2,
                className: "items-center text-center",
                children: [le(N$, {
                    size: "5rem"
                }), le(pt, {
                    as: "h2",
                    size: "md",
                    weight: "medium",
                    children: t
                })]
            }), le(pt, {
                size: "xs",
                color: "base-text-muted",
                children: "Try refreshing or sign in with a different Wallet:"
            }), le(Tr, {
                size: "default",
                variant: "reverse",
                border: !0,
                iconRight: le(ck, {}),
                onClick: () => e(),
                children: "Disconnect Wallet"
            })]
        })
    },
    Mle = [];

function Ile(t) {
    for (const e of t)
        if (!Mle.includes(e)) try {
            const r = new Image;
            r.src = e
        } catch {}
}

function Lle(t) {
    const {
        address: e
    } = cn(), {
        abi: r,
        contract: n,
        contractAddress: i,
        chainId: a
    } = pi(), {
        data: o,
        isLoading: s,
        error: l
    } = Tc({
        abi: r,
        address: i,
        chainId: a,
        functionName: "tokensOfOwner",
        args: [e],
        enabled: !!e
    });
    let u = (o == null ? void 0 : o.map(m => m.toNumber())) || [];
    u.sort((m, b) => m - b), t && u.length > t && (u = u.slice(-t));
    const {
        data: c,
        loading: d,
        error: h
    } = qse(n.sk, a, u);
    return Q.exports.useEffect(() => {
        c && Ile(c.map(({
            metadata: m
        }) => m.image).filter(Boolean))
    }, [c]), {
        data: c,
        loading: d || s,
        error: h || l
    }
}
const jle = ({
        limit: t,
        close: e
    }) => {
        const {
            data: r,
            error: n
        } = Lle(t);
        let i = De(Pt, {
            stack: !0,
            gap: 4,
            className: "items-center text-center",
            children: [De(pt, {
                as: "h2",
                size: "lg",
                weight: "bold",
                children: ["Loading Token", t && t > 1 ? "s" : ""]
            }), le(Cu, {})]
        });
        return n && (i = De(Pt, {
            stack: !0,
            gap: 4,
            className: "items-center text-center",
            children: [le(pt, {
                as: "h2",
                size: "lg",
                weight: "bold",
                children: "Oh dear!"
            }), De(pt, {
                size: "base",
                color: "base-text-muted",
                children: ["We couldn’t load your token image", t && t > 1 ? "s" : "", "."]
            }), le(Tr, {
                variant: "reverse",
                border: !0,
                onClick: e,
                children: "Close"
            })]
        })), r && (i = De(Pt, {
            stack: !0,
            gap: 4,
            className: "items-center text-center",
            children: [De(pt, {
                as: "h2",
                size: "lg",
                weight: "bold",
                children: ["Your Token", t && t > 1 ? "s" : ""]
            }), le(Fle, {
                tokens: r
            })]
        })), le(M_, {
            size: "sm",
            close: e,
            children: i
        })
    },
    Fle = ({
        tokens: t
    }) => {
        const {
            chainId: e,
            contract: r,
            contractAddress: n
        } = pi(), [i, a] = f.useState(0), o = t[i], s = t.length > 1, l = () => {
            a(c => c === 0 ? t.length - 1 : c - 1)
        }, u = () => {
            a(c => c === t.length - 1 ? 0 : c + 1)
        };
        return IX({
            left: c => {
                c.preventDefault(), l()
            },
            right: c => {
                c.preventDefault(), u()
            }
        }), De(Pt, {
            stack: !0,
            gap: 4,
            className: "relative w-full",
            children: [De("div", {
                className: "relative w-[420px] z-0 max-w-[50vmin] mx-auto",
                children: [le("div", {
                    className: "pt-[100%] relative",
                    children: o ? le(Dle, {
                        metadata: o.metadata
                    }, o.id) : le(Cu, {})
                }), s && De(Do, {
                    children: [le(Tr, {
                        size: "lg",
                        variant: "reverse",
                        rounded: !0,
                        className: "absolute left-[-70px] top-1/2 -mt-2 z-10",
                        onClick: l,
                        children: le(v$, {
                            weight: "bold"
                        })
                    }), le(Tr, {
                        size: "lg",
                        variant: "reverse",
                        rounded: !0,
                        className: "absolute right-[-70px] top-1/2 -mt-2 z-10",
                        onClick: u,
                        children: le(b$, {
                            weight: "bold"
                        })
                    })]
                })]
            }), De(Pt, {
                gap: 3,
                className: "justify-center",
                children: [le(Tr, {
                    href: nle(n, e, (o == null ? void 0 : o.id) || ""),
                    disabled: !o,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    variant: "reverse",
                    border: !0,
                    children: "View on OpenSea"
                }, "opensea"), le(Tr, {
                    href: ile(r, (o == null ? void 0 : o.id) || ""),
                    disabled: !o,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Share tweet"
                }, "tweet")]
            })]
        })
    },
    Dle = ({
        metadata: t
    }) => {
        const {
            contract: e
        } = pi(), [r, n] = f.useState(t.image ? "idle" : "error"), i = f.useRef(null);

        function a() {
            n("idle")
        }

        function o() {
            n("error")
        }
        return f.useEffect(() => {
            if (r === "error") return;
            const s = setTimeout(() => {
                !i.current || i.current.naturalHeight > 0 || n("loading")
            }, 100);
            return () => clearTimeout(s)
        }, []), r === "error" ? De(Pt, {
            stack: !0,
            gap: 2,
            className: "absolute inset-0 items-center justify-center",
            children: [le(Xp, {
                size: "3rem"
            }), le(pt, {
                size: "md",
                weight: "bold",
                children: "Sorry!"
            }), le(pt, {
                size: "sm",
                color: "base-text-muted",
                className: "max-w-52",
                children: "Your token image failed to load."
            })]
        }) : De(Do, {
            children: [r === "loading" && le(Cu, {
                className: "image-loading",
                isCentered: !0
            }), le("img", {
                src: ale(t),
                alt: t.name,
                ref: i,
                className: $t("absolute inset-0 object-contain", {
                    "[image-rendering:pixelated]": e.mintPageSettings.pixelated
                }),
                onError: o,
                onLoad: a
            })]
        })
    };

function Ble(t) {
    return t ? !!t.message.includes("user rejected transaction") : !1
}

function Ule(t) {
    var k, y, I;
    const {
        address: e
    } = cn(), {
        abi: r,
        contractAddress: n,
        chainId: i
    } = pi(), {
        data: a
    } = Yp({
        addressOrName: e
    }), {
        addToast: o
    } = O2();
    let s = Ce.from(0),
        l = 0;
    const u = [],
        c = [],
        d = [];
    let h = Ce.from(0);
    for (const {
            data: N,
            phase: U,
            merkleProof: W
        }
        of t.phases) {
        const {
            id: H
        } = U, ue = t.quantities[H] || 0;
        if (!(ue < 1)) {
            if (l += ue, s = s.add(N.price.mul(ue)), U.id === -1) {
                h = Ce.from(ue);
                continue
            }
            u.push(Ce.from(ue)), c.push(W || []), d.push(Ce.from(U.id))
        }
    }
    const m = {
            overrides: {
                value: s
            },
            abi: r,
            address: n,
            chainId: i,
            enabled: u.length > 0 || !h.isZero()
        },
        {
            config: b
        } = AU(u.length === 0 ? {
            ...m,
            functionName: "mintPublic",
            args: [h]
        } : u.length === 1 && h.isZero() ? (k = c[0]) != null && k.length && ((y = c[0]) == null ? void 0 : y.length) >= 1 ? {
            ...m,
            functionName: "mintPhaseAllowlist",
            args: [d[0], u[0], c[0]]
        } : {
            ...m,
            functionName: "mintPhase",
            args: [d[0], u[0]]
        } : {
            ...m,
            functionName: "mintBatch",
            args: [u, c, d, h]
        });

    function w(N) {
        Ble(N) || a != null && a.value.gte(s) && o({
            message: `Failed to mint ${l} token${l>1?"s":""}`,
            level: "danger"
        })
    }
    const p = CU({
            ...b,
            onError: w
        }),
        v = LU({
            hash: (I = p.data) == null ? void 0 : I.hash,
            onError: w,
            onSuccess(N) {
                if (N.status === 1) {
                    o({
                        message: `Successfully minted ${l} token${l>1?"s":""}`,
                        level: "success"
                    });
                    return
                }
                w()
            }
        });
    let x = !1;
    if (a) try {
        x = a.value.lt(s)
    } catch {}
    return {
        mint: p,
        transaction: v,
        insufficientBalance: x,
        loading: !a
    }
}
const $le = ({
        maxQuantity: t,
        phases: e,
        quantities: r,
        symbol: n = "ETH"
    }) => {
        const {
            contract: i
        } = pi(), {
            buttonColor: a
        } = i.mintPageSettings, o = MT(a), {
            mint: s,
            transaction: l,
            insufficientBalance: u
        } = Ule({
            phases: e,
            quantities: r
        }), {
            price: c,
            quantity: d
        } = f.useMemo(() => {
            let p = 0;
            return {
                price: Object.entries(r).reduce((x, [k, y]) => {
                    const I = e.find(({
                        phase: N
                    }) => N.id === parseInt(k));
                    return !I || !y ? x : (p += y, x.add(I.data.price.mul(y)))
                }, Ce.from(0)),
                quantity: p
            }
        }, [e, r]);
        let h = u ? `Must have at least ${Bh(c)} ${n} to mint` : d ? c.isZero() ? `Mint ${d} for free` : `Mint ${d} for ${Bh(c)} ${n}` : "Mint";
        const m = s.isLoading,
            b = l.isLoading,
            w = m || b || !d || u || d > t;
        return De(Do, {
            children: [le(Tr, {
                ...o,
                onClick: () => {
                    var p;
                    return (p = s.write) == null ? void 0 : p.call(s)
                },
                loading: b,
                disabled: w,
                children: m ? "Please confirm the transaction" : h
            }), l.status === "success" && le(jle, {
                limit: d,
                close: s.reset
            })]
        })
    },
    zT = f.forwardRef((t, e) => {
        const r = S2(e),
            {
                value: n,
                ...i
            } = t,
            a = n > (t.min || 0),
            o = n < (t.max || 0);
        return De("div", {
            className: "relative",
            children: [le(Tr, {
                size: "sm",
                className: "absolute left-2 top-1 z-1 select-none w-8 p-0",
                variant: "reverse-transparent",
                disabled: !a,
                onClick: () => {
                    if (r.current) {
                        const s = Math.max(0, Number(r.current.value) - 1);
                        WE(r.current, s.toString())
                    }
                },
                children: le(T$, {
                    size: 20
                })
            }), le(P2, {
                ...i,
                ref: r,
                type: "number",
                size: "default",
                placeholder: "...",
                value: n,
                selectOnFocus: !0,
                className: "w-full z-1 [&_input]:text-center"
            }), le(Tr, {
                size: "sm",
                variant: "reverse-transparent",
                className: "absolute right-2 top-1 z-1 select-none w-8 p-0",
                disabled: !o,
                onClick: () => {
                    if (r.current) {
                        const s = Number(r.current.value) + 1;
                        WE(r.current, s.toString())
                    }
                },
                children: le(P$, {
                    size: 20
                })
            })]
        })
    });
zT.displayName = "QuantityInput";
const Wle = {
        complete: le(nk, {
            weight: "fill",
            size: "1rem",
            className: "text-base-text-highlight"
        }),
        error: le(B$, {
            weight: "fill",
            size: "1rem",
            className: "text-base-text-error"
        }),
        idle: le("div", {
            className: "rounded-full w-4 h-4 border border-base-border"
        })
    },
    zle = {
        complete: {
            color: "base-text-highlight",
            weight: "medium"
        },
        error: {
            color: "base-text-error",
            weight: "medium"
        },
        idle: {
            color: "base-text",
            weight: "regular"
        }
    },
    Cy = ({
        requirements: t
    }) => t.length === 0 ? null : le(Pt, {
        stack: !0,
        gap: 2,
        className: "p-2 rounded-lg bg-muted-background border border-base-border-faint",
        children: t.map(({
            children: e,
            status: r,
            count: n,
            limit: i
        }, a) => De(Pt, {
            gap: 2,
            className: "items-center w-full",
            children: [Wle[r], le(pt, {
                size: "xs",
                ...zle[r],
                className: "grow",
                children: e
            }), typeof n == "number" && typeof i == "number" && De(pt, {
                as: "span",
                size: "xs",
                weight: "regular",
                color: r === "error" ? "base-text-error" : "base-text-muted",
                className: "ml-auto shrink-0",
                children: [le(pt, {
                    as: "strong",
                    size: "inherit",
                    color: r === "error" ? "current" : "base-text",
                    weight: "medium",
                    children: n
                }), " ", "/ ", i]
            })]
        }, a))
    });

function Hle({
    balance: t,
    isOpen: e,
    maxQuantity: r,
    phase: n,
    quantity: i,
    setQuantity: a
}) {
    const {
        mintBalance: o,
        phase: s,
        data: l
    } = n, {
        maxSupply: u,
        amountMinted: c,
        price: d
    } = l, {
        name: h
    } = s, m = d.isZero(), b = l.maxPerWallet.toNumber() || 1 / 0, w = (o == null ? void 0 : o.toNumber()) ?? 0, p = e ? u.toNumber() - (c == null ? void 0 : c.toNumber()) : 0, v = Math.max(0, Math.min(r, b, b - w, p)), x = w >= b || !r, k = [];
    f.useEffect(() => {
        i > v && a(s.id, v)
    }, [v]), s.id !== -1 && Number.isFinite(b) && k.push({
        children: `Max ${b.toLocaleString()} per wallet`,
        count: i + w,
        limit: b,
        status: w + i > b ? "error" : "complete"
    });
    const y = De("div", {
        className: "flex items-center justify-between",
        children: [le(pt, {
            as: "h5",
            size: "sm",
            weight: "medium",
            children: h
        }), !x && le(Do, {
            children: m ? le(pt, {
                as: "strong",
                size: "sm",
                weight: "medium",
                children: "FREE"
            }) : le(Pt, {
                gap: 1,
                className: "items-center",
                children: De(pt, {
                    as: "strong",
                    size: "sm",
                    weight: "medium",
                    children: [Bh(d), " ", (t == null ? void 0 : t.symbol) ?? "ETH"]
                })
            })
        })]
    });

    function I(N) {
        const U = parseInt(N.target.value);
        if (Number.isNaN(U)) return;
        const W = Math.max(0, Math.min(U, v));
        a(s.id, W)
    }
    return x || p <= 0 ? De(Pt, {
        stack: !0,
        gap: 4,
        className: "p-4 rounded-lg border border-base-border-faint",
        children: [y, le(Cy, {
            requirements: [{
                children: `You minted ${w} ${SX("token",w)}`,
                status: "complete"
            }]
        })]
    }) : De(Pt, {
        stack: !0,
        gap: 4,
        className: "p-4 rounded-lg border border-base-border-faint",
        children: [De(Pt, {
            stack: !0,
            gap: 2,
            children: [y, De(pt, {
                as: "span",
                size: "xs",
                children: [le(pt, {
                    as: "span",
                    size: "inherit",
                    color: "base-text-muted",
                    children: "Available:"
                }), " ", le("strong", {
                    className: "font-medium",
                    children: p
                }), " / ", u == null ? void 0 : u.toNumber()]
            })]
        }), De(Pt, {
            stack: !0,
            gap: 2,
            children: [le(Cy, {
                requirements: k
            }), le(zT, {
                name: `${s.id}.quantity`,
                onChange: I,
                value: i,
                max: v,
                min: 0
            })]
        })]
    })
}
const qle = () => {
        const {
            contract: t
        } = pi(), {
            opensea: e
        } = t.mintPageSettings.social;
        return De(Pt, {
            stack: !0,
            gap: 4,
            className: "items-center text-center py-5",
            children: [De(Pt, {
                stack: !0,
                gap: 2,
                className: "items-center text-center",
                children: [le(E$, {
                    size: "5rem"
                }), le(pt, {
                    as: "h2",
                    size: "md",
                    weight: "medium",
                    children: "Minted out!"
                })]
            }), De(pt, {
                size: "xs",
                color: "base-text-muted",
                children: ["All tokens have been minted.", " ", e ? le("a", {
                    href: `https://opensea.io/collection/${e}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "underline",
                    children: "View on OpenSea"
                }) : "You can purchase tokens on secondary marketplaces like OpenSea!"]
            }), le(km, {})]
        })
    },
    Kle = "_animate_1rdi3_12",
    Gle = {
        animate: Kle,
        in: "_in_1rdi3_1"
    },
    Vle = ({
        phases: t,
        isSoldOut: e,
        amountMintedByWallet: r,
        globalMaxPerWallet: n
    }) => {
        const {
            lastRefresh: i,
            refresh: a
        } = pi(), {
            address: o
        } = cn(), {
            data: s
        } = Yp({
            addressOrName: o
        }), [l, u] = f.useState(() => t.reduce((x, {
            phase: k,
            data: y,
            isOpen: I,
            mintBalance: N
        }) => {
            if (k.id === -1) return x[k.id] = 1, x;
            if (!I) return x[k.id] = 0, x;
            const U = y.maxPerWallet.toNumber() || 1 / 0,
                W = (N == null ? void 0 : N.toNumber()) || 0,
                H = Math.min(U, U - W);
            return x[k.id] = H > 0 ? 1 : 0, x
        }, {})), [{
            loading: c
        }, d] = Ik(a), m = t.filter(({
            isOpen: x
        }) => x).some(({
            phase: x
        }) => x.id !== -1), b = n - r, w = Object.values(l).reduce((x, k) => x + k, 0), p = f.useCallback((x, k) => {
            u(y => ({
                ...y,
                [x]: k
            }))
        }, []);
        if (e) return le(qle, {});
        if (t.length === 0) return le(WT, {
            title: "No Available Mints"
        });
        const v = [];
        return Number.isFinite(n) && n > 0 && v.push({
            children: `Max ${n} per wallet`,
            count: r + w,
            limit: n,
            status: r + w > n ? "error" : "complete"
        }), De(Pt, {
            as: "form",
            stack: !0,
            gap: 2,
            className: Gle.animate,
            children: [m && De("div", {
                className: "flex items-center justify-between",
                children: [le(pt, {
                    as: "h2",
                    size: "base",
                    weight: "medium",
                    children: "Minting Phases:"
                }), De(Pt, {
                    gap: 2,
                    className: "items-center",
                    children: [c ? le(pt, {
                        size: "xs",
                        color: "base-text-muted",
                        children: "Refreshing"
                    }) : le(pre, {
                        date: i,
                        size: "xs",
                        color: "base-text-muted",
                        addSuffix: !0
                    }), le(R_, {
                        content: "Refresh Contract",
                        children: le(Tr, {
                            variant: "reverse",
                            border: !0,
                            rounded: !0,
                            size: "sm",
                            className: "p-0 w-8",
                            onClick: d,
                            loading: c,
                            disabled: c,
                            children: le(h$, {
                                size: "1.125rem"
                            })
                        })
                    })]
                })]
            }), v.length > 0 && le("div", {
                className: "py-2",
                children: le(Cy, {
                    requirements: v
                })
            }), t.map(x => le(Hle, {
                isOpen: x.isOpen,
                phase: x,
                quantity: l[x.phase.id] || 0,
                setQuantity: p,
                balance: s,
                maxQuantity: b
            }, x.phase.id)), le($le, {
                phases: t,
                quantities: l,
                maxQuantity: b,
                symbol: s == null ? void 0 : s.symbol
            }), le(km, {})]
        })
    },
    Yle = () => {
        var r;
        const {
            chainId: t
        } = pi(), {
            switchNetwork: e
        } = q9();
        return De(Pt, {
            stack: !0,
            gap: 4,
            className: "items-center text-center p-5",
            children: [le(Xp, {
                size: "4rem"
            }), De(Pt, {
                stack: !0,
                gap: 2,
                children: [le(pt, {
                    size: "md",
                    weight: "medium",
                    children: "Wrong Network"
                }), De(pt, {
                    size: "xs",
                    color: "base-text-muted",
                    children: ["Please switch to the ", (r = DU[t]) == null ? void 0 : r.name, " network to mint."]
                })]
            }), le(Tr, {
                size: "default",
                variant: "reverse",
                border: !0,
                iconRight: le(ck, {}),
                onClick: () => e == null ? void 0 : e(t),
                children: "Switch Network"
            }), le(km, {})]
        })
    };

function Qle() {
    const {
        address: t
    } = cn(), {
        chain: e
    } = $a(), {
        chainId: r
    } = pi();
    return t ? (e == null ? void 0 : e.id) !== r ? le(Yle, {}) : le(Jle, {}) : le(Nle, {})
}
const Jle = () => {
        const {
            phases: t,
            loading: e,
            error: r,
            isSoldOut: n,
            amountMintedByWallet: i,
            globalMaxPerWallet: a
        } = lle();
        return r ? le(WT, {
            title: "Failed to verify your wallet"
        }) : e ? le(Cu, {
            className: "py-16"
        }) : le(Vle, {
            phases: t,
            isSoldOut: n,
            amountMintedByWallet: i,
            globalMaxPerWallet: a
        })
    },
    Xle = {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1,
        revalidateIfStale: !1
    },
    Zle = [gr.mainnet, gr.goerli, gr.polygon, gr.polygonMumbai],
    eue = [by({
        apiKey: BU
    })],
    tue = ({
        contractSk: t
    }) => {
        const {
            data: e,
            refetch: r
        } = Hse(t);
        return e ? le(ele, {
            appName: e.contract.name,
            supportedChains: Zle,
            providers: eue,
            children: le(sle, {
                settings: e,
                refresh: r,
                children: le(Qle, {})
            })
        }) : le(Cu, {})
    },
    rue = t => De(Wse, {
        value: Xle,
        children: [le(WX, {
            children: le(tue, {
                ...t
            })
        }), le(NW, {})]
    }),
    nue = "https://nft.bueno.art";
class iue {
    constructor(e, r, n) {
        this.key = e, this.element = r, this.root = document.createElement("div"), this.element.appendChild(this.root);
        const i = document.createElement("link");
        i.rel = "stylesheet", i.href = FU, this.element.appendChild(i), Kse({
            getBaseUri: () => (n == null ? void 0 : n.baseURI) || nue
        }), this.render()
    }
    render() {
        v3.render(le(rue, {
            contractSk: this.key
        }), this.root)
    }
    destroy() {
        for (v3.unmountComponentAtNode(this.root); this.element.firstChild;) this.element.firstChild.remove()
    }
}

function HT() {
    const t = Array.from(document.querySelectorAll(`[${Kw}]`));
    for (const e of t) {
        const r = e.getAttribute(Kw),
            n = e.getAttribute(jU),
            i = e.getAttribute(Gw);
        if (!r || i || !(e instanceof HTMLElement)) return;
        e.setAttribute(Gw, "true"), new iue(r, e, {
            baseURI: n
        })
    }
}
HT();
addEventListener("DOMContentLoaded", HT);
export {
    Je as B, MD as E, Mt as a, g5 as b, xt as c, cA as d, cue as e, Ty as g, gv as i, ON as r, P5 as s, fue as t
};
