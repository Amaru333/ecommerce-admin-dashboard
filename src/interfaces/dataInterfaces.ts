export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  image: {
    url: string;
    public_id: string;
  };
}
