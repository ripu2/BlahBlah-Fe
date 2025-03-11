import React, { useCallback, useState } from "react";
import { useFetchData } from "../../../../config/api";
import CustomList from "../../../../components/List";
import CommunicationCard from "../../../../components/CommunicationCard";
import { ChannelDataType } from "./types";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddChannelModal from "../AddChannelModal";
import {FormData} from '../AddChannelModal/types'
import { useChannelManager } from "../../hooks/channalHooks";

function Channels() {
  const { data } = useFetchData("channels", "/channels", {
    suspense: true,
  });
  const {addNewChannel} = useChannelManager()
  const [openAddModal, setOpenAddModal] = useState(false);

  const toggleAddModal = useCallback(() => {
    setOpenAddModal(!openAddModal)
  }, [openAddModal])
  const MyListItem: React.FC<{ item: ChannelDataType }> = ({ item }) => (
    <CommunicationCard
      title={item.name}
      pfp="https://randomuser.me/api/portraits/men/1.jpg"
      createdAt={item.created_at}
    />
  );

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box></Box> {/* Left side empty */}
        <IconButton color="primary" onClick={toggleAddModal}>
          <AddIcon/>
        </IconButton>
      </Box>
      <CustomList<ChannelDataType>
        items={(data ?? []) as ChannelDataType[]}
        ListItemComponent={MyListItem}
      />
      <AddChannelModal  open={openAddModal} onClose={toggleAddModal} onSubmit={(data: FormData) => {
        addNewChannel(data)
      }} />
    </Box>
  );
}

export default Channels;
