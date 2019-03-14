import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Article } from './article';

const API = 'http://basic-api.fabiopichler.net';

@Injectable({ providedIn: 'root' })
export class ArticleService {

    constructor(private http: HttpClient) {}

    index(type: string) {
        return this.http
            .get<Article[]>(`${API}/${type}s`);
    }

    show(type: string, slug: string) {
        const params = new HttpParams().append('slug', slug);

        return this.http
            .get<Article[]>(`${API}/${type}s`, { params });
    }
}
