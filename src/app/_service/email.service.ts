import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class EmailService {

    constructor(private http: Http) {

    }

    sendEmail(email, need, message, name, rawData,telephone,address) {
        const headers = new Headers();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('Access-Control-Allow-Origin', '*');
        const options = new RequestOptions({ headers: headers });

        let data = {
            email: email,
            // form_need: need,
            // form_message: message,
            // form_name: name

        };
        // console.log('sending email from ' + data.email);
        // console.log('sending email from ' + body.form_need);
        // console.log('sending email from ' + body.form_message);
        // console.log('sending email from ' + body.form_name);

        let params: URLSearchParams = new URLSearchParams();
        params.append('email', email);
        params.append('form_need', need);
        params.append('form_message', '<html><body> <h1> ' + email + ' </h1>  <h1> ' + name + ' </h1>  <h1> ' + address +' </h1>  <h1> ' + telephone + ' </h1>  <br><h2><code> ' + message.toString() + '</code></h2></body></html>');
        params.append('form_name', name);
        params.append('raw_data', rawData);
        params.append('telephone',telephone);
        params.append('address',address);

    

        return this.http.post('https://sungoldsolarpvt.com/assets/php/mail.php',
            params.toString(), options);

    }


}