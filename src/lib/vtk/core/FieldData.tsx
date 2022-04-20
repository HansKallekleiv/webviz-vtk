import React from 'react';

import { DataSetContext, FieldsContext } from './View';

/**
 * FieldData is exposing a FieldData to a downstream element
 */
export default function FieldData(props: FieldDataProps) {
  return (
    <DataSetContext.Consumer>
      {(dataset) => (
        <FieldsContext.Provider value={dataset.getDataSet().getFieldData()}>
          {props.children}
        </FieldsContext.Provider>
      )}
    </DataSetContext.Consumer>
  );
}

type FieldDataProps = {

  children?: any;

}