const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({ 
            status: 'success', 
            message: 'Welcome to Week 13 - Node.js Fundamentals Server!',
            student: 'Amit Kumar Singh'
        }));
    } 
    else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({ 
            status: 'success', 
            route: '/about', 
            description: 'Core Node.js HTTP server built with custom routing and modules.' 
        }));
    } 
    else if (req.url === '/api/data' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({ 
            status: 'success', 
            items: [
                { id: 1, topic: 'Node.js Modules' },
                { id: 2, topic: 'NPM Packages' },
                { id: 3, topic: 'HTTP Server & Routing' }
            ] 
        }));
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ 
            error: '404 Not Found', 
            message: 'The requested route does not exist on this server.' 
        }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});