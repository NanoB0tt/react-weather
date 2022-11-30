import { Dispatch, SetStateAction } from "react";

interface Props {
  setOption: Dispatch<SetStateAction<string>>
}

const DisplayOptions = ({ setOption }: Props) => {

  return (
    <div>
      <button onClick={() => setOption('day')}>Day</button>
      <button onClick={() => setOption('week')}>Week</button>
    </div>
  )
}

export default DisplayOptions;
