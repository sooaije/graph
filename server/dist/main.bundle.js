webpackJsonp([1,5],{

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 118;


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(135);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(221),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_heat_map_heat_map_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_map_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_heat_map_directive_sebm_google_heat_map_directive_directive__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_road_name_road_name_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core_services_google_maps_api_wrapper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core_services_google_maps_api_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core_services_google_maps_api_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_graph_bar_graph_bar_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_grapg_pi_grapg_pi_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_chart_chart__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_chart_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_components_chart_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_components_datatable_datatable__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_components_datatable_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_components_datatable_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_table_road_table_road_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__routing_route_module__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_thai_location_thai_location_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_components_button_button__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_components_button_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_components_button_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_marker_thailocation_marker_thailocation_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_marker_thailocation_directive_sebm_google_map_marker_cluster_directive__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_tag_input__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__component_heat_map_heat_map_component__["a" /* HeatMapComponent */],
            __WEBPACK_IMPORTED_MODULE_8__component_heat_map_directive_sebm_google_heat_map_directive_directive__["a" /* SebmGoogleHeatMapDirectiveDirective */],
            __WEBPACK_IMPORTED_MODULE_9__component_road_name_road_name_component__["a" /* RoadNameComponent */],
            __WEBPACK_IMPORTED_MODULE_11__component_graph_bar_graph_bar_component__["a" /* GraphBarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__component_table_road_table_road_component__["a" /* TableRoadComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component_grapg_pi_grapg_pi_component__["a" /* GrapgPiComponent */],
            __WEBPACK_IMPORTED_MODULE_17__component_thai_location_thai_location_component__["a" /* ThaiLocationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__component_marker_thailocation_marker_thailocation_component__["a" /* MarkerThailocationComponent */],
            __WEBPACK_IMPORTED_MODULE_20__component_marker_thailocation_directive_sebm_google_map_marker_cluster_directive__["a" /* SebmGoogleMapMarkerClusterDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAmHhQIiGXpOyrHejfUx5PyzrDPnjerGFo',
                libraries: ['visualization', 'places']
            }),
            __WEBPACK_IMPORTED_MODULE_13_primeng_components_chart_chart__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_14_primeng_components_datatable_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_16__routing_route_module__["a" /* RouteModule */],
            __WEBPACK_IMPORTED_MODULE_18_primeng_components_button_button__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_21_ng2_tag_input__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__service_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core_services_google_maps_api_wrapper__["GoogleMapsAPIWrapper"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core_services_google_maps_api_wrapper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core_services_google_maps_api_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core_services_google_maps_api_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SebmGoogleHeatMapDirectiveDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SebmGoogleHeatMapDirectiveDirective = (function () {
    function SebmGoogleHeatMapDirectiveDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.data = [];
        this.heatMapList = [];
    }
    SebmGoogleHeatMapDirectiveDirective.prototype.ngOnInit = function () {
        this.getHeatMap();
    };
    SebmGoogleHeatMapDirectiveDirective.prototype.getHeatMap = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            _this.data.map(function (mapList) {
                _this.heatMapList = _this.heatMapList.concat([{
                        location: new google.maps.LatLng(mapList.latitude, mapList.longtitude),
                        weight: mapList.weight
                    }]);
            });
            _this.heatMap = new google.maps.visualization.HeatmapLayer({ data: _this.heatMapList, radius: _this.radius });
            _this.heatMap.setMap(map);
        });
    };
    return SebmGoogleHeatMapDirectiveDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SebmGoogleHeatMapDirectiveDirective.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SebmGoogleHeatMapDirectiveDirective.prototype, "radius", void 0);
SebmGoogleHeatMapDirectiveDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'sebm-google-heat-map'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core_services_google_maps_api_wrapper__["GoogleMapsAPIWrapper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core_services_google_maps_api_wrapper__["GoogleMapsAPIWrapper"]) === "function" && _a || Object])
], SebmGoogleHeatMapDirectiveDirective);

