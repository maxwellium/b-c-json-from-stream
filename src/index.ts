import { Readable } from 'stream';

// once Async Iteration is stable:
/*export async function toJson( req: Readable, encoding = 'utf8' ) {
  req.setEncoding( encoding );

  let data = '';

  for await ( const chunk of req ) {
    data += chunk;
  }

  return JSON.parse( data );
}*/

export function toJson( req: Readable, encoding = 'utf8' ) {

  req.setEncoding( encoding );

  return new Promise( ( resolve, reject ) => {

    let data = '';

    req.on( 'error', reject );
    req.on( 'data', chunk => data += chunk );
    req.on( 'end', () => resolve( JSON.parse( data ) ) );

  } );
}
