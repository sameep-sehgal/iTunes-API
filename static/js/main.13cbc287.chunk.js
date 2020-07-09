(this.webpackJsonpitunes=this.webpackJsonpitunes||[]).push([[0],{178:function(e,t,r){e.exports=r(436)},436:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(9),l=r.n(c),s=r(33),o=r(49),u=r(172),i=r(441),p=r(168),m=r(10),E=(r(187),r(439)),g=r(442),h=r(74),f=r(75);function d(){var e=Object(h.a)(["\n    margin-top:1.5rem;\n    margin-bottom:1.5rem;\n    display:flex;\n    justify-content:center;\n"]);return d=function(){return e},e}var b=f.a.section(d()),y=r(35),O=Object(y.createTypes)("\n    FETCH_SONGS\n    FETCH_REQUESTED\n    FETCH_FAILURE\n",{}),j=Object(o.b)(null,(function(e){return{onSearch:function(t,r){e({type:O.FETCH_REQUESTED,payload:t}),r.push("/search")}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null,a.a.createElement(E.a,Object.assign({},{labelCol:{span:16},wrapperCol:{span:16}},{layout:"inline",onFinish:function(t){return e.onSearch(t.search,e.history)},size:"large"}),a.a.createElement(E.a.Item,{label:"Search iTunes",name:"search",rules:[{required:!0,message:"Search iTunes"}]},a.a.createElement(g.a,{style:{border:"solid black 1px"},placeholder:"Search..."})))),a.a.createElement("hr",null))})),v=r(160),S=r(161),T=r(173),x=r(171),k=r(438),F=r(440),C=function(e){return a.a.createElement(F.a,{title:e.trackName,extra:a.a.createElement("a",{href:e.trackViewUrl},"More"),style:{width:300,border:"solid black 1px",margin:"0.5rem"}},a.a.createElement("p",null,a.a.createElement("strong",null,"Artist: "),e.artistName),a.a.createElement("p",null,a.a.createElement("strong",null,"Track ID: "),e.trackId),a.a.createElement("p",null,a.a.createElement("strong",null,"Release Date: "),e.releaseDate),a.a.createElement("p",null,a.a.createElement("strong",null,"Country: "),e.country))};function U(){var e=Object(h.a)(["\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n"]);return U=function(){return e},e}var w,R,A=f.a.section(U()),D=function(e){Object(T.a)(r,e);var t=Object(x.a)(r);function r(e){var n;return Object(v.a)(this,r),(n=t.call(this,e)).renderSongList=function(){return n.props.songs.results.map((function(e){return a.a.createElement(C,{trackName:e.trackName,country:e.country,releaseDate:e.releaseDate,trackViewUrl:e.trackViewUrl,artistName:e.artistName,trackId:e.trackId})}))},n.renderSongs=function(){if(void 0==n.props.songs.results&&void 0==n.props.songs.error)return a.a.createElement(b,null,a.a.createElement(k.a,{size:"large"}));if(void 0!=n.props.songs.results){if(n.props.songs.results.length>0)return n.renderSongList();if(0==n.props.songs.results.length)return a.a.createElement("h3",{style:{textAlign:"center"}},a.a.createElement("strong",null,"No Results"))}return n.props.songs.error?a.a.createElement("h3",{style:{textAlign:"center"}},a.a.createElement("strong",null,n.props.songs.error)):void 0},null==n.props.searchQuery&&n.props.history.push(""),n.state={filter:"SHOW_ALL"},n}return Object(S.a)(r,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",{style:{textAlign:"center"}},"Showing ",this.props.songs.resultCount," results."),a.a.createElement(A,null,this.renderSongs()))}}]),r}(a.a.Component),H=Object(o.b)((function(e){return{songs:e.songs,searchQuery:e.searchQuery}}))(D),_=function(){return a.a.createElement(p.a,null,a.a.createElement(m.a,{path:"",component:j}),a.a.createElement(m.a,{path:"",exact:!0},a.a.createElement("h3",{style:{textAlign:"center"}},a.a.createElement("strong",null,"Search for songs on iTunes."))),a.a.createElement(m.a,{path:"/search",exact:!0,component:H}))},L=r(37),N={},I=(w={},Object(L.a)(w,O.FETCH_SONGS,(function(){var e=arguments.length>1?arguments[1]:void 0;return e.payload})),Object(L.a)(w,O.FETCH_FAILURE,(function(){return{error:"We are having trouble making your request."}})),Object(L.a)(w,y.Types.DEFAULT,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;return e})),w),Q=Object(y.createReducer)(N,I),q=(R={},Object(L.a)(R,O.FETCH_REQUESTED,(function(){var e=arguments.length>1?arguments[1]:void 0;return e.payload})),Object(L.a)(R,O.FETCH_FAILURE,(function(){return""})),Object(L.a)(R,y.Types.DEFAULT,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e})),R),G=Object(y.createReducer)(null,q),V=Object(s.c)({songs:Q,searchQuery:G}),z=r(57),J=r.n(z),W=r(80),M=r(169),B=Object(M.create)({baseURL:"https://itunes.apple.com/"}),K=function(e){return B.get("search",{term:e})},P=J.a.mark(Y),X=J.a.mark(Z);function Y(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.c)(O.FETCH_REQUESTED,Z);case 2:case"end":return e.stop()}}),P)}function Z(e){var t;return J.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(e),r.next=3,Object(W.a)(K,e.payload);case 3:return t=r.sent,console.log(t.data),r.next=7,Object(W.b)({type:O.FETCH_SONGS,payload:t.data});case 7:case"end":return r.stop()}}),X)}var $=Object(u.a)(),ee=Object(s.e)(V,Object(s.a)($));$.run(Y),l.a.render(a.a.createElement(i.a,{locale:"en"},a.a.createElement(o.a,{store:ee},a.a.createElement(_,null))),document.querySelector("#root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.13cbc287.chunk.js.map