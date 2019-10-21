import React, { useState } from 'react';
import Info from './Info';
// import Greetings from './Greetings';
// import Counter from './Counter';
// import MyForm from './MyForm';

const useInputTag = (defaultValue: any) => {
  const [value, setValue] = useState(defaultValue);

  console.log('asdfsadfasf', defaultValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e;

    setValue(value);
  };

  return { value, onChange };
};

const App: React.FC = () => {
  // const onClick = (name: string) => {
  //   console.log(`${name} says hello`);
  // };
  // return <Greetings name="Hello" onClick={onClick} />;
  // return <Counter />;

  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  // return <MyForm onSubmit={onSubmit} />;
  console.log(useInputTag);
  return (
    <div>
      <Info />
      {/* <input {...useInputTag} type="password" />
      <input {...useInputTag} type="email" />
      <input {...useInputTag} type="name" /> */}
    </div>
  );
};

export default App;
