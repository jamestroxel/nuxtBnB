(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(t,e,o){"use strict";e.a=function(t,e){var text="".concat(t," ").concat(e);return 1==t?text:text+"s"}},184:function(t,e,o){"use strict";o.r(e);var r=o(174),l={props:{home:{type:Object,required:!0}},methods:{pluralize:r.a}},c=o(33),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-wrapper"},[o("div",{staticClass:"app-double-column app-propoerty-details"},[o("div",[o("h1",[t._v(t._s(t.home.title))]),t._v(" "),o("div",{staticClass:"app-flex"},[o("div",{staticClass:"app-address"},[t._v("\n                    "+t._s(t.home.location.address)+" "+t._s(t.home.location.city)+" "+t._s(t.home.location.state)+" "+t._s(t.home.location.country)+"\n                ")]),t._v(" "),o("div",{staticClass:"app-rating"},[t._v("\n                    "+t._s(t.home.reviewValue)+" "),o("span",[t._v(t._s(t.home.reviewCount))])])]),t._v(" "),o("div",{staticClass:"app-property-details-footer"},[t._v("\n                "+t._s(t.pluralize(t.home.guests,"guest"))+" · "+t._s(t.pluralize(t.home.bedroooms,"rooms"))+" · "+t._s(t.pluralize(t.home.beds,"bed"))+" · "+t._s(t.pluralize(t.home.bathrooms,"bath"))+"\n            ")])]),t._v(" "),o("div",[o("div",{staticClass:"app-price"},[t._v("\n                $"+t._s(t.home.pricePerNight)+" "),o("span",[t._v(" / night")])]),t._v(" "),t._m(0),t._v(" "),o("button",{staticClass:"app-big-button"},[t._v("Request to book!")])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-search"},[o("input",{staticClass:"datepicker",attrs:{type:"text",placeholder:"Check in"}}),t._v(" "),o("input",{staticClass:"datepicker",attrs:{type:"text",placeholder:"Check out"}})])}],!1,null,null,null);e.default=component.exports}}]);