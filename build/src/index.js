"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function jsonFromStream(req, encoding = 'utf8') {
    req.setEncoding(encoding);
    return new Promise((resolve, reject) => {
        let data = '';
        req.on('error', reject);
        req.on('data', chunk => data += chunk);
        req.on('end', () => {
            try {
                resolve(JSON.parse(data));
            }
            catch (e) {
                reject(e);
            }
        });
    });
}
exports.jsonFromStream = jsonFromStream;
//# sourceMappingURL=index.js.map