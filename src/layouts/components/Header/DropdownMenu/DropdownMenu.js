import Button from '~/components/Button';

import './DropdownMenu.scss';

function DropdownMenu({ title, href='/' }) {
    return (
        <div className="dropdown-btn-header">
            <Button href={href} className="dropdown-toggle">
                {title}
            </Button>
        </div>
    );
}

export default DropdownMenu;
