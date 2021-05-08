/*
=======================================================
  Title: http-client.js
  Author: Professor Krasso
  Date: 05/08/2021
  Modified by: Sarah Jean Baptiste
  Description: HTTP Client
========================================================
*/

/* Export class */
export class HttpClient {

    /* get function with url parameter and new params object */
    async get(url, params = '') {

       let urlObject = new URL(url);

        let paramsObject = new URLSearchParams(params);
        urlObject.search = paramsObject; 

        const res = await fetch(urlObject.toString(),{
            method: "GET", 
        });

        /* Return object */
        return res.json();
    }
}

