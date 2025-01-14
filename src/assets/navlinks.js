// navigation links of the website
const navlinks = [
    {
        name: "Part 1",
        href: "/part1",
        targetRoute: [
            '/part1',
            '/part1/[category]',
        ]
    },
    {
        name: "Part 2&3",
        href: "/part2&3",
        targetRoute: [
            '/part2&3',
            '/part2&3/[category]',
            '/part2&3/[id]',
        ]
    },
    // { name: "Blog", href: "/blog" },
    // { name: "About", href: "/about" },
];

export { navlinks }