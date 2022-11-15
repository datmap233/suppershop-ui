function PriceFilter({position}) {
    return (
        <div className={`price-filter ${position}`}>
            <h3 className="title">Price</h3>
            <form className="pricing">
                <label>
                    $
                    <input type="number" />
                </label>
                <span className="separate">-</span>
                <label>
                    $
                    <input type="number" />
                </label>
                <input type="submit" value="Go" />
            </form>
        </div>
    );
}

export default PriceFilter;
