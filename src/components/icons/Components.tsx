import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Component(props: {color?: string; size?: number}) {
  const {color, size} = props;
  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size ?? 24}
      height={size ?? 24}
      fill={color}>
      <Path d="M914.5 653.5c-5.5 0-11 1.1-16 3.3l-0.2 0.1h-0.2L510.2 822.2 122.2 657h-0.2l-0.2-0.1c-5-2.1-10.3-3.3-16-3.3-23.1 0-41.8 19.3-41.8 43.1 0 18 10.7 33.3 25.8 39.8l403.9 172.1 0.4 0.1c10.2 4.4 21.8 4.4 32 0l0.2-0.1c0.1 0 0.1-0.1 0.2-0.1l403.9-172.1c15.1-6.5 25.8-21.8 25.8-39.8 0.1-23.8-18.6-43.1-41.7-43.1z m0-186.5c-7.9-0.2-16 3.2-16 3.2L510.2 635.6 121.8 470.2s-10.3-3.2-16-3.2C82.7 467 64 486.2 64 510c0 17.9 10.7 33.3 25.8 39.7l403.9 172c0.1 0 0.1 0.1 0.2 0.1l0.1 0.1c5 2.1 10.3 3.3 16 3.3 5.7 0 11.1-1.2 16-3.3l0.2-0.1c0.1 0 0.1 0 0.2-0.1l403.9-172c15.1-6.4 25.8-21.8 25.9-39.7 0.1-23.8-18.6-43-41.7-43zM89.8 363.2l403.9 172.1c0.1 0 0.1 0 0.2 0.1l0.1 0.1c5 2.1 10.3 3.2 16 3.2 5.5 0 10.9-1.1 16-3.2l0.2-0.1 0.2-0.1 403.9-172c15.1-6.5 25.8-21.8 25.9-39.7 0-18-10.7-33.3-25.8-39.8L526.5 111.6c-0.1 0-0.1 0-0.2-0.1l-0.2-0.1c-10.2-4.4-21.8-4.4-32 0l-0.1 0.1L89.8 283.7C74.7 290.1 64 305.5 64 323.5c0 17.9 10.7 33.2 25.8 39.7z" />
    </Svg>
  );
}
