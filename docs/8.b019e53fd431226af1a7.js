(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RmqX:function(e,n,r){"use strict";r.r(n),r.d(n,"SearchModule",function(){return p});var a=r("ofXK"),t=r("3Pt+"),c=r("PCNd"),s=r("tyNb"),b=r("fXoL"),o=r("gsWr"),h=r("zxg0"),i=r("Cza6"),u=r("wD8C"),l=r("32Po");function m(e,n){1&e&&b.Ib(0,"ab-launch-card",9),2&e&&b.Xb("launch",n.$implicit)}function f(e,n){if(1&e&&(b.Kb(0,"section"),b.Kb(1,"header"),b.Kb(2,"h2"),b.fc(3),b.Jb(),b.Jb(),b.ec(4,m,1,1,"ab-launch-card",8),b.Jb()),2&e){const e=b.Tb();b.wb(3),b.hc("Found ",e.launches.length," launches"),b.wb(1),b.Xb("ngForOf",e.launches)}}const d=[{path:"",component:(()=>{class e{constructor(e,n){this.srv=e,this.seo=n,this.queryParams={limit:10,searchTerm:"Challenger"},this.launches=[],this.theProblem=""}getSpaceData(){this.srv.getSearchedLaunches$(this.queryParams).subscribe({next:e=>this.launches=e,error:e=>this.theProblem=e.error.detail})}ngOnInit(){this.getSpaceData(),this.seo.setTitle("Search"),this.seo.setDescription("Search the rocket launches library."),this.seo.setKeywords(["rocket","launch","search"])}}return e.\u0275fac=function(n){return new(n||e)(b.Hb(o.a),b.Hb(h.a))},e.\u0275cmp=b.Bb({type:e,selectors:[["ab-search"]],decls:17,vars:7,consts:[["for","searchTerm"],["name","searchTerm","type","text",3,"ngModel","ngModelChange"],["for","numberOfLaunches"],["name","numberOfLaunches","type","number",3,"ngModel","ngModelChange"],["type","submit",3,"click"],[4,"ngIf"],[3,"launches"],[3,"theProblem"],[3,"launch",4,"ngFor","ngForOf"],[3,"launch"]],template:function(e,n){1&e&&(b.Kb(0,"section"),b.Kb(1,"form"),b.Kb(2,"legend"),b.fc(3),b.Jb(),b.Kb(4,"div"),b.Kb(5,"label",0),b.fc(6,"Search term"),b.Jb(),b.Kb(7,"input",1),b.Rb("ngModelChange",function(e){return n.queryParams.searchTerm=e}),b.Jb(),b.Jb(),b.Kb(8,"div"),b.Kb(9,"label",2),b.fc(10,"Number of launches"),b.Jb(),b.Kb(11,"input",3),b.Rb("ngModelChange",function(e){return n.queryParams.limit=e}),b.Jb(),b.Jb(),b.Kb(12,"button",4),b.Rb("click",function(){return n.getSpaceData()}),b.fc(13,"Go !"),b.Jb(),b.Jb(),b.Jb(),b.ec(14,f,5,2,"section",5),b.Ib(15,"ab-waiting-card",6),b.Ib(16,"ab-problem-card",7)),2&e&&(b.wb(3),b.ic(" Searching ",n.queryParams.limit," launches related to ",n.queryParams.searchTerm," "),b.wb(4),b.Xb("ngModel",n.queryParams.searchTerm),b.wb(4),b.Xb("ngModel",n.queryParams.limit),b.wb(3),b.Xb("ngIf",n.launches.length>0),b.wb(1),b.Xb("launches",n.launches),b.wb(1),b.Xb("theProblem",n.theProblem))},directives:[t.h,t.d,t.e,t.a,t.c,t.f,t.g,a.l,i.a,u.a,a.k,l.a],encapsulation:2}),e})()}];let g=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(n){return new(n||e)},imports:[[s.c.forChild(d)],s.c]}),e})(),p=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(n){return new(n||e)},imports:[[a.b,g,t.b,c.a]]}),e})()}}]);