var _a;
//# sourceMappingURL=sebm-google-heat-map-directive.directive.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core_services_google_maps_api_wrapper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core_services_google_maps_api_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core_services_google_maps_api_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_marker_clusterer_src_markerclusterer_js__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_marker_clusterer_src_markerclusterer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_marker_clusterer_src_markerclusterer_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SebmGoogleMapMarkerClusterDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SebmGoogleMapMarkerClusterDirective = (function () {
    function SebmGoogleMapMarkerClusterDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.result = [];
    }
    SebmGoogleMapMarkerClusterDirective.prototype.initMarkers = function () {
        for (var i = 0; i < this.location.length; ++i) {
            this.result = this.result.concat([new google.maps.Marker({ position: this.location[i], title: this.title[i].text })]);
        }
        return this.result;
    };
    SebmGoogleMapMarkerClusterDirective.prototype.clear = function () {
        this.result = [];
        this.markerCluster.clearMarkers();
    };
    SebmGoogleMapMarkerClusterDirective.prototype.ngOnChanges = function () {
        this.initializeMap();
    };
    SebmGoogleMapMarkerClusterDirective.prototype.initializeMap = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            if (_this.markerCluster) {
                _this.clear();
            }
            var googleMarkers = _this.initMarkers();
            _this.markerCluster = new MarkerClusterer(map, googleMarkers, { imagePath: 'https://googlemaps.github.io/js-marker-clusterer/images/m' });
        });
    };
    return SebmGoogleMapMarkerClusterDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SebmGoogleMapMarkerClusterDirective.prototype, "location", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SebmGoogleMapMarkerClusterDirective.prototype, "title", void 0);
SebmGoogleMapMarkerClusterDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'sebm-google-map-marker-cluster'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core_services_google_maps_api_wrapper__["GoogleMapsAPIWrapper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core_services_google_maps_api_wrapper__["GoogleMapsAPIWrapper"]) === "function" && _a || Object])
], SebmGoogleMapMarkerClusterDirective);

var _a;
//# sourceMappingURL=sebm-google-map-marker-cluster.directive.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_map_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoadNameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoadNameComponent = (function () {
    function RoadNameComponent(mapService, mapsAPILoader) {
        this.mapService = mapService;
        this.mapsAPILoader = mapsAPILoader;
        this.roadLocationList = [];
    }
    RoadNameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.getRoadName().subscribe(function (res) {
            _this.roadNameList = res;
            // this.roadNameList.map((roadList) => {
            //   this.getLocationRoad(roadList);
            // });
            var i = 0;
            var num = _this.roadNameList.length;
            var a = setInterval(function () {
                _this.getLocationRoad(_this.roadNameList[i]);
                if (i == (num - 1)) {
                    clearInterval(a);
                }
                i++;
            }, 500);
        });
        console.log(this.roadLocationList);
    };
    RoadNameComponent.prototype.getLocationRoad = function (roadList) {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var geocoder = new google.maps.Geocoder();
            var address = roadList.road + " " + roadList.district;
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var lat = results[0].geometry.location.lat();
                    var lng = results[0].geometry.location.lng();
                    _this.roadLocationList = _this.roadLocationList.concat([{
                            road: roadList.road,
                            district: roadList.district,
                            lat: lat,
                            lng: lng
                        }]);
                    // console.log(roadList.road, roadList.district, lat, lng);
                }
            });
        });
    };
    return RoadNameComponent;
}());
RoadNameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-road-name',
        template: __webpack_require__(226),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"]) === "function" && _b || Object])
], RoadNameComponent);

var _a, _b;
//# sourceMappingURL=road-name.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_grapg_pi_grapg_pi_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_graph_bar_graph_bar_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_heat_map_heat_map_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_table_road_table_road_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_thai_location_thai_location_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_marker_thailocation_marker_thailocation_component__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/heat', pathMatch: 'full' },
    { path: 'pi', component: __WEBPACK_IMPORTED_MODULE_2__component_grapg_pi_grapg_pi_component__["a" /* GrapgPiComponent */] },
    { path: 'bar', component: __WEBPACK_IMPORTED_MODULE_3__component_graph_bar_graph_bar_component__["a" /* GraphBarComponent */] },
    { path: 'heat', component: __WEBPACK_IMPORTED_MODULE_4__component_heat_map_heat_map_component__["a" /* HeatMapComponent */] },
    { path: 'table', component: __WEBPACK_IMPORTED_MODULE_5__component_table_road_table_road_component__["a" /* TableRoadComponent */] },
    { path: 'location', component: __WEBPACK_IMPORTED_MODULE_6__component_thai_location_thai_location_component__["a" /* ThaiLocationComponent */] },
    { path: 'marker', component: __WEBPACK_IMPORTED_MODULE_7__component_marker_thailocation_marker_thailocation_component__["a" /* MarkerThailocationComponent */] }
];
var RouteModule = (function () {
    function RouteModule() {
    }
    return RouteModule;
}());
RouteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        declarations: []
    })
], RouteModule);

