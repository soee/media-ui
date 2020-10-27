import * as React from 'react';

import { Headline } from '@neos-project/react-ui-components';

import { humanFileSize } from '../../../helper';
import { IconLabel, PropertyList, PropertyListItem } from '../../Presentation';
import { useIntl } from '../../../core';
import { useSelectedAsset } from '../../../hooks';

const MetadataView: React.FC = () => {
    const { translate } = useIntl();
    const selectedAsset = useSelectedAsset();

    if (!selectedAsset) return null;

    return (
        <div>
            <Headline type="h2">
                <IconLabel icon="info-circle" label={translate('inspector.metadata', 'Metadata')} />
            </Headline>
            <PropertyList>
                {selectedAsset.file.size > 0 && (
                    <PropertyListItem
                        label={translate('inspector.property.fileSize', 'Size')}
                        value={humanFileSize(selectedAsset.file.size)}
                    />
                )}
                <PropertyListItem
                    label={translate('inspector.property.lastModified', 'Last modified')}
                    value={new Date(selectedAsset.lastModified).toLocaleString()}
                />
                <PropertyListItem
                    label={translate('inspector.property.dimensions', 'Dimensions')}
                    value={`${selectedAsset.width}px x ${selectedAsset.height}px`}
                />
                <PropertyListItem
                    label={translate('inspector.property.mediaType', 'MIME type')}
                    value={selectedAsset.file.mediaType}
                />
                <PropertyListItem
                    label={translate('inspector.property.filename', 'Filename')}
                    value={selectedAsset.filename}
                />
            </PropertyList>
        </div>
    );
};

export default React.memo(MetadataView);
