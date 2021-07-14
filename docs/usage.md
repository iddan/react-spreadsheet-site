---
id: usage
title: Usage
---

# Usage

## Simple

```javascript
import React from "react";
import Spreadsheet from "react-spreadsheet";

const App = () => {
  const data = [
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ];
  return <Spreadsheet data={data} />;
};
```

### Props

##### `data` _Required_

The data matrix of the Spreadsheet.
First array size will determine how many columns the Spreadsheet will present.

#### Events

##### `onChange`

Callback called when the Spreadsheet's data changes.
**Defaults to:** `undefined`

##### `onModeChange`

Callback called when the Spreadsheet's edit mode changes.

**Defaults to:** `undefined`

##### `onSelect`

Callback called when the Spreadsheet's selection changes.

**Defaults to:** `undefined`

##### `onActivate`

**Defaults to:** `undefined`

##### `onCellCommit`

**Defaults to:** `undefined`

##### `onKeyDown`

Callback called on key down inside the spreadsheet.

**Defaults to:** `undefined`

#### Components

##### `ColumnIndicator`

Component rendered above each column.

**Defaults to:** internal component.

##### `CornerIndicator`

Component rendered in the corner of row and column indicators.

**Defaults to:** internal component.

##### `RowIndicator`

Component rendered next to each row.

**Defaults to:** internal component.

##### `Table`

The Spreadsheet's table component.

**Defaults to:** internal component.

##### `Row`

The Spreadsheet's row component.

**Defaults to:** internal component.

##### `Cell`

The Spreadsheet's cell component.

**Defaults to:** internal component.

##### `DataViewer`

Component rendered for cells in read mode.

**Defaults to:** internal component.

##### `DataEditor`

Component rendered for cells in edit mode.

**Defaults to:** internal component.

#### Customization

##### `formulaParser`

Instance of `FormulaParser` to be used by the Spreadsheet

**Defaults to:** internal instance created by the component.

##### `columnLabels`

Labels to use in column indicators.

**Defaults to:** alphabetical labels.

##### `rowLabels`

Labels to use in row indicators.

**Defaults to:** row index labels.

##### `hideRowIndicators`

Hides row indicators.

**Defaults to:** `false`.

##### `hideColumnIndicators`

Hides column indicators.

**Defaults to:** `false`.

##### `getBindingsForCell`

Calculate which cells should be updated when given cell updates.

**Defaults to:** internal implementation which infers dependencies according to formulas.
