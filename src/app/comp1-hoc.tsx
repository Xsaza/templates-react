import React from 'react';

import { Comp1 } from './comp1';

// export const Comp1Hoc: React.FC<{ name: string }> = (props) => {
//   return (
//     <>
//       <Comp1
//         {...props}
//       ></Comp1>
//     </>
//   );
// }

const Comp1Hoc = (RComp: React.FC): React.FC => {
  return () => {
    return (
      <div>
        <RComp></RComp>
      </div>
    );
  }
};

export default Comp1Hoc(Comp1);
