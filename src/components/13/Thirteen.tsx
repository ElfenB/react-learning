import { HTMLAttributes, ReactNode } from 'react';
import {
  Autocomplete,
  AutocompleteOwnerState,
  AutocompleteRenderGroupParams,
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { VirtualizedListboxComponent } from './VirtualizedListboxComponent';

export function Thirteen() {
  const renderInput = (params: AutocompleteRenderInputParams): ReactNode => (
    <TextField {...params} label="Autocomplete demo" />
  );
  // const options = Array.from(new Array(10000)).map((_, index) => `Option ${index}`);
  const options = Array.from(new Array(10)).map((_, index) => `Aoption ${index}`);
  options.push(...Array.from(new Array(10)).map((_, index) => `Boption ${index}`));
  options.push(...Array.from(new Array(10)).map((_, index) => `Coption ${index}`));
  options.push(...Array.from(new Array(10)).map((_, index) => `Doption ${index}`));

  type Option = (typeof options)[number];

  function renderOption(
    props: HTMLAttributes<HTMLLIElement>,
    option: Option,
    _state: AutocompleteRenderOptionState,
    _ownerState: AutocompleteOwnerState<string, false, false, false>,
  ): ReactNode {
    return (
      <li {...props} style={{ color: 'red' }}>
        {option}
      </li>
    );
  }

  function renderGroup(params: AutocompleteRenderGroupParams): ReactNode {
    const { key, children, group } = params;

    console.log('children', group, children);

    return (
      <>
        <li>
          <div key={key}>I am group {group}</div>
        </li>

        <ul style={{ border: '1px solid green' }}>{children}</ul>
      </>
    );
  }

  function groupFunc(option: Option): string {
    // console.log('option', `${option.split(' ')[1][0]}_${option.length}`);
    // return `${option.split(' ')[1][0]}_${option.length}`;
    // (option) => option[0].toUpperCase()
    return option[0].toUpperCase();
  }

  return (
    <div>
      <Container>
        <Typography sx={{ py: 2 }} variant="h4">
          Thirteen works!
        </Typography>

        <Autocomplete
          groupBy={groupFunc}
          ListboxComponent={VirtualizedListboxComponent}
          options={options}
          renderGroup={renderGroup}
          renderInput={renderInput}
          renderOption={(props, option, state, ownerState) => renderOption(props, option, state, ownerState)}
        />
      </Container>
    </div>
  );
}
