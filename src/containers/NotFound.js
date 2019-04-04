import React from "react";
import FractureTitle from "../components/FractureTitle";

export default class NotFound extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main home">
                        <h2>
                            <FractureTitle>
                                Bummer, didn't find what you are looking for.
                            </FractureTitle>
                        </h2>
                    </main>
                </div>
            </div>
        );
    }
}