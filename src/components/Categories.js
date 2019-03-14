import React from "react";

class Categories extends React.Component {

    render() {
        const {categories} = this.props;
        return categories.map(c => <span key={c.term_id} className="label secondary">{c.name}</span>);
    }
}

export default Categories;