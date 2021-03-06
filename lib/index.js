"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core = __importStar(require("@serverless-devs/core"));
var base_1 = __importDefault(require("./common/base"));
var logger_1 = __importDefault(require("./common/logger"));
var deploy_1 = __importDefault(require("./lib/component/deploy"));
var remove_1 = __importDefault(require("./lib/component/remove"));
var help_1 = require("./lib/help");
// import Trigger from './lib/component/trigger';
var ComponentDemo = /** @class */ (function (_super) {
    __extends(ComponentDemo, _super);
    function ComponentDemo(props) {
        return _super.call(this, props) || this;
    }
    /**
     * ??????
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.deploy = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, endpoint, credentials, subCommand, props, 
            // args,
            help, errorMessage, deployInfo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, deploy_1.default.handleInputs(inputs)];
                    case 1:
                        _a = _b.sent(), endpoint = _a.endpoint, credentials = _a.credentials, subCommand = _a.subCommand, props = _a.props, help = _a.help, errorMessage = _a.errorMessage;
                        // await reportsonent('cfc', subCommand ? `deploy &(subCommand)` : 'deploy');
                        if (errorMessage) {
                            throw new Error(errorMessage);
                        }
                        if (help) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, new deploy_1.default({ endpoint: endpoint, credentials: credentials }).deploy(props, subCommand, credentials)];
                    case 2:
                        deployInfo = _b.sent();
                        logger_1.default.info("Deploy info is shown here:");
                        core.help(deployInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ??????
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.remove = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, endpoint, credentials, subCommand, props, 
            // args,
            help, errorMessage;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, remove_1.default.handleInputs(inputs)];
                    case 1:
                        _a = _b.sent(), endpoint = _a.endpoint, credentials = _a.credentials, subCommand = _a.subCommand, props = _a.props, help = _a.help, errorMessage = _a.errorMessage;
                        // await reportComponent('cfc', subCommand ? `remove &(subCommand)` : 'remove');
                        if (errorMessage) {
                            throw new Error(errorMessage);
                        }
                        if (help) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, new remove_1.default({ credentials: credentials }).remove(endpoint, props, subCommand, credentials)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /**
     * ??????
     */
    ComponentDemo.prototype.test = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var CfcClient, credentials, config, client, Target, Source, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        CfcClient = require('@baiducloud/sdk').CfcClient;
                        credentials = inputs.credentials;
                        config = {
                            credentials: {
                                ak: credentials.AccessKeyID,
                                sk: credentials.SecretAccessKey,
                            },
                        };
                        client = new CfcClient(config);
                        Target = 'brn:bce:cfc:bj:eb4fdf97f9b8d875eae5eb1d91a026a1:function:TestTriggers:$LATEST';
                        Source = 'duedge';
                        body = {
                            Target: Target,
                            Source: Source,
                        };
                        return [4 /*yield*/, client
                                .createRelation(body)
                                .then(function (response) {
                                return response;
                            })
                                .catch(function (response) {
                                if (response.message.Code === 'ResourceConflictException') {
                                    logger_1.default.error(response.message.Message + ', if you want to update your trigger, please provide relationId');
                                }
                                else {
                                    logger_1.default.error(response);
                                }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * ??????
     * @returns
     */
    ComponentDemo.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // await reportComponent('cfc', 'help');
                core.help(help_1.COMPONENT_HELP_INFO);
                return [2 /*return*/];
            });
        });
    };
    return ComponentDemo;
}(base_1.default));
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUE4QztBQUM5Qyx1REFBMEM7QUFDMUMsMkRBQXFDO0FBQ3JDLGtFQUE0QztBQUM1QyxrRUFBNEM7QUFFNUMsbUNBQWlEO0FBQ2pELGlEQUFpRDtBQUVqRDtJQUEyQyxpQ0FBYTtJQUN0RCx1QkFBWSxLQUFLO2VBQ2Ysa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDVSw4QkFBTSxHQUFuQixVQUFvQixNQUFrQjs7Ozs7Ozs0QkFTaEMscUJBQU0sZ0JBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQVIvQixLQVFGLFNBQWlDLEVBUG5DLFFBQVEsY0FBQSxFQUNSLFdBQVcsaUJBQUEsRUFDWCxVQUFVLGdCQUFBLEVBQ1YsS0FBSyxXQUFBLEVBRUwsSUFBSSxVQUFBLEVBQ0osWUFBWSxrQkFBQTt3QkFFZCw2RUFBNkU7d0JBRTdFLElBQUksWUFBWSxFQUFFOzRCQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO3lCQUMvQjt3QkFDRCxJQUFJLElBQUksRUFBRTs0QkFDUixzQkFBTzt5QkFDUjt3QkFFa0IscUJBQU0sSUFBSSxnQkFBTSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxFQUFBOzt3QkFBL0YsVUFBVSxHQUFHLFNBQWtGO3dCQUNyRyxnQkFBTSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7OztLQUN2QjtJQUVEOzs7O09BSUc7SUFDVSw4QkFBTSxHQUFuQixVQUFvQixNQUFrQjs7Ozs7Ozs0QkFTaEMscUJBQU0sZ0JBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQVIvQixLQVFGLFNBQWlDLEVBUG5DLFFBQVEsY0FBQSxFQUNSLFdBQVcsaUJBQUEsRUFDWCxVQUFVLGdCQUFBLEVBQ1YsS0FBSyxXQUFBLEVBRUwsSUFBSSxVQUFBLEVBQ0osWUFBWSxrQkFBQTt3QkFFZCxnRkFBZ0Y7d0JBQ2hGLElBQUksWUFBWSxFQUFFOzRCQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO3lCQUMvQjt3QkFDRCxJQUFJLElBQUksRUFBRTs0QkFDUixzQkFBTzt5QkFDUjt3QkFDTSxxQkFBTSxJQUFJLGdCQUFNLENBQUMsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxFQUFBOzRCQUF6RixzQkFBTyxTQUFrRixFQUFDOzs7O0tBQzNGO0lBRUQ7O09BRUc7SUFDVSw0QkFBSSxHQUFqQixVQUFrQixNQUFrQjs7Ozs7O3dCQUM5QixTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsU0FBUyxDQUFDO3dCQUMvQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFDakMsTUFBTSxHQUFHOzRCQUNiLFdBQVcsRUFBRTtnQ0FDWCxFQUFFLEVBQUUsV0FBVyxDQUFDLFdBQVc7Z0NBQzNCLEVBQUUsRUFBRSxXQUFXLENBQUMsZUFBZTs2QkFDaEM7eUJBQ0YsQ0FBQzt3QkFDRSxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBRTdCLE1BQU0sR0FBRywrRUFBK0UsQ0FBQzt3QkFDekYsTUFBTSxHQUFHLFFBQVEsQ0FBQzt3QkFFbEIsSUFBSSxHQUFHOzRCQUNYLE1BQU0sUUFBQTs0QkFDTixNQUFNLFFBQUE7eUJBQ1AsQ0FBQzt3QkFDSyxxQkFBTSxNQUFNO2lDQUNoQixjQUFjLENBQUMsSUFBSSxDQUFDO2lDQUNwQixJQUFJLENBQUMsVUFBVSxRQUFRO2dDQUN0QixPQUFPLFFBQVEsQ0FBQzs0QkFDbEIsQ0FBQyxDQUFDO2lDQUNELEtBQUssQ0FBQyxVQUFDLFFBQVE7Z0NBQ2QsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSywyQkFBMkIsRUFBRTtvQ0FDekQsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsaUVBQWlFLENBQUMsQ0FBQztpQ0FDNUc7cUNBQU07b0NBQ0wsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7aUNBQ3hCOzRCQUNILENBQUMsQ0FBQyxFQUFBOzRCQVhKLHNCQUFPLFNBV0gsRUFBQzs7OztLQUNOO0lBRUQ7OztPQUdHO0lBQ1UsNEJBQUksR0FBakI7OztnQkFDRSx3Q0FBd0M7Z0JBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQW1CLENBQUMsQ0FBQzs7OztLQUNoQztJQU1ILG9CQUFDO0FBQUQsQ0FBQyxBQTNHRCxDQUEyQyxjQUFhLEdBMkd2RCJ9