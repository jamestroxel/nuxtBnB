(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{186:function(t,e,o){"use strict";o.r(e);o(36);var n={props:{home:{type:Object,required:!0}},mounted:function(){this.$maps.showMap(this.$refs.map,this.home._geoloc.lat,this.home._geoloc.lng)}},c=o(33),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"app-wrapper app-padded-vertical"},[o("h2",{staticClass:"app-subtitle"},[t._v("Location")]),t._v(" "),o("p",{staticClass:"app-description"},[t._v("\n            "+t._s(t.home.location.address)+" \n            "+t._s(t.home.location.city)+" \n            "+t._s(t.home.location.state)+" \n            "+t._s(t.home.location.country)+"\n        ")]),t._v(" "),o("div",{ref:"map",staticClass:"app-map"})])])}),[],!1,null,null,null);e.default=component.exports}}]);