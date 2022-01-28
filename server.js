// richiedi alcuni moduli base di node
const http = require('http'); // il modulo http permette di creare il server, gestire le richieste di file (html, css, js) e mandarli al computer che li chiede
const fs = require('fs'); // il modulo "file system" (fs) permette a node di usare i file sul computer
const path = require('path'); // il modulo path aiuta a leggere dove stanno i file a partire dagli url

// Su che porta verrà creato il server?
const port = 8000;
// lista delle estensioni file che il server saprà riconoscere (per il tutotrial ne serviranno di fatto solo alcuni)
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

// Crea un server HTTP base, che sappia cosa fare quando gli vengono chiesti dei file
const server = http.createServer((request,response) => {
    console.log('request ', request.url);

    // ricava dove sta il file dall'url
    let filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    // estrai l'estensione del file e capisci che tipo di file è
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // manda al client il file corretto o fargli sapere che il file non esiste o non è accessibile
    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                // ENOENT = Error NO ENTity (il file non esiste)
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.end(`404: this page doesn't exist`, 'utf-8');
            }
            else {
                // il file esiste ma è protetto e non può essere quindi mandato al client
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            // file trovato, mandalo al client
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
});

// Attiva il server e ascolta sulla porta se qualcuno inizia a chiedere file
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
