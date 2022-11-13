import images from '~/assets/images';
import Button from '~/components/Button';

function Search() {
    return (
        <form>
            <Button className="search-submit">
                <img src={images.searchBg} alt="" style={{ height: '100%', width: '100%' }} />
            </Button>
            <input
                className="search-input"
                placeholder="Enter your search term..."
                type="text"
                value=""
                name="search"
            />
        </form>
    );
}

export default Search;
