/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/rabbitmq/route";
exports.ids = ["app/api/rabbitmq/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frabbitmq%2Froute&page=%2Fapi%2Frabbitmq%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frabbitmq%2Froute.js&appDir=%2Fhome%2Fmathew%2F%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmathew%2F%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frabbitmq%2Froute&page=%2Fapi%2Frabbitmq%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frabbitmq%2Froute.js&appDir=%2Fhome%2Fmathew%2F%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmathew%2F%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mathew_frontend_src_app_api_rabbitmq_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/rabbitmq/route.js */ \"(rsc)/./src/app/api/rabbitmq/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/rabbitmq/route\",\n        pathname: \"/api/rabbitmq\",\n        filename: \"route\",\n        bundlePath: \"app/api/rabbitmq/route\"\n    },\n    resolvedPagePath: \"/home/mathew/Загрузки/frontend/src/app/api/rabbitmq/route.js\",\n    nextConfigOutput,\n    userland: _home_mathew_frontend_src_app_api_rabbitmq_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyYWJiaXRtcSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmFiYml0bXElMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyYWJiaXRtcSUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGbWF0aGV3JTJGJUQwJTk3JUQwJUIwJUQwJUIzJUQxJTgwJUQxJTgzJUQwJUI3JUQwJUJBJUQwJUI4JTJGZnJvbnRlbmQlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZtYXRoZXclMkYlRDAlOTclRDAlQjAlRDAlQjMlRDElODAlRDElODMlRDAlQjclRDAlQkElRDAlQjglMkZmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDWTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vPzg0OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL21hdGhldy/Ql9Cw0LPRgNGD0LfQutC4L2Zyb250ZW5kL3NyYy9hcHAvYXBpL3JhYmJpdG1xL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yYWJiaXRtcS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3JhYmJpdG1xXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yYWJiaXRtcS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL21hdGhldy/Ql9Cw0LPRgNGD0LfQutC4L2Zyb250ZW5kL3NyYy9hcHAvYXBpL3JhYmJpdG1xL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frabbitmq%2Froute&page=%2Fapi%2Frabbitmq%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frabbitmq%2Froute.js&appDir=%2Fhome%2Fmathew%2F%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmathew%2F%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/rabbitmq/route.js":
/*!***************************************!*\
  !*** ./src/app/api/rabbitmq/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var amqplib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amqplib */ \"(rsc)/./node_modules/amqplib/channel_api.js\");\n\nasync function POST(req) {\n    console.log('Отправка в очередь.');\n    try {\n        const message = await req.json();\n        const connection = await amqplib__WEBPACK_IMPORTED_MODULE_0__.connect('amqp://172.17.0.2:5672/vhost');\n        const channel = await connection.createChannel();\n        const queueCar = 'spring-boot-car-shop';\n        const queueDealer = 'spring-boot-dealer-shop';\n        //console.log(req.headers);\n        console.log(req.headers.get('entity'));\n        const entity = req.headers.get('entity');\n        if (entity == 'DEALER') {\n            console.log('Пытаемся отправить дилера на операцию. Бедный дилер.');\n            await channel.assertQueue(queueDealer);\n            channel.sendToQueue(queueDealer, Buffer.from(JSON.stringify(message)));\n        } else {\n            console.log('Пытаемся отправить автомобиль на разбор. Марк был хороший.');\n            await channel.assertQueue(queueCar);\n            channel.sendToQueue(queueCar, Buffer.from(JSON.stringify(message)));\n        }\n        await channel.close();\n        await connection.close();\n        return new Response(JSON.stringify({\n            success: true\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        console.error('RabbitMQ Error:', error);\n        return new Response(JSON.stringify({\n            error: 'Failed to send message'\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yYWJiaXRtcS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QjtBQUV2QixlQUFlQyxLQUFLQyxHQUFHO0lBQzdCQyxRQUFRQyxHQUFHLENBQUM7SUFDWixJQUFJO1FBQ0gsTUFBTUMsVUFBVSxNQUFNSCxJQUFJSSxJQUFJO1FBQzlCLE1BQU1DLGFBQWEsTUFBTVAsNENBQWUsQ0FBQztRQUN6QyxNQUFNUyxVQUFVLE1BQU1GLFdBQVdHLGFBQWE7UUFDOUMsTUFBTUMsV0FBVztRQUNqQixNQUFNQyxjQUFjO1FBRXBCLDJCQUEyQjtRQUMzQlQsUUFBUUMsR0FBRyxDQUFDRixJQUFJVyxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUM1QixNQUFNQyxTQUFTYixJQUFJVyxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUMvQixJQUFHQyxVQUFVLFVBQVM7WUFDckJaLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE1BQU1LLFFBQVFPLFdBQVcsQ0FBQ0o7WUFDMUJILFFBQVFRLFdBQVcsQ0FBQ0wsYUFBYU0sT0FBT0MsSUFBSSxDQUFDQyxLQUFLQyxTQUFTLENBQUNoQjtRQUM3RCxPQUFLO1lBQ0pGLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE1BQU1LLFFBQVFPLFdBQVcsQ0FBQ0w7WUFDMUJGLFFBQVFRLFdBQVcsQ0FBQ04sVUFBVU8sT0FBT0MsSUFBSSxDQUFDQyxLQUFLQyxTQUFTLENBQUNoQjtRQUMxRDtRQUVBLE1BQU1JLFFBQVFhLEtBQUs7UUFDbkIsTUFBTWYsV0FBV2UsS0FBSztRQUV0QixPQUFPLElBQUlDLFNBQVNILEtBQUtDLFNBQVMsQ0FBQztZQUFFRyxTQUFTO1FBQUssSUFBSTtZQUFFQyxRQUFRO1FBQUk7SUFDdEUsRUFBRSxPQUFPQyxPQUFPO1FBQ2Z2QixRQUFRdUIsS0FBSyxDQUFDLG1CQUFtQkE7UUFDakMsT0FBTyxJQUFJSCxTQUFTSCxLQUFLQyxTQUFTLENBQUM7WUFBRUssT0FBTztRQUF5QixJQUFJO1lBQ3hFRCxRQUFRO1FBQ1Q7SUFDRDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcGkvcmFiYml0bXEvcm91dGUuanM/NDAyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW1xcGxpYiBmcm9tICdhbXFwbGliJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG5cdGNvbnNvbGUubG9nKCfQntGC0L/RgNCw0LLQutCwINCyINC+0YfQtdGA0LXQtNGMLicpO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHRcdGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBhbXFwbGliLmNvbm5lY3QoJ2FtcXA6Ly8xNzIuMTcuMC4yOjU2NzIvdmhvc3QnKTtcclxuXHRcdGNvbnN0IGNoYW5uZWwgPSBhd2FpdCBjb25uZWN0aW9uLmNyZWF0ZUNoYW5uZWwoKTtcclxuXHRcdGNvbnN0IHF1ZXVlQ2FyID0gJ3NwcmluZy1ib290LWNhci1zaG9wJztcclxuXHRcdGNvbnN0IHF1ZXVlRGVhbGVyID0gJ3NwcmluZy1ib290LWRlYWxlci1zaG9wJztcclxuXHRcdFxyXG5cdFx0Ly9jb25zb2xlLmxvZyhyZXEuaGVhZGVycyk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXEuaGVhZGVycy5nZXQoJ2VudGl0eScpKTtcclxuXHRcdGNvbnN0IGVudGl0eSA9IHJlcS5oZWFkZXJzLmdldCgnZW50aXR5Jyk7XHJcblx0XHRpZihlbnRpdHkgPT0gJ0RFQUxFUicpe1xyXG5cdFx0XHRjb25zb2xlLmxvZygn0J/Ri9GC0LDQtdC80YHRjyDQvtGC0L/RgNCw0LLQuNGC0Ywg0LTQuNC70LXRgNCwINC90LAg0L7Qv9C10YDQsNGG0LjRji4g0JHQtdC00L3Ri9C5INC00LjQu9C10YAuJyk7XHJcblx0XHRcdGF3YWl0IGNoYW5uZWwuYXNzZXJ0UXVldWUocXVldWVEZWFsZXIpO1xyXG5cdFx0XHRjaGFubmVsLnNlbmRUb1F1ZXVlKHF1ZXVlRGVhbGVyLCBCdWZmZXIuZnJvbShKU09OLnN0cmluZ2lmeShtZXNzYWdlKSkpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfQn9GL0YLQsNC10LzRgdGPINC+0YLQv9GA0LDQstC40YLRjCDQsNCy0YLQvtC80L7QsdC40LvRjCDQvdCwINGA0LDQt9Cx0L7RgC4g0JzQsNGA0Log0LHRi9C7INGF0L7RgNC+0YjQuNC5LicpO1xyXG5cdFx0XHRhd2FpdCBjaGFubmVsLmFzc2VydFF1ZXVlKHF1ZXVlQ2FyKTtcclxuXHRcdFx0Y2hhbm5lbC5zZW5kVG9RdWV1ZShxdWV1ZUNhciwgQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0YXdhaXQgY2hhbm5lbC5jbG9zZSgpO1xyXG5cdFx0YXdhaXQgY29ubmVjdGlvbi5jbG9zZSgpO1xyXG5cclxuXHRcdHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBzdWNjZXNzOiB0cnVlIH0pLCB7IHN0YXR1czogMjAwIH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCdSYWJiaXRNUSBFcnJvcjonLCBlcnJvcik7XHJcblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdGYWlsZWQgdG8gc2VuZCBtZXNzYWdlJyB9KSwge1xyXG5cdFx0XHRzdGF0dXM6IDUwMCxcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiYW1xcGxpYiIsIlBPU1QiLCJyZXEiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImpzb24iLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsImNoYW5uZWwiLCJjcmVhdGVDaGFubmVsIiwicXVldWVDYXIiLCJxdWV1ZURlYWxlciIsImhlYWRlcnMiLCJnZXQiLCJlbnRpdHkiLCJhc3NlcnRRdWV1ZSIsInNlbmRUb1F1ZXVlIiwiQnVmZmVyIiwiZnJvbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbG9zZSIsIlJlc3BvbnNlIiwic3VjY2VzcyIsInN0YXR1cyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/rabbitmq/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/amqplib","vendor-chunks/@acuminous","vendor-chunks/debug","vendor-chunks/url-parse","vendor-chunks/safe-buffer","vendor-chunks/requires-port","vendor-chunks/querystringify","vendor-chunks/ms","vendor-chunks/buffer-more-ints","vendor-chunks/supports-color","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Frabbitmq%2Froute&page=%2Fapi%2Frabbitmq%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frabbitmq%2Froute.js&appDir=%2Fhome%2Fmathew%2F%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmathew%2F%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();