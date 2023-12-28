import  express,{Application} from "express";
import * as dotenv from "dotenv"
import morgan from "morgan";

dotenv.config();
export  class Server{

    private app:Application;
    constructor(private  port?: number| string) {
        this.app = express();
        this.configuracion();
        this.listen();
        this.middlewares();
        this.route();
    }
    configuracion(){
        this.app.set("port", this.port || process.env.PORT || 8080);
    }
    async listen (){
        await  this.app.listen(this.app.get("port"));
        console.log("Servidor escucchando en el puerto:", this.app.get("port"));
    }

    middlewares(){
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        // this.app.use(cors());
        // this.app.use(bodyParser.urlencoded({extended:true}));
        // this.app.use(cookieSession({
        //     name:"trxsalo",
        //     secret: process.env.SECRET,
        //     httpOnly: true
        // }));

    }
    route(){
        this.app.use("/", express.static("public"));
    }

}