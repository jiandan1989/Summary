(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t);a(355);var n=a(396),r=a.n(n),i=a(7),o=a.n(i),c=a(0),l=a.n(c),u=a(168),s=a(165),d=(a(359),a(394)),p=a.n(d),m=(a(361),a(373)),y=a.n(m),f=a(155),g=y.a.Item,h=g.Meta,E=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.posts;return l.a.createElement(y.a,{size:"large",itemLayout:"vertical",dataSource:e,renderItem:function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return l.a.createElement(g,{key:t.fields.slug},l.a.createElement(h,{title:l.a.createElement(f.Link,{to:t.fields.slug},a),description:l.a.createElement(c.Fragment,null,l.a.createElement(p.a,{color:"magenta"},"JAVASCRIPT"),l.a.createElement(p.a,{color:"purple"},"CSS"),l.a.createElement(p.a,{color:"#f47d31"},"HTML"))}),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}),"发布于: ",l.a.createElement("small",null,t.frontmatter.date))}})},t}(c.Component);a.d(t,"pageQuery",function(){return v});var w=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return l.a.createElement(u.a,{location:this.props.location,title:t},l.a.createElement(s.a,{title:"Blog",keywords:["blog","gatsby","javascript","react"]}),l.a.createElement(r.a,{style:{marginTop:24},bordered:!1,bodyStyle:{padding:"8px 32px 32px 32px"}},l.a.createElement(E,{posts:a})))},t}(l.a.Component),v=(t.default=w,"1623555389")},155:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(150),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(159),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e){e.exports={data:{site:{siteMetadata:{title:"个人博客"}}}}},164:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},165:function(e,t,a){"use strict";var n=a(166),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(191),u=a.n(l),s=a(155);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(s.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"zh",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},166:function(e){e.exports={data:{site:{siteMetadata:{title:"个人博客",description:"学习使用 gatsby",author:"凝聚者"}}}}},168:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),o=a(155),c=a(160),l=(a(183),a(189)),u=a.n(l),s=(a(184),a(185)),d=a.n(s),p=Object(c.a)(d.a).withConfig({displayName:"LayoutHeader__Wrapper",componentId:"sc-1k46ha2-0"})(["margin:0 auto;max-width:960px;margin-bottom:12px;"]),m=function(){return i.a.createElement(u.a,null,i.a.createElement(p,{mode:"horizontal"},i.a.createElement(d.a.Item,{key:"home"},i.a.createElement(o.Link,{to:"/"},"首页")),i.a.createElement(d.a.Item,{key:"blogs"},i.a.createElement(o.Link,{to:"/blogs"},"博客")),i.a.createElement(d.a.Item,{key:"about"},i.a.createElement(o.Link,{to:"/about"},"关于我"))))},y=c.a.main.withConfig({displayName:"BlogLayout__ContentWrapper",componentId:"sc-6yx8z0-0"})(["margin:0 auto;max-width:960px;height:calc(100% - 48px);padding:24px;"]),f=c.a.div.withConfig({displayName:"BlogLayout__Wrapper",componentId:"sc-6yx8z0-1"})(["height:100vh;"]);t.a=function(e){var t=e.children,a=e.location;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(f,null,i.a.createElement(m,{location:a,siteTitle:e.site.siteMetadata.title}),i.a.createElement(y,null,t))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-blogs-js-68a03d3c7c49a1c6d648.js.map