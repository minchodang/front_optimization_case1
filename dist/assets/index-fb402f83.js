import{r as e,j as t,L as l}from"./index-5a82592b.js";import{a as n,A as c,B as o}from"./BasicTemplates-fadc63a8.js";const x=d=>{const[r,a]=e.useState([]),i=e.useCallback(()=>{n.get("http://localhost:3001/articles").then(s=>a([...s.data]))},[]);return e.useEffect(()=>{i()},[i]),t.jsx("ul",{className:"ArticleList",style:{listStyle:"none",padding:0},children:r.map(s=>t.jsx("li",{children:t.jsx(l,{to:`/view/${s.id}`,style:{textDecoration:"none",color:"initial"},children:t.jsx(c,{...s})})},s.id))})};function h(){return t.jsx(o,{children:t.jsx("div",{style:{width:"700px",margin:"auto"},children:t.jsx(x,{})})})}export{h as default};
