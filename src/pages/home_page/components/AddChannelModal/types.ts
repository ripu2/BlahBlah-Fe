export type FormData = {
  name: string;
  is_private: boolean;
  metadata?: {
    description?: string;
    rules?: string;
  };
}


export type AddChannelModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}
