
import { useState } from 'react';

interface UserData {
  text: string;
}

const TextField: React.FC<{onChangeValue: React.ChangeEventHandler<HTMLInputElement> | undefined, text: UserData | null | undefined}> = ({onChangeValue, text}) =>
{
  // const [text, setText] = useState<UserData | null>();
  // const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
  //   setText({ text: e.currentTarget.value });
  // };
  return (<div>
    <input type="text" value={text?.text || ''} onChange={onChangeValue} />
  </div>);
}
 
export default TextField;