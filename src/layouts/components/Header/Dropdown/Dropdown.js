import images from '~/assets/images';
import Button from '~/components/Button';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

function Dropdown({ list }) {
    return (
        <HeadlessTippy
            interactive
            appendTo={() => document.body}
            delay={[0, 500]}
            placement="top-start"
            render={(attrs) => (
                <ul className="subnav" tabIndex="-1" {...attrs}>
                    {
                        // eslint-disable-next-line array-callback-return
                        list.map((element, index) => {
                            return (
                                <li key={index}>
                                    <Button to={element.link}>{element.title}</Button>
                                </li>
                            );
                        })
                    }
                </ul>
            )}
        >
            <div className="option-item">
                <Button
                    href="/"
                    style={{
                        background: `url(${images.downArow}) right 13px no-repeat`,
                    }}
                >
                    {list[0].title}
                </Button>
            </div>
        </HeadlessTippy>
    );
}

export default Dropdown;
