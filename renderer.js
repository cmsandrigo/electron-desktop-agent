// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const PrinterServer = require('./PrinterServer').PrinterServer;
const printerSrv = new PrinterServer(4444);
const eol = "&#13;&#10;";

// Componentes gráficos
const abutton = document.getElementById('abutton');
const txtlog = document.getElementById('txtlog');

function writeLog(msg) {
  txtlog.innerText = txtlog.innerText + msg + eol;
  console.log(msg);
}

abutton.addEventListener('click', function() {
  printerSrv.init();
});

printerSrv.on('event', function(msg) {
  writeLog(msg);
})