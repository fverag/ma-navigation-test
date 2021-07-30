import { MenuColumn, MenuColumnType } from "../../../types/menu";

export { MenuColumnType as ColumnType };

export interface ColumnProps extends MenuColumn {
  className?: string;
}
