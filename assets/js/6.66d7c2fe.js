(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{250:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"autorizationcodeauth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autorizationcodeauth","aria-hidden":"true"}},[t._v("#")]),t._v(" AutorizationCodeAuth")]),t._v(" "),a("p",[t._v("This way is "),a("strong",[t._v("not recommended")]),t._v(" for client-side apps and requires server-side code to run securely.\nWith this approach, you first get a code which you need to trade against the access-token.\nIn this exchange you need to provide your Client-Secret and because of that it's not recommended.\nA good thing about this method: You can always refresh your token, without having the user to auth it again.")]),t._v(" "),a("p",[t._v("More info: "),a("a",{attrs:{href:"https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthorizationCodeAuth")]),t._v(" auth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthorizationCodeAuth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      _clientId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      _secretId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:4002"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:4002"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      Scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PlaylistReadPrivate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PlaylistReadCollaborative\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AuthReceived "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Token")]),t._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExchangeCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpotifyWebAPI")]),t._v(" api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpotifyWebAPI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          TokenType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TokenType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          AccessToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccessToken\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do requests with API client")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Starts an internal HTTP Server")]),t._v("\n    auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OpenBrowser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"token-refresh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-refresh","aria-hidden":"true"}},[t._v("#")]),t._v(" Token Refresh")]),t._v(" "),a("p",[t._v("Once the "),a("code",[t._v("AccessToken")]),t._v(" is expired, you can use your "),a("code",[t._v("RefreshToken")]),t._v(" to get a new one.\nIn this procedure, no HTTP Server is needed in the background and a single HTTP Request is made.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Auth code from above")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsExpired")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Token")]),t._v(" newToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RefreshToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RefreshToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccessToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccessToken")]),t._v("\n  api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TokenType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TokenType\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);