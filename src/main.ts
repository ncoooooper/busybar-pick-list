import {desk} from "@shared/desk";
import {wrap} from "@shared/surface";
let kit=[["Washer",4],["Screw",2],["Nut",1]] as [string,number][];
type S={at:number;have:Record<string,number>};function qty(s:S,k:[string,number]){return Math.min(k[1],s.have[k[0]]||0);}
desk<S>({name:"Pick List",accent:"#A9DA64",motion:{enabled:false},initial:()=>({at:0,have:{}}),configure:(s,v)=>{
 const rows=String(v.kit||"").split(";").map(t=>t.split("|")).filter(a=>a[0]?.trim()&&Number(a[1])>0);
 if(rows.length)kit=rows.slice(0,10).map(a=>[a[0].trim().slice(0,20),Math.min(200,Math.floor(Number(a[1])))]);s.at%=kit.length;},
 render:s=>{const k=kit[s.at],have=qty(s,k),sum=kit.reduce((n,t)=>n+qty(s,t),0),want=kit.reduce((n,t)=>n+t[1],0);
 return {title:sum===want?"Kit complete":k[0],value:have+" / "+k[1],progress:have/k[1],lines:[k[0],"Kit "+sum+" / "+want+" pieces","Outstanding "+(want-sum),
 "Wheel: browse parts","Click: pick / Start: remove","Hold OK: next incomplete"]};},
 action:(s,k)=>{const item=kit[s.at];if(k==="up"||k==="down")s.at=wrap(s.at+(k==="up"?1:-1),kit.length);
 if(k==="ok"||k==="start")s.have[item[0]]=Math.max(0,Math.min(item[1],qty(s,item)+(k==="ok"?1:-1)));
 if(k==="hold-ok")for(let n=1;n<=kit.length;n++){const ix=wrap(s.at+n,kit.length);if(qty(s,kit[ix])<kit[ix][1]){s.at=ix;break;}}}});
