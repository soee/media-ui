import * as React from 'react';

import { AssetInspector, AssetCollectionInspector, IptcMetadataInspector } from './Inspector';
import CurrentSelection from './CurrentSelection';
import { Column } from '../Presentation';

const SideBarRight = () => {
    // TODO: Read from component store
    const components = [CurrentSelection, AssetInspector, AssetCollectionInspector, IptcMetadataInspector];

    return (
        <Column>
            {components.map((Component, index) => (
                <Component key={index} />
            ))}
        </Column>
    );
};

export default React.memo(SideBarRight);
