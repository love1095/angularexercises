import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { apiRequestHeader } from '../../constants';
import {
    RequestOptions,
    Response,
    Headers, Http
} from '@angular/http';

@Injectable()
export class ApiService {
    constructor( private http: Http, private router: Router ) {
    }
    /**
     * Send request by GET method and parse response to json.
     * @param {string} path - API url path.
     * @return {Observable<any>}
     */
    getData( path: string ): Observable<any> {
        return this.http.get( path,
            this.generateRequestOptions( apiRequestHeader.contentType ) )
            .map(( response: Response ) => this.extractToJson( response ) )
            .catch( this.handleError );
    }

    postDataAndExtractResultWithoutJwt( path: string, data: any ): Observable<any> {
        return this.http.post( path, JSON.stringify( data ),
            this.generateRequestOptions( apiRequestHeader.contentType ) )
            .map(( response: Response ) => this.extractToJson( response ) )
            .catch( this.handleError );
    }
    private generateRequestOptions( contentType: string ): RequestOptions {
        let headerList: Headers = new Headers();
        headerList.append( 'Content-Type', contentType );

        return new RequestOptions( { headers: headerList });
    }
    private extractResult( response: Response ): boolean {
        return response.status == 200;
    }

    private extractToJson( response: Response ) {
        return response.json();
    }
    handleError( response: Response | any ) {
        if ( response.status == 400 ) {
            this.router.navigate( ['/default'] );
        }
        if ( response instanceof Error ) {
            return Observable.throw( response );
        }
        return Observable.throw( new Error( "Error from Server" ) );
    }

    deleteData( path: string ): Observable<boolean> {
        return this.http.delete( path, this.generateRequestOptions( apiRequestHeader.contentType ) )
            .map(( response: Response ) => this.extractResult( response ) )
            .catch( this.handleError );
    }

}