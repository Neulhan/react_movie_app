(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{34:function(e,t,a){e.exports=a(65)},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),o=a.n(s),i=a(7),c=a(6);var l=function(){return r.a.createElement("span",null,"About this page: I built it because I love movies.")},m=a(16),u=a.n(m),p=a(30),v=a(10),d=a(11),h=a(13),y=a(12),E=a(14),b=a(31),f=a.n(b);a(57);var g=function(e){e.id;var t=e.year,a=e.title,n=e.summary,s=e.poster,o=e.genres;return r.a.createElement(i.b,{to:{pathname:"/movie-detail",state:{year:t,title:a,summary:n,poster:s,genres:o}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,140)))))},_=(a(63),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://yts-proxy.now.sh/list_movies.json?sort_by=rating",e.next=3,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 3:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 6:case"end":return e.stop()}}),e)}))),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.id,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));a(64);var j=function(){return r.a.createElement("div",{className:"navigation"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"))},N=function(e){function t(){return Object(v.a)(this,t),Object(h.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),t}(r.a.Component);var O=function(){return r.a.createElement(i.a,null,r.a.createElement(j,null),r.a.createElement(c.a,{path:"/",exact:!0,component:_}),r.a.createElement(c.a,{path:"/about",component:l}),r.a.createElement(c.a,{path:"/movie-detail",component:N}))};o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.965045e3.chunk.js.map