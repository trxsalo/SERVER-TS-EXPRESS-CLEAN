"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
dotenv.config();
class Server {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.configuracion();
        this.listen();
        this.middlewares();
        this.route();
    }
    configuracion() {
        this.app.set("port", this.port || process.env.PORT || 8080);
    }
    async listen() {
        await this.app.listen(this.app.get("port"));
        console.log("Servidor escucchando en el puerto:", this.app.get("port"));
    }
    middlewares() {
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
        // this.app.use(cors());
        // this.app.use(bodyParser.urlencoded({extended:true}));
        // this.app.use(cookieSession({
        //     name:"trxsalo",
        //     secret: process.env.SECRET,
        //     httpOnly: true
        // }));
    }
    route() {
        this.app.use("/", express_1.default.static("public"));
    }
}
exports.Server = Server;
