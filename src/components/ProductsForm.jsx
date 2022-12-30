export const ProductsForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const products = Object.fromEntries(formData)
        console.log(products);
        
    }




    return (
        <form onSubmit={handleSubmit} action="text">
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" />
            <label htmlFor="price">price</label>
            <input type="number" name="price" id="price" />
            <button>Add</button>
        </form>
    );
};
