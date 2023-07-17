(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(8),a=c.n(i),s=(c(15),c(10)),n=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=c(9),m=c(6),b=c.n(m),u=c(7),v=c.n(u),h=(c(21),"https://www.omdbapi.com/?apikey=".concat("4a1eb9ef"));function O(e){return fetch("".concat(h,"&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var x=function(e){var t=e.addMovie,c=Object(r.useState)(null),i=Object(n.a)(c,2),a=i[0],s=i[1],d=Object(r.useState)(""),m=Object(n.a)(d,2),u=m[0],h=m[1],x=Object(r.useState)(!1),p=Object(n.a)(x,2),f=p[0],g=p[1],N=Object(r.useState)(!1),y=Object(n.a)(N,2),w=y[0],I=y[1],S=function(){var e=Object(j.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(u);case 2:t=e.sent,Object.hasOwn(t,"Error")?(I(!0),s(null)):(c={title:t.Title,description:t.Plot,imgUrl:"N/A"===t.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":t.Poster,imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID),imdbId:t.imdbID},s(c)),g(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),g(!0),I(!1),S()},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input",{"is-danger":w}),value:u,onChange:function(e){return t=e.target.value,h(t),void I(!1);var t}})}),w&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button","is-light",{"is-loading":f}),disabled:0===u.length,children:a?"Search again":"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:a&&Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){a&&t(a),s(null),h("")},children:"Add to the list"})})]})]}),a&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:a})]})]})},p=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(x,{addMovie:function(e){i((function(t){return t.some((function(t){var c=t.imdbId;return e.imdbId===c}))?t:[].concat(Object(s.a)(t),[e])}))}})})]})};a.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.2f06e70c.chunk.js.map