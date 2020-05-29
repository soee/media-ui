import * as React from 'react';
import { createUseMediaUiStyles } from '../../../core';
import { MediaUiTheme } from '../../../interfaces';

const useStyles = createUseMediaUiStyles((theme: MediaUiTheme) => ({
    propertyList: {
        '& dt': {
            backgroundColor: theme.alternatingBackgroundColor,
            fontWeight: 'bold',
            color: 'white',
            padding: '8px 8px 0'
        },
        '& dd': {
            backgroundColor: theme.alternatingBackgroundColor,
            margin: '0 0 1px',
            padding: '8px',
            lineHeight: '1.3',
            color: theme.inactiveColor
        }
    }
}));

interface PropertyListProps {
    children: React.ReactElement[];
}

interface PropertyListItemProps {
    label: string;
    value: string;
}

export function PropertyList({ children }: PropertyListProps) {
    const classes = useStyles();

    return <dl className={classes.propertyList}>{children}</dl>;
}

export function PropertyListItem({ label, value }: PropertyListItemProps) {
    return (
        <>
            <dt>{label}</dt>
            <dd>{value}</dd>
        </>
    );
}