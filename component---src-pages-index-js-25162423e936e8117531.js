(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return m});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(152),l=a(159),s=a(156),u=a(157),d=a(154),p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return i.a.createElement(s.a,{location:this.props.location,title:e},i.a.createElement(u.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),i.a.createElement(l.a,null),a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},i.a.createElement(c.a,{style:{boxShadow:"none"},to:e.fields.slug},a)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},e}(i.a.Component);e.default=p;var m="2785444898"},152:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(33),l=a.n(c);a.d(e,"a",function(){return l.a});a(153);var s=r.a.createContext({}),u=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(t,e,a){var n;t.exports=(n=a(155))&&n.default||n},154:function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"b",function(){return s});var n=a(164),r=a.n(n),o=a(165),i=a.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var l=c.rhythm,s=c.scale},155:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(55),l=a(2),s=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},156:function(t,e,a){"use strict";a(34);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(152),l=a(154),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/techblog/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement("main",null,r),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(i.a.Component);e.a=s},157:function(t,e,a){"use strict";var n=a(158),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(166),s=a.n(l);function u(t){var e=t.description,a=t.lang,r=t.meta,i=t.keywords,c=t.title,l=n.data.site,u=e||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=u},158:function(t){t.exports={data:{site:{siteMetadata:{title:"Beanloop Tech Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Beanloop"}}}}},159:function(t,e,a){"use strict";a(160);var n=a(162),r=a(0),o=a.n(r),i=a(152),c=function(){return o.a.createElement("img",{style:{maxWith:42,maxHeight:42,width:"auto",height:"auto",flexShrink:0,marginRight:16},src:a(163),alt:"Beanloop logotype"})};var l="3285284746";e.a=function(){return o.a.createElement(i.b,{query:l,render:function(t){var e=t.site.siteMetadata,a=e.author,n=e.social;return console.log(t.avatar.childImageSharp.fixed),o.a.createElement("div",{style:{display:"flex",marginBottom:0,alignItems:"center"}},o.a.createElement(c,null),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("strong",null,a),", the passion for modern web technologies and app development."," ",o.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"Follow us on Twitter"))))},data:n})}},160:function(t,e,a){"use strict";a(161)("fixed",function(t){return function(){return t(this,"tt","","")}})},161:function(t,e,a){var n=a(11),r=a(18),o=a(19),i=/"/g,c=function(t,e,a,n){var r=String(o(t)),c="<"+e;return""!==a&&(c+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+r+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(c),n(n.P+n.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",a)}},162:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACDElEQVQoz2VSTWtTQRR9CbRR6LYbQdpFjbhIYt5HdVPEViQUirrqQhDtRqg7137QqlQw4Ju0eZOmbZq29C/oQsSFlIJEcCFUsmoRxF0XuvCj5nrOy30QdOBwP+bMmTt3ruNak3awYIeBqGjNQTEKO/C/wm7BnnV0Ic4hbrqR+QIeOZ/h14s2HFGNWIvOJeBwdLshwcaKwJeguSyj2+tC8dMLc9Ow15D/zVzQrHc54PIM/G+uDSdVLGRlhyrUxs2zODwO3PBqlVbBhpJ9/OAIez95CfIf4N8CxoHbwF6wEV/wHcjiGaaqt7SBE07PurLzJnPq0f3dfKUs/lpEsRY4A70cxIPAJ38dl1mzw8R+sBlXd0f7dAxIFyrlDOPsk4elYs2IvxoLXlVOhhycyajojN+w4tYqwuCIDuxEl2xI5KGUkk+yX4h/wOY0lyIn+QRU5nt4AeJfDn9Mm3xTybw9BfRrNWNefUnc5UU583T+MnN586yfnKRC+NO9FW5qD98Dx51/Fsgv+dxC9bmMzN97/d++NX049449hP1IwTzHIW5qZHbhT+Lnh0C8ALEX/poVD9VhdCS3WBb8/CvkLwJD4JUwg2/9Ro1iHTcKzyejcz2ZK2+lKmhDh89kKyiIw3fxObPcizlsAQS6cV30D2aSkpPGnoNwSzf/qG1DbKpnREqI97gHm3A4l2NaWPovwYhpfz11zzAAAAAASUVORK5CYII=",width:50,height:50,src:"/techblog/static/68223760279f2d326c22f5b7ec63162a/58398/beanloop_symbol_positiv.png",srcSet:"/techblog/static/68223760279f2d326c22f5b7ec63162a/58398/beanloop_symbol_positiv.png 1x,\n/techblog/static/68223760279f2d326c22f5b7ec63162a/fd23f/beanloop_symbol_positiv.png 1.5x,\n/techblog/static/68223760279f2d326c22f5b7ec63162a/fc368/beanloop_symbol_positiv.png 2x,\n/techblog/static/68223760279f2d326c22f5b7ec63162a/521d9/beanloop_symbol_positiv.png 3x"}}},site:{siteMetadata:{author:"Beanloop",social:{twitter:"BeanloopDev"}}}}}},163:function(t,e,a){t.exports=a.p+"static/beanloop_symbol_positiv-68223760279f2d326c22f5b7ec63162a.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-25162423e936e8117531.js.map