//# sourceMappingURL=route.module.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapService = (function () {
    function MapService(http) {
        this.http = http;
    }
    // getMapList(){
    //   return this.http.get('http://157.179.8.122:28080/ClouderaImpala/rest/query/road').map((res:Response) => res.json().data);
    //   // return this.http.get('../src/app/data/map.json').map((res:Response) => res.json().data);
    // }
    //
    // getRoadName(){
    //   return this.http.get('http://157.179.8.122:28080/ClouderaImpala/rest/query/road/name').map((res:Response) => res.json().data);
    // }
    //
    MapService.prototype.getDataRoad = function () {
        return this.http.get('http://157.179.16.239:8080/ClouderaImpala/rest/query/road/tableRoad').map(function (res) { return res.json().data; });
    };
    MapService.prototype.getMapList = function () {
        return this.http.get('http://157.179.16.239:8080/ClouderaImpala/rest/query/road').map(function (res) { return res.json().data; });
        // return this.http.get('../src/app/data/map.json').map((res:Response) => res.json().data);
    };
    MapService.prototype.getRoadName = function () {
        return this.http.get('http://157.179.16.239:8080/ClouderaImpala/rest/query/road/name').map(function (res) { return res.json().data; });
    };
    MapService.prototype.getDistrict = function () {
        return this.http.get('./src/app/data/District.json').map(function (res) { return res.json().data; });
    };
    MapService.prototype.getProvince = function () {
        return this.http.get('./src/app/data/Province.json').map(function (res) { return res.json().data; });
    };
    MapService.prototype.getLocation = function (items) {
        var baseUrl = 'http://157.179.16.239:8080/ClouderaImpala/rest/query';
        baseUrl += '/text/provinc';
        for (var i = 0; i < items.length; i++) {
            if (i == 0) {
                baseUrl += '?q=' + items[i].value;
            }
            else {
                baseUrl += '&q=' + items[i].value;
            }
        }
        console.log(baseUrl);
        return this.http.get(baseUrl).map(function (res) { return res.json().data; });
    };
    return MapService;
}());
MapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MapService);

var _a;
//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".active {\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".middle{\r\n  position: absolute; /* or absolute */\r\n  top: 45%;\r\n  left: 45%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 640px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n  height: 640px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".middle{\r\n  position: absolute; /* or absolute */\r\n  top: 45%;\r\n  left: 45%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<!--<app-heat-map></app-heat-map>-->\r\n<!--<app-road-name></app-road-name>-->\r\n\r\n<!--<app-graph-bar></app-graph-bar>-->\r\n<!--<app-grapg-pi></app-grapg-pi>-->\r\n\r\n<!--<app-table-road></app-table-road>-->\r\n<nav>\r\n  <a routerLink=\"/pi\" routerLinkActive=\"active\">Pi</a>\r\n  <a routerLink=\"/bar\" routerLinkActive=\"active\">Bar</a>\r\n  <a routerLink=\"/heat\" routerLinkActive=\"active\">HeatMap</a>\r\n  <a routerLink=\"/table\" routerLinkActive=\"active\">Table</a>\r\n  <a routerLink=\"/location\" routerLinkActive=\"active\">Location</a>\r\n  <a routerLink=\"/marker\" routerLinkActive=\"active\">marker</a>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<p-chart type=\"pie\" [data]=\"data\" [options]=\"options\"></p-chart>\n\n\n\n\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"check; else loading\">\n\n<p-chart type=\"bar\" [data]=\"data\" [options]=\"options\"></p-chart>\n\n</div>\n\n<ng-template #loading>\n  <i class=\"fa fa-spinner fa-pulse fa-5x fa-fw middle\"></i>\n</ng-template>\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<sebm-google-map [latitude]=\"map.lat\" [longitude]=\"map.lng\" [zoom]=\"map.zoom\">\r\n  <!--<sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>-->\r\n\r\n  <sebm-google-heat-map *ngIf=\"check\" [data]=\"heatMapList\" [radius]=\"25\"></sebm-google-heat-map>\r\n\r\n</sebm-google-map>\r\n"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ui-g\">\n  <div class=\"ui-g-12\"><tag-input [(ngModel)]='items' (onAdd)=\"onItemAdded()\" (onRemove)=\"onItemRemoved()\"></tag-input></div>\n</div>\n\n<div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n    <sebm-google-map [latitude]=\"map.lat\" [longitude]=\"map.lng\" [zoom]=\"map.zoom\">\n      <sebm-google-map-marker-cluster *ngIf=\"check\" [location]=\"markList\" [title]=\"title\" ></sebm-google-map-marker-cluster>\n    </sebm-google-map>\n  </div>\n</div>\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div *ngFor=\"let road of roadLocationList\">\r\n    {{road.road }},{{road.district}},{{road.lat}},{{road.lng}}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"check; else loading\">\n\n\n  <p-dataTable [value]=\"datatableList\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n    <!--<p-column field=\"id\" header=\"Id\" [style]=\"{'width':'20%'}\"></p-column>-->\n    <p-column field=\"text\" header=\"ข้อความ\" [style]=\"{'width':'60%'}\"></p-column>\n    <p-column field=\"time\" header=\"เวลา\" [style]=\"{'width':'25%'}\" [sortable]=\"true\"></p-column>\n    <p-column field=\"road\" header=\"ถนน\" [style]=\"{'width':'15%'}\" [sortable]=\"true\"></p-column>\n  </p-dataTable>\n</div>\n\n<ng-template #loading>\n  <i class=\"fa fa-spinner fa-pulse fa-5x fa-fw middle\"></i>\n</ng-template>\n\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<button pButton type=\"button\" (click)=\"onclick()\" label=\"Start\"></button>\n\n<br><br>\n\n<div *ngFor=\"let district of districtLocationList\">{{district.name}},{{district.lat}},{{district.lng}}</div>\n"

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(119);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_map_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrapgPiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GrapgPiComponent = (function () {
    function GrapgPiComponent(mapService) {
        this.mapService = mapService;
        this.labels = [];
        this.dataGraph = [];
        this.colors = ["#EF5350", "#EC407A", "#AB47BC", "#7E57C2", "#5C6BC0", "#42A5F5", "#29B6F6", "#26C6DA", "#26C6DA", "#26A69A", "#66BB6A", "#9CCC65", "#D4E157", "#FFEE58", "#FFCA28", "#FFA726", "#FF7043", "#8D6E63", "#BDBDBD", "#78909C"];
        this.backgroundColor = [];
    }
    GrapgPiComponent.prototype.ngOnInit = function () {
        this.showBarGraph();
    };
    GrapgPiComponent.prototype.showBarGraph = function () {
        var _this = this;
        var i = 0;
        this.mapService.getMapList().subscribe(function (res) {
            res.map(function (mapList) {
                _this.labels = _this.labels.concat([mapList.road]);
                _this.dataGraph = _this.dataGraph.concat([mapList.road_num]);
                _this.backgroundColor = _this.backgroundColor.concat([_this.colors[i]]);
                i++;
                if (i >= (_this.colors.length - 1))
                    i = 0;
            });
            _this.data = {
                datasets: [{
                        data: _this.dataGraph,
                        backgroundColor: _this.backgroundColor,
                        hoverBackgroundColor: _this.backgroundColor
                    }],
                labels: _this.labels,
                options: {
                    fontColor: 'red'
                }
            };
        });
        this.options = {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true
                }
            }
        };
    };
    return GrapgPiComponent;
}());
GrapgPiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-grapg-pi',
        template: __webpack_require__(222),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */]) === "function" && _a || Object])
], GrapgPiComponent);

