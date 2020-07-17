(function(e){function t(t){for(var a,o,s=t[0],r=t[1],u=t[2],c=0,m=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),l()}function l(){for(var e,t=0;t<i.length;t++){for(var l=i[t],a=!0,s=1;s<l.length;s++){var r=l[s];0!==n[r]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=l[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=a,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(l,a,function(t){return e[t]}.bind(null,a));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=r;i.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"56d7":function(e,t,l){"use strict";l.r(t);l("e260"),l("e6cf"),l("cca6"),l("a79d");var a=l("2b0e"),n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-layout",{attrs:{view:"lHh Lpr lFf"}},[l("q-header",{staticClass:"glossy",attrs:{elevated:""}},[l("q-toolbar",[l("q-toolbar-title",[e._v(" Django CRUD REST API Generator ")]),l("div",[l("github-button",{attrs:{href:"https://github.com/mehmetalpsumer/django-crud-rest-api-generator","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star mehmetalpsumer/django-crud-rest-api-generator on GitHub"}},[e._v("Star")]),l("github-button",{attrs:{href:"https://github.com/mehmetalpsumer/django-crud-rest-api-generator/issues","data-color-scheme":"no-preference: light; light: light; dark: light;","data-icon":"octicon-issue-opened","data-size":"large","data-show-count":"true","aria-label":"Issue mehmetalpsumer/django-crud-rest-api-generator on GitHub"}},[e._v("Issue")])],1)],1)],1),l("q-page-container",[l("FlexWrapper")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-page",{staticClass:"flex flex-center"},[l("Form")],1)},s=[],r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"q-pa-md",staticStyle:{width:"70%"}},[l("q-stepper",{attrs:{color:"primary",animated:"","keep-alive":""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[l("q-step",{attrs:{name:1,title:"Project settings",icon:"settings",done:e.step>1}},[l("ProjectSubForm",{ref:"projectSubForm"}),l("q-stepper-navigation",[l("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:e.toNextStep}})],1)],1),l("q-step",{attrs:{name:2,title:"App",icon:"create_new_folder",done:e.step>2}},[l("AppSubForm",{ref:"appSubForm"}),l("q-stepper-navigation",[l("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:e.toNextStep}}),l("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:e.toPrevStep}})],1)],1),l("q-step",{attrs:{name:3,title:"Models",icon:"assignment",done:e.step>3}},[e._l(e.models,(function(t){return l("ModelSubForm",{key:t,ref:"modelSubForms",refInFor:!0,attrs:{id:t},on:{removeModelClicked:function(l){return e.removeModel(t)}}})})),l("q-stepper-navigation",[l("q-btn",{attrs:{color:"primary",label:"Continue"},on:{click:e.toNextStep}}),l("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Add model"},on:{click:e.addModel}}),l("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:e.toPrevStep}})],1)],2),l("q-step",{attrs:{name:4,title:"Review & Complete",icon:"add_comment"}},[e._v(" Review your project settings. "),l("div",{staticClass:"q-pa-md q-gutter-sm"},[l("q-tree",{attrs:{"default-expand-all":!0,nodes:e.treeData,"node-key":"label"}})],1),l("q-stepper-navigation",[l("q-btn",{attrs:{color:"primary",label:"Finish",loading:e.submitted,disable:e.submitted},on:{click:e.submit}}),l("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"Back"},on:{click:function(t){e.step=3}}})],1)],1)],1)],1)},u=[],d=(l("99af"),l("c975"),l("d81d"),l("a434"),l("b0c0"),l("d3b7"),l("3ca3"),l("ddb0"),l("2b3d"),l("96cf"),l("1da1")),c=l("bc3a"),m=l.n(c),f=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"400px"}},[l("q-form",{staticClass:"q-gutter-md"},[l("q-input",{attrs:{filled:"",label:"Project name",hint:"Name of the Django project","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.project.name,callback:function(t){e.$set(e.project,"name",t)},expression:"project.name"}}),l("q-input",{attrs:{filled:"",type:"number",label:"Port",hint:"Port that Django will run on","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please type something"},function(e){return e>1024&&e<65535||"Please type a valid port number"}]},model:{value:e.project.port,callback:function(t){e.$set(e.project,"port",t)},expression:"project.port"}})],1)],1)},p=[],b={data:function(){return{project:{name:"my_project",port:8e3}}},methods:{getData:function(){return this.project}}},h=b,F=l("2877"),g=l("fe09"),v=Object(F["a"])(h,f,p,!1,null,null,null),x=v.exports;v.options.components=Object.assign(Object.create(v.options.components||null),v.options.components||{},{QForm:g["d"],QInput:g["f"]});var y=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"400px"}},[l("q-form",{staticClass:"q-gutter-md"},[l("q-input",{attrs:{filled:"",label:"App name",hint:"Name of the Django app","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.app.name,callback:function(t){e.$set(e.app,"name",t)},expression:"app.name"}})],1)],1)},D=[],q={data:function(){return{app:{name:"my_app"}}},methods:{getData:function(){return this.app}}},k=q,j=Object(F["a"])(k,y,D,!1,null,null,null),S=j.exports;j.options.components=Object.assign(Object.create(j.options.components||null),j.options.components||{},{QForm:g["d"],QInput:g["f"]});var O=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticStyle:{"margin-bottom":"30px"}},[l("q-card-section",[l("div",{staticClass:"text-h6"},[l("div",{staticClass:"row justify-between"},[l("div",{staticClass:"col-4"},[e._v(" Model ")]),l("div",{staticClass:"col-8"},[l("q-btn",{staticStyle:{float:"right"},attrs:{size:"sm",flat:"",icon:"close",label:"Remove model"},on:{click:e.onRemoveModel}}),l("q-btn",{staticStyle:{float:"right"},attrs:{size:"sm",flat:"",icon:"add",label:"Add field"},on:{click:e.addField}})],1)])])]),l("q-card-section",{staticClass:"q-pt-none"},[l("q-form",{staticClass:"q-gutter-md"},[l("q-input",{attrs:{filled:"",label:"Model name","lazy-rules":"",hint:"Recomended to separate words with spaces.",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1)],1),l("q-separator",{attrs:{inset:""}}),e._l(e.fields,(function(t){return l("FieldSubForm",{key:t,ref:"fields",refInFor:!0,attrs:{id:t},on:{removeFieldClicked:function(l){return e.removeField(t)}}})}))],2)},C=[],_=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-form",{staticClass:"q-gutter-md",staticStyle:{"margin-left":"50px","margin-top":"10px","margin-right":"10px"}},[l("div",{staticClass:"text-h6"},[l("div",{staticClass:"row justify-between"},[l("div",{staticClass:"col-4"},[e._v(" Field ")]),l("div",{staticClass:"col-4"},[l("q-btn",{staticStyle:{float:"right"},attrs:{flat:"",size:"sm",icon:"close"},on:{click:e.onRemoveField}})],1)])]),l("q-input",{attrs:{filled:"",label:"Field name",hint:"Recommended to use snake_case.","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.field.name,callback:function(t){e.$set(e.field,"name",t)},expression:"field.name"}}),l("q-select",{attrs:{options:e.fieldTypes,label:"Field Type"},model:{value:e.field.fieldType,callback:function(t){e.$set(e.field,"fieldType",t)},expression:"field.fieldType"}}),l("div",{staticClass:"q-gutter-sm"},[l("q-checkbox",{attrs:{label:"Can be null"},model:{value:e.field.isNull,callback:function(t){e.$set(e.field,"isNull",t)},expression:"field.isNull"}}),l("q-checkbox",{attrs:{label:"Can be blank"},model:{value:e.field.isBlank,callback:function(t){e.$set(e.field,"isBlank",t)},expression:"field.isBlank"}}),l("q-checkbox",{attrs:{label:"Is unique"},model:{value:e.field.isUnique,callback:function(t){e.$set(e.field,"isUnique",t)},expression:"field.isUnique"}}),l("q-checkbox",{attrs:{label:"Is PK"},model:{value:e.field.isPrimaryKey,callback:function(t){e.$set(e.field,"isPrimaryKey",t)},expression:"field.isPrimaryKey"}})],1),"AutoField"===e.field.fieldType?l("NoArgFieldSubForm",{ref:"AutoField"}):e._e(),"BigAutoField"===e.field.fieldType?l("NoArgFieldSubForm",{ref:"BigAutoField"}):e._e(),"DurationField"===e.field.fieldType?l("NoArgFieldSubForm",{ref:"DurationField"}):"SmallAutoField"===e.field.fieldType?l("NoArgFieldSubForm",{ref:"SmallAutoField"}):e._e(),"DateField"===e.field.fieldType?l("DateFieldSubForm",{ref:"DateField"}):e._e(),"DateTimeField"===e.field.fieldType?l("DateFieldSubForm",{ref:"DateTimeField"}):"TimeField"===e.field.fieldType?l("DateFieldSubForm",{ref:"TimeField"}):"BigIntegerField"===e.field.fieldType?l("NumberFieldSubForm",{ref:"BigIntegerField",attrs:{min:"-9223372036854775808",max:"9223372036854775807"}}):"IntegerField"===e.field.fieldType?l("NumberFieldSubForm",{ref:"IntegerField",attrs:{min:"-2147483648",max:"2147483647"}}):"PositiveIntegerField"===e.field.fieldType?l("NumberFieldSubForm",{ref:"PositiveIntegerField",attrs:{min:"0",max:"2147483647"}}):"PositiveSmallIntegerField"===e.field.fieldType?l("NumberFieldSubForm",{ref:"PositiveSmallIntegerField",attrs:{min:"0",max:"32767"}}):"SmallIntegerField"===e.field.fieldType?l("NumberFieldSubForm",{ref:"SmallIntegerField",attrs:{min:"-32768",max:"32767"}}):"BooleanField"===e.field.fieldType?l("BooleanFieldSubForm",{ref:"BooleanField"}):e._e(),"CharField"===e.field.fieldType?l("CharFieldSubForm",{ref:"CharField"}):e._e(),"DecimalField"===e.field.fieldType?l("DecimalFieldSubForm",{ref:"DecimalField"}):e._e(),"EmailField"===e.field.fieldType?l("EmailFieldSubForm",{ref:"EmailField"}):e._e(),"FileField"===e.field.fieldType?l("FileFieldSubForm",{ref:"FileField"}):"ForeignKeyField"===e.field.fieldType?l("ForeignKeyFieldSubForm",{ref:"ForeignKeyField"}):"SlugField"===e.field.fieldType?l("SlugFieldSubForm",{ref:"SlugField"}):"TextField"===e.field.fieldType?l("TextFieldSubForm",{ref:"TextField"}):"URLField"===e.field.fieldType?l("URLFieldSubForm",{ref:"URLField"}):e._e()],1)},$=[],T=l("5530"),w=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-form",{staticClass:"q-gutter-md"},[l("div",{staticClass:"q-gutter-sm"},[l("q-checkbox",{attrs:{label:"Has default?"},model:{value:e.booleanField.hasDefault,callback:function(t){e.$set(e.booleanField,"hasDefault",t)},expression:"booleanField.hasDefault"}})],1),l("q-select",{attrs:{options:e.boolOptions,disable:!e.booleanField.hasDefault,label:"Default value"},model:{value:e.booleanField.defaultValue,callback:function(t){e.$set(e.booleanField,"defaultValue",t)},expression:"booleanField.defaultValue"}})],1)],1)},Q=[],P={data:function(){return{booleanField:{defaultValue:"True",hasDefault:!1},boolOptions:["True","False"]}},methods:{getData:function(){return this.booleanField}}},L=P,M=Object(F["a"])(L,w,Q,!1,null,null,null),E=M.exports;M.options.components=Object.assign(Object.create(M.options.components||null),M.options.components||{},{QForm:g["d"],QCheckbox:g["c"],QSelect:g["j"]});var I=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-form",{staticClass:"q-gutter-md"},[l("div",{staticClass:"q-gutter-sm"},[l("q-checkbox",{attrs:{label:"Has default?"},model:{value:e.charField.hasDefault,callback:function(t){e.$set(e.charField,"hasDefault",t)},expression:"charField.hasDefault"}})],1),l("q-input",{attrs:{filled:"",label:"Default value",disable:!e.charField.hasDefault,maxlength:e.charField.maxLength},model:{value:e.charField.defaultValue,callback:function(t){e.$set(e.charField,"defaultValue",t)},expression:"charField.defaultValue"}}),l("q-input",{attrs:{filled:"",type:"number",label:"Max length","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Max length cannot be blank."},function(e){return e>0||"Max length cannot be negative."}]},model:{value:e.charField.maxLength,callback:function(t){e.$set(e.charField,"maxLength",t)},expression:"charField.maxLength"}})],1)],1)},N=[],V={data:function(){return{charField:{maxLength:32,defaultValue:"",hasDefault:!1}}},methods:{getData:function(){return this.charField}}},A=V,B=Object(F["a"])(A,I,N,!1,null,null,null),R=B.exports;B.options.components=Object.assign(Object.create(B.options.components||null),B.options.components||{},{QForm:g["d"],QCheckbox:g["c"],QInput:g["f"]});var z=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-form",{staticClass:"q-gutter-md"},[l("div",{staticClass:"q-gutter-sm"},[l("q-checkbox",{attrs:{label:"auto_now"},model:{value:e.dateField.autoNow,callback:function(t){e.$set(e.dateField,"autoNow",t)},expression:"dateField.autoNow"}}),l("q-checkbox",{attrs:{label:"auto_now_add"},model:{value:e.dateField.autoNowAdd,callback:function(t){e.$set(e.dateField,"autoNowAdd",t)},expression:"dateField.autoNowAdd"}})],1)])],1)},U=[],K={data:function(){return{dateField:{autoNow:!1,autoNowAdd:!1}}},methods:{getData:function(){return this.dateField}}},H=K,G=Object(F["a"])(H,z,U,!1,null,null,null),J=G.exports;G.options.components=Object.assign(Object.create(G.options.components||null),G.options.components||{},{QForm:g["d"],QCheckbox:g["c"]});var W=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-form",{staticClass:"q-gutter-md"},[l("div",{staticClass:"q-gutter-sm"},[l("q-checkbox",{attrs:{label:"Has default?"},model:{value:e.decimalField.hasDefault,callback:function(t){e.$set(e.decimalField,"hasDefault",t)},expression:"decimalField.hasDefault"}})],1),l("q-input",{attrs:{filled:"",type:"number",label:"Max digits","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Max digits cannot be blank."},function(e){return e>0||"Max digits cannot be negative."}]},model:{value:e.decimalField.maxDigits,callback:function(t){e.$set(e.decimalField,"maxDigits",t)},expression:"decimalField.maxDigits"}}),l("q-input",{attrs:{filled:"",type:"number",label:"Decimal places","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Decimal places cannot be blank."},function(e){return e>0||"Decimal places cannot be negative."},function(t){return t<e.decimalField.maxDigits||"Decimal places must be less than max digits."}]},model:{value:e.decimalField.decimalPlaces,callback:function(t){e.$set(e.decimalField,"decimalPlaces",t)},expression:"decimalField.decimalPlaces"}}),l("q-input",{attrs:{filled:"",disabled:!e.decimalField.hasDefault,label:"Default value","lazy-rules":"",rules:[function(t){var l=new RegExp("^d+.d{0,"+e.decimalField.decimalPlaces+"}$");return e.console.log(l),l.test(t)||"Invalid decimal number, make sure to format with values above"}]},model:{value:e.decimalField.defaultValue,callback:function(t){e.$set(e.decimalField,"defaultValue",t)},expression:"decimalField.defaultValue"}})],1)],1)},Z=[],X={data:function(){return{decimalField:{maxDigits:5,decimalPlaces:2,defaultValue:"",hasDefault:!1}}},methods:{getData:function(){return this.decimalField}}},Y=X,ee=Object(F["a"])(Y,W,Z,!1,null,null,null),te=ee.exports;ee.options.components=Object.assign(Object.create(ee.options.components||null),ee.options.components||{},{QForm:g["d"],QCheckbox:g["c"],QInput:g["f"]});var le=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-form",{staticClass:"q-gutter-md"},[l("div",{staticClass:"q-gutter-sm"},[l("q-checkbox",{attrs:{label:"Has default?"},model:{value:e.emailField.hasDefault,callback:function(t){e.$set(e.emailField,"hasDefault",t)},expression:"emailField.hasDefault"}})],1),l("q-input",{attrs:{filled:"",disable:!e.emailField.hasDefault,maxlength:e.emailField.maxLength,label:"Default value","lazy-rules":"",rules:[function(t){return e.isEmail(t)||"Default value must be a valid email address."}]},model:{value:e.emailField.defaultValue,callback:function(t){e.$set(e.emailField,"defaultValue",t)},expression:"emailField.defaultValue"}}),l("q-input",{attrs:{filled:"",type:"number",label:"Max length"},model:{value:e.emailField.maxLength,callback:function(t){e.$set(e.emailField,"maxLength",t)},expression:"emailField.maxLength"}})],1)],1)},ae=[],ne={data:function(){return{emailField:{maxLength:254,defaultValue:"",hasDefault:!1}}},methods:{getData:function(){return this.emailField},isEmail:function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)}}},ie=ne,oe=Object(F["a"])(ie,le,ae,!1,null,null,null),se=oe.exports;oe.options.components=Object.assign(Object.create(oe.options.components||null),oe.options.components||{},{QForm:g["d"],QCheckbox:g["c"],QInput:g["f"]});var re=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-form",{staticClass:"q-gutter-md"},[l("q-input",{attrs:{filled:"",label:"Upload to",hint:"Relative directory where files will be stored."},model:{value:e.fileField.uploadTo,callback:function(t){e.$set(e.fileField,"uploadTo",t)},expression:"fileField.uploadTo"}}),l("q-input",{attrs:{filled:"",type:"number",label:"Max length","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Max length cannot be blank."},function(e){return e>0||"Max length cannot be negative."}]},model:{value:e.fileField.maxLength,callback:function(t){e.$set(e.fileField,"maxLength",t)},expression:"fileField.maxLength"}})],1)],1)},ue=[],de={data:function(){return{fileField:{maxLength:100,uploadTo:"uploads/"}}},methods:{getData:function(){return this.fileField}}},ce=de,me=Object(F["a"])(ce,re,ue,!1,null,null,null),fe=me.exports;me.options.components=Object.assign(Object.create(me.options.components||null),me.options.components||{},{QForm:g["d"],QInput:g["f"]});var pe=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-form",[l("q-select",{attrs:{options:e.otherModels,label:"Foreign key to"},model:{value:e.foreignKeyField.model,callback:function(t){e.$set(e.foreignKeyField,"model",t)},expression:"foreignKeyField.model"}}),l("q-select",{attrs:{options:e.onDeleteOptions,label:"On delete"},model:{value:e.foreignKeyField.onDelete,callback:function(t){e.$set(e.foreignKeyField,"onDelete",t)},expression:"foreignKeyField.onDelete"}})],1)},be=[],he={data:function(){return{foreignKeyField:{model:"",onDelete:"models.SET_NULL"},onDeleteOptions:["models.SET_NULL","models.SET_DEFAULT","models.CASCADE"]}},computed:{otherModels:function(){var e=this.getParent("MainForm");return e?e.getModelNames():[]}},methods:{getParent:function(e){var t=this.$parent;while("undefined"!==typeof t){if(t.$options.name===e)return t;t=t.$parent}return!1},getData:function(){return this.foreignKeyField}}},Fe=he,ge=Object(F["a"])(Fe,pe,be,!1,null,null,null),ve=ge.exports;ge.options.components=Object.assign(Object.create(ge.options.components||null),ge.options.components||{},{QForm:g["d"],QSelect:g["j"]});var xe=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-form",{staticClass:"q-gutter-md"},[l("div",{staticClass:"q-gutter-sm"},[l("q-checkbox",{attrs:{label:"Has default?"},model:{value:e.slugField.hasDefault,callback:function(t){e.$set(e.slugField,"hasDefault",t)},expression:"slugField.hasDefault"}})],1),l("q-input",{attrs:{filled:"",disable:!e.slugField.hasDefault,maxlength:e.slugField.maxLength,label:"Default value","lazy-rules":"",rules:[function(t){return e.isSlug(t)||"Please enter a valid slug"}]},model:{value:e.slugField.defaultValue,callback:function(t){e.$set(e.slugField,"defaultValue",t)},expression:"slugField.defaultValue"}}),l("q-input",{attrs:{filled:"",type:"number",label:"Max length","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please type something"},function(e){return e>0||"Please type a valid length"}]},model:{value:e.slugField.maxLength,callback:function(t){e.$set(e.slugField,"maxLength",t)},expression:"slugField.maxLength"}})],1)],1)},ye=[],De=(l("4d63"),l("ac1f"),l("25f0"),{data:function(){return{slugField:{maxLength:50,defaultValue:"",hasDefault:!1}}},methods:{getData:function(){return this.slugField},isSlug:function(e){return new RegExp("[a-zA-Z0-9_-]").test(e)}}}),qe=De,ke=Object(F["a"])(qe,xe,ye,!1,null,null,null),je=ke.exports;ke.options.components=Object.assign(Object.create(ke.options.components||null),ke.options.components||{},{QForm:g["d"],QCheckbox:g["c"],QInput:g["f"]});var Se=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-form",{staticClass:"q-gutter-md"},[l("div",{staticClass:"q-gutter-sm"},[l("q-checkbox",{attrs:{label:"Has default?"},model:{value:e.textField.hasDefault,callback:function(t){e.$set(e.textField,"hasDefault",t)},expression:"textField.hasDefault"}})],1),l("q-input",{attrs:{filled:"",disable:!e.textField.hasDefault,label:"Default value"},model:{value:e.textField.defaultValue,callback:function(t){e.$set(e.textField,"defaultValue",t)},expression:"textField.defaultValue"}})],1)],1)},Oe=[],Ce={data:function(){return{textField:{defaultValue:"",hasDefault:!1}}},methods:{getData:function(){return this.textField}}},_e=Ce,$e=Object(F["a"])(_e,Se,Oe,!1,null,null,null),Te=$e.exports;$e.options.components=Object.assign(Object.create($e.options.components||null),$e.options.components||{},{QForm:g["d"],QCheckbox:g["c"],QInput:g["f"]});var we=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-form",{staticClass:"q-gutter-md"},[l("div",{staticClass:"q-gutter-sm"},[l("q-checkbox",{attrs:{label:"Has default?"},model:{value:e.urlField.hasDefault,callback:function(t){e.$set(e.urlField,"hasDefault",t)},expression:"urlField.hasDefault"}})],1),l("q-input",{attrs:{filled:"",disable:!e.urlField.hasDefault,maxlength:e.urlField.maxLength,label:"Default value","lazy-rules":"",rules:[function(t){return e.isUrl(t)||"Default value must be a valid URL."}]},model:{value:e.urlField.defaultValue,callback:function(t){e.$set(e.urlField,"defaultValue",t)},expression:"urlField.defaultValue"}}),l("q-input",{attrs:{filled:"",type:"number",label:"Max length"},model:{value:e.urlField.maxLength,callback:function(t){e.$set(e.urlField,"maxLength",t)},expression:"urlField.maxLength"}})],1)],1)},Qe=[],Pe={data:function(){return{urlField:{maxLength:200,defaultValue:"",hasDefault:!1}}},methods:{getData:function(){return this.urlField},isUrl:function(e){return/^(ftp|http|https):\/\/[^ "]+$/.test(e)}}},Le=Pe,Me=Object(F["a"])(Le,we,Qe,!1,null,null,null),Ee=Me.exports;Me.options.components=Object.assign(Object.create(Me.options.components||null),Me.options.components||{},{QForm:g["d"],QCheckbox:g["c"],QInput:g["f"]});var Ie=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div")},Ne=[],Ve={methods:{getData:function(){return{}}}},Ae=Ve,Be=Object(F["a"])(Ae,Ie,Ne,!1,null,null,null),Re=Be.exports,ze=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-form",{staticClass:"q-gutter-md"},[l("div",{staticClass:"q-gutter-sm"},[l("q-checkbox",{attrs:{label:"Has default?"},model:{value:e.numberField.hasDefault,callback:function(t){e.$set(e.numberField,"hasDefault",t)},expression:"numberField.hasDefault"}})],1),l("q-input",{attrs:{disable:!e.numberField.hasDefault,filled:"",type:"number",label:"Default value","lazy-rules":"",hint:"Values must be between "+e.min+" and "+e.max+".",rules:[function(t){return t>=e.min||"This number is too small!"},function(t){return t<=e.max||"This number is too big!"}]},model:{value:e.numberField.defaultValue,callback:function(t){e.$set(e.numberField,"defaultValue",t)},expression:"numberField.defaultValue"}})],1)],1)},Ue=[],Ke={props:["min","max"],data:function(){return{numberField:{defaultValue:null,hasDefault:!1}}},methods:{getData:function(){return this.numberField}}},He=Ke,Ge=Object(F["a"])(He,ze,Ue,!1,null,null,null),Je=Ge.exports;Ge.options.components=Object.assign(Object.create(Ge.options.components||null),Ge.options.components||{},{QForm:g["d"],QCheckbox:g["c"],QInput:g["f"]});var We={components:{BooleanFieldSubForm:E,CharFieldSubForm:R,DecimalFieldSubForm:te,EmailFieldSubForm:se,FileFieldSubForm:fe,ForeignKeyFieldSubForm:ve,SlugFieldSubForm:je,TextFieldSubForm:Te,URLFieldSubForm:Ee,NoArgFieldSubForm:Re,DateFieldSubForm:J,NumberFieldSubForm:Je},props:["id"],data:function(){return{field:{name:"my_field",fieldType:"AutoField",isUnique:!1,isNull:!1,isBlank:!1,isPrimaryKey:!1},fieldTypes:["AutoField","BigAutoField","BigIntegerField","BinaryField","BooleanField","CharField","DateField","DateTimeField","DecimalField","DurationField","EmailField","FileField","ForeignKeyField","IntegerField","PositiveIntegerField","PositiveSmallIntegerField","SlugField","SmallAutoField","SmallIntegerField","TextField","TimeField","URLField"]}},methods:{onRemoveField:function(){this.$emit("removeFieldClicked",this.id)},getData:function(){var e=this.field.fieldType;if(this.$refs[e])return Object(T["a"])({commonOptions:this.field},this.$refs[e].getData())}}},Ze=We,Xe=Object(F["a"])(Ze,_,$,!1,null,null,null),Ye=Xe.exports;Xe.options.components=Object.assign(Object.create(Xe.options.components||null),Xe.options.components||{},{QForm:g["d"],QBtn:g["a"],QInput:g["f"],QSelect:g["j"],QCheckbox:g["c"]});var et={components:{FieldSubForm:Ye},props:["id"],data:function(){return{model:{name:"My Model"},fields:[],fieldCounter:0}},methods:{addField:function(){this.fields.push(this.fieldCounter++)},removeField:function(e){var t=this.fields.indexOf(e);this.fields.splice(t,1)},onRemoveModel:function(){this.$emit("removeModelClicked",this.id)},getData:function(){var e=this.model;return e["fields"]=this.$refs.fields.map((function(e){return e.getData()})),e}},mounted:function(){this.addField()}},tt=et,lt=Object(F["a"])(tt,O,C,!1,null,null,null),at=lt.exports;lt.options.components=Object.assign(Object.create(lt.options.components||null),lt.options.components||{},{QCardSection:g["b"],QBtn:g["a"],QForm:g["d"],QInput:g["f"],QSeparator:g["k"]});var nt={name:"MainForm",data:function(){return{host:"https://django-apigen.herokuapp.com",submitted:!1,step:1,models:[],modelCounter:0,formData:{project:{},app:{},models:[]},treeData:[]}},components:{ProjectSubForm:x,AppSubForm:S,ModelSubForm:at},methods:{toNextStep:function(){this.updateData(),this.step=Math.min(++this.step,4)},toPrevStep:function(){this.updateData(),this.step=Math.max(--this.step,1)},updateData:function(){var e;switch(this.step){case 1:e=this.$refs.projectSubForm,this.formData.project=e.getData();break;case 2:e=this.$refs.appSubForm,this.formData.app=e.getData();break;case 3:e=this.$refs.modelSubForms,this.formData.models=e.map((function(e){return e.getData()}));break;default:break}this.updateTreeData()},updateTreeData:function(){var e=this.getJsonData();console.log(e.app.models.length),this.treeData=[{label:e.name,children:[{label:e.app.name,children:e.app.models.map((function(e){return{label:e.name,children:e.fields.map((function(e){return{label:"".concat(e.commonOptions.name," [").concat(e.commonOptions.fieldType,"]")}}))}}))}]}]},addModel:function(){this.models.push(this.modelCounter++)},removeModel:function(e){var t=this.models.indexOf(e);this.models.splice(t,1)},getModelNames:function(){var e=this.$refs.modelSubForms;return e.map((function(e){return e.getData().name}))},getJsonData:function(){var e=this.formData.project;if(e)return e.app=this.formData.app,e.app.models=this.formData.models,e},submit:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,l,a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.getJsonData(),this.submitted=!0,e.prev=2,console.log("Sending request..."),e.next=6,m()({method:"POST",url:this.host+"/api/project",data:t,responseType:"blob"});case 6:l=e.sent,a=window.URL.createObjectURL(new Blob([l.data])),n=document.createElement("a"),n.href=a,n.setAttribute("download","project.zip"),document.body.appendChild(n),n.click(),this.submitted=!1,e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](2),this.submitted=!1,i="\n          An error occurred! :(\n\n          Please consider submitting a GitHub issue, thanks.\n\n          ".concat(e.t0),alert(i);case 21:case"end":return e.stop()}}),e,this,[[2,16]])})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.addModel()}},it=nt,ot=Object(F["a"])(it,r,u,!1,null,null,null),st=ot.exports;ot.options.components=Object.assign(Object.create(ot.options.components||null),ot.options.components||{},{QStepper:g["m"],QStep:g["l"],QStepperNavigation:g["n"],QBtn:g["a"],QTree:g["q"]});var rt={name:"FlexWrapper",components:{Form:st}},ut=rt,dt=Object(F["a"])(ut,o,s,!1,null,null,null),ct=dt.exports;dt.options.components=Object.assign(Object.create(dt.options.components||null),dt.options.components||{},{QPage:g["h"]});var mt=l("e878"),ft={name:"LayoutDefault",components:{GithubButton:mt["a"],FlexWrapper:ct}},pt=ft,bt=Object(F["a"])(pt,n,i,!1,null,null,null),ht=bt.exports;bt.options.components=Object.assign(Object.create(bt.options.components||null),bt.options.components||{},{QLayout:g["g"],QHeader:g["e"],QToolbar:g["o"],QToolbarTitle:g["p"],QPageContainer:g["i"]});l("c867"),l("e54f");var Ft=l("b05d");a["a"].use(Ft["a"],{config:{},components:{},directives:{},plugins:{}}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ht)}}).$mount("#app")},c867:function(e,t,l){}});
//# sourceMappingURL=app.86f11706.js.map