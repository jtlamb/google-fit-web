(this["webpackJsonpgoogle-fit-web"]=this["webpackJsonpgoogle-fit-web"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"web":{"client_id":"620443792856-c4fbqhsqo4bl434mp218fj5tm80puu74.apps.googleusercontent.com","project_id":"boreal-card-305618","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"yJmfJK9xnu5g6kSLp0M6lZJq","redirect_uris":["https://boreal-card-305618.firebaseapp.com/__/auth/handler","https://jtlamb.github.io/google-fit-web","https://jtlamb.github.io/google-fit-web/home","http://localhost:3000/google-fit-web"],"javascript_origins":["http://localhost","http://localhost:5000","https://boreal-card-305618.firebaseapp.com","https://jtlamb.github.io","http://localhost:3000"]}}')},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(18),s=a.n(i),o=(a(26),a(2)),l=a(8),r=a(3),d=(a(27),a.p+"static/media/GoogleFit_Logo_Vertical.0368927f.png"),u=(a(28),a(0));function h(){return Object(u.jsxs)("div",{className:"landing",children:[Object(u.jsx)("div",{className:"header-landing",children:Object(u.jsx)("img",{src:d,alt:"Google Fit Logo",className:"header-image-landing"})}),Object(u.jsx)("div",{className:"content-landing",children:Object(u.jsx)("span",{className:"content-text-landing",children:"Login to view your Google Fit data or select About to learn more about this site."})})]})}var m=a(13),b=function(e){return Object(u.jsx)(m.a,{width:"40em",height:"25em",chartType:"Bar",loader:Object(u.jsx)("div",{children:"Loading Chart"}),data:[["Date",e.label],[e.date[0],e.data[0]],[e.date[1],e.data[1]],[e.date[2],e.data[2]],[e.date[3],e.data[3]],[e.date[4],e.data[4]],[e.date[5],e.data[5]],[e.date[6],e.data[6]]],options:{chart:{title:e.title,subtitle:e.subtitle}}})},j=function(e,t,a,c){return Object(u.jsxs)("div",{className:"pie",children:[Object(u.jsx)(m.a,{width:"13em",height:"13em",chartType:"PieChart",loader:Object(u.jsx)("span",{className:"material-icons loading-icon",children:"loop"}),data:[["Move Minutes","Amount"],["Actual",e],["Away from Goal",Math.max(0,t-e)]],options:{pieHole:.75,legend:"none",pieSliceText:"none",slices:[{color:a},{color:"#d3d3d3"}]}}),c]})};function g(e){var t=3.28084*e,a=t%Math.trunc(t)*12;return{ft:t=Math.trunc(t),inches:a=Math.round(a)}}function p(e){return.000621371192*e}function f(e){switch(e){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December";default:return"Invalid Month"}}a(32);function O(e){var t=Object(c.useState)(0),a=Object(o.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)(0),l=Object(o.a)(s,2),r=l[0],d=l[1],h=Object(c.useState)(!1),m=Object(o.a)(h,2),b=m[0],g=m[1],f=function(e){i(e)},O="https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",w=new Date;w.setHours(0,0,0,0);var N=864e5,k=7*N,S=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),M=Object(o.a)(S,2),D=M[0],B=M[1],P={aggregateBy:[{dataTypeName:"com.google.heart_minutes"}],startTimeMillis:w.getTime()-k+N,endTimeMillis:w.getTime()+N,bucketByTime:{durationMillis:N,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(O,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(P)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){var a=new Date(parseInt(e.startTimeMillis));if(0!==e.dataset[0].point.length){var c={actual:e.dataset[0].point[0].value[0].fpVal,goal:36,color:"#06bf9a",date:a.toDateString()};t.push(c)}else{var n={actual:0,goal:36,color:"#06bf9a",date:a.toDateString()};t.push(n)}})),B(t)})).catch((function(e){return console.log(e)}))}),[]);var F=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),G=Object(o.a)(F,2),A=G[0],C=G[1],I={aggregateBy:[{dataTypeName:"com.google.step_count.delta",dataSourceId:"derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"}],startTimeMillis:w.getTime()-k+N,endTimeMillis:w.getTime()+N,bucketByTime:{durationMillis:N,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(O,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(I)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){var a=new Date(parseInt(e.startTimeMillis));if(0!==e.dataset[0].point.length){var c={actual:e.dataset[0].point[0].value[0].intVal,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(c)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(n)}})),C(t)})).catch((function(e){return console.log(e)}))}),[]);var E=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),Y=Object(o.a)(E,2),J=Y[0],L=Y[1],z={aggregateBy:[{dataTypeName:"com.google.distance.delta"}],startTimeMillis:w.getTime()-k+N,endTimeMillis:w.getTime()+N,bucketByTime:{durationMillis:N,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(O,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(z)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){var a=new Date(parseInt(e.startTimeMillis));if(0!==e.dataset[0].point.length){var c={actual:p(e.dataset[0].point[0].value[0].fpVal),goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(c)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(n)}})),L(t)})).catch((function(e){return console.log(e)}))}),[]);var V=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),H=Object(o.a)(V,2),Z=H[0],U=H[1],W={aggregateBy:[{dataTypeName:"com.google.active_minutes"}],startTimeMillis:w.getTime()-k+N,endTimeMillis:w.getTime()+N,bucketByTime:{durationMillis:N,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(O,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(W)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){var a=new Date(parseInt(e.startTimeMillis));if(0!==e.dataset[0].point.length){var c={actual:e.dataset[0].point[0].value[0].intVal,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(c)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(n)}})),U(t)})).catch((function(e){return console.log(e)}))}),[]);var q=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),R=Object(o.a)(q,2),K=R[0],Q=R[1],X={aggregateBy:[{dataTypeName:"com.google.calories.expended"}],startTimeMillis:w.getTime()-k+N,endTimeMillis:w.getTime()+N,bucketByTime:{durationMillis:N,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(O,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(X)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){var a=new Date(parseInt(e.startTimeMillis));if(0!==e.dataset[0].point.length){var c={actual:e.dataset[0].point[0].value[0].fpVal,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(c)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:a.toDateString()};t.push(n)}})),Q(t),g(!0)})).catch((function(e){return console.log(e)}))}),[]);var $=function(e){d(0===e?r-1===-1?4:r-1:r+1===5?0:r+1)};return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsxs)("div",{className:"name",children:["Welcome to Google Fit Web, ",e.user.fname,"!"]}),Object(u.jsx)("div",{children:b?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{class:"middleGraphs",children:[Object(u.jsxs)("div",{class:"mdc-chip-set mdc-chip-set--choice",role:"grid",children:[Object(u.jsx)("div",{class:0===n?"mdc-chip chip-selected":"mdc-chip",role:"row",onClick:function(){return f(0)},children:Object(u.jsx)("span",{role:"gridcell",children:Object(u.jsx)("span",{role:"button",class:"mdc-chip__primary-action",children:Object(u.jsx)("span",{class:"mdc-chip__text",children:"Heart Points"})})})}),Object(u.jsx)("div",{class:1===n?"mdc-chip chip-selected":"mdc-chip",role:"row",onClick:function(){return f(1)},children:Object(u.jsx)("span",{role:"gridcell",children:Object(u.jsx)("span",{role:"button",class:"mdc-chip__primary-action",children:Object(u.jsx)("span",{class:"mdc-chip__text",children:"Steps"})})})})]}),Object(u.jsxs)("span",{className:"dailyGoalsText",children:["Your Daily ",0===n?"Heart Points":"Steps"," Goals"]}),Object(u.jsx)("div",{className:"weeklyGoalGraphs",children:0===n?D.map((function(e){return j(e.actual,e.goal,e.color,e.date)})):A.map((function(e){return j(e.actual,e.goal,e.color,e.date)}))})]}),Object(u.jsxs)("div",{className:"bottomGraphs",children:[Object(u.jsx)("button",{class:"mdc-icon-button material-icons",onClick:function(){return $(0)},children:"keyboard_arrow_left"}),function(e){var t=[];A.map((function(e){return t.push(e.actual)}));var a=[];D.map((function(e){return a.push(e.actual)}));var c=[];J.map((function(e){return c.push(e.actual)}));var n=[];Z.map((function(e){return n.push(e.actual)}));var i=[];K.map((function(e){return i.push(e.actual)}));for(var s=[],o=1;o<8;o++){var l=new Date(w.getTime()-k+o*N);s.push(l.getMonth()+1+"/"+l.getDate())}switch(e){case 0:return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"bottomGraph",children:x(s,t)}),Object(u.jsx)("span",{className:"bottomGraph",children:_(s,c)})]});case 1:return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"bottomGraph",children:_(s,c)}),Object(u.jsx)("span",{className:"bottomGraph",children:v(s,n)})]});case 2:return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"bottomGraph",children:v(s,n)}),Object(u.jsx)("span",{className:"bottomGraph",children:y(s,a)})]});case 3:return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"bottomGraph",children:y(s,a)}),Object(u.jsx)("span",{className:"bottomGraph",children:T(s,i)})]});case 4:return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"bottomGraph",children:T(s,i)}),Object(u.jsx)("span",{className:"bottomGraph",children:x(s,t)})]})}}(r),Object(u.jsx)("button",{class:"mdc-icon-button material-icons",onClick:function(){return $(1)},children:"keyboard_arrow_right"})]})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"loading",children:"Loading Fitness Data ..."}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{class:"material-icons md-spec",children:"cached"})]})})]})}var x=function(e,t){return b({label:"Steps",title:"Steps",subtitle:"Step data for the past week",date:e,data:t})},_=function(e,t){return b({label:"Distance (miles)",title:"Distance",subtitle:"Distance travelled over the past week",date:e,data:t})},v=function(e,t){return b({label:"Move Mins",title:"Move Minutes",subtitle:"Move Minutes for the past week",date:e,data:t})},T=function(e,t){return b({label:"Calories (kCal)",title:"Calories",subtitle:"Calories expended over the past week",date:e,data:t})},y=function(e,t){return b({label:"Heart Points",title:"Heart Points",subtitle:"Heart Points over the past week",date:e,data:t})};a(33);function w(e){var t=new Date,a=864e5,n=Object(c.useState)(!1),i=Object(o.a)(n,2),s=i[0],l=i[1],r=Object(c.useState)(""),d=Object(o.a)(r,2),h=d[0],m=d[1],b=Object(c.useState)(""),j=Object(o.a)(b,2),p=j[0],O=j[1],x=Object(c.useState)(-1),_=Object(o.a)(x,2),v=_[0],T=_[1],y=Object(c.useState)(-1),w=Object(o.a)(y,2),N=w[0],k=w[1],S=new URL("https://people.googleapis.com");S.protocol="https",S.hostname="people.googleapis.com",S.pathname="/v1/people/me",S.searchParams.append("personFields","birthdays,genders,names"),S.searchParams.append("sources","READ_SOURCE_TYPE_PROFILE");var M,D="https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate";return Object(c.useEffect)((function(){fetch(S,{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e.user.accessToken)}}).then((function(e){return e.json()})).then((function(e){m("".concat(f(e.birthdays[0].date.month)," ").concat(e.birthdays[0].date.day,", ").concat(e.birthdays[0].date.year)),O("".concat(e.genders[0].formattedValue))})).catch((function(e){return console.log(e)}));var c={aggregateBy:[{dataTypeName:"com.google.weight",dataSourceId:"derived:com.google.weight:com.google.android.gms:merge_weight"}],startTimeMillis:t.getTime()-90*a,endTimeMillis:t.getTime(),bucketByTime:{durationMillis:a,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(D,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){e.bucket.forEach((function(e){0!==e.dataset[0].point.length&&-1===v&&T(e.dataset[0].point[0].value[0].fpVal)}))})).catch((function(e){return console.log(e)}));var n={aggregateBy:[{dataTypeName:"com.google.height",dataSourceId:"derived:com.google.height:com.google.android.gms:merge_height"}],startTimeMillis:t.getTime()-90*a,endTimeMillis:t.getTime(),bucketByTime:{durationMillis:a,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(D,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.bucket.forEach((function(e){0!==e.dataset[0].point.length&&-1===N&&k(e.dataset[0].point[0].value[0].fpVal)}))})).catch((function(e){return console.log(e)})),l(!0)}),[e.user.authenticated]),Object(u.jsxs)("div",{className:"profile",children:[Object(u.jsx)("img",{src:e.user.pfPic,alt:"Profile",className:"pfp"}),Object(u.jsxs)("span",{className:"name",children:[e.user.fname," ",e.user.lname]}),Object(u.jsx)("div",{class:"mdc-data-table basic-info",children:Object(u.jsx)("div",{class:"mdc-data-table__table-container",children:Object(u.jsxs)("table",{class:"mdc-data-table__table",children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{class:"mdc-data-table__header-row",children:Object(u.jsx)("th",{class:"mdc-data-table__header-cell",children:Object(u.jsx)("span",{className:"tableTitle",children:"Basic Information"})})})}),Object(u.jsxs)("tbody",{class:"mdc-data-table__content",children:[Object(u.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(u.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:"Birthday"}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:s?h:"\u2014"})]}),Object(u.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(u.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:"Gender"}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:s?p:"\u2014"})]}),Object(u.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(u.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:"Weight"}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:-1===v?"\u2014":Math.round((M=v,2.20462*M))+" lbs"})]}),Object(u.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(u.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:"Height"}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:-1===N?"\u2014":"".concat(g(N).ft," ft ").concat(g(N).inches," in")})]})]})]})})}),Object(u.jsx)("div",{className:"footnote",children:"*Shows most recent height and weight data inputted within the last 90 days"})]})}a(34);function N(e){var t="https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",a=new Date,n=new Date(a);a.setHours(0,0,0,0);var i=36e5,s=864e5,l=7*s,r=Object(c.useState)(!1),d=Object(o.a)(r,2),h=d[0],m=d[1],b=Object(c.useState)(new Date(a)),g=Object(o.a)(b,2),O=g[0],x=g[1],_=Object(c.useState)(new Date(a)),v=Object(o.a)(_,2),T=v[0],y=v[1],w=function(e){return e.getTimezoneOffset()<function(){var e=new Date(0,1),t=new Date(6,1);return Math.max(e.getTimezoneOffset(),t.getTimezoneOffset())}()},N=function(e){var t=new Date(O.getTime()+2*e*l);t.getTime()<=n.getTime()?!w(t)&&w(O)?x(new Date(t.getTime()+i)):w(t)&&!w(O)?x(new Date(t.getTime()-i)):x(t):console.log("Stopped user from navigating to future dates.")},k=function(e){m(!1);var t=new Date(O.getTime()-e*s);!w(t)&&w(O)?y(new Date(t.getTime()+i)):w(t)&&!w(O)?y(new Date(t.getTime()-i)):y(t)},S=Object(c.useState)({actual:0,goal:0,color:"",title:""}),M=Object(o.a)(S,2),D=M[0],B=M[1],P=Object(c.useState)([0]),F=Object(o.a)(P,2),G=F[0],A=F[1],C=Object(c.useState)({actual:0,goal:0,color:"",title:""}),I=Object(o.a)(C,2),E=I[0],Y=I[1],J=Object(c.useState)([0]),L=Object(o.a)(J,2),z=L[0],V=L[1],H=Object(c.useState)([0]),Z=Object(o.a)(H,2),U=Z[0],W=Z[1],q=Object(c.useState)([0]),R=Object(o.a)(q,2),K=R[0],Q=R[1],X=Object(c.useState)([0]),$=Object(o.a)(X,2),ee=$[0],te=$[1];Object(c.useEffect)((function(){var a={aggregateBy:[{dataTypeName:"com.google.heart_minutes"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:s,period:{type:"day",value:1,timeZoneId:"America/New_York"}}},c={aggregateBy:[{dataTypeName:"com.google.heart_minutes"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:i,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){if(0!==e.bucket[0].dataset[0].point.length){var t={actual:e.bucket[0].dataset[0].point[0].value[0].fpVal,goal:36,color:"#06bf9a",title:"Heart Points"};B(t)}else{B({actual:0,goal:36,color:"#06bf9a",title:"Heart Points"})}})).catch((function(e){return console.log(e)})),fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){0!==e.dataset[0].point.length?t.push(e.dataset[0].point[0].value[0].fpVal):t.push(0)})),A(t)})).catch((function(e){return console.log(e)}));var n={aggregateBy:[{dataTypeName:"com.google.step_count.delta",dataSourceId:"derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s,bucketByTime:{durationMillis:s,period:{type:"day",value:1,timeZoneId:"America/New_York"}}},o={aggregateBy:[{dataTypeName:"com.google.step_count.delta",dataSourceId:"derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:i,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){if(0!==e.bucket[0].dataset[0].point.length){var t={actual:e.bucket[0].dataset[0].point[0].value[0].intVal,goal:15e3,color:"#4285F4",title:"Steps"};Y(t)}else{Y({actual:0,goal:15e3,color:"#4285F4",title:"Steps"})}})).catch((function(e){return console.log(e)})),fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){0!==e.dataset[0].point.length?t.push(e.dataset[0].point[0].value[0].intVal):t.push(0)})),V(t)})).catch((function(e){return console.log(e)}));var l={aggregateBy:[{dataTypeName:"com.google.distance.delta"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:i,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(l)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){0!==e.dataset[0].point.length?t.push(p(e.dataset[0].point[0].value[0].fpVal).toFixed(2)):t.push(p(0).toFixed(2))})),W(t)})).catch((function(e){return console.log(e)}));var r={aggregateBy:[{dataTypeName:"com.google.calories.expended"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:i,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){0!==e.dataset[0].point.length?t.push(Math.round(e.dataset[0].point[0].value[0].fpVal)):t.push(0)})),Q(t)})).catch((function(e){return console.log(e)}));var d={aggregateBy:[{dataTypeName:"com.google.active_minutes"}],startTimeMillis:T.getTime(),endTimeMillis:T.getTime()+s-1,bucketByTime:{durationMillis:i,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};fetch(t,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(d)}).then((function(e){return e.json()})).then((function(e){var t=[];e.bucket.forEach((function(e){0!==e.dataset[0].point.length?t.push(e.dataset[0].point[0].value[0].intVal):t.push(0)})),te(t),m(!0)})).catch((function(e){return console.log(e)}))}),[T]);var ae=Object(c.useState)([{time:"",hp:0,step:0,dist:0,cals:0,mm:0}]),ce=Object(o.a)(ae,2),ne=ce[0],ie=ce[1];return Object(c.useEffect)((function(){for(var e=[],t=0;t<z.length;t++){var a={time:new Date(T.getTime()+t*i).toLocaleTimeString(),hp:G[t],step:z[t],dist:U[t],cals:K[t],mm:ee[t]};e.push(a)}ie(e)}),[T,G,z,U,K,ee]),Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)("div",{className:"pageTitle",children:"Your Fitness Journal"}),Object(u.jsxs)("div",{className:"topNav",children:[Object(u.jsx)("div",{className:"monthYear",children:function(){var e=new Date(O.getTime()-2*l+s);return O.getFullYear()!==e.getFullYear()?"".concat(f(e.getMonth()+1)," ").concat(e.getFullYear()," \u2014 ").concat(f(O.getMonth()+1)," ").concat(O.getFullYear()):O.getMonth()!==e.getMonth()?"".concat(f(e.getMonth()+1)," \u2014 ").concat(f(O.getMonth()+1)," ").concat(O.getFullYear()):"".concat(f(O.getMonth()+1)," ").concat(O.getFullYear())}()}),Object(u.jsxs)("div",{className:"topDates",children:[Object(u.jsx)("button",{class:"mdc-icon-button material-icons",onClick:function(){return N(-1)},children:"keyboard_arrow_left"}),function(){for(var e=[],t=14;t>0;t--){var a=new Date(O.getTime()-2*l+t*s);!w(a)&&w(O)?e.push(new Date(a.getTime()+i)):w(a)&&!w(O)?e.push(new Date(a.getTime()-i)):e.push(a)}return Object(u.jsx)("div",{className:"days",children:e.map((function(e,t){return Object(u.jsx)("div",{className:"day",children:Object(u.jsx)("button",{class:e.getTime()===T.getTime()?"mdc-icon-button dateSelected":"mdc-icon-button",onClick:function(){return k(t)},children:e.getDate()})})}))})}(),Object(u.jsx)("button",{class:"mdc-icon-button material-icons",onClick:function(){return N(1)},children:"keyboard_arrow_right"})]})]}),Object(u.jsxs)("div",{className:"bottomSection",children:[Object(u.jsxs)("div",{className:"log",children:[Object(u.jsx)("span",{className:"currDate",children:f(T.getMonth()+1)+" "+T.getDate()+","+T.getFullYear()}),Object(u.jsx)("div",{class:"mdc-data-table mdc-data-table--sticky-header",children:Object(u.jsx)("div",{class:"mdc-data-table__table-container",children:Object(u.jsxs)("table",{class:"mdc-data-table__table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{class:"mdc-data-table__header-row",children:[Object(u.jsx)("th",{class:"mdc-data-table__header-cell header-text",role:"columnheader",scope:"col",children:"Time"}),Object(u.jsx)("th",{class:"mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text",role:"columnheader",scope:"col",children:"Heart Points"}),Object(u.jsx)("th",{class:"mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text",role:"columnheader",scope:"col",children:"Steps"}),Object(u.jsx)("th",{class:"mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text",role:"columnheader",scope:"col",children:"Distance (mi)"}),Object(u.jsx)("th",{class:"mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text",role:"columnheader",scope:"col",children:"Calories (kCal)"}),Object(u.jsx)("th",{class:"mdc-data-table__header-cell mdc-data-table__header-cell--numeric header-text",role:"columnheader",scope:"col",children:"Move Minutes"})]})}),Object(u.jsx)("tbody",{class:"mdc-data-table__content",children:h?ne.map((function(e){return Object(u.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(u.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:e.time}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:e.hp}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:e.step}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:e.dist}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:e.cals}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:e.mm})]})})):ne.map((function(e){return Object(u.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(u.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:e.time}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:"\u2014"}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:"\u2014"}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:"\u2014"}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:"\u2014"}),Object(u.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:"\u2014"})]})}))})]})})})]}),Object(u.jsxs)("div",{className:"journalGraphs",children:[Object(u.jsxs)("div",{className:"stepsData",children:[Object(u.jsx)("span",{class:"material-icons stepsIcon",children:"directions_walk"}),Object(u.jsxs)("div",{className:"stepsText",children:[h?E.actual:"\u2014"," Steps"]})]}),Object(u.jsxs)("div",{className:"heartPointsData",children:[Object(u.jsx)("span",{class:"material-icons heartPointsIcon",children:"favorite_border"}),Object(u.jsxs)("div",{className:"heartPointsText",children:[h?D.actual:"\u2014"," Heart Points"]})]}),Object(u.jsxs)("div",{className:"goalData",children:[Object(u.jsx)("div",{className:"logDataGraphTitle",children:"% Daily Goal"}),Object(u.jsxs)("div",{className:"goalDataGraphs",children:[h?j(E.actual,E.goal,E.color,E.title):j(0,1,"","Loading.."),h?j(D.actual,D.goal,D.color,D.title):j(0,1,"","Loading..")]})]})]})]})]})}a(35);function k(){return Object(u.jsxs)("div",{className:"about",children:[Object(u.jsx)("div",{className:"header-about",children:"About"}),Object(u.jsx)("p",{className:"content-about",children:"Google Fit Web is a web application in which users are able to see their fitness data acquired by the Google Fit mobile and wearable app. The experience of using this web application is meant to resemble the user experience of using the mobile app but on a larger screen. With a larger screen, more data is able to be displayed and presented."}),Object(u.jsx)("h2",{children:"Motivation"}),Object(u.jsx)("p",{className:"content-about",children:"Google acquired Fitbit and has put a lot more effort in their wearable software such as Wear OS. These acquisitions and efforts can result in an influx of new users who will want options when it comes to seeing their fitness data. This website aims to be a web alternative to the Google Fit mobile and wearable app."}),Object(u.jsx)("h2",{children:"Privacy"}),Object(u.jsxs)("p",{className:"content-about",children:["Google Fit Web will not store or share any user information. The site only reads and writes information from users' Google accounts after sign in. The data displayed is simply read using the Google Fit REST API and the Google People API. No cookies, local storage, or database is used to store personal information nor information retrieved from the users' Google accounts. For more information on your privacy, please visit the ",Object(u.jsx)("a",{href:"https://github.com/jtlamb/google-fit-web/blob/master/PRIVACY_POLICY.md#google-fit-web-privacy-policy",target:"_blank",children:"Privacy Policy"}),"."]}),Object(u.jsx)("h2",{children:"Disclaimer"}),Object(u.jsx)("p",{className:"content-about",children:"This project is not a product from Google themselves nor do I have any affiliation with Google. This is an independent student project for CS 4365 at the Georgia Institute of Technology."})]})}var S=a(14),M=a(20),D={authenticated:!1,name:"",fname:"",lname:"",pfPic:"",email:"",accessToken:""},B=M.web.client_id;function P(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(c.useContext)(A).setUser;return Object(u.jsx)("div",{children:a?Object(u.jsx)(S.GoogleLogout,{clientId:B,buttonText:"Logout",onLogoutSuccess:function(){n(!1),i(D)},onFailure:function(){alert("Failed to logout")}}):Object(u.jsx)(S.GoogleLogin,{clientId:B,buttonText:"Login",onSuccess:function(e){var t,a,c,s,o,l,r;e.accessToken&&(n(!0),i((t=!0,a=e.getBasicProfile().getName(),c=e.getBasicProfile().getGivenName(),s=e.getBasicProfile().getFamilyName(),o=e.getBasicProfile().getImageUrl().slice(0,e.getBasicProfile().getImageUrl().lastIndexOf("=",e.getBasicProfile().getImageUrl().length-1))+"=s1000-c",l=e.getBasicProfile().getEmail(),r=e.accessToken,{authenticated:t,name:a,fname:c,lname:s,pfPic:o,email:l,accessToken:r})),console.log(e.getGrantedScopes()))},onFailure:function(){alert("Failed to login")},cookiePolicy:"single_host_origin",responseType:"code,token",scope:"https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.body.write https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/fitness.location.read https://www.googleapis.com/auth/fitness.location.write"})})}a(36);var F=a.p+"static/media/GoogleFit_Logo_Horizontal.6b7881ab.png";function G(e){var t=Object(c.useState)(0),a=Object(o.a)(t,2),n=a[0],i=a[1],s=function(e){i(e)};return Object(u.jsx)("div",{className:"SideNav",children:Object(u.jsxs)("aside",{className:"mdc-drawer",children:[Object(u.jsx)("div",{className:"mdc-drawer__content",children:Object(u.jsxs)("nav",{className:"mdc-list",children:[Object(u.jsx)("div",{className:"mdc-drawer__header",children:Object(u.jsx)(l.b,{to:"/",className:"nav header",onClick:function(){return s(0)},children:Object(u.jsx)("img",{src:F,alt:"Google Fit Logo",className:"logo"})})}),e.authenticated?Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{class:"mdc-list-divider"}),Object(u.jsxs)(l.b,{to:"/",className:0===n?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(0)},children:[Object(u.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"home"}),Object(u.jsx)("span",{className:"mdc-list-item__text",children:"Home"})]}),Object(u.jsxs)(l.b,{to:e.authenticated?"/profile":"/",className:1===n?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(1)},children:[Object(u.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"account_circle"}),Object(u.jsx)("span",{className:"mdc-list-item__text",children:"Profile"})]}),Object(u.jsxs)(l.b,{to:e.authenticated?"/journal":"/",className:2===n?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(2)},children:[Object(u.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"assignment"}),Object(u.jsx)("span",{className:"mdc-list-item__text",children:"Journal"})]})]}):Object(u.jsx)(u.Fragment,{}),Object(u.jsx)("hr",{class:"mdc-list-divider"}),Object(u.jsxs)(l.b,{to:"/about",className:3===n?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(3)},children:[Object(u.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"info"}),Object(u.jsx)("span",{className:"mdc-list-item__text",children:"About"})]})]})}),Object(u.jsx)("div",{className:"login",children:Object(u.jsx)(P,{})})]})})}var A=Object(c.createContext)({user:D,setUser:function(e){}});function C(){var e=Object(c.useState)(D),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(l.a,{basename:"/google-fit-web",children:[Object(u.jsx)(A.Provider,{value:{user:a,setUser:n},children:Object(u.jsx)("div",{className:"sideNav",children:Object(u.jsx)(G,{authenticated:a.authenticated})})}),Object(u.jsx)(r.c,{children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(r.a,{exact:!0,path:"/",children:a.authenticated?Object(u.jsx)(O,{user:a}):Object(u.jsx)(h,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/profile",children:a.authenticated?Object(u.jsx)(w,{user:a}):Object(u.jsx)(h,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/journal",children:a.authenticated?Object(u.jsx)(N,{user:a}):Object(u.jsx)(h,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/about",children:Object(u.jsx)(k,{})})]})})]})})}var I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.93a12c38.chunk.js.map