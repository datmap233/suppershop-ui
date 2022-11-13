import Button from '~/components/Button';

function LeftBarAdvertise({title, className}) {
    return (
        <div className={className}>
            <h3 className="title">{title}</h3>
            <ul>
                <li>
                    <Button href="/">Men</Button>
                </li>
                <li>
                    <Button href="/">Women</Button>
                </li>
                <li>
                    <Button href="/">Salon</Button>
                </li>
                <li>
                    <Button href="/">New Trend</Button>
                </li>
                <li>
                    <Button href="/">Living room</Button>
                </li>
                <li>
                    <Button href="/">Bed room</Button>
                </li>
            </ul>
        </div>
    );
}

export default LeftBarAdvertise;
