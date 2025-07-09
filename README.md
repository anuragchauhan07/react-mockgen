# react-mockgen

Generate dummy data arrays based on a model schema, supporting text, boolean, number, and image fields.

## Installation

```sh
npm install react-mockgen
```

## Usage in a React Application

```jsx
import React from 'react';
import { generateDummyData } from 'react-mockgen';

const model = {
  name: 'text',
  age: 'number',
  avatar: 'image',
  isActive: 'boolean',
};

const data = generateDummyData(model, 3);

function DummyDataList() {
  return (
    <div>
      <h2>Dummy Data</h2>
      <ul>
        {data.map((item, idx) => (
          <li key={idx} style={{ marginBottom: 20 }}>
            <img src={item.avatar} alt="avatar" width={100} height={75} /><br />
            <strong>Name:</strong> {item.name}<br />
            <strong>Age:</strong> {item.age}<br />
            <strong>Active:</strong> {item.isActive ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DummyDataList;
```

### Example Output

```json
[
  {
    "name": "A journey of a thousand miles begins with a single step.",
    "age": 123,
    "avatar": "https://picsum.photos/400/300?random=1234",
    "isActive": true
  },
  // ...
]
```

## Supported Field Types
- `text`: Generates a random, realistic sentence (not lorem ipsum)
- `boolean`: Random true/false
- `number`: Random integer
- `image`: Random Picsum image URL

## How the Text Field Works
Instead of static lorem ipsum, the `text` field is now generated from a set of varied, natural sentences for more realistic dummy data. You can customize these in the source if needed.

## How the Image Field Works
The `image` field uses the [picsum.photos](https://picsum.photos/) service to provide a random placeholder image URL for each object.

## License
MIT 