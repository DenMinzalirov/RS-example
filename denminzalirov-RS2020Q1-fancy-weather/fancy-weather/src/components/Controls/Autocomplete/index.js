import React, { useEffect, useMemo, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Autocomplete as AutocompleteComponent } from '@material-ui/lab'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import parse from 'autosuggest-highlight/parse'
import throttle from 'lodash/throttle'

import { useStyles } from './styles'

const autocompleteService = { current: null }

export const Autocomplete = ({ onChange }) => {
    const classes = useStyles()
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);

    const fetch = useMemo(
        () =>
            throttle((request, callback) => {
                (autocompleteService.current).getPlacePredictions(request, callback);
            }, 200),
        [],
    );

    useEffect(() => {
        let active = true;

        if (!autocompleteService.current && (window).google) {
            autocompleteService.current = new (window).google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return
        }

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return
        }

        fetch({ input: inputValue }, (results) => {
            if (active) {
                let newOptions = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);

    return (
        <AutocompleteComponent
            id="google-search-input"
            style={{ width: 300 }}
            getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(event, newValue) => {
                setOptions(newValue ? [newValue, ...options] : options)
                setValue(newValue)
                if (newValue) {
                    onChange(newValue.description)
                }
            }}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            renderInput={(params) => (
                <TextField {...params} size="small" label="Add a location" variant="outlined" fullWidth />
            )}
            renderOption={(option) => {
                const matches = option.structured_formatting.main_text_matched_substrings;
                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match) => [match.offset, match.offset + match.length]),
                );

                return (
                    <Grid container alignItems="center">
                        <Grid item>
                            <LocationOnIcon className={classes.icon} />
                        </Grid>
                        <Grid item xs>
                            {parts.map((part, index) => (
                                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                    {part.text}
                                </span>
                            ))}
                            <Typography variant="body2" color="textSecondary">
                                {option.structured_formatting.secondary_text}
                            </Typography>
                        </Grid>
                    </Grid>
                )
            }}
        />
    )
}
