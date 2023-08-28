import {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { isArray } from 'lodash';
import { ListChildComponentProps, VariableSizeList } from 'react-window';

function renderRow<T extends ReactNode>(props: ListChildComponentProps<T[]>) {
  const { data, index, style } = props;

  const dataSet = data[index];

  if (dataSet && 'group' in dataSet) {
    console.log('group');
    return <div>group here</div>;
  }

  return (
    <li key={index} style={style}>
      {dataSet}
    </li>
  );
}

const OuterElementContext = createContext({});

// eslint-disable-next-line react/display-name
const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(itemCount: number) {
  const ref = useRef<VariableSizeList>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [itemCount]);

  return ref;
}

// Based on: https://stackblitz.com/edit/react-dzmzy2?file=demo.tsx
export const VirtualizedListboxComponent = forwardRef(function ListboxComponent<T extends ReactNode>(
  props: HTMLAttributes<HTMLElement>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { children, ...other } = props;
  const itemData: T[] = [];

  if (isArray(children)) {
    children.forEach((item: T & { children?: T[] }) => {
      itemData.push(item);
      if (item.children !== undefined) {
        itemData.push(...item.children);
      }
    });
  }

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child: T) => {
    if (Object.hasOwnProperty.call(child, 'group')) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    const MAX_ITEMS = 8;
    if (itemCount > MAX_ITEMS) {
      return MAX_ITEMS * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          ref={gridRef}
          height={getHeight() + 6 * 8}
          innerElementType="ul"
          itemCount={itemCount}
          itemData={itemData}
          itemSize={(index) => getChildSize(itemData[index])}
          outerElementType={OuterElementType}
          overscanCount={10}
          width="100%"
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});
