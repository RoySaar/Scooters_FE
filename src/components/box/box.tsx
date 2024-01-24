import {BoxProps} from "./box.typings";
import './box.scss';
import clsx from "clsx";
export const Box = ({children, className}: BoxProps) => {
    return (
      <div className={clsx(className, 'sa-box')}>
          {children}
      </div>
    );
}