import React from "react";

function ProductPage({ params }: { params: { id: string } }) {
    const { id } = params;  // No need for await here

    return (
        <div>
            Product ID: {id}
        </div>
    );
}

export default ProductPage;
