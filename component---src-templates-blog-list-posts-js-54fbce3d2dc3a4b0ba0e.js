(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{Al62:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(e){return"til"===e&&"[TIL] "},o=function(){return!("undefined"!=typeof window&&window.location.href.includes("localhost:8000"))}},Bds9:function(e,t,n){"use strict";n.r(t);var a=n("9Hrx"),o=n("q1tI"),r=n.n(o),i=n("Bl7J"),l=n("SgMy"),p=n("e+E3"),c=n("EYWl"),s=n("Wbzz"),d=n("vOnD"),m=d.b.nav.withConfig({displayName:"PaginationPosts__PaginationWrapper",componentId:"z4y1xh-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-top:4em;justify-content:space-between;width:80%;max-width:770px;padding:25px 0;margin:0px auto;@media (max-width:780px){width:90%;padding:25px 0;}"]),g=Object(d.b)(s.Link).withConfig({displayName:"PaginationPosts__PageBtn",componentId:"z4y1xh-1"})(["border-radius:3px;background-color:var(--color-primary);border:1px solid var(--color-primary);color:var(--color-white);padding:8px 20px;min-width:130px;&:hover{background-color:var(--color-white);color:var(--color-primary);border:1px solid var(--color-primary);}@media (max-width:564px){margin-top:10px;width:100%;}"]),u=Object(d.b)(g).withConfig({displayName:"PaginationPosts__PreviousBtn",componentId:"z4y1xh-2"})(["order:1;@media (max-width:564px){order:2;}"]),h=Object(d.b)(g).withConfig({displayName:"PaginationPosts__NextBtn",componentId:"z4y1xh-3"})(["order:3;"]),f=d.b.span.withConfig({displayName:"PaginationPosts__Spacer",componentId:"z4y1xh-4"})(["display:block;min-width:130px;&.previous{order:1;}&.next{order:3;}@media (max-width:564px){display:none;&.previous{order:2;}&.next{order:3;}}"]),b=d.b.span.withConfig({displayName:"PaginationPosts__PageInfo",componentId:"z4y1xh-5"})(["order:2;padding:1em 0;@media (max-width:564px){order:1;}"]),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.nbPages,a=2===t?"/post/":"/post/pages/"+(t-1);return r.a.createElement(m,null,1!==t?r.a.createElement(u,{to:a},"‹ Newer posts"):r.a.createElement(f,{className:"previous"}),r.a.createElement(b,null,"Page ",t," of ",n),t<n?r.a.createElement(h,{to:"/post/pages/"+(t+1)},"Older posts ›"):r.a.createElement(f,{className:"next"}))},t}(r.a.Component),y=n("tJ/O"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.data.posts.edges,t=this.props.pageContext;return r.a.createElement(i.a,{location:this.props.location},r.a.createElement(c.a,null),r.a.createElement(l.a,null,r.a.createElement(y.PageTitle,null,"Blog"),r.a.createElement(y.PageTitleHr,null),r.a.createElement(p.a,{posts:e})),r.a.createElement(x,{nbPages:t.nbPages,currentPage:t.currentPage}))},t}(r.a.Component);t.default=w},b9pq:function(e,t,n){"use strict";var a=n("9Hrx"),o=n("q1tI"),r=n.n(o),i=n("Wbzz"),l=n("vOnD"),p=l.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"sc-8b91p3-0"})(["display:inline;color:var(--color-textSecondary);"]),c=Object(l.b)(i.Link).withConfig({displayName:"TagList__TagListItemLink",componentId:"sc-8b91p3-1"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:hover{border-bottom:1px dotted var(--color-textSecondary);}&:before{content:'#';}"]),s=l.b.span.withConfig({displayName:"TagList__TagListItem",componentId:"sc-8b91p3-2"})(["text-transform:uppercase;color:var(--color-textSecondary);&:not(:first-child){margin-left:0.3rem;}&:before{content:'#';}"]),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,n=e.noLink;return r.a.createElement(p,null,t.map((function(e,a){return r.a.createElement(o.Fragment,{key:"tag-list-"+a},!n&&r.a.createElement(c,{to:"/tags/"+e},e),n&&r.a.createElement(s,{to:"/tags/"+e},e),a<t.length-1?", ":"")})))},t}(r.a.Component);t.a=d},"e+E3":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),i=(n("ygxU"),n("b9pq")),l=n("tHN7"),p=n("vOnD"),c=n("LObP"),s=(n("Al62"),p.b.article.withConfig({displayName:"PostsListItem__Post",componentId:"sc-1lmpvf-0"})(["border-bottom:1px solid rgba(214,209,230,0.5);padding-bottom:1.25rem;margin-bottom:1.5rem;"])),d=Object(p.b)(r.Link).withConfig({displayName:"PostsListItem__ReadPost",componentId:"sc-1lmpvf-1"})(["display:block;font-size:0.75rem;margin-top:1rem;text-align:center;text-decoration:none;text-transform:uppercase;letter-spacing:0.05em;line-height:2;color:var(--color-text);&:hover{background-color:var(--color-grey600);border-radius:0.25rem;color:var(--color-white);}"]),m=p.b.header.withConfig({displayName:"PostsListItem__PostHeader",componentId:"sc-1lmpvf-2"})(["padding:1em 0;"]),g=p.b.p.withConfig({displayName:"PostsListItem__Excerpt",componentId:"sc-1lmpvf-3"})(["line-height:1.45;padding-bottom:0.5em;color:darkgray;"]),u=Object(p.b)(r.Link).withConfig({displayName:"PostsListItem__PostTitleLink",componentId:"sc-1lmpvf-4"})(["color:var(--color-h2);&:hover{border-bottom:1px dotted var(--color-text);}"]),h=p.b.div.withConfig({displayName:"PostsListItem__FooterLine",componentId:"sc-1lmpvf-5"})(["font-size:0.8em;"]),f=function(e){var t=e.title,n=(e.type,e.excerpt),a=e.slug,r=(e.language,e.tags),p=e.timeToRead,f=e.hero,b=e.cover;Object(l.a)().defaultLang;return o.a.createElement(s,null,o.a.createElement(m,null,f&&o.a.createElement("div",{style:{"margin-bottom":"25px"}},o.a.createElement("img",{src:f||b&&b.publicURL})),o.a.createElement("h2",null,o.a.createElement(u,{to:"/"+a},t))),o.a.createElement("section",null,o.a.createElement(g,{dangerouslySetInnerHTML:{__html:n}})),o.a.createElement("footer",null,o.a.createElement(h,null,o.a.createElement(c.c,{min:p}),o.a.createElement(c.a,null),o.a.createElement(i.a,{tags:r})),o.a.createElement(d,{to:"/"+a,"aria-label":"View "+t+" article"},"Read post ›")))};t.a=function(e){var t=e.posts,n=Object(l.a)().defaultLang;return o.a.createElement(a.Fragment,null,t.map((function(e){var t={title:e.node.frontmatter.title,type:e.node.frontmatter.type,excerpt:e.node.excerpt,slug:e.node.frontmatter.slug,timeToRead:e.node.timeToRead,language:e.node.frontmatter.language||n,tags:e.node.frontmatter.tags||[],hero:e.node.frontmatter.hero,cover:e.node.frontmatter.cover};return o.a.createElement(f,Object.assign({key:t.slug},t))})))}},"tJ/O":function(e,t,n){"use strict";n.r(t),n.d(t,"PageTitle",(function(){return y})),n.d(t,"PageTitleHr",(function(){return w}));var a=n("9Hrx"),o=n("q1tI"),r=n.n(o),i=n("Bl7J"),l=n("SgMy"),p=n("e+E3"),c=n("Wbzz"),s=n("vOnD"),d=s.b.nav.withConfig({displayName:"Pagination__PaginationWrapper",componentId:"sc-1t5yerg-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-top:4em;justify-content:space-between;width:80%;max-width:770px;padding:25px 0;margin:0px auto;@media (max-width:780px){width:90%;padding:25px 0;}"]),m=Object(s.b)(c.Link).withConfig({displayName:"Pagination__PageBtn",componentId:"sc-1t5yerg-1"})(["border-radius:3px;background-color:var(--color-primary);border:1px solid var(--color-primary);color:var(--color-white);padding:8px 20px;min-width:130px;&:hover{background-color:var(--color-white);color:var(--color-primary);border:1px solid var(--color-primary);}@media (max-width:564px){margin-top:10px;width:100%;}"]),g=Object(s.b)(m).withConfig({displayName:"Pagination__PreviousBtn",componentId:"sc-1t5yerg-2"})(["order:1;@media (max-width:564px){order:2;}"]),u=Object(s.b)(m).withConfig({displayName:"Pagination__NextBtn",componentId:"sc-1t5yerg-3"})(["order:3;"]),h=s.b.span.withConfig({displayName:"Pagination__Spacer",componentId:"sc-1t5yerg-4"})(["display:block;min-width:130px;&.previous{order:1;}&.next{order:3;}@media (max-width:564px){display:none;&.previous{order:2;}&.next{order:3;}}"]),f=s.b.span.withConfig({displayName:"Pagination__PageInfo",componentId:"sc-1t5yerg-5"})(["order:2;padding:1em 0;@media (max-width:564px){order:1;}"]),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.nbPages,a=2===t?"/":"/pages/"+(t-1);return r.a.createElement(d,null,1!==t?r.a.createElement(g,{to:a},"‹ Newer posts"):r.a.createElement(h,{className:"previous"}),r.a.createElement(f,null,"Page ",t," of ",n),t<n?r.a.createElement(u,{to:"/pages/"+(t+1)},"Older posts ›"):r.a.createElement(h,{className:"next"}))},t}(r.a.Component),x=n("EYWl"),y=s.b.h2.withConfig({displayName:"blog-list-template__PageTitle",componentId:"l3djtm-0"})([""]),w=s.b.hr.withConfig({displayName:"blog-list-template__PageTitleHr",componentId:"l3djtm-1"})(["margin:20px 0 10px 0;"]),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.data.posts.edges,t=this.props.pageContext;return r.a.createElement(i.a,{location:this.props.location},r.a.createElement(x.a,null),r.a.createElement(l.a,null,r.a.createElement(y,null,"All Posts"),r.a.createElement(w,null),r.a.createElement(p.a,{posts:e})),r.a.createElement(b,{nbPages:t.nbPages,currentPage:t.currentPage}))},t}(r.a.Component);t.default=v}}]);
//# sourceMappingURL=component---src-templates-blog-list-posts-js-54fbce3d2dc3a4b0ba0e.js.map