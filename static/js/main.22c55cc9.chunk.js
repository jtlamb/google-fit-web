(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"web":{"client_id":"620443792856-c4fbqhsqo4bl434mp218fj5tm80puu74.apps.googleusercontent.com","project_id":"boreal-card-305618","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"yJmfJK9xnu5g6kSLp0M6lZJq","redirect_uris":["https://boreal-card-305618.firebaseapp.com/__/auth/handler","https://jtlamb.github.io/google-fit-web","https://jtlamb.github.io/google-fit-web/home","http://localhost:3000/google-fit-web"],"javascript_origins":["http://localhost","http://localhost:5000","https://boreal-card-305618.firebaseapp.com","https://jtlamb.github.io","http://localhost:3000"]}}')},26:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(18),s=a.n(n),o=(a(26),a(3)),r=a(8),l=a(2),d=(a(27),a(0));function u(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Landing Page"}),Object(d.jsx)("p",{children:"Sign in to view your Google Fit data."})]})}var m=a(13),h=function(e){return Object(d.jsx)(m.a,{width:"40em",height:"25em",chartType:"Bar",loader:Object(d.jsx)("div",{children:"Loading Chart"}),data:[["Date",e.label],[e.date[0],e.data[0]],[e.date[1],e.data[1]],[e.date[2],e.data[2]],[e.date[3],e.data[3]],[e.date[4],e.data[4]],[e.date[5],e.data[5]],[e.date[6],e.data[6]]],options:{chart:{title:e.title,subtitle:e.subtitle}}})},p=function(e,t,a,c){return Object(d.jsxs)("div",{className:"pie",children:[Object(d.jsx)(m.a,{width:"15em",height:"15em",chartType:"PieChart",loader:Object(d.jsx)("span",{className:"material-icons loading-icon",children:"loop"}),data:[["Move Minutes","Amount"],["Actual",e],["Away from Goal",Math.max(0,t-e)]],options:{pieHole:.75,legend:"none",pieSliceText:"none",slices:[{color:a},{color:"#d3d3d3"}]}}),c]})};function b(e){return.000621371192*e}a(31);function j(e){var t=Object(c.useState)(0),a=Object(o.a)(t,2),i=a[0],n=a[1],s=Object(c.useState)(0),r=Object(o.a)(s,2),l=r[0],u=r[1],m=Object(c.useState)(!1),h=Object(o.a)(m,2),j=h[0],x=h[1],T=function(e){n(e)},y="https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",_=new Date,k=new Date(_),w=k-_.setHours(0,0,0,0),N=6048e5,S=864e5,M=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),B=Object(o.a)(M,2),D=B[0],F=B[1],I={aggregateBy:[{dataTypeName:"com.google.heart_minutes"}],startTimeMillis:k.getTime()-N+S,endTimeMillis:k.getTime()-w,bucketByTime:{durationMillis:S,period:{type:"day",value:1,timeZoneId:"America/New_York"}}},P={aggregateBy:[{dataTypeName:"com.google.heart_minutes"}],startTimeMillis:k.getTime()-w,endTimeMillis:k.getTime(),bucketByTime:{durationMillis:w,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(I)}).then((function(e){return e.json()})).then((function(t){for(var a=[],c=0;c<6;c++){var i=new Date(parseInt(t.bucket[c].startTimeMillis));if(0!==t.bucket[c].dataset[0].point.length){var n={actual:t.bucket[c].dataset[0].point[0].value[0].fpVal,goal:36,color:"#06bf9a",date:i.toDateString()};a.push(n)}else{var s={actual:0,goal:36,color:"#06bf9a",date:i.toDateString()};a.push(s)}}fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(P)}).then((function(e){return e.json()})).then((function(e){var t=[],c=new Date(parseInt(e.bucket[0].endTimeMillis));if(0!==e.bucket[0].dataset[0].point.length){var i={actual:e.bucket[0].dataset[0].point[0].value[0].fpVal,goal:36,color:"#06bf9a",date:c.toDateString()};t.push(i)}else{var n={actual:0,goal:36,color:"#06bf9a",date:c.toDateString()};t.push(n)}F(a.concat(t))}))})).catch((function(e){return console.log(e)}))}),[]);var C=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),A=Object(o.a)(C,2),G=A[0],J=A[1],L={aggregateBy:[{dataTypeName:"com.google.step_count.delta",dataSourceId:"derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"}],startTimeMillis:k.getTime()-w-N+S,endTimeMillis:k.getTime()-w,bucketByTime:{durationMillis:S,period:{type:"day",value:1,timeZoneId:"America/New_York"}}},E={aggregateBy:[{dataTypeName:"com.google.step_count.delta",dataSourceId:"derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"}],startTimeMillis:k.getTime()-w,endTimeMillis:k.getTime(),bucketByTime:{durationMillis:w,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(L)}).then((function(e){return e.json()})).then((function(t){for(var a=[],c=0;c<6;c++){var i=new Date(parseInt(t.bucket[c].startTimeMillis));if(0!==t.bucket[c].dataset[0].point.length){var n={actual:t.bucket[c].dataset[0].point[0].value[0].intVal,goal:15e3,color:"#4285F4",date:i.toDateString()};a.push(n)}else{var s={actual:0,goal:15e3,color:"#4285F4",date:i.toDateString()};a.push(s)}}fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(E)}).then((function(e){return e.json()})).then((function(e){var t=[],c=new Date(parseInt(e.bucket[0].endTimeMillis));if(0!==e.bucket[0].dataset[0].point.length){var i={actual:e.bucket[0].dataset[0].point[0].value[0].intVal,goal:15e3,color:"#4285F4",date:c.toDateString()};t.push(i)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:c.toDateString()};t.push(n)}J(a.concat(t))}))})).catch((function(e){return console.log(e)}))}),[]);var V=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),Y=Object(o.a)(V,2),z=Y[0],U=Y[1],Z={aggregateBy:[{dataTypeName:"com.google.distance.delta"}],startTimeMillis:k.getTime()-w-N+S,endTimeMillis:k.getTime()-w,bucketByTime:{durationMillis:S,period:{type:"day",value:1,timeZoneId:"America/New_York"}}},H={aggregateBy:[{dataTypeName:"com.google.distance.delta"}],startTimeMillis:k.getTime()-w,endTimeMillis:k.getTime(),bucketByTime:{durationMillis:w,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(Z)}).then((function(e){return e.json()})).then((function(t){for(var a=[],c=0;c<6;c++){var i=new Date(parseInt(t.bucket[c].startTimeMillis));if(0!==t.bucket[c].dataset[0].point.length){var n={actual:b(t.bucket[c].dataset[0].point[0].value[0].fpVal),goal:15e3,color:"#4285F4",date:i.toDateString()};a.push(n)}else{var s={actual:0,goal:15e3,color:"#4285F4",date:i.toDateString()};a.push(s)}}fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(H)}).then((function(e){return e.json()})).then((function(e){var t=[],c=new Date(parseInt(e.bucket[0].endTimeMillis));if(0!==e.bucket[0].dataset[0].point.length){var i={actual:b(e.bucket[0].dataset[0].point[0].value[0].fpVal),goal:15e3,color:"#4285F4",date:c.toDateString()};t.push(i)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:c.toDateString()};t.push(n)}U(a.concat(t))}))})).catch((function(e){return console.log(e)}))}),[]);var R=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),q=Object(o.a)(R,2),W=q[0],K=q[1],Q={aggregateBy:[{dataTypeName:"com.google.active_minutes"}],startTimeMillis:k.getTime()-w-N+S,endTimeMillis:k.getTime()-w,bucketByTime:{durationMillis:S,period:{type:"day",value:1,timeZoneId:"America/New_York"}}},X={aggregateBy:[{dataTypeName:"com.google.active_minutes"}],startTimeMillis:k.getTime()-w,endTimeMillis:k.getTime(),bucketByTime:{durationMillis:w,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(Q)}).then((function(e){return e.json()})).then((function(t){for(var a=[],c=0;c<6;c++){var i=new Date(parseInt(t.bucket[c].startTimeMillis));if(0!==t.bucket[c].dataset[0].point.length){var n={actual:t.bucket[c].dataset[0].point[0].value[0].intVal,goal:15e3,color:"#4285F4",date:i.toDateString()};a.push(n)}else{var s={actual:0,goal:15e3,color:"#4285F4",date:i.toDateString()};a.push(s)}}fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(X)}).then((function(e){return e.json()})).then((function(e){var t=[],c=new Date(parseInt(e.bucket[0].endTimeMillis));if(0!==e.bucket[0].dataset[0].point.length){var i={actual:e.bucket[0].dataset[0].point[0].value[0].intVal,goal:15e3,color:"#4285F4",date:c.toDateString()};t.push(i)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:c.toDateString()};t.push(n)}K(a.concat(t))}))})).catch((function(e){return console.log(e)}))}),[]);var $=Object(c.useState)([{actual:0,goal:0,color:"",date:""}]),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],ce={aggregateBy:[{dataTypeName:"com.google.calories.expended"}],startTimeMillis:k.getTime()-w-N+S,endTimeMillis:k.getTime()-w,bucketByTime:{durationMillis:S,period:{type:"day",value:1,timeZoneId:"America/New_York"}}},ie={aggregateBy:[{dataTypeName:"com.google.calories.expended"}],startTimeMillis:k.getTime()-w,endTimeMillis:k.getTime(),bucketByTime:{durationMillis:w,period:{type:"day",value:1,timeZoneId:"America/New_York"}}};Object(c.useEffect)((function(){fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(ce)}).then((function(e){return e.json()})).then((function(t){for(var a=[],c=0;c<6;c++){var i=new Date(parseInt(t.bucket[c].startTimeMillis));if(0!==t.bucket[c].dataset[0].point.length){var n={actual:t.bucket[c].dataset[0].point[0].value[0].fpVal,goal:15e3,color:"#4285F4",date:i.toDateString()};a.push(n)}else{var s={actual:0,goal:15e3,color:"#4285F4",date:i.toDateString()};a.push(s)}}fetch(y,{method:"POST",headers:{"Content-Type":"application/json;encoding=utf-8",Authorization:"Bearer ".concat(e.user.accessToken)},body:JSON.stringify(ie)}).then((function(e){return e.json()})).then((function(e){var t=[],c=new Date(parseInt(e.bucket[0].endTimeMillis));if(0!==e.bucket[0].dataset[0].point.length){var i={actual:e.bucket[0].dataset[0].point[0].value[0].fpVal,goal:15e3,color:"#4285F4",date:c.toDateString()};t.push(i)}else{var n={actual:0,goal:15e3,color:"#4285F4",date:c.toDateString()};t.push(n)}ae(a.concat(t)),x(!0)}))})).catch((function(e){return console.log(e)}))}),[]);var ne=function(e){u(0===e?l-1===-1?3:l-1:l+1===4?0:l+1)};return Object(d.jsxs)("div",{className:"home",children:[Object(d.jsxs)("div",{className:"name",children:["Welcome to Google Fit Web, ",e.user.fname,"!"]}),Object(d.jsx)("div",{children:j?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{class:"middleGraphs",children:[Object(d.jsxs)("div",{class:"mdc-chip-set mdc-chip-set--choice",role:"grid",children:[Object(d.jsx)("div",{class:0===i?"mdc-chip chip-selected":"mdc-chip",role:"row",onClick:function(){return T(0)},children:Object(d.jsx)("span",{role:"gridcell",children:Object(d.jsx)("span",{role:"button",class:"mdc-chip__primary-action",children:Object(d.jsx)("span",{class:"mdc-chip__text",children:"Heart Points"})})})}),Object(d.jsx)("div",{class:1===i?"mdc-chip chip-selected":"mdc-chip",role:"row",onClick:function(){return T(1)},children:Object(d.jsx)("span",{role:"gridcell",children:Object(d.jsx)("span",{role:"button",class:"mdc-chip__primary-action",children:Object(d.jsx)("span",{class:"mdc-chip__text",children:"Steps"})})})})]}),Object(d.jsxs)("span",{className:"dailyGoalsText",children:["Your Daily ",0===i?"Heart Points":"Steps"," Goals"]}),Object(d.jsx)("div",{className:"weeklyGoalGraphs",children:0===i?D.map((function(e){return p(e.actual,e.goal,e.color,e.date)})):G.map((function(e){return p(e.actual,e.goal,e.color,e.date)}))})]}),Object(d.jsxs)("div",{className:"bottomGraphs",children:[Object(d.jsx)("button",{class:"mdc-icon-button material-icons",onClick:function(){return ne(0)},children:"keyboard_arrow_left"}),function(e){var t=[];G.map((function(e){return t.push(e.actual)}));var a=[];z.map((function(e){return a.push(e.actual)}));var c=[];W.map((function(e){return c.push(e.actual)}));var i=[];te.map((function(e){return i.push(e.actual)}));for(var n=[],s=1;s<8;s++){var o=new Date(_.getTime()-N+s*S);n.push(o.getMonth()+1+"/"+o.getDate())}switch(e){case 0:return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"bottomGraph",children:g(n,t)}),Object(d.jsx)("span",{className:"bottomGraph",children:f(n,a)})]});case 1:return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"bottomGraph",children:f(n,a)}),Object(d.jsx)("span",{className:"bottomGraph",children:O(n,c)})]});case 2:return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"bottomGraph",children:O(n,c)}),Object(d.jsx)("span",{className:"bottomGraph",children:v(n,i)})]});case 3:return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"bottomGraph",children:v(n,i)}),Object(d.jsx)("span",{className:"bottomGraph",children:g(n,t)})]})}}(l),Object(d.jsx)("button",{class:"mdc-icon-button material-icons",onClick:function(){return ne(1)},children:"keyboard_arrow_right"})]})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"loading",children:"Loading Fitness Data ..."}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{class:"material-icons md-spec",children:"cached"})]})})]})}var g=function(e,t){return h({label:"Steps",title:"Steps",subtitle:"Step data for the past week",date:e,data:t})},f=function(e,t){return h({label:"Distance (miles)",title:"Distance",subtitle:"Distance travelled over the past week",date:e,data:t})},O=function(e,t){return h({label:"Move Mins",title:"Move Minutes",subtitle:"Move Minutes for the past week",date:e,data:t})},v=function(e,t){return h({label:"Calories (kCal)",title:"Calories",subtitle:"Calories expended over the past week",date:e,data:t})};a(32);function x(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),i=a[0],n=a[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),l=r[0],u=r[1],m=Object(c.useState)(""),h=Object(o.a)(m,2),p=h[0],b=h[1],j=new URL("https://people.googleapis.com");return j.protocol="https",j.hostname="people.googleapis.com",j.pathname="/v1/people/me",j.searchParams.append("personFields","birthdays,genders,names"),j.searchParams.append("sources","READ_SOURCE_TYPE_PROFILE"),Object(c.useEffect)((function(){fetch(j,{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e.user.accessToken)}}).then((function(e){return e.json()})).then((function(e){u("".concat(function(e){switch(e){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December";default:return"Invalid Month"}}(e.birthdays[0].date.month)," ").concat(e.birthdays[0].date.day,", ").concat(e.birthdays[0].date.year)),b("".concat(e.genders[0].formattedValue)),n(!0)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsx)("img",{src:e.user.pfPic,alt:"Profile",className:"pfp"}),Object(d.jsxs)("div",{className:"name",children:[e.user.fname," ",e.user.lname]}),i?Object(d.jsx)("div",{class:"mdc-data-table basic-info",children:Object(d.jsx)("div",{class:"mdc-data-table__table-container",children:Object(d.jsxs)("table",{class:"mdc-data-table__table",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{class:"mdc-data-table__header-row",children:Object(d.jsx)("th",{class:"mdc-data-table__header-cell",children:Object(d.jsx)("span",{className:"title",children:"Basic Information"})})})}),Object(d.jsxs)("tbody",{class:"mdc-data-table__content",children:[Object(d.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(d.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:"Birthday"}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:l})]}),Object(d.jsxs)("tr",{class:"mdc-data-table__row",children:[Object(d.jsx)("th",{class:"mdc-data-table__cell",scope:"row",children:"Gender"}),Object(d.jsx)("td",{class:"mdc-data-table__cell mdc-data-table__cell--numeric",children:p})]})]})]})})}):Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"loading",children:"Loading User Info ..."}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"material-icons loading-icon",children:"cached"})]})]})}function T(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Journal"}),Object(d.jsx)("p",{children:"Under Construction"})]})}function y(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsx)("p",{children:"Under Construction"})]})}var _=a(14),k=a(20),w={authenticated:!1,name:"",fname:"",lname:"",pfPic:"",email:"",accessToken:""},N=k.web.client_id;function S(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1],n=Object(c.useContext)(D).setUser;return Object(d.jsx)("div",{children:a?Object(d.jsx)(_.GoogleLogout,{clientId:N,buttonText:"Logout",onLogoutSuccess:function(){i(!1),n(w)},onFailure:function(){alert("Failed to logout")}}):Object(d.jsx)(_.GoogleLogin,{clientId:N,buttonText:"Login",onSuccess:function(e){var t,a,c,s,o,r,l;e.accessToken&&(i(!0),n((t=!0,a=e.getBasicProfile().getName(),c=e.getBasicProfile().getGivenName(),s=e.getBasicProfile().getFamilyName(),o=e.getBasicProfile().getImageUrl().slice(0,e.getBasicProfile().getImageUrl().lastIndexOf("=",e.getBasicProfile().getImageUrl().length-1))+"=s1000-c",r=e.getBasicProfile().getEmail(),l=e.accessToken,{authenticated:t,name:a,fname:c,lname:s,pfPic:o,email:r,accessToken:l})),console.log(e.getGrantedScopes()))},onFailure:function(){alert("Failed to login")},cookiePolicy:"single_host_origin",responseType:"code,token",scope:"https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.body.write https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/fitness.location.read https://www.googleapis.com/auth/fitness.location.write"})})}a(33);var M=a.p+"static/media/GoogleFit_Logo_Vertical.0368927f.png";function B(e){var t=Object(c.useState)(0),a=Object(o.a)(t,2),i=a[0],n=a[1],s=function(e){n(e)};return Object(d.jsx)("div",{className:"SideNav",children:Object(d.jsxs)("aside",{className:"mdc-drawer",children:[Object(d.jsx)("div",{className:"mdc-drawer__content",children:Object(d.jsxs)("nav",{className:"mdc-list",children:[Object(d.jsx)("div",{className:"mdc-drawer__header",children:Object(d.jsx)(r.b,{to:"/",className:"nav header",onClick:function(){return s(0)},children:Object(d.jsx)("img",{src:M,alt:"Google Fit Logo",className:"logo"})})}),e.authenticated?Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{class:"mdc-list-divider"}),Object(d.jsxs)(r.b,{to:"/",className:0===i?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(0)},children:[Object(d.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"home"}),Object(d.jsx)("span",{className:"mdc-list-item__text",children:"Home"})]}),Object(d.jsxs)(r.b,{to:e.authenticated?"/profile":"/",className:1===i?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(1)},children:[Object(d.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"account_circle"}),Object(d.jsx)("span",{className:"mdc-list-item__text",children:"Profile"})]}),Object(d.jsxs)(r.b,{to:e.authenticated?"/journal":"/",className:2===i?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(2)},children:[Object(d.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"assignment"}),Object(d.jsx)("span",{className:"mdc-list-item__text",children:"Journal"})]})]}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)("hr",{class:"mdc-list-divider"}),Object(d.jsxs)(r.b,{to:"/about",className:3===i?"mdc-list-item nav mdc-list-item--activated":"mdc-list-item nav",onClick:function(){return s(3)},children:[Object(d.jsx)("i",{className:"material-icons mdc-list-item__graphic","aria-hidden":"true",children:"info"}),Object(d.jsx)("span",{className:"mdc-list-item__text",children:"About"})]})]})}),Object(d.jsx)("div",{className:"login",children:Object(d.jsx)(S,{})})]})})}var D=Object(c.createContext)({user:w,setUser:function(e){}});function F(){var e=Object(c.useState)(w),t=Object(o.a)(e,2),a=t[0],i=t[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(r.a,{basename:"/google-fit-web",children:[Object(d.jsx)(D.Provider,{value:{user:a,setUser:i},children:Object(d.jsx)("div",{className:"sideNav",children:Object(d.jsx)(B,{authenticated:a.authenticated})})}),Object(d.jsx)(l.c,{children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:a.authenticated?Object(d.jsx)(j,{user:a}):Object(d.jsx)(u,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/profile",children:a.authenticated?Object(d.jsx)(x,{user:a}):Object(d.jsx)(u,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/journal",children:a.authenticated?Object(d.jsx)(T,{}):Object(d.jsx)(u,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/about",children:Object(d.jsx)(y,{})})]})})]})})}var I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),i(e),n(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),I()}},[[37,1,2]]]);
//# sourceMappingURL=main.22c55cc9.chunk.js.map