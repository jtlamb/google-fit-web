(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"web":{"client_id":"620443792856-c4fbqhsqo4bl434mp218fj5tm80puu74.apps.googleusercontent.com","project_id":"boreal-card-305618","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"yJmfJK9xnu5g6kSLp0M6lZJq","redirect_uris":["https://boreal-card-305618.firebaseapp.com/__/auth/handler","https://jtlamb.github.io/google-fit-web","https://jtlamb.github.io/google-fit-web/home","http://localhost:3000/google-fit-web"],"javascript_origins":["http://localhost","http://localhost:5000","https://boreal-card-305618.firebaseapp.com","https://jtlamb.github.io","http://localhost:3000"]}}')},26:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(18),s=a.n(i),o=(a(26),a(2)),l=a(8),r=a(3),d=(a(27),a(0));function u(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Landing Page"}),Object(d.jsx)("p",{children:"Sign in to view your Google Fit data."})]})}var m=a(13),h=function(e){return Object(d.jsx)(m.a,{width:"40em",height:"25em",chartType:"Bar",loader:Object(d.jsx)("div",{children:"Loading Chart"}),data:[["Date",e.label],[e.date[0],e.data[0]],[e.date[1],e.data[1]],[e.date[2],e.data[2]],[e.date[3],e.data[3]],[e.date[4],e.data[4]],[e.date[5],e.data[5]],[e.date[6],e.data[6]]],options:{chart:{title:e.title,subtitle:e.subtitle}}})},b=function(e,t,a,c){return Object(d.jsxs)("div",{className:"pie",children:[Object(d.jsx)(m.a,{width:"13em",height:"13em",chartType:"PieChart",loader:Object(d.jsx)("span",{className:"material-icons loading-icon",children:"loop"}),data:[["Move Minutes","Amount"],["Actual",e],["Away from Goal",Math.max(0,t-e)]],options:{pieHole:.75,legend:"none",pieSliceText:"none",slices:[{color:a},{color:"#d3d3d3"}]}}),c]})};function j(e){var t=3.28084*e,a=t%Math.trunc(t)*12;return{ft:t=Math.trunc(t),inches:a=Math.round(a)}}function g(e){return.000621371192*e}function p(e){switch(e){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December";default:return"Invalid Month"}}a(31);function f(e){var t=Object(c.useState)(0),a=Object(o.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)(0),l=Object(o.a)(s,2),r=l[0],u=l[1],m=Object(c.useState)(!1),h=Object(o.a)(m,2),j=h[0],p=h[1],f=function(e){i(e)},y="https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",w=new Date;w.setHours(0,0,0,0);var N=864e5,k=7*N,S=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),M=Object(o.a)(S,2),D=M[0],B=M[1],P={aggregateBy:[{dataTypeName:"com.google.heart_minutes"}],startTimeMillis:w.getTime()-k+N,endTimeMillis:w.getTime()+N,bucketByTime:{durationMillis:N,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(P)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){var a=new Date(parseInt(e.startTimeMillis));if(0!==e.dataset[0].point.length){var c={actual:e.dataset[0].point[0].value[0].fpVal,goal:36,color:"#06bf9a",date:a.toDateString()};t.push(c)}else{var n={actual:0,goal:36,color:"#06bf9a",date:a.toDateString()};t.push(n)}})),B(t)})).catch((function(e){return console.log(e)}))}),[]);var F=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),C=Object(o.a)(F,2),A=C[0],I=C[1],G={aggregateBy:[{dataTypeName:"com.google.step_count.delta",dataSourceId:"derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"}],startTimeMillis:w.getTime()-k+N,endTimeMillis:w.getTime()+N,bucketByTime:{durationMillis:N,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(G)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){var a=new Date(parseInt(e.startTimeMillis));if(0!==e.dataset[0].point.length){var c={actual:e.dataset[0].point[0].value[0].intVal,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(c)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(n)}})),I(t)})).catch((function(e){return console.log(e)}))}),[]);var E=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),J=Object(o.a)(E,2),Y=J[0],z=J[1],L={aggregateBy:[{dataTypeName:"com.google.distance.delta"}],startTimeMillis:w.getTime()-k+N,endTimeMillis:w.getTime()+N,bucketByTime:{durationMillis:N,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(L)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){var a=new Date(parseInt(e.startTimeMillis));if(0!==e.dataset[0].point.length){var c={actual:g(e.dataset[0].point[0].value[0].fpVal),goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(c)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(n)}})),z(t)})).catch((function(e){return console.log(e)}))}),[]);var V=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),Z=Object(o.a)(V,2),H=Z[0],U=Z[1],R={aggregateBy:[{dataTypeName:"com.google.active_minutes"}],startTimeMillis:w.getTime()-k+N,endTimeMillis:w.getTime()+N,bucketByTime:{durationMillis:N,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(R)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){var a=new Date(parseInt(e.startTimeMillis));if(0!==e.dataset[0].point.length){var c={actual:e.dataset[0].point[0].value[0].intVal,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(c)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(n)}})),U(t)})).catch((function(e){return console.log(e)}))}),[]);var q=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),W=Object(o.a)(q,2),K=W[0],Q=W[1],X={aggregateBy:[{dataTypeName:"com.google.calories.expended"}],startTimeMillis:w.getTime()-k+N,endTimeMillis:w.getTime()+N,bucketByTime:{durationMillis:N,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(X)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){var a=new Date(parseInt(e.startTimeMillis));if(0!==e.dataset[0].point.length){var c={actual:e.dataset[0].point[0].value[0].fpVal,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(c)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(n)}})),Q(t),p(!0)})).catch((function(e){return console.log(e)}))}),[]);var $=function(e){u(0===e?r-1===-1?4:r-1:r+1===5?0:r+1)};return Object(d.jsxs)("div",{className:"home",children:[Object(d.jsxs)("div",{className:"name",children:["Welcome to Google Fit Web, ",e.user.fname,"!"]}),Object(d.jsx)("div",{children:j?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{class:"middleGraphs",children:[Object(d.jsxs)("div",{class:"mdc-chip-set mdc-chip-set--choice",role:"grid",children:[Object(d.jsx)("div",{class:0===n?"mdc-chip chip-selected":"mdc-chip",role:"row",onClick:function(){return f(0)},children:Object(d.jsx)("span",{role:"gridcell",children:Object(d.jsx)("span",{role:"button",class:"mdc-chip__primary-action",children:Object(d.jsx)("span",{class:"mdc-chip__text",children:"Heart Points"})})})}),Object(d.jsx)("div",{class:1===n?"mdc-chip chip-selected":"mdc-chip",role:"row",onClick:function(){return f(1)},children:Object(d.jsx)("span",{role:"gridcell",children:Object(d.jsx)("span",{role:"button",class:"mdc-chip__primary-action",children:Object(d.jsx)("span",{class:"mdc-chip__text",children:"Steps"})})})})]}),Object(d.jsxs)("span",{className:"dailyGoalsText",children:["Your Daily ",0===n?"Heart Points":"Steps"," Goals"]}),Object(d.jsx)("div",{className:"weeklyGoalGraphs",children:0===n?D.map((function(e){return b(e.actual,e.goal,e.color,e.date)})):A.map((function(e){return b(e.actual,e.goal,e.color,e.date)}))})]}),Object(d.jsxs)("div",{className:"bottomGraphs",children:[Object(d.jsx)("button",{class:"mdc-icon-button material-icons",onClick:function(){return $(0)},children:"keyboard_arrow_left"}),function(e){var t=[];A.map((function(e){return t.push(e.actual)}));var a=[];D.map((function(e){return a.push(e.actual)}));var c=[];Y.map((function(e){return c.push(e.actual)}));var n=[];H.map((function(e){return n.push(e.actual)}));var i=[];K.map((function(e){return i.push(e.actual)}));for(var s=[],o=1;o<8;o++){var l=new Date(w.getTime()-k+o*N);s.push(l.getMonth()+1+"/"+l.getDate())}switch(e){case 0:return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"bottomGraph",children:O(s,t)}),Object(d.jsx)("span",{className:"bottomGraph",children:_(s,c)})]});case 1:return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"bottomGraph",children:_(s,c)}),Object(d.jsx)("span",{className:"bottomGraph",children:x(s,n)})]});case 2:return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"bottomGraph",children:x(s,n)}),Object(d.jsx)("span",{className:"bottomGraph",children:T(s,a)})]});case 3:return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"bottomGraph",children:T(s,a)}),Object(d.jsx)("span",{className:"bottomGraph",children:v(s,i)})]});case 4:return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"bottomGraph",children:v(s,i)}),Object(d.jsx)("span",{className:"bottomGraph",children:O(s,t)})]})}}(r),Object(d.jsx)("button",{class:"mdc-icon-button material-icons",onClick:function(){return $(1)},children:"keyboard_arrow_right"})]})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"loading",children:"Loading Fitness Data ..."}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{class:"material-icons md-spec",children:"cached"})]})})]})}var O=function(e,t){return h({label:"Steps",title:"Steps",subtitle:"Step data for the past week",date:e,data:t})},_=function(e,t){return h({label:"Distance (miles)",title:"Distance",subtitle:"Distance travelled over the past week",date:e,data:t})},x=function(e,t){return h({label:"Move Mins",title:"Move Minutes",subtitle:"Move Minutes for the past week",date:e,data:t})},v=function(e,t){return h({label:"Calories (kCal)",title:"Calories",subtitle:"Calories expended over the past week",date:e,data:t})},T=function(e,t){return h({label:"Heart Points",title:"Heart Points",subtitle:"Heart Points over the past week",date:e,data:t})};a(32);function y(e){var t=new Date,a=864e5,n=Object(c.useState)(!1),i=Object(o.a)(n,2),s=i[0],l=i[1],r=Object(c.useState)(""),u=Object(o.a)(r,2),m=u[0],h=u[1],b=Object(c.useState)(""),g=Object(o.a)(b,2),f=g[0],O=g[1],_=Object(c.useState)(-1),x=Object(o.a)(_,2),v=x[0],T=x[1],y=Object(c.useState)(-1),w=Object(o.a)(y,2),N=w[0],k=w[1],S=new URL("https://people.googleapis.com");S.protocol="https",S.hostname="people.googleapis.com",S.pathname="/v1/people/me",S.searchParams.append("personFields","birthdays,genders,names"),S.searchParams.append("sources","READ_SOURCE_TYPE_PROFILE");var M,D="https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate";return Object(c.useEffect)((function(){fetch(S,{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e.user.accessToken)}}).then((function(e){return e.json()})).then((function(e){h("".concat(p(e.birthdays[0].date.month)," ").concat(e.birthdays[0].date.day,", ").concat(e.birthdays[0].date.year)),O("".concat(e.genders[0].formattedValue))})).catch((function(e){return console.log(e)}));var c={aggregateBy:[{dataTypeName:"com.google.weight",dataSourceId:"derived:com.google.weight:com.google.android.gms:merge_weight"}],startTimeMillis:t.getTime()-90*a,endTimeMillis:t.getTime(),bucketByTime:{durationMillis:a,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(D,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){e.bucket.forEach((function(e){0!==e.dataset[0].point.length&&-1===v&&T(e.dataset[0].point[0].value[0].fpVal)}))})).catch((function(e){return console.log(e)}));var n={aggregateBy:[{dataTypeName:"com.google.height",dataSourceId:"derived:com.google.height:com.google.android.gms:merge_height"}],startTimeMillis:t.getTime()-90*a,endTimeMillis:t.getTime(),bucketByTime:{durationMillis:a,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(D,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.bucket.forEach((function(e){0!==e.dataset[0].point.length&&-1===N&&k(e.dataset[0].point[0].value[0].fpVal)}))})).catch((function(e){return console.log(e)})),l(!0)}),[e.user.authenticated]),Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsx)("img",{src:e.user.pfPic,alt:"Profile",className:"pfp"}),Object(d.jsxs)("span",{className:"name",children:[e.user.fname," ",e.user.lname]}),Object(d.jsx)("div",{class:"mdc-data-table basic-info",children:Object(d.jsx)("div",{class:"mdc-data-table__table-container",children:Object(d.jsxs)("table",{class:"mdc-data-table__table",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{class:"mdc-data-table__header-row",children:Object(d.jsx)("th",{class:"mdc-data-table__header-cell",children:Object(d.jsx)("span",{className:"tableTitle",children:"Basic Information"})})})}),Object(d.jsxs)("tbody",{class:"mdc-data-table__content",children:[Object(d.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(d.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:"Birthday"}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:s?m:"\u2014"})]}),Object(d.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(d.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:"Gender"}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:s?f:"\u2014"})]}),Object(d.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(d.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:"Weight"}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:-1===v?"\u2014":Math.round((M=v,2.20462*M))+" lbs"})]}),Object(d.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(d.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:"Height"}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:-1===N?"\u2014":"".concat(j(N).ft," ft ").concat(j(N).inches," in")})]})]})]})})}),Object(d.jsx)("div",{className:"footnote",children:"*Shows most recent height and weight data inputted within the last 90 days"})]})}a(33);function w(e){var t="https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",a=new Date,n=new Date(a);a.setHours(0,0,0,0);var i=36e5,s=864e5,l=7*s,r=Object(c.useState)(!1),u=Object(o.a)(r,2),m=u[0],h=u[1],j=Object(c.useState)(new Date(a)),f=Object(o.a)(j,2),O=f[0],_=f[1],x=Object(c.useState)(new Date(a)),v=Object(o.a)(x,2),T=v[0],y=v[1],w=function(e){return e.getTimezoneOffset()<function(){var e=new Date(0,1),t=new Date(6,1);return Math.max(e.getTimezoneOffset(),t.getTimezoneOffset())}()},N=function(e){var t=new Date(O.getTime()+2*e*l);t.getTime()<=n.getTime()?!w(t)&&w(O)?_(new Date(t.getTime()+i)):w(t)&&!w(O)?_(new Date(t.getTime()-i)):_(t):console.log("Stopped user from navigating to future dates.")},k=function(e){h(!1);var t=new Date(O.getTime()-e*s);!w(t)&&w(O)?y(new Date(t.getTime()+i)):w(t)&&!w(O)?y(new Date(t.getTime()-i)):y(t)},S=Object(c.useState)({actual:0,goal:0,color:"",title:""}),M=Object(o.a)(S,2),D=M[0],B=M[1],P=Object(c.useState)([0]),F=Object(o.a)(P,2),C=F[0],A=F[1],I=Object(c.useState)({actual:0,goal:0,color:"",title:""}),G=Object(o.a)(I,2),E=G[0],J=G[1],Y=Object(c.useState)([0]),z=Object(o.a)(Y,2),L=z[0],V=z[1],Z=Object(c.useState)([0]),H=Object(o.a)(Z,2),U=H[0],R=H[1],q=Object(c.useState)([0]),W=Object(o.a)(q,2),K=W[0],Q=W[1],X=Object(c.useState)([0]),$=Object(o.a)(X,2),ee=$[0],te=$[1];Object(c.useEffect)((function(){var a={aggregateBy:[{dataTypeName:"com.google.heart_minutes"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:s,period:{type:"day",value:1,timeZoneId:"America/New_York"}}},c={aggregateBy:[{dataTypeName:"com.google.heart_minutes"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:i,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){if(0!==e.bucket[0].dataset[0].point.length){var t={actual:e.bucket[0].dataset[0].point[0].value[0].fpVal,goal:36,color:"#06bf9a",title:"Heart Points"};B(t)}else{B({actual:0,goal:36,color:"#06bf9a",title:"Heart Points"})}})).catch((function(e){return console.log(e)})),fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){0!==e.dataset[0].point.length?t.push(e.dataset[0].point[0].value[0].fpVal):t.push(0)})),A(t)})).catch((function(e){return console.log(e)}));var n={aggregateBy:[{dataTypeName:"com.google.step_count.delta",dataSourceId:"derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s,bucketByTime:{durationMillis:s,period:{type:"day",value:1,timeZoneId:"America/New_York"}}},o={aggregateBy:[{dataTypeName:"com.google.step_count.delta",dataSourceId:"derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:i,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){if(0!==e.bucket[0].dataset[0].point.length){var t={actual:e.bucket[0].dataset[0].point[0].value[0].intVal,goal:15e3,color:"#4285F4",title:"Steps"};J(t)}else{J({actual:0,goal:15e3,color:"#4285F4",title:"Steps"})}})).catch((function(e){return console.log(e)})),fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){0!==e.dataset[0].point.length?t.push(e.dataset[0].point[0].value[0].intVal):t.push(0)})),V(t)})).catch((function(e){return console.log(e)}));var l={aggregateBy:[{dataTypeName:"com.google.distance.delta"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:i,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(l)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){0!==e.dataset[0].point.length?t.push(g(e.dataset[0].point[0].value[0].fpVal).toFixed(2)):t.push(g(0).toFixed(2))})),R(t)})).catch((function(e){return console.log(e)}));var r={aggregateBy:[{dataTypeName:"com.google.calories.expended"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:i,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){0!==e.dataset[0].point.length?t.push(Math.round(e.dataset[0].point[0].value[0].fpVal)):t.push(0)})),Q(t)})).catch((function(e){return console.log(e)}));var d={aggregateBy:[{dataTypeName:"com.google.active_minutes"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:i,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(d)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){0!==e.dataset[0].point.length?t.push(e.dataset[0].point[0].value[0].intVal):t.push(0)})),te(t),h(!0)})).catch((function(e){return console.log(e)}))}),[T]);var ae=Object(c.useState)([{time:"",hp:0,step:0,dist:0,cals:0,mm:0}]),ce=Object(o.a)(ae,2),ne=ce[0],ie=ce[1];return Object(c.useEffect)((function(){for(var e=[],t=0;t<L.length;t++){var a={time:new Date(T.getTime()+t*i).toLocaleTimeString(),hp:C[t],step:L[t],dist:U[t],cals:K[t],mm:ee[t]};e.push(a)}ie(e)}),[T,C,L,U,K,ee]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"pageTitle",children:"Your Fitness Journal"}),Object(d.jsxs)("div",{className:"topNav",children:[Object(d.jsx)("div",{className:"monthYear",children:function(){var e=new Date(O.getTime()-2*l+s);return O.getFullYear()!==e.getFullYear()?"".concat(p(e.getMonth()+1)," ").concat(e.getFullYear()," \u2014 ").concat(p(O.getMonth()+1)," ").concat(O.getFullYear()):O.getMonth()!==e.getMonth()?"".concat(p(e.getMonth()+1)," \u2014 ").concat(p(O.getMonth()+1)," ").concat(O.getFullYear()):"".concat(p(O.getMonth()+1)," ").concat(O.getFullYear())}()}),Object(d.jsxs)("div",{className:"topDates",children:[Object(d.jsx)("button",{class:"mdc-icon-button material-icons",onClick:function(){return N(-1)},children:"keyboard_arrow_left"}),function(){for(var e=[],t=14;t>0;t--){var a=new Date(O.getTime()-2*l+t*s);!w(a)&&w(O)?e.push(new Date(a.getTime()+i)):w(a)&&!w(O)?e.push(new Date(a.getTime()-i)):e.push(a)}return Object(d.jsx)("div",{className:"days",children:e.map((function(e,t){return Object(d.jsx)("div",{className:"day",children:Object(d.jsx)("button",{class:e.getTime()===T.getTime()?"mdc-icon-button dateSelected":"mdc-icon-button",onClick:function(){return k(t)},children:e.getDate()})})}))})}(),Object(d.jsx)("button",{class:"mdc-icon-button material-icons",onClick:function(){return N(1)},children:"keyboard_arrow_right"})]})]}),Object(d.jsxs)("div",{className:"bottomSection",children:[Object(d.jsxs)("div",{className:"log",children:[Object(d.jsx)("span",{className:"currDate",children:p(T.getMonth()+1)+" "+T.getDate()+","+T.getFullYear()}),Object(d.jsx)("div",{class:"mdc-data-table mdc-data-table--sticky-header",children:Object(d.jsx)("div",{class:"mdc-data-table__table-container",children:Object(d.jsxs)("table",{class:"mdc-data-table__table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{class:"mdc-data-table__header-row",children:[Object(d.jsx)("th",{class:"mdc-data-table__header-cell header-text",role:"columnheader",scope:"col",children:"Time"}),Object(d.jsx)("th",{class:"mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text",role:"columnheader",scope:"col",children:"Heart Points"}),Object(d.jsx)("th",{class:"mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text",role:"columnheader",scope:"col",children:"Steps"}),Object(d.jsx)("th",{class:"mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text",role:"columnheader",scope:"col",children:"Distance (mi)"}),Object(d.jsx)("th",{class:"mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text",role:"columnheader",scope:"col",children:"Calories (kCal)"}),Object(d.jsx)("th",{class:"mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text",role:"columnheader",scope:"col",children:"Move Minutes"})]})}),Object(d.jsx)("tbody",{class:"mdc-data-table__content",children:m?ne.map((function(e){return Object(d.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(d.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:e.time}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:e.hp}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:e.step}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:e.dist}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:e.cals}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:e.mm})]})})):ne.map((function(e){return Object(d.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(d.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:e.time}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:"\u2014"}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:"\u2014"}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:"\u2014"}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:"\u2014"}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:"\u2014"})]})}))})]})})})]}),Object(d.jsxs)("div",{className:"journalGraphs",children:[Object(d.jsxs)("div",{className:"stepsData",children:[Object(d.jsx)("span",{class:"material-icons stepsIcon",children:"directions_walk"}),Object(d.jsxs)("div",{className:"stepsText",children:[m?E.actual:"\u2014"," Steps"]})]}),Object(d.jsxs)("div",{className:"heartPointsData",children:[Object(d.jsx)("span",{class:"material-icons heartPointsIcon",children:"favorite_border"}),Object(d.jsxs)("div",{className:"heartPointsText",children:[m?D.actual:"\u2014"," Heart Points"]})]}),Object(d.jsxs)("div",{className:"goalData",children:[Object(d.jsx)("div",{className:"logDataGraphTitle",children:"% Daily Goal"}),Object(d.jsxs)("div",{className:"goalDataGraphs",children:[m?b(E.actual,E.goal,E.color,E.title):b(0,1,"","Loading.."),m?b(D.actual,D.goal,D.color,D.title):b(0,1,"","Loading..")]})]})]})]})]})}function N(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsx)("p",{children:"Under Construction"})]})}var k=a(14),S=a(20),M={authenticated:!1,name:"",fname:"",lname:"",pfPic:"",email:"",accessToken:""},D=S.web.client_id;function B(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(c.useContext)(C).setUser;return Object(d.jsx)("div",{children:a?Object(d.jsx)(k.GoogleLogout,{clientId:D,buttonText:"Logout",onLogoutSuccess:function(){n(!1),i(M)},onFailure:function(){alert("Failed to logout")}}):Object(d.jsx)(k.GoogleLogin,{clientId:D,buttonText:"Login",onSuccess:function(e){var t,a,c,s,o,l,r;e.accessToken&&(n(!0),i((t=!0,a=e.getBasicProfile().getName(),c=e.getBasicProfile().getGivenName(),s=e.getBasicProfile().getFamilyName(),o=e.getBasicProfile().getImageUrl().slice(0,e.getBasicProfile().getImageUrl().lastIndexOf("=",e.getBasicProfile().getImageUrl().length-1))+"=s1000-c",l=e.getBasicProfile().getEmail(),r=e.accessToken,{authenticated:t,name:a,fname:c,lname:s,pfPic:o,email:l,accessToken:r})),console.log(e.getGrantedScopes()))},onFailure:function(){alert("Failed to login")},cookiePolicy:"single_host_origin",responseType:"code,token",scope:"https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.body.write https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/fitness.location.read https://www.googleapis.com/auth/fitness.location.write"})})}a(34);var P=a.p+"static/media/GoogleFit_Logo_Vertical.0368927f.png";function F(e){var t=Object(c.useState)(0),a=Object(o.a)(t,2),n=a[0],i=a[1],s=function(e){i(e)};return Object(d.jsx)("div",{className:"SideNav",children:Object(d.jsxs)("aside",{className:"mdc-drawer",children:[Object(d.jsx)("div",{className:"mdc-drawer__content",children:Object(d.jsxs)("nav",{className:"mdc-list",children:[Object(d.jsx)("div",{className:"mdc-drawer__header",children:Object(d.jsx)(l.b,{to:"/",className:"nav header",onClick:function(){return s(0)},children:Object(d.jsx)("img",{src:P,alt:"Google Fit Logo",className:"logo"})})}),e.authenticated?Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{class:"mdc-list-divider"}),Object(d.jsxs)(l.b,{to:"/",className:0===n?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(0)},children:[Object(d.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"home"}),Object(d.jsx)("span",{className:"mdc-list-item__text",children:"Home"})]}),Object(d.jsxs)(l.b,{to:e.authenticated?"/profile":"/",className:1===n?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(1)},children:[Object(d.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"account_circle"}),Object(d.jsx)("span",{className:"mdc-list-item__text",children:"Profile"})]}),Object(d.jsxs)(l.b,{to:e.authenticated?"/journal":"/",className:2===n?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(2)},children:[Object(d.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"assignment"}),Object(d.jsx)("span",{className:"mdc-list-item__text",children:"Journal"})]})]}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)("hr",{class:"mdc-list-divider"}),Object(d.jsxs)(l.b,{to:"/about",className:3===n?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(3)},children:[Object(d.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"info"}),Object(d.jsx)("span",{className:"mdc-list-item__text",children:"About"})]})]})}),Object(d.jsx)("div",{className:"login",children:Object(d.jsx)(B,{})})]})})}var C=Object(c.createContext)({user:M,setUser:function(e){}});function A(){var e=Object(c.useState)(M),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.a,{basename:"/google-fit-web",children:[Object(d.jsx)(C.Provider,{value:{user:a,setUser:n},children:Object(d.jsx)("div",{className:"sideNav",children:Object(d.jsx)(F,{authenticated:a.authenticated})})}),Object(d.jsx)(r.c,{children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(r.a,{exact:!0,path:"/",children:a.authenticated?Object(d.jsx)(f,{user:a}):Object(d.jsx)(u,{})}),Object(d.jsx)(r.a,{exact:!0,path:"/profile",children:a.authenticated?Object(d.jsx)(y,{user:a}):Object(d.jsx)(u,{})}),Object(d.jsx)(r.a,{exact:!0,path:"/journal",children:a.authenticated?Object(d.jsx)(w,{user:a}):Object(d.jsx)(u,{})}),Object(d.jsx)(r.a,{exact:!0,path:"/about",children:Object(d.jsx)(N,{})})]})})]})})}var I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),I()}},[[38,1,2]]]);
//# sourceMappingURL=main.9a26749d.chunk.js.map