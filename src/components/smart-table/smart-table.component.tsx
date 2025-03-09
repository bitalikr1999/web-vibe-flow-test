import { IPaginationListCtr } from "@/shared/hooks/usePaginationList";
import { Pagination, Table, TableColumnsType } from "antd";
import { ColumnsGenerator } from "./utils/columns-generator.util";
import { useEffect, useState } from "react";
import styles from "./smart-table.module.css";
import { ISmartTableConfiguration } from "./typing";

interface Props<T> {
  listCtr: IPaginationListCtr<T>;
  configuration: ISmartTableConfiguration<T>;
}

export function SmartTable<T>({ listCtr, configuration }: Props<T>) {
  const [columns, setColumns] = useState<TableColumnsType<T>>([]);

  useEffect(() => {
    if (listCtr.items[0]) {
      const columns = new ColumnsGenerator<T>(
        listCtr.items[0],
        configuration,
        listCtr.loadParams,
        listCtr.setOrderBy
      ).get();

      setColumns(columns);
    }
  }, [listCtr.items, listCtr.loadParams]);

  return (
    <div>
      <Pagination
        current={listCtr.loadParams.page}
        total={listCtr.loadParams.count}
        pageSize={listCtr.loadParams.limit}
        onChange={(page) => listCtr.loadPage(page)}
        onShowSizeChange={(_, size: number) =>
          listCtr.setLoadParams({ limit: size })
        }
        className={styles.pagination}
        showSizeChanger={true}
      />
      <Table columns={columns} dataSource={listCtr.items} pagination={false} />

      <Pagination
        current={listCtr.loadParams.page}
        total={listCtr.loadParams.count}
        pageSize={listCtr.loadParams.limit}
        onChange={(page) => listCtr.loadPage(page)}
        onShowSizeChange={(_, size: number) =>
          listCtr.setLoadParams({ limit: size })
        }
        className={styles.pagination}
        showSizeChanger={true}
      />
    </div>
  );
}
