import {
  addToFavoritesReq,
  findSongsReq,
  removeFromFavoritesReq,
} from "@/api/songs";
import { Search } from "@/components/search/search.component";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { usePaginationList } from "@/shared/hooks/usePaginationList";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import { SwitchControll } from "@/components/form";
import { SmartTable } from "@/components/smart-table/smart-table.component";
import { ISong } from "@/typing/interfaces";
import { Col, Row } from "antd";
import { FavoriteButton } from "@/components/favorities";
import { LogoutOutlined } from "@ant-design/icons";
import { authService } from "@/services/auth.service";

export const DashboardPage = () => {
  const [searchString, setSearchString] = useState<string>("");
  const searchStringDebounced = useDebounce(searchString, 500);

  const list = usePaginationList<ISong>({
    fetchItems: findSongsReq,
    limit: 20,
    needInit: false,
    clearWhenReload: false,
  });

  useEffect(() => {
    list.setLoadParams({ searchString: searchStringDebounced });
  }, [searchStringDebounced]);

  const toggleFavorities = () => {
    list.setLoadParams({ isFavorite: !list.loadParams.isFavorite });
  };

  const updateIsFavorite = (songId: string, isFavorite: boolean) => {
    list.setItems(
      list.items.map((item) => {
        if (item.id === songId) {
          return { ...item, isFavorite };
        }
        return item;
      })
    );
  };

  const onFavoriteClick = async (item: ISong) => {
    if (item.isFavorite) {
      await removeFromFavoritesReq(item.id);
    } else {
      await addToFavoritesReq(item.id);
    }
    updateIsFavorite(item.id, !item.isFavorite);
  };

  return (
    <div>
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <p className={styles.title}>VibeFlow</p>
        </Col>
        <Col>
          <LogoutOutlined onClick={authService.logout} />
        </Col>
      </Row>
      <Row justify="space-between" gutter={16} align={"middle"}>
        <Col flex={1}>
          <Search
            isLoading={list.isLoading}
            value={searchString}
            onChange={setSearchString}
          />
        </Col>

        <Col>
          <SwitchControll
            isChecked={list.loadParams.isFavorite}
            label="Favorites"
            onPress={toggleFavorities}
          />
        </Col>
      </Row>

      <SmartTable
        listCtr={list}
        configuration={{
          hiddenColumns: ["mimeType", "id", "isFavorite"],
          labels: {
            artist: "Artist",
            title: "Title",
            duration: "Duration",
            size: "Size",
            createdAt: "Created At",
          },
          sortableColumns: ["artist", "title", "duration", "size", "createdAt"],
          widths: {
            title: "30%",
            artist: "30%",
            duration: "10%",
            size: "10%",
          },
          renderers: {
            duration: (value) =>
              `${Math.floor(Number(value) / 60)}:${Number(value) % 60} m.`,
            size: (value) => `${(Number(value) / 1000000).toFixed(2)} MB`,
            createdAt: (value) => new Date(value as Date).toLocaleDateString(),
          },
          extraColumns: {
            favorite: {
              title: "Favorite",
              align: "center",
              render: (_, item) => {
                return (
                  <FavoriteButton
                    isFavorite={item.isFavorite}
                    onClick={() => onFavoriteClick(item)}
                  />
                );
              },
            },
          },
        }}
      />
    </div>
  );
};
