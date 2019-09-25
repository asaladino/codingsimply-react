import React from "react";
import CategoryModel from "../models/CategoryModel";

interface Props {
    categories: CategoryModel[];
}

const Categories = (props: Props) => {
    const { categories } = props;
    return <React.Fragment>
        {categories.map(c => (
            <span key={c.term_id} className="label secondary">
                {c.name}
            </span>
        ))}
    </React.Fragment>;
};

export default Categories;
