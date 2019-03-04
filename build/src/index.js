"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// once Async Iteration is stable:
/*export async function toJson( req: Readable, encoding = 'utf8' ) {
  req.setEncoding( encoding );

  let data = '';

  for await ( const chunk of req ) {
    data += chunk;
  }

  return JSON.parse( data );
}*/
function toJson(req, encoding = 'utf8') {
    req.setEncoding(encoding);
    return new Promise((resolve, reject) => {
        let data = '';
        req.on('error', reject);
        req.on('data', chunk => data += chunk);
        req.on('end', () => resolve(JSON.parse(data)));
    });
}
exports.toJson = toJson;
//# sourceMappingURL=index.js.map