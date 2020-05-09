import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private REST_API_SERVER = 'http://3.17.189.52/Api/';

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public GetSecurities() {
    return this.httpClient
      .get(this.REST_API_SERVER + 'Securities/GetSecurities')
      .pipe(catchError(this.handleError));
  }

  public GetSecurityStatus(Id: Number) {
    return this.httpClient
      .get(
        this.REST_API_SERVER +
        `Securities/GetSecurityStatus/${Id}/01-Mar-2020/08-May-2020`
      )
      .pipe(catchError(this.handleError));
  }

  public sendGetRequest() {
    const options = {
      params: new HttpParams({ fromString: '_page=1&_limit=20' })
    };
    return this.httpClient.get(this.REST_API_SERVER, options).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
}
