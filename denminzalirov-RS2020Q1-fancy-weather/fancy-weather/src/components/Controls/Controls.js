import React, { useContext } from 'react';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SyncIcon from '@material-ui/icons/Sync';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '@material-ui/core/Button';
import MicIcon from '@material-ui/icons/Mic';
import TextField from '@material-ui/core/TextField';

import { WeatherContext } from '../Wather/Wather';
// import {getCoordByPlace} from '../services/index';
// import {Autocomplete} from './Autocomplete/index';

const useStyles = makeStyles((theme) => ({
    refresh: {
        color: 'white',
        border: '1px solid #fff',
        transition: 'color 0.2s ease, background-color 0.2s ease, transform 0.3s ease',
        boxShadow: `0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)`,
        height: '56px',
        width: '56px',
        marginRight: '10px',
        '&:hover': {
            transform: 'rotate(90deg)',
        },
    },
    formControl: {
        marginRight: '10px',
        // margin: theme.spacing(1),
        // minWidth: 80,
        // position: 'relative',
        // top: '-7px',
        // color: 'white',
    },
    selectEmpty: {
        // marginTop: theme.spacing(2),
    },
    togleButton: {
        height: '56px',
        color: 'white !important',
        borderColor: 'white',
    },
}));

export const Controls = () => {
    const classes = useStyles();
    const context = useContext(WeatherContext);
    const { store, onAddressChange, onRefresh, onLangChange, onUnitsChange } = context;
    const { units } = store;

    const handleLangChange = (e) => {
        onLangChange(e.target.value);
    };
    const handleAddressChange = (e) => {
        onAddressChange(e.target.value);
    };
    const handleUnitsChange = (e) => {
        if (e.target.value) {
            onUnitsChange(e.target.value);
        } else {
            onUnitsChange(e.target.parentElement.value);
        }
    };
    return (
        <div className="controls-container">
            <div className='controls-btn wrapper'>
                <IconButton
                    className={classes.refresh}
                    onClick={onRefresh}
                >
                    <SyncIcon />
                </IconButton>
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        defaultValue='EN'
                        className={classes.selectEmpty}
                        onChange={handleLangChange}
                    >
                        <MenuItem value={'EN'}>EN</MenuItem>
                        <MenuItem value={'RU'}>RU</MenuItem>
                        <MenuItem value={'BY'}>BY</MenuItem>
                    </Select>
                </FormControl>
                <ToggleButtonGroup
                    className="toggle-button-container"
                    value={units}
                    exclusive
                    onChange={handleUnitsChange}
                    aria-label="units"
                >
                    <ToggleButton className={classes.togleButton} value='metric' aria-label='metric'>
                        &#8451;
                </ToggleButton>
                    <ToggleButton className={classes.togleButton} value='imperial' aria-label='imperial'>
                        &#8457;
                </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='control-search wrapper'>
                <TextField
                    variant="outlined"
                    className='search-panel'
                    placeholder='Search city'
                    onChange={handleAddressChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onRefresh();
                        }
                    }}
                />
                <div className='mic-icon'>
                    <MicIcon color='action' />
                </div>
                <Button
                    className='btn-search'
                    variant="outlined"
                    color="primary"
                    onClick={onRefresh}
                // onClick={
                //     console.log
                //     async()=>{console.log(await getCoordByPlace('Гродно')) }
                //     onPlaceByCoord
                // }
                >
                    SEARCH
                </Button>
                {/* <Autocomplete
                    onChange={onAddressChange}
                /> */}
            </div>
        </div>
    )
}
