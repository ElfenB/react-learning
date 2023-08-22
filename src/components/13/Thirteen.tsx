import { ReactNode } from 'react';
import { Autocomplete, AutocompleteRenderInputParams } from '@mui/material';

export function Thirteen() {
  const renderInput = (params: AutocompleteRenderInputParams): ReactNode => <input {...params.inputProps} />;
  const options = Array.from(new Array(10000)).map((_, index) => `Option ${index}`);

  return (
    <div>
      <h1>Thirteen works!</h1>

      <Autocomplete options={options} renderInput={renderInput} />
    </div>
  );
}
