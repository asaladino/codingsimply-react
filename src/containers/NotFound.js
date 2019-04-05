import React from "react";
import FractureTitle from "../components/FractureTitle";

export default class NotFound extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main home text-center">
                        <h2>
                            <FractureTitle
                                animated={['bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInRight']}>
                                Bummer, nothing found.
                            </FractureTitle>
                        </h2>
                    </main>
                </div>
            </div>
        );
    }
}