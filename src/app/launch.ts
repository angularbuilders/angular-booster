interface Pad {
  name: string;
  location: {
    name: string;
  };
}

type Descriptor = {
  description: string;
  name: string;
};

export interface Launch {
  id: string;
  slug: string;
  name: string;
  net: Date;
  status: { name: string };
  location?: string;
  pad: Pad;
  mission?: Descriptor;
  launch_service_provider?: Descriptor;
}
