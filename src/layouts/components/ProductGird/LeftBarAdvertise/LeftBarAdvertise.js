import Button from '~/components/Button';

function LeftBarAdvertise({ title, className, list }) {
    return (
        <div className={className}>
            <h3 className="title">{title}</h3>
            <ul>
                {list !== undefined &&
                    Object.keys(list).map(function (key) {
                        return <li><Button href={list[key].href}>{list[key].name}</Button></li>;
                    })}
                
            </ul>
        </div>
    );
}

export default LeftBarAdvertise;
