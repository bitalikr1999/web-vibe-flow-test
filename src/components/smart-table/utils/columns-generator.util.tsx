import { TableColumnsType } from "antd";
import { ISmartTableConfiguration } from "../typing";
import { ColumnType } from "antd/es/table";
import { SortableHeader } from "../components/sortable-header.component";
import _ from "lodash";

export class ColumnsGenerator<T extends Record<any, any>> {
  constructor(
    private readonly data: T,
    private readonly configuration: ISmartTableConfiguration<T, any>,
    private readonly loadParams: Record<string, any>,
    private readonly onPressSort: (field: string) => void
  ) {}

  public get(): TableColumnsType<T> {
    const columns: TableColumnsType<T> = [];

    Object.keys(this.data).forEach((key) => {
      const coll = this.renderColumn(key);
      if (coll) columns.push(coll);
    });

    if (!_.isEmpty(this.configuration.extraColumns)) {
      Object.keys(this.configuration.extraColumns).forEach((key) => {
        const item = this.configuration.extraColumns?.[key];
        columns.push({
          title: item.title,
          key,
          render: item.render,
          align: item.align,
        });
      });
    }

    return columns;
  }

  private renderColumn(key: string): ColumnType<T> | null {
    if (this.isHiddenColumn(key)) return null;

    return {
      title: this.getTitle(key),
      dataIndex: key,
      key,
      width: this.configuration.widths?.[key],
      render: this.configuration.renderers?.[key],
    };
  }

  private isHiddenColumn(key: string) {
    return this.configuration.hiddenColumns?.includes(key as any);
  }

  private getTitle(key: string) {
    const title = this.configuration.labels?.[key] || key;

    if (this.isSortableColumn(key)) {
      const order = this.getSorterOrder(key);
      console.log("order", order);

      return (
        <SortableHeader
          title={title}
          order={order}
          onClick={() => this.onPressSort(key)}
        />
      );
    }

    return title;
  }

  private isSortableColumn(key: string) {
    return this.configuration.sortableColumns?.includes(key as any);
  }

  private getSorterOrder(key: string) {
    const { sortField, sort } = this.loadParams;
    if (sortField === key) {
      return sort;
    }
  }
}
