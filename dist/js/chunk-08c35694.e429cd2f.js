(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08c35694"],{1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[5,20,50],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalMsg},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},n=[],s=(a("a9e3"),{props:{totalMsg:{type:Number,default:null},pageSize:{type:Number,default:1},pageIndex:{type:Number,default:5}},methods:{handleSizeChange:function(t){this.$emit("setSize",t)},handleCurrentChange:function(t){this.$emit("setIndex",t)}}}),r=s,o=a("2877"),c=Object(o["a"])(r,i,n,!1,null,null,null);e["a"]=c.exports},"30f3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"data-menu"},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"a"}},[t._v("数据A")]),a("el-menu-item",{attrs:{index:"b"}},[t._v("数据B")])],1)],1),a("div",{staticClass:"userdata-container"},[a("div",{staticClass:"userdata-btn"},[a("el-button",{attrs:{type:"success"},on:{click:t.addData}},[t._v("添加"+t._s(t.dataType))])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.dataList}},[a("el-table-column",{attrs:{prop:"id",align:"center",width:"80px",label:"数据序号"}}),a("el-table-column",{attrs:{label:t.dataType,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t.isedit?[a("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:i.data,callback:function(e){t.$set(i,"data",e)},expression:"row.data"}})]:a("span",[t._v(t._s(i.data))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.isedit?a("div",[a("el-button",{staticClass:"cancel-btn",attrs:{size:"small",icon:"el-icon-refresh",type:"warning"},on:{click:t.cancelEdit}},[t._v("返回")]),a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("确定修改")])],1):a("div",[a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:t.onEdit}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.onDel(e.row)}}},[t._v("删除")])],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"添加"+t.dataType,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.closeMyData}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:t.dataType,"label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.data,callback:function(e){t.$set(t.form,"data",e)},expression:"form.data"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancleMyData}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addMyData}},[t._v("确 定")])],1)],1),a("div",{staticClass:"bottom-page"},[a("Pagination",{attrs:{totalMsg:t.query.total,pageSize:t.query.pageSize,pageIndex:t.query.pageIndex},on:{setSize:t.getSize,setIndex:t.getIndex}})],1)],1)},n=[],s=a("1799"),r={components:{Pagination:s["a"]},data:function(){return{dialogFormVisible:!1,formLabelWidth:"120px",isedit:!1,activeIndex:"a",loading:!1,dataList:[],dataType:"数据A",userArr:[],dataA:"",dataB:"",form:{data:""},query:{total:null,pageSize:10,pageIndex:1}}},methods:{getSize:function(t){this.query.pageSize=t,this.getDataList()},getIndex:function(t){this.query.pageIndex=t,this.getDataList()},handleSelect:function(t){var e=this;switch(e.activeIndex=t,e.getDataList(),t){case"a":e.dataType="数据A";break;case"b":e.dataType="数据B";break}},getDataList:function(){var t=this;this.$api.govfinddata("".concat(t.activeIndex),{page:t.query.pageIndex,pageSize:t.query.pageSize}).then((function(e){if(100===e.err_code){var a=e.data;"a"==t.activeIndex?(t.dataList=a.dataA,t.query.total=a.dataA.length):"b"==t.activeIndex&&(t.dataList=a.dataB,t.query.total=a.dataB.length),t.loading=!1}}))},addData:function(){this.dialogFormVisible=!0},cancleMyData:function(){this.dialogFormVisible=!1,this.form.data=""},closeMyData:function(){this.dialogFormVisible=!1,this.form.data=""},addMyData:function(){var t=this;this.$api.govadddata(this.activeIndex,{data:t.form.data}).then((function(e){100===e.err_code?(t.$message({message:"添加数据成功",type:"success"}),t.getDataList(),t.dialogFormVisible=!1,t.form.data=""):t.$message({message:"添加数据失败",type:"error"})}))},onEdit:function(){this.isedit=!0},cancelEdit:function(){this.isedit=!1},handleEdit:function(t){var e=this;this.$api.govupdatedata("".concat(e.activeIndex),{data:t.data,id:t.id}).then((function(t){100===t.err_code?(e.$message({message:"数据修改成功",type:"success"}),e.getDataList(),e.isedit=!1):e.$message({message:"数据修改失败",type:"error"})}))},onDel:function(t){var e=this,a=this;this.$confirm("确定删除吗?","提示",{type:"warning"}).then((function(){a.$api.govdeldata(e.activeIndex,{id:t.id}).then((function(t){100===t.err_code?(a.$message({message:"删除成功",type:"success"}),a.getDataList()):a.$message({message:"删除失败",type:"error"})}))})).catch((function(){}))}},created:function(){this.getDataList()}},o=r,c=(a("f1c6"),a("2877")),l=Object(c["a"])(o,i,n,!1,null,"fbf862be",null);e["default"]=l.exports},3766:function(t,e,a){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),n=a("5899"),s="["+n+"]",r=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),c=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,a){var i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var s,r;return n&&"function"==typeof(s=e.constructor)&&s!==a&&i(r=s.prototype)&&r!==a.prototype&&n(t,r),t}},a9e3:function(t,e,a){"use strict";var i=a("83ab"),n=a("da84"),s=a("94ca"),r=a("6eeb"),o=a("5135"),c=a("c6b6"),l=a("7156"),d=a("c04e"),u=a("d039"),f=a("7c73"),p=a("241c").f,g=a("06cf").f,m=a("9bf2").f,h=a("58a8").trim,v="Number",b=n[v],y=b.prototype,I=c(f(y))==v,x=function(t){var e,a,i,n,s,r,o,c,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(s=l.slice(2),r=s.length,o=0;o<r;o++)if(c=s.charCodeAt(o),c<48||c>n)return NaN;return parseInt(s,i)}return+l};if(s(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var _,S=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof S&&(I?u((function(){y.valueOf.call(a)})):c(a)!=v)?l(new b(x(e)),a,S):x(e)},z=i?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;z.length>N;N++)o(b,_=z[N])&&!o(S,_)&&m(S,_,g(b,_));S.prototype=y,y.constructor=S,r(n,v,S)}},f1c6:function(t,e,a){"use strict";var i=a("3766"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-08c35694.e429cd2f.js.map