export interface Tag {
  label: string;
  confidence: number;
}

export interface TagsResponse {
  tags: Tag[];
}