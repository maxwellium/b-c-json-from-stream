import { Readable } from 'stream';


export function jsonFromStream<T>( req: Readable, encoding = 'utf8' ): Promise<T> {

  req.setEncoding( encoding );

  return new Promise( ( resolve, reject ) => {

    let data = '';

    req.on( 'error', reject );
    req.on( 'data', chunk => data += chunk );
    req.on( 'end', () => {
      try {
        resolve( JSON.parse( data ) );
      } catch ( e ) {
        reject( e );
      }
    } );

  } );
}