var _a;
//# sourceMappingURL=grapg-pi.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_map_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphBarComponent = (function () {
    function GraphBarComponent(mapService) {
        this.mapService = mapService;
        this.labels = [];
        this.dataGraph = [];
        this.check = false;
    }
    GraphBarComponent.prototype.ngOnInit = function () {
        this.showBarGraph();
    };
    GraphBarComponent.prototype.showBarGraph = function () {
        var _this = this;
        this.mapService.getMapList().subscribe(function (res) {
            res.map(function (mapList) {
                _this.labels = _this.labels.concat([mapList.road]);
                _this.dataGraph = _this.dataGraph.concat([mapList.road_num]);
            });
            _this.dataGraph.push(0);
            _this.data = {
                labels: _this.labels,
                datasets: [{
                        label: 'ถนน',
                        backgroundColor: '#42A5F5',
                        borderColor: '#1E88E5',
                        data: _this.dataGraph
                    }],
            };
            if (_this.dataGraph.length > 0) {
                _this.check = true;
            }
        });
        this.options = {};
    };
    return GraphBarComponent;
}());
GraphBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-graph-bar',
        template: __webpack_require__(223),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */]) === "function" && _a || Object])
], GraphBarComponent);

var _a;
//# sourceMappingURL=graph-bar.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_map_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeatMapComponent = (function () {
    function HeatMapComponent(mapService) {
        this.mapService = mapService;
        this.check = false;
        this.map = { lat: 13.758889198303223, lng: 100.5344467163086, zoom: 12 };
        this.heatMapList = [];
    }
    HeatMapComponent.prototype.ngOnInit = function () {
        // setInterval(this.fetchData(), 1000);
        this.fetchData();
    };
    HeatMapComponent.prototype.fetchData = function () {
        var _this = this;
        this.mapService.getMapList().subscribe(function (res) {
            res.map(function (mapList) {
                _this.heatMapList = _this.heatMapList.concat([{
                        latitude: mapList.latitude,
                        longtitude: mapList.longtitude,
                        weight: mapList.road_num
                    }]);
            });
            _this.check = true;
        });
    };
    return HeatMapComponent;
}());
HeatMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-heat-map',
        template: __webpack_require__(224),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */]) === "function" && _a || Object])
], HeatMapComponent);

