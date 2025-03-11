import React from "react";
import { useFetchData } from "../../../../config/api";
import CustomList from "../../../../components/List";
import CommunicationCard from "../../../../components/CommunicationCard";
import { ChannelDataType } from "./types";

function Channels() {
  const { data } = useFetchData("channels", "/channels", {
    suspense: true
  });
 console.log("📺 Channels Component Rendered");

  const MyListItem: React.FC<{ item: ChannelDataType }> = ({ item }) => (
    <CommunicationCard
      title={item.name}
      pfp="https://randomuser.me/api/portraits/men/1.jpg"
      createdAt={item.created_at}
    />
  );



  return <CustomList<ChannelDataType>  items={(data ?? []) as ChannelDataType[]} ListItemComponent={MyListItem} />;
}

export default Channels;
