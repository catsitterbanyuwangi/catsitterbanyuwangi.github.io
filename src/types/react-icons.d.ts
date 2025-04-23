// This file is used to declare the types for the react-icons library.
// This is necessary because the library does not provide its own types.
// This file should be placed in the src/types directory and imported in the tsconfig.json file.

// eslint-disable-next-line unused-imports/no-unused-imports
import { IconType } from 'react-icons';

declare module 'react-icons' {
  export type IconType = React.ComponentType<{
    className?: string;
    size?: number | string;
  }>;
}
