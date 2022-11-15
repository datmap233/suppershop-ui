import Button from '~/components/Button';

function ColorFilter({position}) {
    return (
        <div className={`color-filter ${position}`}>
            <h3 className="title">Color</h3>
            <ul>
                <li>
                    <Button href="/" className="red-bg">
                        light red
                    </Button>
                </li>
                <li>
                    <Button href="/" className=" yellow-bg">
                        yellow"
                    </Button>
                </li>
                <li>
                    <Button href="/" className="black-bg ">
                        black
                    </Button>
                </li>
                <li>
                    <Button href="/" className="pink-bg">
                        pink
                    </Button>
                </li>
                <li>
                    <Button href="/" className="dkpink-bg">
                        dkpink
                    </Button>
                </li>
                <li>
                    <Button href="/" className="chocolate-bg">
                        chocolate
                    </Button>
                </li>
                <li>
                    <Button href="/" className="orange-bg">
                        orange-bg
                    </Button>
                </li>
                <li>
                    <Button href="/" className="off-white-bg">
                        off-white
                    </Button>
                </li>
                <li>
                    <Button href="/" className="extra-lightgreen-bg">
                        extra-lightgreen
                    </Button>
                </li>
                <li>
                    <Button href="/" className="lightgreen-bg">
                        lightgreen
                    </Button>
                </li>
                <li>
                    <Button href="/" className="biscuit-bg">
                        biscuit
                    </Button>
                </li>
                <li>
                    <Button href="/" className="chocolatelight-bg">
                        chocolatelight
                    </Button>
                </li>
            </ul>
        </div>
    );
}

export default ColorFilter;
