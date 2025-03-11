import React from 'react'
import CommunicationCard from '../../../../components/CommunicationCard';
import { ChannelDataType } from './types';

const ChannelCard: React.FC<{ item: ChannelDataType }> = ({ item }) => (
  <CommunicationCard
    title={item.name}
    pfp="https://randomuser.me/api/portraits/men/1.jpg"
    createdAt={item.created_at}
  />
);

export default React.memo(ChannelCard)