(this["webpackJsonpcode-hero"]=this["webpackJsonpcode-hero"]||[]).push([[0],{65:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(7),c=n.n(i),a=n(35),u=n(98),s=n(92),h=n(96),d=n(97),l=n(4),f=n(10);var v,p=Object(l.a)((function(){return Object(u.a)({root:{width:"100%"}})}))((function(e){var t=e.countries,n=e.selectedCountry,r=e.onCountrySelect,o=e.classes.root;return Object(f.jsx)(s.a,{variant:"outlined",className:o,children:Object(f.jsx)(h.a,{value:n,onChange:function(e){r(e.target.value)},children:t.map((function(e){return Object(f.jsx)(d.a,{value:e.id,children:e.name},e.id)}))})})})),b=n(24);!function(e){e[e.None=0]="None",e[e.Loading=1]="Loading",e[e.Success=2]="Success",e[e.Error=3]="Error"}(v||(v={}));var y=n(42),j=n.n(y),m=n(49),O=n(20),C=n(21),x=n(50),w=n(51),S=n(52),g=n(43),E=function(){function e(t,n){Object(O.a)(this,e),this.http=void 0,this.baseUrl=void 0,this.jsonParseReviver=void 0,this.http=n||window,this.baseUrl=void 0!==t&&null!==t?t:""}return Object(C.a)(e,[{key:"country",value:function(){var e=this,t=this.baseUrl+"/api/v1/country";t=t.replace(/[?&]$/,"");return this.http.fetch(t,{method:"GET",headers:{Accept:"text/plain"}}).then((function(t){return e.processCountry(t)}))}},{key:"processCountry",value:function(e){var t=this,n=e.status,r={};return e.headers&&e.headers.forEach&&e.headers.forEach((function(e,t){return r[t]=e})),200===n?e.text().then((function(e){var n=null,r=""===e?null:JSON.parse(e,t.jsonParseReviver);if(Array.isArray(r)){n=[];var o,i=Object(g.a)(r);try{for(i.s();!(o=i.n()).done;){var c=o.value;n.push(k.fromJS(c))}}catch(a){i.e(a)}finally{i.f()}}else n=null;return n})):200!==n&&204!==n?e.text().then((function(e){return N("An unexpected server error occurred.",n,e,r)})):Promise.resolve(null)}},{key:"test",value:function(){var e=this,t=this.baseUrl+"/api/v1/test";t=t.replace(/[?&]$/,"");return this.http.fetch(t,{method:"GET",headers:{}}).then((function(t){return e.processTest(t)}))}},{key:"processTest",value:function(e){var t=e.status,n={};return e.headers&&e.headers.forEach&&e.headers.forEach((function(e,t){return n[t]=e})),200===t?e.text().then((function(e){})):200!==t&&204!==t?e.text().then((function(e){return N("An unexpected server error occurred.",t,e,n)})):Promise.resolve(null)}},{key:"video",value:function(e){var t=this,n=this.baseUrl+"/api/v1/country/{countryId}/video";if(void 0===e||null===e)throw new Error("The parameter 'countryId' must be defined.");n=(n=n.replace("{countryId}",encodeURIComponent(""+e))).replace(/[?&]$/,"");return this.http.fetch(n,{method:"GET",headers:{Accept:"text/plain"}}).then((function(e){return t.processVideo(e)}))}},{key:"processVideo",value:function(e){var t=this,n=e.status,r={};return e.headers&&e.headers.forEach&&e.headers.forEach((function(e,t){return r[t]=e})),200===n?e.text().then((function(e){var n=null,r=""===e?null:JSON.parse(e,t.jsonParseReviver);if(Array.isArray(r)){n=[];var o,i=Object(g.a)(r);try{for(i.s();!(o=i.n()).done;){var c=o.value;n.push(A.fromJS(c))}}catch(a){i.e(a)}finally{i.f()}}else n=null;return n})):200!==n&&204!==n?e.text().then((function(e){return N("An unexpected server error occurred.",n,e,r)})):Promise.resolve(null)}}]),e}(),k=function(){function e(t){if(Object(O.a)(this,e),this.id=void 0,this.name=void 0,this.regionCode=void 0,t)for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n])}return Object(C.a)(e,[{key:"init",value:function(e){e&&(this.id=e.id,this.name=e.name,this.regionCode=e.regionCode)}},{key:"toJSON",value:function(e){return(e="object"===typeof e?e:{}).id=this.id,e.name=this.name,e.regionCode=this.regionCode,e}}],[{key:"fromJS",value:function(t){t="object"===typeof t?t:{};var n=new e;return n.init(t),n}}]),e}(),A=function(){function e(t){if(Object(O.a)(this,e),this.name=void 0,this.channel=void 0,this.views=void 0,this.thumbnail=void 0,t)for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n])}return Object(C.a)(e,[{key:"init",value:function(e){e&&(this.name=e.name,this.channel=e.channel,this.views=e.views,this.thumbnail=e.thumbnail)}},{key:"toJSON",value:function(e){return(e="object"===typeof e?e:{}).name=this.name,e.channel=this.channel,e.views=this.views,e.thumbnail=this.thumbnail,e}}],[{key:"fromJS",value:function(t){t="object"===typeof t?t:{};var n=new e;return n.init(t),n}}]),e}(),J=function(e){Object(x.a)(n,e);var t=Object(w.a)(n);function n(e,r,o,i,c){var a;return Object(O.a)(this,n),(a=t.call(this)).message=void 0,a.status=void 0,a.response=void 0,a.headers=void 0,a.result=void 0,a.isApiException=!0,a.message=e,a.status=r,a.response=o,a.headers=i,a.result=c,a}return Object(C.a)(n,null,[{key:"isApiException",value:function(e){return!0===e.isApiException}}]),n}(Object(S.a)(Error));function N(e,t,n,r,o){throw null!==o&&void 0!==o?o:new J(e,t,n,r,null)}var P=new(function(){function e(){Object(O.a)(this,e),this.codeHeroApiClient=void 0,this.codeHeroApiClient=new E("http://localhost:5000")}return Object(C.a)(e,[{key:"getCountries",value:function(){return console.log("called"),this.codeHeroApiClient.country().then((function(e){return e.map((function(e){return{id:e.id,name:e.name,regionCode:e.regionCode}}))}))}}]),e}()),T=Object(b.b)("country/fetchCountries",Object(m.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P.getCountries());case 1:case"end":return e.stop()}}),e)})))),U={countries:[],selectedCountry:0,operationState:v.None},I=Object(b.c)({name:"country",initialState:U,reducers:{selectCountry:function(e,t){e.selectedCountry=t.payload}},extraReducers:function(e){e.addCase(T.pending,(function(e){e.operationState=v.Loading})).addCase(T.fulfilled,(function(e,t){var n=t.payload;e.countries=n,e.selectedCountry=n[0].id,e.operationState=v.Success})).addCase(T.rejected,(function(e){e.operationState=v.Error}))}}),R=I.actions.selectCountry,G=I.reducer,H=Object(b.a)({reducer:{country:G}});function L(){var e=Object(a.c)((function(e){return e.country})),t=e.countries,n=e.selectedCountry,o=e.operationState,i=Object(a.b)();return Object(r.useEffect)((function(){i(T())}),[]),Object(f.jsx)(p,{countries:t,selectedCountry:n,onCountrySelect:function(e){return i(R(e))},operationState:o})}function $(){return Object(f.jsx)(L,{})}var V=function(){return Object(f.jsx)("div",{children:Object(f.jsx)($,{})})};c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(a.a,{store:H,children:Object(f.jsx)(V,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.d9cdfa80.chunk.js.map