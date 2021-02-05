import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Switch } from '@progress/kendo-react-inputs';
import './styles.css';

const items = [
    { text: 'Inbox', icon: 'k-i-inbox', selected: true },
    { separator: true },
    { text: 'Notifications', icon: 'k-i-bell' },
    { text: 'Calendar', icon: 'k-i-calendar' },
    { separator: true },
    { text: 'Attachments', icon: 'k-i-hyperlink-email' },
    { text: 'Favourites', icon: 'k-i-star-outline' }
];

const App = () => {
    const [expanded, setExpanded] = React.useState(true);
    const [mode, setMode] = React.useState(true);
    const [selectedId, setSelectedId] = React.useState(items.findIndex(x => x.selected === true));

    let expandMode = mode ? 'overlay' : 'push';

    const handleClick = () => { setExpanded(prevState => !prevState); };

    const handleChange = () => { setMode(prevState => !prevState); };

    const handleSelect = (ev) => {
        setSelectedId(ev.itemIndex);
        setExpanded(false);
    };

    return (
        <div>
            <Drawer
                expanded={expanded}
                position={'start'}
                mode={expandMode}
                animation={{ duration: 400 }}
                items={items.map(
                    (item, index) => ({ ...item, selected: index === selectedId }))}
                onOverlayClick={handleClick}
                onSelect={handleSelect}
            >
                <DrawerContent>
                    <div className="k-form">
                        <div className="k-form-field">
                            <button className="k-button" onClick={handleClick}>Toggle the Drawer state</button>
                        </div>
                        <div className="k-form-field">
                            <label htmlFor={'expandedSwitch'}>Switch Drawer expand mode &nbsp;</label>
                            <Switch checked={mode} onChange={handleChange} id={'expandedSwitch'} />

                        </div>
                        <div className="k-form-field">
                            <p>Current drawer mode is <b>{expandMode}</b></p>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);
