/* Porgram Entrance
  TCP tester v1.0.0
  Author: Kevin CYU
*/
const readline = require('readline');
const shell = require('./shell');
const net = require('net');
var client;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "tcpsender@shell> "
});

var ip = '127.0.0.1';
var port = 8000;

console.log("TCP sender %s is open:\n",process.env.npm_package_config_version);

/* Do the connection test */
ask_connection();

/* [ Endless loop ] Read line , from stdin */
rl.on('line',(input)=>{
    /* First go the shell.js to parse the command */
    shell.cmd_handler(input,client);
    rl.prompt();
}).on('close',()=>{
    /* When user want to close this small terminal */
    console.log('\nThank for using tcp-sender!\n');
    process.exit(0);
});

/* Ask user target server's location */
function ask_connection(){
    rl.question('The IP address of target server is:',(ip_ans) => {
        console.log("IP: %s",ip_ans);
        ip = ip_ans;
        /* And then ask port */
        rl.question('The port number of target server is:',(p_ans) => {
            console.log("port: %s",p_ans);
            port = p_ans;
            /* Test this ip,port is correct or not */
            if(ip == ''){
                ip = '127.0.0.1';
                if(port == ''){
                    port = 8000;
                }
            }
            /* Connect */
            client = net.createConnection({port:port},()=>{
                console.log("This connecion is build ! You can type information now!");
                rl.prompt();
            }).on('error',() => {
                /* When this connection is not exist */
                console.log("This connection is not response. Press [ctrl + C] to leave.");
                ask_connection();
            });
        });
    });
}
