import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import { books as actions } from '../actions/books';
import Loading from '../components/Loading';
import { main } from '../constants/main';
import BookModel from '../models/BookModel';

interface Response {
    data?: BookModel[];
}

const Books = () => {
    const [books, setBooks] = useState<BookModel[]>([]);

    useEffect(() => {
        actions.getBooks((response: Response) => {
            const { data } = response;
            if (data) {
                setBooks(data);
            }
        });
    }, []);

    return <div className="row">
        <div className="large-8 large-push-2 columns">
            <main className="site-main home">
                <div className="row">
                    {books.length > 0 ? books.map((book, index) => {
                        return <div key={index} className={`animated zoomIn`} style={{ animationDelay: _.random(200, 600) + "ms" }}>
                            <div className="large-3 medium-3 small-6 columns">
                                <div className="callout text-center no-border project-item">
                                    <img alt={book.title} src={main.apiBaseUrl + "/" + book.cover} />
                                    <strong>{book.title}</strong>
                                </div>
                            </div>
                        </div>
                    }) : <div className="text-center">
                            <div><strong>loading django api, one moment</strong></div>
                            <Loading />
                        </div>}
                </div>
            </main>
        </div>
    </div>
};

export default Books;