var _a;
//# sourceMappingURL=heat-map.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_map_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerThailocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkerThailocationComponent = (function () {
    function MarkerThailocationComponent(mapService) {
        this.mapService = mapService;
        this.map = { lat: 13.758889198303223, lng: 100.5344467163086, zoom: 8 };
        this.locationList = [];
        this.markList = [];
        this.title = [];
        this.check = false;
        this.items = [];
    }
    MarkerThailocationComponent.prototype.ngOnInit = function () {
    };
    MarkerThailocationComponent.prototype.getMarkerCluster = function (items) {
        var _this = this;
        this.markList = [];
        this.title = [];
        this.mapService.getLocation(items).subscribe(function (res) {
            _this.locationList = res;
            _this.locationList.map(function (local) {
                _this.markList = _this.markList.concat([{ lat: local.subdistrictlat, lng: local.subdistrictlong }]);
                _this.title = _this.title.concat([{ text: local.text }]);
            });
            _this.check = true;
        });
    };
    MarkerThailocationComponent.prototype.onItemAdded = function () {
        this.getMarkerCluster(this.items);
    };
    MarkerThailocationComponent.prototype.onItemRemoved = function () {
        this.getMarkerCluster(this.items);
    };
    return MarkerThailocationComponent;
}());
MarkerThailocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-marker-thailocation',
        template: __webpack_require__(225),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */]) === "function" && _a || Object])
], MarkerThailocationComponent);

var _a;
//# sourceMappingURL=marker-thailocation.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_map_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRoadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableRoadComponent = (function () {
    function TableRoadComponent(mapService) {
        this.mapService = mapService;
        this.datatableList = [];
        this.check = false;
    }
    TableRoadComponent.prototype.ngOnInit = function () {
        this.showTable();
    };
    TableRoadComponent.prototype.showTable = function () {
        var _this = this;
        this.mapService.getDataRoad().subscribe(function (res) {
            res.map(function (mapList) {
                _this.datatableList = _this.datatableList.concat([{
                        id: mapList.id,
                        text: mapList.text,
                        time: mapList.time,
                        road: mapList.road
                    }]);
            });
            if (_this.datatableList.length > 0) {
                _this.check = true;
            }
        });
    };
    return TableRoadComponent;
}());
TableRoadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-road',
        template: __webpack_require__(227),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_map_service__["a" /* MapService */]) === "function" && _a || Object])
], TableRoadComponent);

var _a;
//# sourceMappingURL=table-road.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_map_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThaiLocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThaiLocationComponent = (function () {
    function ThaiLocationComponent(mapService, mapsAPILoader) {
        this.mapService = mapService;
        this.mapsAPILoader = mapsAPILoader;
        this.districtLocationList = [];
        this.count = 0;
    }
    ThaiLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.getProvince().subscribe(function (res) {
            _this.districtNameList = res;
        });
    };
    ThaiLocationComponent.prototype.getLocationRoad = function () {
        var _this = this;
        var district = this.districtNameList[this.count];
        // console.log(roadList);
        this.mapsAPILoader.load().then(function () {
            var geocoder = new google.maps.Geocoder();
            var address = "องค์การบริหารส่วน" + district.changwat_t;
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    _this.districtLocationList = _this.districtLocationList.concat([{
                            name: district.changwat_t,
                            // district: roadList.district,
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng()
                        }]);
                    console.log(_this.count + "/" + (_this.districtNameList.length - 1), district.changwat_t, results[0].geometry.location.lat(), results[0].geometry.location.lng());
                    _this.count++;
                }
            });
        });
        if (this.count < this.districtNameList.length) {
            setTimeout(function () {
                _this.getLocationRoad();
            }, 200);
        }
    };
    ThaiLocationComponent.prototype.onclick = function () {
        this.getLocationRoad();
    };
    return ThaiLocationComponent;
}());
ThaiLocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-thai-location',
        template: __webpack_require__(228),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_map_service__["a" /* MapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__["MapsAPILoader"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_google_maps_core__["MapsAPILoader"]) === "function" && _b || Object])
], ThaiLocationComponent);

var _a, _b;
//# sourceMappingURL=thai-location.component.js.map

/***/ })

},[273]);
//# sourceMappingURL=main.bundle.js.map