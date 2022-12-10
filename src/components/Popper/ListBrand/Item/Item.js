import Button from '~/components/Button';

function Item({data}) {
    return (
        <>
            <li>
                <Button href="/">
                    <div className="brand-logo">
                        <img src={data.image} alt="" />
                    </div>
                </Button>
            </li>
        </>
    );
}

export default Item;
