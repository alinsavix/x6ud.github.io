(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],u=0,h=[];u<s.length;u++)a=s[u],r[a]&&h.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={main:0},r={main:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d20ee20":"93ed8e9e","chunk-43a252a4":"8bbe55a7"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-43a252a4":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-2d20ee20":"31d6cfe0","chunk-43a252a4":"fdf5991d"}[t]+".css",r=c.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===r))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){l=h[s],u=l.getAttribute("data-href");if(u===i||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.request=i,delete a[t],d.parentNode.removeChild(d),n(o)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){a[t]=0}));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise(function(e,n){i=r[t]=[e,n]});e.push(i[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");o.type=i,o.request=a,n[1](o)}r[t]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){n("db4d"),t.exports=n("56d7")},"137c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsSAAALEgHS3X78AAAAG3RFWHRTb2Z0d2FyZQBDZWxzeXMgU3R1ZGlvIFRvb2zBp+F8AAAB5ElEQVQoz4WSPWhTARSFvxsJCQZiSP0NRKtIQZcuCs1igp06KUreA8ESV1HjotAh7Sj4Q4aU56D4Ci6Nik4RitKXQYROhValiKKU1KA0tqYxqWmS6xAjLdh6lguXczjcyyeqSkeG7QRcIoOInEL1COAG3ilMAHY2ESt2vNIJmmNOVJCHQJh/axHk4ngi+vhv0LTzJ0R4DvjYWnVFBrOJaFbitrPDBbN+rzvs3ubaNNFSpby6RrOlKwpHxbSdS0DGikcI+jxb1hXLVe5MvqGwXL0lpp1/CdpvGRGCXjfkchAIQLMJlQoMDFBabXB7cpbzxw+z1mxx48XMZzFt5xPQbRkRgqVvkEptrBka4mtoP1efTtHfE+JM7wGuPJlSMW1nHghbRoSg2wXDw1D88/VQCEZGWGrCvdfvOXfsEAs/qqSdtyqmnXdAY5YRIbjdA6USpNPgckEyCV1dqCo/6w0+Lq5w99Ucy7X6FzFt5xpwczTex06ft91ULren3w/A/FKFVG6aX41m54BRMR44u0WYOdmzb09f966N9ym0FCbmCkwXvne2NYXeNgBj+dMC44DnPwCoQjKbiGXWIZc/K3AfCGwSqilcV7AeJWItWQ+5aef3inAZMICDgAALwDNVMtkLsQ8d72+hwsfJ79q2WwAAAABJRU5ErkJggg=="},2054:function(t,e,n){},3242:function(t,e,n){"use strict";e["a"]=[{name:"Wolf Skull (for canis)",path:"./assets/models/wolf-skull.obj",origin:"https://sketchfab.com/osuecampus"},{name:"Lion Skull (for big cats)",path:"./assets/models/lion-skull.obj",origin:"https://sketchfab.com/aucklandmuseum"},{name:"Cat Skull (for small cats)",path:"./assets/models/cat-skull.obj",origin:"https://sketchfab.com/openededinburgh"},{name:"Chicken Skull (for birds)",path:"./assets/models/chicken-skull.obj",origin:"https://sketchfab.com/misterdevious"},{name:"Horse Skull",path:"./assets/models/horse-skull.obj",origin:"https://sketchfab.com/openededinburgh"},{name:"Cow Skull",path:"./assets/models/cow-skull.obj",origin:"https://sketchfab.com/bencva"},{name:"Sheep Skull",path:"./assets/models/sheep-skull.obj",origin:"https://sketchfab.com/victorzug"},{name:"Bear Skull",path:"./assets/models/bear-skull.obj",origin:"https://sketchfab.com/geoffreymarchal"},{name:"Rat Skull",path:"./assets/models/rat-skull.obj",origin:"https://www.thingiverse.com/scienceminer/about"}]},"441d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-spin",{staticStyle:{position:"relative"},style:{width:t.width+"px",height:t.height+"px"},attrs:{spinning:t.loading}},[n("canvas",{ref:"canvas",staticStyle:{cursor:"grab"},attrs:{width:t.width,height:t.height},on:{contextmenu:function(t){t.preventDefault()},mousedown:t.dragStart,"&touchstart":function(e){return t.dragStart(e)},mousemove:t.dragMove,"&touchmove":function(e){return t.dragMove(e)},mousewheel:t.mouseWheel}}),t._t("default")],2)},a=[],r=(n("c5f6"),n("5a89")),o=n("e153"),s=n.n(o);s()(r);var c=1/180*Math.PI,l=20,u=25,h={props:{width:{type:Number,default:420},height:{type:Number,default:420},preferSize:{type:Number,default:6.5},zoom:{type:Number},rotateX:{type:Number},rotateY:{type:Number},rotateZ:{type:Number},clearColor:{type:Number,default:15921906},model:String},watch:{model:function(t){this.loadObject(t)},rotateX:function(t){var e=this._model;e&&(e.rotation.x=t*c)},rotateY:function(t){var e=this._model;e&&(e.rotation.y=t*c)},rotateZ:function(t){var e=this._model;e&&(e.rotation.z=t*c)},zoom:function(t){this._camera&&(this._camera.position.z=l-t)}},data:function(){return{loading:!1,dragging:!1,dragStartX:0,dragStartY:0}},mounted:function(){var t=this,e=this._renderer=new r["WebGLRenderer"]({canvas:this.$refs.canvas});e.setClearColor(this.clearColor);var n=this._scene=new r["Scene"],i=this._camera=new r["PerspectiveCamera"](45,this.width/this.height);i.position.set(0,0,l-this.zoom),i.lookAt(new r["Vector3"](0,0,0)),n.add(i);var a=new r["DirectionalLight"](16777215);a.position.set(0,5,5),n.add(a),this._loader=new r["OBJLoader"],this.model&&this.loadObject(this.model),this._iid=setInterval(function(){t.render()},1e3/u),window.addEventListener("mouseup",this.dragStop),window.addEventListener("touchend",this.dragStop)},beforeDestroy:function(){clearInterval(this._iid),window.removeEventListener("mouseup",this.dragStop),window.removeEventListener("touchend",this.dragStop)},methods:{loadObject:function(t){var e=this;this.loading=!0,this._loader.load(t,function(t){e.loading=!1,e._model&&e._scene.remove(e._model),t.traverse(function(t){t.material&&(t.material.side=r["DoubleSide"])});var n=t.children[0],i=(new r["Box3"]).setFromObject(t),a=i.getCenter();n.position.set(-a.x,-a.y,-a.z);var o=i.getSize(),s=e.preferSize/Math.max(o.x,o.y,o.z);n.scale.set(s,s,s),t.rotation.set(e.rotateX*c,e.rotateY*c,e.rotateZ*c),e._model=t,e._scene.add(t)},null,function(){e.loading=!1})},render:function(){this._renderer.render(this._scene,this._camera)},dragStart:function(t){this.dragging=!0,this.dragStartX=t.clientX||t.touches&&t.touches[0].clientX,this.dragStartY=t.clientY||t.touches&&t.touches[0].clientY},dragStop:function(){this.dragging=!1},dragMove:function(t){if(this.dragging){var e=this.dragStartX,n=this.dragStartY,i=t.clientX||t.touches&&t.touches[0].clientX,a=t.clientY||t.touches&&t.touches[0].clientY,r=i-e,o=a-n,s=this.rotateX,c=this.rotateY;this.dragStartX=i,this.dragStartY=a,s+=o,s<-180?s+=360:s>180&&(s-=360),c+=r,c<-180?c+=360:c>180&&(c-=360),this.$emit("update:rotateX",0|s),this.$emit("update:rotateY",0|c)}},mouseWheel:function(t){var e=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail));this.$emit("update:zoom",Math.min(l,Math.max(0,this.zoom-e)))}}},d=h,m=n("2877"),f=Object(m["a"])(d,i,a,!1,null,null,null);e["a"]=f.exports},"487b":function(t,e,n){"use strict";var i=n("5d91"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},r=[],o=(n("5c0b"),n("2877")),s={},c=Object(o["a"])(s,a,r,!1,null,null,null),l=c.exports,u=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%",height:"100%"}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"column-1",staticStyle:{width:"360px"}},[n("div",{staticStyle:{"margin-bottom":"8px"}},[t._v("Species:")]),n("div",{staticClass:"search",staticStyle:{display:"flex","margin-bottom":"8px"}},[n("a-spin",{staticStyle:{flex:"1 1","margin-right":"8px"},attrs:{spinning:t.loading}},[n("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"any"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[n("a-select-option",{key:""},[t._v("any")]),t._l(t.tags,function(e){return n("a-select-option",{key:e},[t._v(t._s(e))])})],2)],1),n("a-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("Search")])],1),n("div",{staticStyle:{"margin-bottom":"8px"}},[t._v("Direction: (skull type dose not affect search results)")]),n("a-select",{staticStyle:{width:"100%","margin-bottom":"8px"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.models,function(e){return n("a-select-option",{key:e.path,attrs:{value:e.path}},[t._v("\n                    "+t._s(e.name)+"\n                ")])}),1),n("model-viewer",{attrs:{width:360,height:360,model:t.model,"rotate-x":t.rotateX,"rotate-y":t.rotateY,"rotate-z":t.rotateZ,zoom:t.zoom},on:{"update:rotateX":function(e){t.rotateX=e},"update:rotate-x":function(e){t.rotateX=e},"update:rotateY":function(e){t.rotateY=e},"update:rotate-y":function(e){t.rotateY=e},"update:rotateZ":function(e){t.rotateZ=e},"update:rotate-z":function(e){t.rotateZ=e},"update:zoom":function(e){t.zoom=e}}},[t.currentModelOrigin?n("a",{staticStyle:{position:"absolute",right:"8px",top:"8px","line-height":"14px"},attrs:{target:"_blank",title:"Author of this model",href:t.currentModelOrigin}},[n("a-icon",{attrs:{type:"info-circle"}})],1):t._e()]),n("div",{staticClass:"slider-wrapper"},[n("span",{staticClass:"prefix"},[t._v("X: "+t._s(t.rotateX)+"; Y: "+t._s(t.rotateY)+"; Z: ")]),n("a-slider",{staticClass:"slider",attrs:{included:!1,min:-180,max:180},model:{value:t.rotateZ,callback:function(e){t.rotateZ=e},expression:"rotateZ"}}),n("div",{staticClass:"postfix"},[n("span",{staticStyle:{width:"2.5em","text-align":"center",display:"inline-block"}},[t._v(t._s(t.rotateZ))]),n("a-button",{attrs:{size:"small"},on:{click:function(e){t.rotateX=t.rotateY=t.rotateZ=0}}},[t._v("Reset")])],1)],1),t._m(0)],1),n("div",{staticClass:"column-2"},t._l(t.result,function(e){return n("image-thumb",{key:e.url,staticClass:"item",attrs:{image:e,size:200},nativeOn:{click:function(n){return t.show(e)}}})}),1)]),n("image-viewer",{attrs:{show:t.showLarge,image:t.currentImage&&t.currentImage.url,flip:t.currentImage&&t.currentImage.flip},on:{"update:show":function(e){t.showLarge=e}}})],1)},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"info",staticStyle:{color:"#bfbfbf"}},[i("div",[t._v("Author: x6udpngx")]),i("div",[t._v("Latest update: 2019-03-09")]),i("div",[i("a",{attrs:{href:"https://github.com/x6ud/x6ud.github.io/issues",target:"_blank"}},[t._v("Create an issue")]),i("span",[t._v(" - Suitable photos are lacking in some directions, please leave a message if you find one on Flickr.")])]),i("div",[i("a",{attrs:{href:"https://ko-fi.com/x6udpngx",target:"_blank"}},[i("img",{staticStyle:{"margin-right":".25em"},attrs:{src:n("137c"),alt:"",width:"14px",height:"14px"}}),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("Ko-fi.com/x6udpngx")])])])])}],m=n("a4bb"),f=n.n(m),p=(n("ac6a"),n("4917"),n("55dd"),n("cebc")),g=(n("6762"),n("2fdb"),n("75fc")),v=(n("7514"),n("441d")),b=n("6b20"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",style:{"z-index":t.zIndex}},[t.show?n("div",{staticClass:"modal",style:{"z-index":t.zIndex},on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("img",{style:t.imgStyle,attrs:{src:t.image,alt:""}}),t.flickrLink?n("a",{staticClass:"flickr-link",attrs:{href:t.flickrLink,target:"_blank"}},[t._v("Click here for more information about this picture")]):t._e(),n("div",{staticClass:"btn-close",on:{click:t.close}},[n("a-icon",{attrs:{type:"close"}})],1)]):t._e()])},y=[],k=(n("c5f6"),n("9982")),S={props:{show:Boolean,image:String,zIndex:{type:Number,default:1e3},flip:{type:Boolean,default:!1}},data:function(){return{width:0,height:0,scale:1}},watch:{image:function(t){var e=this;this.width=0,this.height=0,this.scale=1;var n=new Image;n.onload=function(){e.width=n.width,e.height=n.height;var t=.9*document.documentElement.clientWidth,i=.9*document.documentElement.clientHeight;e.zoom=Math.min(t/n.width,i/n.height,1)},n.src=t}},computed:{imgStyle:function(){return{"margin-left":-(this.width/2|0)+"px","margin-top":-(this.height/2|0)+"px",transform:"scaleX(".concat(this.zoom*(this.flip?-1:1),") scaleY(").concat(this.zoom,")")}},flickrLink:function(){var t=Object(k["a"])(this.image);return t&&"https://www.flickr.com/photo.gne?id=".concat(t)}},methods:{close:function(){this.$emit("update:show",!1)}}},x=S,_=(n("da82"),Object(o["a"])(x,w,y,!1,null,"1fb5bd9f",null)),A=_.exports,C=n("3242"),z={components:{ModelViewer:v["a"],ImageThumb:b["a"],ImageViewer:A},data:function(){return{models:C["a"],model:C["a"][0].path,rotateX:0,rotateY:0,rotateZ:0,zoom:10,tags:[],data:[],keyword:"",result:[],currentImage:null,showLarge:!1,loading:!1}},computed:{currentModelOrigin:function(){var t=this,e=this.models.find(function(e){return e.path===t.model});return e&&e.origin}},methods:{search:function(){var t=this,e=Object(g["a"])(this.data);this.keyword&&(e=e.filter(function(e){return e.tags&&e.tags.includes(t.keyword)})),e=e.map(function(e){var n=e.ry*t.rotateY<0,i=e.rx,a=n?-e.ry:e.ry,r=n?-e.rz:e.rz,o=Math.abs(t.rotateX-i)+1.5*Math.abs(t.rotateY-a)+.5*Math.abs(t.rotateZ-r);return Object(p["a"])({},e,{flip:n,ry:a,rz:r,match:o})}),e.sort(function(t,e){return t.match-e.match}),this.result=e.slice(0,Math.min(e.length,30))},show:function(t){this.currentImage=t,this.showLarge=!0}},mounted:function(){var t=this;this.loading=!0,n.e("chunk-2d20ee20").then(n.bind(null,"b0ea")).then(function(e){var n=e.default,i={};n.forEach(function(t){t.tags&&t.tags.forEach(function(t){return i[t]=t})}),t.data=n,t.tags=f()(i).sort()}).finally(function(){t.loading=!1})}},E=z,j=(n("487b"),Object(o["a"])(E,h,d,!1,null,"0de16b64",null)),X=j.exports;i["a"].use(u["a"]);var O=new u["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"search",component:X},{path:"/editor",name:"editor",component:function(){return n.e("chunk-43a252a4").then(n.bind(null,"49d7"))}}]}),L=n("5efb"),M=n("0c63"),Y=n("b558"),I=n("9839"),N=n("fbdf"),R=n("8592");n("95d1"),n("96ef"),n("1325"),n("cf0b"),n("e346"),n("f27b");i["a"].use(L["a"]),i["a"].use(M["a"]),i["a"].use(Y["a"]),i["a"].use(I["a"]),i["a"].use(N["a"]),i["a"].use(R["a"]),"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style&&window.addEventListener("hashchange",function(){O.push(window.location.hash.slice(1))},!1),i["a"].config.productionTip=!1,new i["a"]({router:O,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),a=n.n(i);a.a},"5d91":function(t,e,n){},"5e27":function(t,e,n){},"6b20":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-spin",{staticClass:"thumb",attrs:{spinning:t.loading}},[n("div",{staticClass:"thumb-inner-wrapper",class:{flip:this.image&&t.image.flip},style:{width:t.size+"px",height:t.size+"px"}},[t.image&&t.image.url?n("img",{style:t.imgStyle,attrs:{src:t.image.url,alt:""}}):t._e(),t._t("default")],2)])},a=[];n("c5f6"),n("cadf"),n("551c"),n("f751"),n("097d");function r(t){var e=t.getBoundingClientRect(),n=e.right-e.left,i=e.bottom-e.top;return e.top>-i&&e.left>-n&&e.bottom<(window.innerHeight||document.documentElement.clientHeight)+i&&e.right<(window.innerWidth||document.documentElement.clientWidth)+n}function o(t){return null==t?null:t.scrollHeight>t.clientHeight?t:o(t.parentNode)}var s={data:function(){return{loading:!1,handlerRemoved:!1}},props:{image:Object,size:{type:Number,default:160}},computed:{imgStyle:function(){var t=this.image;if(!t||!t.url)return{};var e=1/t.cs*this.size;return{width:t.w*e+"px",height:t.h*e+"px",left:-t.cx*e+"px",top:-t.cy*e+"px"}}},mounted:function(){document.addEventListener("scroll",this.checkVisibilityChange,!1),document.addEventListener("resize",this.checkVisibilityChange,!1);var t=this._parent=o(this.$el);t&&t.addEventListener("scroll",this.checkVisibilityChange,!1),this.checkVisibilityChange()},methods:{checkVisibilityChange:function(){var t=this;if(r(this.$el)){this.loading=!0;var e=new Image;e.onload=function(){t.loading=!1},e.onerror=function(){t.loading=!1},e.src=this.image&&this.image.url,this.removeHandlers()}},removeHandlers:function(){this.handlerRemoved||(document.removeEventListener("scroll",this.checkVisibilityChange),document.removeEventListener("resize",this.checkVisibilityChange),this._parent&&this._parent.removeEventListener("scroll",this.checkVisibilityChange),this.handlerRemoved=!0)}}},c=s,l=(n("ed38"),n("2877")),u=Object(l["a"])(c,i,a,!1,null,"75432b26",null);e["a"]=u.exports},9430:function(t,e,n){},9982:function(t,e,n){"use strict";n("4917");e["a"]=function(t){t+="";var e=t.match(/https:\/\/farm[0-9]+\.static\.flickr\.com\/[0-9]+\/([0-9]+)_/);return e?e[1]:null}},da82:function(t,e,n){"use strict";var i=n("2054"),a=n.n(i);a.a},ed38:function(t,e,n){"use strict";var i=n("9430"),a=n.n(i);a.a}});
//# sourceMappingURL=main.b11a6698.js.map