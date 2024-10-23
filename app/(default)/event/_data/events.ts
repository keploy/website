export const events: EventType[] = [
    {
        id: 1,
        title: "Keploy Meetup",
        subtitle: "Keploy Meetup",
        description: "Keploy Meetup",
        startsAt: "2024-01-01",
        duration: 60,
        tags: ["Keploy", "Meetup"],
        registerURL: "https://keploy.io",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        publishedAt: "2024-01-01",
        banner: {
            url: "https://keploy.io",
            width: 100,
            height: 100,
        }
    },
    {
        id: 1,
        title: "Keploy Meetup",
        subtitle: "Keploy Meetup",
        description: "Keploy Meetup",
        startsAt: "2024-01-01",
        duration: 60,
        tags: ["Keploy", "Meetup"],
        registerURL: "https://keploy.io",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        publishedAt: "2024-01-01",
        banner: {
            url: "https://keploy.io",
            width: 100,
            height: 100,
        }
    },
    {
        id: 1,
        title: "Keploy Meetup",
        subtitle: "Keploy Meetup",
        description: "Keploy Meetup",
        startsAt: "2024-01-01",
        duration: 60,
        tags: ["Keploy", "Meetup"],
        registerURL: "https://keploy.io",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        publishedAt: "2024-01-01",
        banner: {
            url: "https://keploy.io",
            width: 100,
            height: 100,
        }
    },
    {
        id: 1,
        title: "Keploy Meetup",
        subtitle: "Keploy Meetup",
        description: "Keploy Meetup",
        startsAt: "2024-01-01",
        duration: 60,
        tags: ["Keploy", "Meetup"],
        registerURL: "https://keploy.io",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        publishedAt: "2024-01-01",
        banner: {
            url: "https://keploy.io",
            width: 100,
            height: 100,
        }
    }
]


export interface EventType {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    startsAt: string;
    duration: number;
    tags: string[];
    registerURL: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    banner: {
        url: string;
        width: number;
        height: number;
    };
}
