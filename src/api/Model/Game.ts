export enum PlatformEnum {
    PC = "Pc",
    PlayStation = "playstation",
    Xbox = "xbox",
}

export const getPlatformValue = (key: string): string => {
    return PlatformEnum[key as keyof typeof PlatformEnum];
};

export type Game = {
    id?: number;
    name?: string;
    slug?: string;
    release?: string;
    background_image: string;
    rating: number;
    parent_platforms: {
        platform: {
            name: PlatformEnum;
        };
    }[];
};
