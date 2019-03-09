(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43a252a4"],{"0324":function(t,i,e){"use strict";var a=e("de50"),s=e.n(a);s.a},"49d7":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"column-1",staticStyle:{width:"360px"}},[e("a-select",{staticStyle:{width:"100%","margin-bottom":"8px"},model:{value:t.model,callback:function(i){t.model=i},expression:"model"}},t._l(t.models,function(i){return e("a-select-option",{key:i.path,attrs:{value:i.path}},[t._v("\n                "+t._s(i.name)+"\n            ")])}),1),e("model-viewer",{attrs:{width:360,height:360,model:t.model,"rotate-x":t.rotateX,"rotate-y":t.rotateY,"rotate-z":t.rotateZ,zoom:t.zoom},on:{"update:rotateX":function(i){t.rotateX=i},"update:rotate-x":function(i){t.rotateX=i},"update:rotateY":function(i){t.rotateY=i},"update:rotate-y":function(i){t.rotateY=i},"update:rotateZ":function(i){t.rotateZ=i},"update:rotate-z":function(i){t.rotateZ=i},"update:zoom":function(i){t.zoom=i}}}),e("div",{staticClass:"slider-wrapper"},[e("span",{staticClass:"prefix"},[t._v("X: "+t._s(t.rotateX)+"; Y: "+t._s(t.rotateY)+"; Z: ")]),e("a-slider",{staticClass:"slider",attrs:{included:!1,min:-180,max:180},model:{value:t.rotateZ,callback:function(i){t.rotateZ=i},expression:"rotateZ"}}),e("div",{staticClass:"postfix"},[e("span",{staticStyle:{width:"2.5em","text-align":"center",display:"inline-block"}},[t._v(t._s(t.rotateZ))]),e("a-button",{attrs:{size:"small"},on:{click:function(i){t.rotateX=t.rotateY=t.rotateZ=0}}},[t._v("Reset")])],1)],1)],1),e("div",{staticClass:"column-2"},[e("div",{staticClass:"toolbar"},[e("a-input",{staticStyle:{"margin-bottom":"8px","margin-right":"8px"},attrs:{placeholder:"Input image url"},model:{value:t.imageUrl,callback:function(i){t.imageUrl=i},expression:"imageUrl"}}),e("a-button",{staticStyle:{"margin-right":"8px"},on:{click:t.getOne}},[t._v("Get One ("+t._s(t.unregistered.length)+")")]),e("a-button",{on:{click:t.save}},[t._v("Save")])],1),e("a-select",{staticStyle:{width:"100%","margin-bottom":"8px"},attrs:{mode:"tags",placeholder:"Input tags"},model:{value:t.tags,callback:function(i){t.tags=i},expression:"tags"}}),e("div",{staticClass:"image-clip",staticStyle:{height:"428px"}},[e("div",{staticClass:"side"},[e("div",{staticClass:"small"},[t.imageUrl?e("img",{style:t.smallImageStyle,attrs:{src:t.imageUrl,alt:""}}):t._e()]),e("div",{staticClass:"slider-wrapper"},[e("span",{staticClass:"prefix"},[t._v("Size")]),e("a-slider",{staticClass:"slider",attrs:{included:!1,min:0,max:t.imageClipMaxSize},model:{value:t.imageClip.size,callback:function(i){t.$set(t.imageClip,"size",i)},expression:"imageClip.size"}})],1)]),e("div",{ref:"imageClipLarge",staticClass:"main"},[e("div",{staticClass:"large",on:{mousemove:t.imageClipDragMove}},[e("a-spin",{attrs:{spinning:t.imageLoading}},[t.imageUrl?e("div",{staticClass:"image",style:t.imageStyle}):t._e()]),t.imageUrl?e("div",{staticClass:"image-clip",style:t.imageClipStyle,on:{mousedown:t.imageClipDragStart}}):t._e()],1),e("div",{staticClass:"slider-wrapper",staticStyle:{width:"100%"}},[e("span",{staticClass:"prefix"},[t._v("Zoom")]),e("a-slider",{staticClass:"slider",attrs:{included:!1,min:10,max:100},model:{value:t.imageZoom,callback:function(i){t.imageZoom=i},expression:"imageZoom"}})],1)])])],1),e("div",{staticClass:"column-3"},[e("div",{staticStyle:{width:"100%","margin-bottom":"8px","text-align":"right"}},[e("span",{staticStyle:{"margin-right":"8px"}},[t._v(t._s(t.data.length))]),e("a-button",{staticStyle:{"margin-right":"8px"},attrs:{size:"small"},on:{click:function(i){return t.importData()}}},[t._v("Import")]),e("a-button",{attrs:{size:"small"},on:{click:function(i){return t.exportData()}}},[t._v("Export")])],1),e("div",{staticClass:"list"},t._l(t.latestRecords,function(i){return e("image-thumb",{key:i.url,staticClass:"item",attrs:{image:i},nativeOn:{click:function(e){return t.load(i)}}},[e("span",{staticClass:"btn-remove",on:{click:function(e){return t.remove(i)}}},[e("a-icon",{attrs:{type:"close"}})],1)])}),1)])])},s=[],o=e("75fc"),n=(e("ac6a"),e("f499")),l=e.n(n),r=(e("20d6"),e("bd86")),m=(e("cadf"),e("551c"),e("f751"),e("097d"),e("441d")),g=e("6b20"),c=e("3242"),d=[],h=e("9982"),p=160,u="ars-data";function f(t){if(window.clipboardData&&window.clipboardData.setData)return clipboardData.setData("Text",t);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var i=document.createElement("textarea");i.textContent=t,i.style.position="fixed",document.body.appendChild(i),i.select();try{return document.execCommand("copy")}catch(e){return!1}finally{document.body.removeChild(i)}}}function C(t){return Object(h["a"])(t)||t}var v={components:{ModelViewer:m["a"],ImageThumb:g["a"]},data:function(){return{models:c["a"],model:c["a"][0].path,rotateX:0,rotateY:0,rotateZ:0,zoom:10,imageUrl:"",imageZoom:100,imageWidth:0,imageHeight:0,imageLoading:!1,imageClip:{left:0,top:0,size:0,dragging:!1,dragX:0,dragY:0},tags:[],data:[],unregistered:[]}},computed:{imageStyle:function(){return{background:"url(".concat(this.imageUrl,") 0 0 / 100% 100% no-repeat"),width:this.imageWidth*this.imageZoom/100+"px",height:this.imageHeight*this.imageZoom/100+"px"}},imageClipStyle:function(){return{left:this.imageClip.left*this.imageZoom/100+"px",top:this.imageClip.top*this.imageZoom/100+"px",width:this.imageClip.size*this.imageZoom/100+"px",height:this.imageClip.size*this.imageZoom/100+"px"}},imageClipMaxSize:function(){return Math.min(this.imageWidth,this.imageHeight)},smallImageStyle:function(){var t=1/this.imageClip.size*p;return{position:"absolute",width:this.imageWidth*t+"px",height:this.imageHeight*t+"px",left:-this.imageClip.left*t+"px",top:-this.imageClip.top*t+"px"}},latestRecords:function(){return this.data.length>10?this.data.slice(this.data.length-10):this.data}},watch:Object(r["a"])({imageUrl:{immediate:!0,handler:function(t){var i=this;if(t){this.imageLoading=!0;var e=new Image;e.onload=function(){i.imageLoading=!1,i.imageWidth=e.width,i.imageHeight=e.height,i.imageClip.size=Math.min(e.width,e.height,i.imageClip.size),i.imageZoom=Math.min(e.width,e.height,i.$refs.imageClipLarge.clientWidth-18,i.$refs.imageClipLarge.clientHeight-18-32)/e.width*100|0},e.src=t}}}},"imageClip.size",function(t){this.imageClip.left=Math.min(this.imageClip.left,this.imageWidth-t),this.imageClip.top=Math.min(this.imageClip.top,this.imageHeight-t)}),methods:{imageClipDragStart:function(t){0===t.button&&(this.imageClip.dragging=!0,this.imageClip.dragX=t.clientX,this.imageClip.dragY=t.clientY)},imageClipDragStop:function(){this.imageClip.dragging=!1},imageClipDragMove:function(t){var i=this.imageClip.dragX,e=this.imageClip.dragY,a=t.clientX,s=t.clientY;if(this.imageClip.dragX=a,this.imageClip.dragY=s,this.imageClip.dragging){var o=a-i,n=s-e;this.imageClip.left+=o/(this.imageZoom/100),this.imageClip.left=Math.max(0,Math.min(this.imageWidth-this.imageClip.size,this.imageClip.left)),this.imageClip.top+=n/(this.imageZoom/100),this.imageClip.top=Math.max(0,Math.min(this.imageHeight-this.imageClip.size,this.imageClip.top))}},save:function(){if(this.imageUrl){var t={rx:this.rotateX,ry:this.rotateY,rz:this.rotateZ,url:this.imageUrl,cx:0|this.imageClip.left,cy:0|this.imageClip.top,cs:this.imageClip.size,w:this.imageWidth,h:this.imageHeight,tags:this.tags},i=this.data.findIndex(function(i){return i.url===t.url});i>=0?this.data[i]=t:this.data.push(t),window.localStorage.setItem(u,l()(this.data)),this.$notification.success({message:"Saved successfully.",placement:"topLeft",duration:2})}},load:function(t){this.rotateX=t.rx,this.rotateY=t.ry,this.rotateZ=t.rz,this.imageUrl=t.url,this.imageWidth=t.w,this.imageHeight=t.h,this.imageClip.left=t.cx,this.imageClip.top=t.cy,this.imageClip.size=t.cs,this.tags=t.tags},remove:function(t){window.confirm("Are you sure you want to delete ".concat(t.url,"?"))&&(this.data.splice(this.data.findIndex(function(i){return i===t}),1),window.localStorage.setItem(u,l()(this.data)))},importData:function(){var t=window.prompt("Input Data JSON:");t&&(this.data=JSON.parse(t),window.localStorage.setItem(u,t))},exportData:function(){f(l()(this.data))},getOne:function(){this.imageUrl=this.unregistered.shift().url}},mounted:function(){var t=this;window.addEventListener("mouseup",this.imageClipDragStop),e.e("chunk-2d20ee20").then(e.bind(null,"b0ea")).then(function(i){var e=i.default,a=localStorage.getItem(u);a=a&&JSON.parse(a)||[];var s={};[].concat(Object(o["a"])(a),Object(o["a"])(e)).forEach(function(t){return s[C(t.url)]=!0});var n=d.filter(function(t){return!s[C(t.url)]});t.data=a,t.unregistered=n})},beforeDestroy:function(){window.removeEventListener("mouseup",this.imageClipDragStop)}},x=v,w=(e("0324"),e("2877")),y=Object(w["a"])(x,a,s,!1,null,"1bac12f2",null);i["default"]=y.exports},a21f:function(t,i,e){var a=e("584a"),s=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},de50:function(t,i,e){},f499:function(t,i,e){t.exports=e("a21f")}}]);
//# sourceMappingURL=chunk-43a252a4.8bbe55a7.js.map