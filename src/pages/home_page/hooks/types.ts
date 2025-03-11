export type CreateChannelResponse = {
  data: {
    id: number;
    name: string;
    created_by: number;
    is_private: boolean;
    metadata: {
      description: string;
      rules: string;
    } | null;
    created_at: string;
  };
};
