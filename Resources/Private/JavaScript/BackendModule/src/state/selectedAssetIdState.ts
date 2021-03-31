import { atom } from 'recoil';

import { AssetIdentity } from '../interfaces';

const selectedAssetIdState = atom<AssetIdentity>({
    key: 'selectedAssetIdState',
    default: null,
});

export default selectedAssetIdState;
