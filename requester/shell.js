/* Use to parse the command from main */

/* Shell - parsing command */
function cmd_handler(cmd,client){
    switch(cmd.trim()){
        case 'help':
            /* Show error message */
            console.log("usage : \n");
            console.log("\thelp: list out the usage information.");
            console.log("\texit: exit this service.");
            console.log("\tcheck: check current connection.");
            console.log("");
        break;
        case 'exit':
            console.log("\nThank for using tcp-sender!\n");
            process.exit(0);
        break;
        case 'check':
            console.log("current connection: [%s : %d]",client.remoteAddress,client.remotePort);
        break;
        default:
            console.log(`Transmit message: \"${cmd}\"`);
            /* Send to tcp server ,Write data */
            client.write(cmd);
        break;
    }
}

exports.cmd_handler = cmd_handler;
