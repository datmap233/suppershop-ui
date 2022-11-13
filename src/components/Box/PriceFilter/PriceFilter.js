function PriceFilter({position}) {
    return (
        <div class={`price-filter ${position}`}>
            <h3 class="title">Price</h3>
            <form class="pricing">
                <label>
                    $
                    <input type="number" />
                </label>
                <span class="separate">-</span>
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
