import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, forkJoin } from 'rxjs'
import { retry, map, debounceTime } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    blogPost: { userId: number; title: string; body: string; }[];
    constructor(private _http: HttpClient) { }

    search(term: string) {
        console.log(term)
        let tryCount = 0;
        return this._http.get('https://api.spotify.com/v1/search?q=' + term + '&type=artist')

    }


    getBlogs(api) {
        return this._http.get<{ id: number; userId: number; title: string; body: string }[]>(api);
    }

    getBlogsById(api) {
        return this._http.get<{ id: number; userId: number; title: string; body: string }>(api);
    }

    callMultipleApi() {
        // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
        //Same as PromiseAll()
        return forkJoin(
            this._http.get('https://jsonplaceholder.typicode.com/posts/1'),
            this._http.get('https://jsonplaceholder.typicode.com/posts/2')
        );
    }
}
