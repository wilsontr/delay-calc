(window["webpackJsonpdelay-calc"]=window["webpackJsonpdelay-calc"]||[]).push([[0],{18:function(e,a,t){e.exports=t(40)},23:function(e,a,t){},24:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(15),c=t.n(o),r=(t(23),t(10)),i=t(6),m=t.n(i),s=t(9),u=t.n(s),d=t(17),E=t.n(d),p=t(16),h=t.n(p),v=(t(24),function(){var e=Object(l.useState)(localStorage.getItem("delayCalcTempo")||120),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(localStorage.getItem("delayCalcDivision")||.25),i=Object(r.a)(c,2),s=i[0],d=i[1],p=Object(l.useState)(0),v=Object(r.a)(p,2),f=v[0],b=v[1];return Object(l.useEffect)(function(){!function(){var e=60/t,a=e*s;console.log("division",s,"beatTime",e),b(1e3*a)}()}),n.a.createElement("div",{className:"App col-lg-8"},n.a.createElement("h1",null,"Delay Time Calculator"),n.a.createElement("p",null,"Older rack effects units, such as the Alesis Quadraverb, lack MIDI sync for their delay effects. I built this tool to help calculate ideal delay effect times for a given tempo and note length."),n.a.createElement(h.a,{className:"form-card"},n.a.createElement(m.a,null,n.a.createElement(m.a.Row,{as:E.a},n.a.createElement(m.a.Group,{as:u.a,controlId:"formGridTempo",sm:6},n.a.createElement(m.a.Label,{className:"label"},"Tempo (bpm)"),n.a.createElement(m.a.Control,{value:t,as:"select",onChange:function(e){var a=e.currentTarget.value;o(a),localStorage.setItem("delayCalcTempo",a)}},function(){for(var e=[],a=20;a<=250;a++)e.push(n.a.createElement("option",{value:a,key:"option_".concat(a)},a));return e}())),n.a.createElement(m.a.Group,{as:u.a,controlId:"formGridDivision",sm:6},n.a.createElement(m.a.Label,{className:"label"},"Delay Note Length"),n.a.createElement(m.a.Control,{as:"select",value:s,onChange:function(e){var a=e.currentTarget.value;d(a),localStorage.setItem("delayCalcDivision",a)}},n.a.createElement("option",{value:"0.125"},"Thirty-second"),n.a.createElement("option",{value:"0.1875"},"Dotted Thirty-second"),n.a.createElement("option",{value:"0.25"},"Sixteenth"),n.a.createElement("option",{value:"0.375"},"Dotted Sixteenth"),n.a.createElement("option",{value:"0.5"},"Eighth"),n.a.createElement("option",{value:"0.75"},"Dotted Eighth"),n.a.createElement("option",{value:"1"},"Quarter"),n.a.createElement("option",{value:"1.5"},"Dotted Quarter"),n.a.createElement("option",{value:"2"},"Half"),n.a.createElement("option",{value:"3"},"Dotted Half"),n.a.createElement("option",{value:"4"},"Whole"),n.a.createElement("option",{value:"6"},"Dotted Whole")))),n.a.createElement(m.a.Row,null,n.a.createElement(u.a,null,n.a.createElement(m.a.Label,{className:"label label-row"},"Delay time"),n.a.createElement(m.a.Label,{className:"delay-time"},function(e){return Math.round(10*e)/10}(f)," ms"))))),n.a.createElement("footer",null,n.a.createElement("p",{className:"written-by"},"Calculator by ",n.a.createElement("a",{href:"https://github.com/wilsontr"},"Trevor Wilson"),". ",n.a.createElement("a",{href:"https://github.com/wilsontr/delay-calc"},"View source"))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.48319fdf.chunk.js.map