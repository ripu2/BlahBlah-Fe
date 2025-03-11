type Metadata = {
  rules: string;
  description: string;
};

export type ChannelDataType = {
  id: number;
  name: string;
  created_by: number;
  is_private: boolean;
  metadata: Metadata;
  created_at: string;
};