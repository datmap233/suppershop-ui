import Button from '~/components/Button';

function ColorFilter({position}) {
    return (
        <div class={`color-filter ${position}`}>
            <h3 class="title">Color</h3>
            <ul>
                <li>
                    <Button href="/" class="red-bg">
                        light red
                    </Button>
                </li>
                <li>
                    <Button href="/" class=" yellow-bg">
                        yellow"
                    </Button>
                </li>
                <li>
                    <Button href="/" class="black-bg ">
                        black
                    </Button>
                </li>
                <li>
                    <Button href="/" class="pink-bg">
                        pink
                    </Button>
                </li>
                <li>
                    <Button href="/" class="dkpink-bg">
                        dkpink
                    </Button>
                </li>
                <li>
                    <Button href="/" class="chocolate-bg">
                        chocolate
                    </Button>
                </li>
                <li>
                    <Button href="/" class="orange-bg">
                        orange-bg
                    </Button>
                </li>
                <li>
                    <Button href="/" class="off-white-bg">
                        off-white
                    </Button>
                </li>
                <li>
                    <Button href="/" class="extra-lightgreen-bg">
                        extra-lightgreen
                    </Button>
                </li>
                <li>
                    <Button href="/" class="lightgreen-bg">
                        lightgreen
                    </Button>
                </li>
                <li>
                    <Button href="/" class="biscuit-bg">
                        biscuit
                    </Button>
                </li>
                <li>
                    <Button href="/" class="chocolatelight-bg">
                        chocolatelight
                    </Button>
                </li>
            </ul>
        </div>
    );
}

export default ColorFilter;
