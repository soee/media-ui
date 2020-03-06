import * as React from 'react';
import { useMediaUi } from '../../core/MediaUi';
import { useIntl } from '../../core/Intl';
import { createUseMediaUiStyles } from '../../core/MediaUiThemeProvider';
import MediaUiTheme from '../../interfaces/MediaUiTheme';
import { useAssetSourceFilter } from '../../hooks/AssetSourceFilter';

const useStyles = createUseMediaUiStyles((theme: MediaUiTheme) => ({
    container: {
        '.neos &': {
            padding: '0 1rem 1rem 1rem'
        }
    },
    list: {
        '& li': {
            margin: '.5rem 0',
            cursor: 'pointer',
            userSelect: 'none'
        }
    },
    itemSelected: {
        fontWeight: 'bold'
    }
}));

export default function AssetSourceList() {
    const classes = useStyles();
    const { assetSources } = useMediaUi();
    const { translate } = useIntl();
    const [assetSourceFilter, setAssetSourceFilter] = useAssetSourceFilter();

    return (
        <>
            {assetSources.length > 1 && (
                <nav className={classes.container}>
                    <strong>{translate('assetSourceList.header', 'Media sources')}</strong>
                    <ul className={classes.list}>
                        {assetSources &&
                            assetSources.map(assetSource => (
                                <li key={assetSource.identifier}>
                                    <a
                                        className={
                                            assetSourceFilter === assetSource.identifier ? classes.itemSelected : null
                                        }
                                        onClick={() => setAssetSourceFilter(assetSource)}
                                    >
                                        {assetSource.identifier === 'neos' ? 'Local' : assetSource.label}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </nav>
            )}
        </>
    );
}