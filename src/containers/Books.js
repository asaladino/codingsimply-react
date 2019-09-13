import React from 'react';
import FractureTitle from "../components/FractureTitle";

const Books = (props) => {

    return <div className="row">
        <div className="large-8 large-push-2 columns">
            <main className="site-main home">
                <h1>
                    <FractureTitle split={'word'}>
                        Books
                    </FractureTitle>
                </h1>
            </main>
        </div>
    </div>
}

export default Books;