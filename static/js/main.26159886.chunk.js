(this["webpackJsonpcreate-react-app-template"]=this["webpackJsonpcreate-react-app-template"]||[]).push([[0],{27:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),o=n(9),r=n.n(o),a=n(14),u=n(10),s=n(2),l=n(13),j=(n(27),function(){var e=Object(s.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&Object(c.jsx)("button",{onClick:function(){return t()},children:"Log In"})}),d=function(){var e=Object(s.b)(),t=e.logout;return e.isAuthenticated&&Object(c.jsx)("button",{onClick:function(){return t()},children:"Log Out"})},b=n(11),O=n.n(b),h=function(){var e=Object(s.b)(),t=e.user;return e.isAuthenticated&&Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:null===t||void 0===t?void 0:t.picture,alt:null===t||void 0===t?void 0:t.name,width:250}),Object(c.jsx)("h2",{children:null===t||void 0===t?void 0:t.name}),Object(c.jsx)("p",{children:null===t||void 0===t?void 0:t.email}),Object(c.jsx)(O.a,{data:t})]})},f=n(12),g=n.n(f);function v(){var e=Object(u.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return v=function(){return e},e}var p=Object(l.a)(v());var x=function(){var e=Object(i.useState)((function(){return localStorage.getItem("userToken")?localStorage.getItem("userToken"):""})),t=Object(a.a)(e,2)[1],n=Object(s.b)(),o=n.isLoading,r=n.isAuthenticated,u=n.getAccessTokenSilently;return Object(i.useEffect)((function(){r&&u().then((function(e){t(e),localStorage.setItem("userToken",e),console.log(e)}))}),[r,u]),o?Object(c.jsx)(g.a,{color:"#ffffff",loading:o,css:p,size:150}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"This is App#2"}),Object(c.jsx)(j,{}),Object(c.jsx)(d,{}),Object(c.jsx)(h,{})]})};r.a.render(Object(c.jsx)(s.a,{domain:"dev-163uvcf0.eu.auth0.com",clientId:"egqN71x3jTdgebBnOPlRbdOKXIVhg8Vw",redirectUri:"".concat(window.location.origin,"/auth0-2"),children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.26159886.chunk.js.map