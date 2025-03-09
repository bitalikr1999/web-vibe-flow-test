export interface ISmartTableConfiguration<T, K extends keyof T = keyof T> {
  hiddenColumns?: K[];
  sortableColumns?: K[];
  labels?: Partial<Record<K, string>>;
  widths?: Partial<Record<K, string | number>>;
  renderers?: Partial<Record<K, (value: T[K], item: T) => React.ReactNode>>;
  extraColumns?: Record<
    string,
    {
      title: string;
      align: "center" | "left" | "right";
      render: (value: T[K], item: T) => React.ReactNode;
    }
  >;
}
