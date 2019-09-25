import React from "react";

interface Props {
    categories: Category[];
}

interface Category {
    term_id: number;
    name: string;
}

const Categories = (props: Props) => {
    const { categories } = props;
    return categories.map(c => (
        <span key={c.term_id} className="label secondary">
            {c.name}
        </span>
    ));
};

export default Categories;
