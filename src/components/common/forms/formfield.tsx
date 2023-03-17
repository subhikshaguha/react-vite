import { useState } from 'react';
import TextField from './textfield';

interface UserData {
  text: string;
}

const FormField: React.FC = () =>
{
  const [text, setText] = useState<UserData | null>();
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    //Prevent page reload
    console.log('my event', event, text)
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setText({ text: e.currentTarget.value });
  };

  return (
    <div>
      <div>
        <TextField onChangeValue={onChange} text={text} />
      </div>
      <div>
      <button
        onClick={handleSubmit}
        >
        submit
      </button>
      </div>
    </div>
);
}
 
export default FormField;