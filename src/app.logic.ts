import {yarg} from "./configs/plugins/args.plugin";
import {ServerApp} from "./presentation/server-app";

const {b:base, l:limit, s:showTable, n:name, d:destination} = yarg;

let outputMessage = '';
const headerMessage = `
=================================
            Tabla del ${base}
=================================\n
`;

ServerApp.run({base, limit, showTable, name, destination});

outputMessage = headerMessage + outputMessage;
if (showTable) console.log(outputMessage);


