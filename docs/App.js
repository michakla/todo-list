"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
//import * as Net from "net";
const NewTaskForm_1 = require("./components/NewTaskForm");
const TaskList_1 = require("./components/TaskList");
const Backdrop_1 = require("./components/Backdrop/Backdrop");
const Toolbar_1 = require("./components/Toolbar/Toolbar");
const SideDrawer_1 = require("./components/SideDrawer/SideDrawer");
const axios_1 = require("axios");
const connectionStrategy = {
    initialDelay: 1000,
    maxRetry: 1
};
const options = {
    applicationName: "Electron-App",
    connectionStrategy: connectionStrategy,
    // securityMode: MessageSecurityMode.None,
    // certificateFile: path.join(
    //   __dirname,
    //   "/node_modules/node-opcua-client/certificates/client_selfsigned_cert_2048.pem"
    // ),
    // privateKeyFile: path.join(
    //   __dirname,
    //   "/node_modules/node-opcua-client/certificates/PKI/own/private/private_key.pem"
    // ),
    endpoint_must_exist: false
};
class App extends React.Component {
    constructor(props) {
        super(props);
        // private client: OPCUAClient;
        this.endpointUrl = "opc.tcp://172.16.8.246:4840";
        this.processLineByLine = () => {
            console.log("read file line by line: " + window.location.href);
            const config = {
                baseURL: window.location.href,
                url: "/read-file",
            };
            var url = window.location.href + "read-file";
            axios_1.default(config)
                .then((res) => {
                console.log(res.config.url);
                return res.data;
            })
                .then(data => {
                console.log(data);
                const content = data.data;
                this.setState(prevState => {
                    return { ...prevState, output: content };
                });
            });
            // const content = fs.readFileSync("c:/tmp/input.txt");
            // const fileStream = fs.createReadStream("c:/tmp/input.txt");
            // const rl = readline.createInterface({
            //   input: fileStream,
            //   crlfDelay: Infinity
            // });
            // rl.on("line", line => {
            //   console.log(`${line}`);
            //   this.setState(prevState => {
            //     return { ...prevState, output: prevState.output + line + "\n" };
            //   });
            // });
        };
        this.state = {
            sideDrawerOpen: false,
            newTask: {
                id: 1,
                name: ""
            },
            tasks: [],
            output: "Initial Text\n",
            socket: null,
            connected: false
        };
        this.clearTextArea = () => {
            this.setState(prevState => {
                return { ...prevState, output: "" };
            });
        };
        this.setConnectState = (value) => {
            this.setState(prevState => {
                return { ...prevState, connected: value };
            });
        };
        this.connectOpcUa = async () => {
            // this.client = OPCUAClient.create(options);
            // await this.client.connect(this.endpointUrl);
            // const session = await this.client.createSession();
            // const browseResult = await session.browse("ns=2;i=5001");
            // this.appendToOutput(browseResult.toString());
            // if (browseResult.references === null) {
            //   return;
            // }
            // for (const reference of browseResult.references) {
            //   const result = await session.browse(reference.nodeId.toString());
            //   console.log("   -> ", result.toString());
            // }
        };
        this.disconnectOpcUa = () => { };
        this.connectTcp = () => {
            // if (this.socket !== undefined) {
            //   this.socket.destroy();
            // }
            // this.socket = new Net.Socket();
            // this.socket.connect({ port: 4712, host: "172.16.8.246" }, () => {
            //   this.appendToOutput("connected...");
            //   this.socket.write("{ID:1 DEV:0 CMD:LGI DI1:0 DI2:0 DI3:0}");
            //   this.setConnectState(true);
            //   this.timer = setInterval(() => {
            //     console.log("Timer event...");
            //     this.socket.write("{ID:1 DEV:0 CMD:LFC DI1:0 DI2:0 DI3:0}");
            //   }, 250);
            // });
            // this.socket.on("data", data => {
            //   this.appendToOutput(data.toString());
            // });
            // this.socket.on("error", error => {
            //   this.appendToOutput(error.message);
            //   clearInterval(this.timer);
            // });
            // this.socket.on("close", () => {
            //   this.appendToOutput("connection closed...");
            //   this.setConnectState(false);
            //   clearInterval(this.timer);
            // });
        };
        this.disconnectTcp = () => {
            // clearInterval(this.timer);
            // this.socket.destroy();
            // this.setState(prevState => {
            //   return { ...prevState, output: prevState.output + "\n" + "disconnect" };
            // });
        };
        this.addTask = (event) => {
            event.preventDefault();
            this.setState(previousState => ({
                newTask: {
                    id: previousState.newTask.id + 1,
                    name: ""
                },
                tasks: [...previousState.tasks, previousState.newTask]
            }));
        };
        this.drawerToggleClickHandler = () => {
            this.setState(prevState => {
                return { ...prevState, sideDrawerOpen: !prevState.sideDrawerOpen };
            });
        };
        this.backdropClickHandler = () => {
            this.setState(prevState => {
                return { ...prevState, sideDrawerOpen: false };
            });
        };
        this.handleTaskChange = (event) => {
            this.setState({
                newTask: {
                    ...this.state.newTask,
                    name: event.target.value
                }
            });
        };
        this.deleteTask = (taskToDelete) => {
            this.setState(previousState => ({
                tasks: [
                    ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
                ]
            }));
        };
        console.log("Constructor...");
    }
    componentDidMount() {
        this.processLineByLine();
    }
    appendToOutput(value) {
        this.setState(prevState => {
            return { ...prevState, output: prevState.output + "\n" + value };
        });
    }
    render() {
        let backdrop = React.createElement("div", null);
        if (this.state.sideDrawerOpen) {
            backdrop = React.createElement(Backdrop_1.Backdrop, { click: this.backdropClickHandler });
        }
        return (React.createElement("div", { style: { height: "100%" } },
            React.createElement(Toolbar_1.Toolbar, { drawerClickHandler: this.drawerToggleClickHandler }),
            React.createElement(SideDrawer_1.SideDrawer, { show: this.state.sideDrawerOpen }),
            backdrop,
            React.createElement("main", { style: { marginTop: "64px" } },
                React.createElement(NewTaskForm_1.NewTaskForm, { task: this.state.newTask, onAdd: this.addTask, onChange: this.handleTaskChange }),
                React.createElement(TaskList_1.TasksList, { tasks: this.state.tasks, onDelete: this.deleteTask }),
                React.createElement("div", null,
                    React.createElement("button", { onClick: this.processLineByLine }, " Read File"),
                    React.createElement("button", { onClick: this.clearTextArea }, " Clear"),
                    React.createElement("button", { onClick: this.connectTcp }, " Connect TCP"),
                    React.createElement("button", { onClick: this.disconnectTcp }, " Disconnect TCP"),
                    React.createElement("button", { onClick: this.connectOpcUa }, " Connect OPC-UA"),
                    React.createElement("button", { onClick: this.disconnectOpcUa }, " Disconnect OPC-UA")),
                React.createElement("textarea", { readOnly: true, style: { width: "100%", height: "400px" }, id: "my-console", value: this.state.output }))));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map