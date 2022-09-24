
export const NavigationData: NaigationItem[] = [
    {
        id: 0,
        icon: 'home',
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: 'travel_explore',
        text: "Explore",
        link: "explore"
    },
    {
        id: 2,
        icon: 'bar_chart',
        text: "Statistics",
        link: "statistics"
    },
    {
        id: 3,
        icon: 'settings',
        text: "Settings",
        link: "settings"
    }
]


interface NaigationItem {

    id: number,
    icon: string,
    text: string,
    link: string
}