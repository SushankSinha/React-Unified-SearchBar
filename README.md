# React Unified SearchBar

## Overview
The React Unified SearchBar component is a versatile input field that can cater to various search functionality needs. It is designed for easy integration and customization to fit different use cases.

## Features
- **Dynamic Filtering:** Automatically filters suggestions based on user input.
- **Debounce Input:** Reduces the number of API calls by debouncing user input.
- **Customizable Styles:** Allows for easy styling adjustments through props.
- **Accessibility:** Built with ARIA attributes for screen reader compatibility.

## Installation
You can install the component via npm:
```bash
npm install react-unified-searchbar
```

## Usage
Here’s a simple example of how to use the SearchBar component:
```jsx
import React from 'react';
import SearchBar from 'react-unified-searchbar';

const App = () => {
  return (
    <div>
      <h1>Search</h1>
      <SearchBar
        placeholder="Search..."
        onSearch={(value) => console.log(value)}
      />
    </div>
  );
};

export default App;
```

## Props
| Prop          | Type              | Description                     |
|---------------|-------------------|---------------------------------|
| `placeholder` | `string`          | Placeholder text for the input. |
| `onSearch`    | `function`        | Callback function on search.    |
| `debounce`    | `number` (ms)     | Debounce time for user input.   |
| `style`       | `object`          | Custom styles for the input.    |

## Contributing
If you wish to contribute to this project, please submit a pull request or open an issue for discussion.

## License
This project is licensed under the MIT License.