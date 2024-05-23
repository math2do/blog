import allContents from "./content.json" assert { type: "json" };

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
export type ContentType = Flatten<typeof allContents>;
export type ContentMetaDataType = Omit<
  ContentType,
  "body" | "toc" | "heading_ids"
>;

// extract the MetaData only
export const contentMetaData: ContentMetaDataType[] = allContents.filter(
  (content) => {
    return {
      title: content.title,
      path: content.path,
    } as ContentMetaDataType;
  }
);

export const contents: ContentType[] = allContents;
